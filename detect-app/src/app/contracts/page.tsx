"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

interface Contract {
  id: string;
  customer: string;
  projectName: string;
  totalAmount: number;
  currency: string;
  status: string;
  signedDate: string | null;
  startDate: string | null;
  endDate: string | null;
  arAmount: number;
  paidAmount: number;
  createdAt: string;
}

function ContractsPageContent() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      // TODO: 实现API调用获取合同列表
      // const response = await fetch('/api/contracts');
      // const data = await response.json();
      // setContracts(data);
      
      // 模拟数据
      setContracts([
        {
          id: "1",
          customer: "示例客户A",
          projectName: "建筑检测项目",
          totalAmount: 500000,
          currency: "CNY",
          status: "SIGNED",
          signedDate: "2024-01-15",
          startDate: "2024-02-01",
          endDate: "2024-12-31",
          arAmount: 200000,
          paidAmount: 300000,
          createdAt: "2024-01-10"
        },
        {
          id: "2",
          customer: "示例客户B",
          projectName: "材料检测项目",
          totalAmount: 300000,
          currency: "CNY",
          status: "EXECUTING",
          signedDate: "2024-02-20",
          startDate: "2024-03-01",
          endDate: "2024-11-30",
          arAmount: 300000,
          paidAmount: 0,
          createdAt: "2024-02-15"
        }
      ]);
    } catch (error) {
      console.error('Failed to fetch contracts:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "SIGNED":
        return "bg-green-100 text-green-800";
      case "EXECUTING":
        return "bg-blue-100 text-blue-800";
      case "FOLLOW_UP":
        return "bg-yellow-100 text-yellow-800";
      case "DONE":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "SIGNED":
        return "已签署";
      case "EXECUTING":
        return "执行中";
      case "FOLLOW_UP":
        return "跟进中";
      case "DONE":
        return "已完成";
      default:
        return status;
    }
  };

  const filteredContracts = contracts.filter(contract => {
    if (filter === "all") return true;
    return contract.status === filter;
  });

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      console.log('开始上传合同文件:', file.name);
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'x-filename': encodeURIComponent(file.name),
        },
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('文件上传成功:', result);
        
        // 调用合同处理API
        const processResponse = await fetch('/api/contracts/ingest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filePath: result.filePath,
            fileName: file.name,
            orgId: "cmf2qd57n0000hir04ez846l9" // 使用默认组织ID
          }),
        });
        
        if (processResponse.ok) {
          const processResult = await processResponse.json();
          console.log('合同处理成功:', processResult);
          alert('合同上传并处理成功！');
          setShowUploadModal(false);
          fetchContracts(); // 刷新合同列表
        } else {
          console.error('合同处理失败:', await processResponse.text());
          alert('合同处理失败，请重试');
        }
      } else {
        console.error('文件上传失败:', await response.text());
        alert('文件上传失败，请重试');
      }
    } catch (error) {
      console.error('上传错误:', error);
      alert('上传失败，请检查网络连接');
    }
  };

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
              <h1 className="text-2xl font-bold text-gray-900">合同管理</h1>
            </div>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              上传合同
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setFilter("FOLLOW_UP")}
              className={`px-4 py-2 rounded-lg ${
                filter === "FOLLOW_UP"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              跟进中
            </button>
            <button
              onClick={() => setFilter("SIGNED")}
              className={`px-4 py-2 rounded-lg ${
                filter === "SIGNED"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              已签署
            </button>
            <button
              onClick={() => setFilter("EXECUTING")}
              className={`px-4 py-2 rounded-lg ${
                filter === "EXECUTING"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              执行中
            </button>
            <button
              onClick={() => setFilter("DONE")}
              className={`px-4 py-2 rounded-lg ${
                filter === "DONE"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              已完成
            </button>
          </div>
        </div>

        {/* Contracts List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              合同列表 ({filteredContracts.length})
            </h2>
          </div>
          
          {filteredContracts.length === 0 ? (
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
              <p className="text-gray-500">暂无合同数据</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      客户
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      项目名称
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      合同金额
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      状态
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      签署日期
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      应收金额
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredContracts.map((contract) => (
                    <tr key={contract.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {contract.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contract.projectName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contract.currency} {contract.totalAmount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contract.status)}`}>
                          {getStatusText(contract.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contract.signedDate ? new Date(contract.signedDate).toLocaleDateString() : "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contract.currency} {contract.arAmount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          href={`/contracts/${contract.id}`}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          查看详情
                        </Link>
                        <button className="text-green-600 hover:text-green-900">
                          编辑
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">上传合同文件</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleFileUpload(file);
                  }
                }}
                className="hidden"
                id="contract-upload"
              />
              <label
                htmlFor="contract-upload"
                className="cursor-pointer block"
              >
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  点击选择文件或拖拽文件到此处
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  支持 PDF, DOC, DOCX 格式
                </p>
              </label>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContractsPage() {
  return (
    <ProtectedRoute>
      <ContractsPageContent />
    </ProtectedRoute>
  );
}
