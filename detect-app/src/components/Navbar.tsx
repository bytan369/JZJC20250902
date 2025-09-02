"use client";

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">检测应用</span>
            </Link>
            
            {user && (
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  首页
                </Link>
                <Link
                  href="/contracts"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  合同管理
                </Link>
                <Link
                  href="/reports"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  报告管理
                </Link>
                <Link
                  href="/standards"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  标准库
                </Link>
                {user.role === 'ADMIN' && (
                  <Link
                    href="/admin"
                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    管理后台
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{user.name}</span>
                  <span className="text-gray-500 ml-2">({user.role})</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  退出登录
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  登录
                </Link>
                <Link
                  href="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  注册
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
