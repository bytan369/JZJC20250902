"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface StandardDoc {
  id: string;
  title: string;
  filePath: string;
  text: string;
  createdAt: string;
  deleted: boolean;
}

export default function StandardsPage() {
  const [standards, setStandards] = useState<StandardDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchStandards();
  }, []);

  const fetchStandards = async () => {
    try {
      // TODO: 实现API调用获取标准文档列表
      // const response = await fetch('/api/standards');
      // const data = await response.json();
      // setStandards(data);
      
      // 模拟数据
      setStandards([
        {
          id: "1",
          title: "GBT 50081-2019 混凝土物理力学性能试验方法标准",
          filePath: "/storage/GBT50081-2019.pdf",
          text: "标准内容...",
          createdAt: "2024-01-10",
          deleted: false
        },
        {
          id: "2",
          title: "GB 1499.1-2024 钢筋混凝土用钢 第1部分：热轧光圆钢筋",
          filePath: "/storage/GB1499.1-2024.pdf",
          text: "标准内容...",
          createdAt: "2024-01-12",
          deleted: false
        },
        {
          id: "3",
          title: "GB 1499.2-2024 钢筋混凝土用钢 第2部分：热轧带肋钢筋",
          filePath: "/storage/GB1499.2-2024.pdf",
          text: "标准内容...",
          createdAt: "2024-01-15",
          deleted: false
        }
      ]);
    } catch (error) {
      console.error('Failed to fetch standards:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'x-filename': file.name,
        },
      });
      
      const result = await response.json();
      
      // TODO: 调用标准文档处理API
      // await fetch('/api/standards/ingest', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ filePath: result.filePath })
      // });
      
      console.log('Standard uploaded:', result);
      fetchStandards(); // 刷新列表
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const filteredStandards = standards.filter(standard =>
    standard.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !standard.deleted
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">标准库</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索标准..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <label className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                {uploading ? "上传中..." : "上传标准"}
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">标准文档总数</p>
                <p className="text-2xl font-semibold text-gray-900">{standards.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">已索引文档</p>
                <p className="text-2xl font-semibold text-gray-900">{standards.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">搜索次数</p>
                <p className="text-2xl font-semibold text-gray-900">1,234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Standards List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              标准文档列表 ({filteredStandards.length})
            </h2>
          </div>
          
          {filteredStandards.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-500">
                {searchTerm ? "未找到匹配的标准文档" : "暂无标准文档"}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredStandards.map((standard) => (
                <div key={standard.id} className="p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {standard.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            上传时间：{new Date(standard.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {standard.text.substring(0, 200)}...
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                        查看详情
                      </button>
                      <button className="text-green-600 hover:text-green-900 text-sm font-medium">
                        下载
                      </button>
                      <button className="text-red-600 hover:text-red-900 text-sm font-medium">
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

