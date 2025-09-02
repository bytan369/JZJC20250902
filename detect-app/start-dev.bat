@echo off
echo Starting Detect App Development Environment...

echo.
echo [1/3] Starting Python Service...
start "Python Service" cmd /k "cd python_svc && python start.py"

echo.
echo [2/3] Waiting for Python service to initialize...
timeout /t 10 /nobreak > nul

echo.
echo [3/3] Starting Next.js Development Server...
start "Next.js App" cmd /k "npm run dev"

echo.
echo Both services are starting...
echo - Python Service: http://localhost:7001
echo - Next.js App: http://localhost:3000
echo.
echo Press any key to exit...
pause > nul

