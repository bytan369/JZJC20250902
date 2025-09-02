#!/bin/bash

echo "Starting Detect App Development Environment..."

echo ""
echo "[1/3] Starting Python Service..."
cd python_svc
python start.py &
PYTHON_PID=$!
cd ..

echo ""
echo "[2/3] Waiting for Python service to initialize..."
sleep 10

echo ""
echo "[3/3] Starting Next.js Development Server..."
npm run dev &
NEXTJS_PID=$!

echo ""
echo "Both services are starting..."
echo "- Python Service: http://localhost:7001"
echo "- Next.js App: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both services..."

# 等待用户中断
trap "echo 'Stopping services...'; kill $PYTHON_PID $NEXTJS_PID; exit" INT
wait

