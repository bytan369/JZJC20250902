@echo off
echo 正在配置DeepSeek R1 API环境...

echo # 数据库配置 > .env.local
echo DATABASE_URL="file:./prisma/dev.db" >> .env.local
echo. >> .env.local
echo # 存储目录 >> .env.local
echo STORAGE_DIR="./storage" >> .env.local
echo. >> .env.local
echo # LLM配置 - DeepSeek R1 >> .env.local
echo LLM_BASE_URL="https://api.deepseek.com/v1" >> .env.local
echo LLM_API_KEY="sk-c712a6d6159d47c7865f5953241c88ab" >> .env.local
echo LLM_MODEL="deepseek-chat" >> .env.local
echo. >> .env.local
echo # Python服务配置 >> .env.local
echo PYTHON_SERVICE_URL="http://127.0.0.1:7001" >> .env.local

echo.
echo 环境配置完成！
echo 现在可以运行 start-dev.bat 启动应用
echo.
pause

