@echo off
echo 正在更新环境配置...

echo # JWT配置 >> .env.local
echo JWT_SECRET="your-super-secret-jwt-key-change-this-in-production" >> .env.local

echo.
echo 环境配置更新完成！
echo.
pause

