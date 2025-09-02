# 环境配置说明

## 创建环境变量文件

在项目根目录创建 `.env.local` 文件，包含以下配置：

```env
# 数据库配置
DATABASE_URL="file:./prisma/dev.db"

# 存储目录
STORAGE_DIR="./storage"

# LLM配置 (可选，用于智能分析)
LLM_BASE_URL="http://localhost:11434/v1"
LLM_API_KEY="your-api-key"
LLM_MODEL="qwen2.5:7b"

# Python服务配置
PYTHON_SERVICE_URL="http://127.0.0.1:7001"
```

## 配置说明

- `DATABASE_URL`: SQLite数据库文件路径
- `STORAGE_DIR`: 上传文件的存储目录
- `LLM_BASE_URL`: 大语言模型API地址（可选）
- `LLM_API_KEY`: 大语言模型API密钥（可选）
- `LLM_MODEL`: 使用的模型名称（可选）
- `PYTHON_SERVICE_URL`: Python后端服务地址

## 注意事项

1. 确保 `.env.local` 文件不被提交到版本控制系统
2. 在生产环境中使用更安全的配置
3. LLM配置是可选的，如果不配置将跳过智能分析功能

