# DeepSeek R1 API 配置

## 环境变量配置

请在 `detect-app` 目录下创建 `.env.local` 文件，并添加以下配置：

```env
# 数据库配置
DATABASE_URL="file:./prisma/dev.db"

# 存储目录
STORAGE_DIR="./storage"

# LLM配置 - DeepSeek R1
LLM_BASE_URL="https://api.deepseek.com/v1"
LLM_API_KEY="sk-c712a6d6159d47c7865f5953241c88ab"
LLM_MODEL="deepseek-chat"

# Python服务配置
PYTHON_SERVICE_URL="http://127.0.0.1:7001"
```

## 配置说明

- `LLM_BASE_URL`: DeepSeek API的基础URL
- `LLM_API_KEY`: 您提供的DeepSeek R1 API密钥
- `LLM_MODEL`: 使用deepseek-chat模型

## 功能说明

配置完成后，系统将能够：
1. 使用DeepSeek R1进行合同信息提取
2. 进行报告质量检测和智能分析
3. 提供更准确的文本理解和处理能力

## 注意事项

1. 请确保API密钥的安全性，不要泄露给他人
2. 注意API调用次数限制
3. 如果遇到API调用失败，请检查网络连接和密钥有效性

