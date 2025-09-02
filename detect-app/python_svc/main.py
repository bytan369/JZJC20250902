from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from paddleocr import PaddleOCR
import chromadb
from sentence_transformers import SentenceTransformer
import os
import tempfile
import pypdfium2 as pdfium
import logging
import asyncio
from typing import List, Optional
import time

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Document Processing Service", version="1.0.0")

# 添加CORS中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 在生产环境中应该限制具体的域名
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 全局变量，延迟初始化
ocr = None
emb = None
client = None

async def initialize_models():
    """异步初始化模型"""
    global ocr, emb, client
    try:
        logger.info("Initializing OCR model...")
        ocr = PaddleOCR(use_angle_cls=True, lang='ch')
        logger.info("OCR model initialized successfully")
        
        logger.info("Initializing embedding model...")
        emb = SentenceTransformer("BAAI/bge-small-zh")
        logger.info("Embedding model initialized successfully")
        
        logger.info("Initializing ChromaDB client...")
        client = chromadb.PersistentClient(path="./chroma_db")
        logger.info("ChromaDB client initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize models: {e}")
        raise

@app.on_event("startup")
async def startup_event():
    """应用启动时初始化模型"""
    await initialize_models()

def get_coll(name: str):
    """获取或创建ChromaDB集合"""
    try:
        return client.get_collection(name=name)
    except Exception as e:
        logger.info(f"Creating new collection: {name}")
        return client.create_collection(name=name)

class OCRIn(BaseModel):
    filePath: str

@app.post("/ocr")
async def ocr_api(inp: OCRIn):
    """OCR文字识别API"""
    if not ocr:
        raise HTTPException(status_code=503, detail="OCR model not initialized")
    
    path = inp.filePath
    if not os.path.isfile(path):
        logger.warning(f"File not found: {path}")
        return {"text": "", "error": "File not found"}
    
    try:
        start_time = time.time()
        lines: List[str] = []
        lower = path.lower()
        
        if lower.endswith(".pdf"):
            logger.info(f"Processing PDF: {path}")
            doc = pdfium.PdfDocument(path)
            n_pages = len(doc)
            max_pages = min(n_pages, 5)  # 增加处理页数限制
            
            for i in range(max_pages):
                try:
                    page = doc[i]
                    bitmap = page.render(scale=2, rotation=0)
                    pil_image = bitmap.to_pil()
                    
                    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
                        pil_image.save(tmp.name)
                        res = ocr.ocr(tmp.name)
                        
                        for page_res in res:
                            if page_res:
                                for line in page_res:
                                    if line and len(line) > 1:
                                        lines.append(line[1][0])
                        
                        os.unlink(tmp.name)
                except Exception as e:
                    logger.error(f"Error processing page {i}: {e}")
                    continue
        else:
            logger.info(f"Processing image: {path}")
            res = ocr.ocr(path)
            for page in res:
                if page:
                    for line in page:
                        if line and len(line) > 1:
                            lines.append(line[1][0])
        
        processing_time = time.time() - start_time
        logger.info(f"OCR processing completed in {processing_time:.2f}s, extracted {len(lines)} lines")
        
        return {
            "text": "\n".join(lines),
            "processing_time": processing_time,
            "lines_count": len(lines)
        }
        
    except Exception as e:
        logger.error(f"OCR processing failed: {e}")
        raise HTTPException(status_code=500, detail=f"OCR processing failed: {str(e)}")

class KBIn(BaseModel):
    collection: str
    docs: List[str]
    metadatas: Optional[List[dict]] = None

@app.post("/kb/bulk")
async def kb_bulk(inp: KBIn):
    """批量添加文档到知识库"""
    if not emb or not client:
        raise HTTPException(status_code=503, detail="Embedding model or ChromaDB not initialized")
    
    try:
        start_time = time.time()
        coll = get_coll(inp.collection)
        
        # 过滤空文档
        valid_docs = [doc for doc in inp.docs if doc.strip()]
        if not valid_docs:
            return {"added": 0, "error": "No valid documents provided"}
        
        logger.info(f"Adding {len(valid_docs)} documents to collection: {inp.collection}")
        
        # 生成嵌入向量
        vecs = emb.encode(valid_docs).tolist()
        ids = [f"doc-{int(time.time() * 1000)}-{i}" for i in range(len(valid_docs))]
        metas = inp.metadatas if inp.metadatas else [{"source": "upload"} for _ in valid_docs]
        
        # 确保metadatas长度匹配
        if len(metas) != len(valid_docs):
            metas = [{"source": "upload"} for _ in valid_docs]
        
        coll.add(ids=ids, documents=valid_docs, embeddings=vecs, metadatas=metas)
        
        processing_time = time.time() - start_time
        logger.info(f"Added {len(ids)} documents in {processing_time:.2f}s")
        
        return {
            "added": len(ids),
            "processing_time": processing_time,
            "collection": inp.collection
        }
        
    except Exception as e:
        logger.error(f"Failed to add documents to knowledge base: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to add documents: {str(e)}")

class RagIn(BaseModel):
    collection: str
    query: str
    top_k: int = 5

@app.post("/rag/search")
async def rag_search(inp: RagIn):
    """RAG语义搜索API"""
    if not emb or not client:
        raise HTTPException(status_code=503, detail="Embedding model or ChromaDB not initialized")
    
    try:
        start_time = time.time()
        coll = get_coll(inp.collection)
        
        # 生成查询向量
        q = emb.encode([inp.query]).tolist()
        
        # 执行搜索
        res = coll.query(
            query_embeddings=q, 
            n_results=min(inp.top_k, 20),  # 限制最大结果数
            include=["documents", "metadatas", "distances"]
        )
        
        # 处理结果
        docs = []
        if res["documents"] and res["documents"][0]:
            for d, m, s in zip(res["documents"][0], res["metadatas"][0], res["distances"][0]):
                docs.append({
                    "text": d,
                    "meta": m or {},
                    "score": float(s),
                    "similarity": 1 - float(s)  # 转换为相似度分数
                })
        
        processing_time = time.time() - start_time
        logger.info(f"RAG search completed in {processing_time:.2f}s, found {len(docs)} results")
        
        return {
            "results": docs,
            "query": inp.query,
            "processing_time": processing_time,
            "total_results": len(docs)
        }
        
    except Exception as e:
        logger.error(f"RAG search failed: {e}")
        raise HTTPException(status_code=500, detail=f"RAG search failed: {str(e)}")

@app.get("/health")
async def health_check():
    """健康检查API"""
    return {
        "status": "healthy",
        "ocr_initialized": ocr is not None,
        "embedding_initialized": emb is not None,
        "chromadb_initialized": client is not None,
        "timestamp": time.time()
    }

@app.get("/collections")
async def list_collections():
    """列出所有集合"""
    if not client:
        raise HTTPException(status_code=503, detail="ChromaDB not initialized")
    
    try:
        collections = client.list_collections()
        return {
            "collections": [{"name": col.name, "id": col.id} for col in collections]
        }
    except Exception as e:
        logger.error(f"Failed to list collections: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to list collections: {str(e)}")
