@echo off
chcp 65001
echo 正在启动检测应用...
cd /d "%~dp0\detect-app"
echo 当前目录: %CD%
echo 检查package.json...
if exist package.json (
    echo 找到package.json，启动开发服务器...
    npm run dev
) else (
    echo 错误: 找不到package.json文件！
    echo 请确保在正确的目录中运行此脚本。
    pause
)