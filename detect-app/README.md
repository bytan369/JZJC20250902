# 智能文档检测平台

这是一个基于Next.js和Python的智能文档检测平台，支持合同信息提取、报告质量检测、标准规范对比等功能。

## 功能特性

- 📄 **合同信息提取**: 自动识别合同中的客户信息、项目名称、金额、日期等关键信息
- 🔍 **报告质量检测**: 基于标准规范自动检测报告内容，识别不合规项和存疑问题
- 🧠 **智能搜索**: 基于向量数据库的语义搜索，快速找到相关标准条款和规范
- 📊 **数据管理**: 完整的合同、报告、标准文档管理系统
- 🎨 **现代UI**: 响应式设计，支持拖拽上传，直观的用户界面

## 技术栈

### 前端
- **Next.js 15**: React框架，支持App Router
- **TypeScript**: 类型安全的JavaScript
- **Tailwind CSS**: 实用优先的CSS框架
- **Prisma**: 现代数据库ORM

### 后端
- **Python FastAPI**: 高性能异步Web框架
- **PaddleOCR**: 中文OCR文字识别
- **ChromaDB**: 向量数据库，支持语义搜索
- **Sentence Transformers**: 文本嵌入模型

## 快速开始

### 环境要求

- Node.js 18+
- Python 3.8+
- SQLite (默认数据库)

### 1. 安装前端依赖

```bash
cd detect-app
npm install
```

### 2. 设置环境变量

创建 `.env.local` 文件：

```env
# 数据库
DATABASE_URL="file:./prisma/dev.db"

# 存储目录
STORAGE_DIR="./storage"

# LLM配置 (可选)
LLM_BASE_URL="http://localhost:11434/v1"
LLM_API_KEY="your-api-key"
LLM_MODEL="qwen2.5:7b"
```

### 3. 初始化数据库

```bash
npx prisma generate
npx prisma db push
```

### 4. 安装Python依赖

```bash
cd python_svc
pip install -r requirements.txt
```

### 5. 启动服务

#### 启动Python服务 (终端1)
```bash
cd python_svc
python start.py
```

#### 启动Next.js服务 (终端2)
```bash
cd detect-app
npm run dev
```

### 6. 访问应用

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
detect-app/
├── src/
│   ├── app/                 # Next.js App Router页面
│   │   ├── api/            # API路由
│   │   ├── contracts/      # 合同管理页面
│   │   ├── reports/        # 报告管理页面
│   │   └── standards/      # 标准库页面
│   ├── lib/                # 工具库
│   └── generated/          # Prisma生成的客户端
├── python_svc/             # Python后端服务
│   ├── main.py            # FastAPI应用
│   ├── start.py           # 启动脚本
│   └── requirements.txt   # Python依赖
├── prisma/                # 数据库模式
└── storage/               # 文件存储目录
```

## API文档

### Python服务 (端口7001)

- `POST /ocr` - OCR文字识别
- `POST /kb/bulk` - 批量添加文档到知识库
- `POST /rag/search` - 语义搜索
- `GET /health` - 健康检查
- `GET /collections` - 列出所有集合

### Next.js API (端口3000)

- `POST /api/upload` - 文件上传
- `POST /api/contracts/ingest` - 合同信息提取
- `POST /api/reports/ingest` - 报告质量检测
- `GET /api/contracts` - 获取合同列表
- `GET /api/reports` - 获取报告列表

## 使用说明

### 1. 上传合同
- 在首页拖拽或点击上传PDF合同文件
- 系统自动提取合同信息并存储到数据库

### 2. 上传报告
- 在报告管理页面上传检测报告
- 系统自动进行质量检测，识别不合规项

### 3. 管理标准库
- 在标准库页面上传标准文档
- 系统自动建立向量索引，支持语义搜索

### 4. 查看结果
- 在合同管理页面查看提取的合同信息
- 在报告管理页面查看检测结果和QA发现

## 开发指南

### 添加新的API端点

1. 在 `src/app/api/` 下创建新的路由文件
2. 使用Prisma客户端操作数据库
3. 调用Python服务进行文档处理

### 添加新的页面

1. 在 `src/app/` 下创建新的页面目录
2. 创建 `page.tsx` 文件
3. 使用Tailwind CSS进行样式设计

### 扩展Python服务

1. 在 `python_svc/main.py` 中添加新的API端点
2. 更新 `requirements.txt` 添加新依赖
3. 重启Python服务

## 部署

### 生产环境部署

1. 构建Next.js应用：
```bash
npm run build
```

2. 启动生产服务：
```bash
npm start
```

3. 使用Gunicorn部署Python服务：
```bash
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Docker部署

```bash
# 构建镜像
docker build -t detect-app .

# 运行容器
docker run -p 3000:3000 -p 7001:7001 detect-app
```

## 故障排除

### 常见问题

1. **Python服务启动失败**
   - 检查Python版本 (需要3.8+)
   - 确保所有依赖已安装
   - 检查端口7001是否被占用

2. **OCR识别效果差**
   - 确保图片清晰度足够
   - 检查文件格式是否支持
   - 调整OCR参数

3. **数据库连接失败**
   - 检查DATABASE_URL配置
   - 运行 `npx prisma db push` 初始化数据库

## 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 许可证

MIT License
