@echo off
echo 正在启动检测应用服务器...
cd /d "%~dp0"
echo 当前目录: %CD%
echo 检查package.json是否存在...
if exist package.json (
    echo package.json 存在，启动开发服务器...
    npm run dev
) else (
    echo 错误: package.json 不存在！
    echo 请确保在正确的目录中运行此脚本。
    pause
)

