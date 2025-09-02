"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

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
  filePath: string;
  text: string;
  metaJson: string;
  createdAt: string;
  updatedAt: string;
}

interface Payment {
  id: string;
  amount: number;
  paidDate: string;
  note: string | null;
}

export default function ContractDetailPage() {
  const params = useParams();
  const contractId = params.id as string;
  
  const [contract, setContract] = useState<Contract | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (contractId) {
      fetchContractDetails();
    }
  }, [contractId]);

  const fetchContractDetails = async () => {
    try {
      // TODO: 实现API调用获取合同详情
      // const response = await fetch(`/api/contracts/${contractId}`);
      // const data = await response.json();
      // setContract(data.contract);
      // setPayments(data.payments);
      
      // 模拟数据
      setContract({
        id: contractId,
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
        filePath: "/storage/contract.pdf",
        text: "合同文本内容...",
        metaJson: '{"customer":"示例客户A","project_name":"建筑检测项目"}',
        createdAt: "2024-01-10",
        updatedAt: "2024-01-15"
      });
      
      setPayments([
        {
          id: "1",
          amount: 150000,
          paidDate: "2024-02-15",
          note: "首付款"
        },
        {
          id: "2",
          amount: 150000,
          paidDate: "2024-06-15",
          note: "中期款"
        }
      ]);
    } catch (error) {
      console.error('Failed to fetch contract details:', error);
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

  if (!contract) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">合同不存在</p>
          <Link href="/contracts" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            返回合同列表
          </Link>
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
              <Link href="/contracts" className="text-blue-600 hover:text-blue-800 mr-4">
                ← 返回合同列表
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">合同详情</h1>
            </div>
            <div className="flex space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                添加付款记录
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                编辑合同
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contract Header */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{contract.projectName}</h2>
                <p className="text-gray-600 mt-1">客户：{contract.customer}</p>
              </div>
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(contract.status)}`}>
                {getStatusText(contract.status)}
              </span>
            </div>
          </div>
          
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">合同金额</p>
                <p className="text-lg font-semibold text-gray-900">
                  {contract.currency} {contract.totalAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">已付金额</p>
                <p className="text-lg font-semibold text-green-600">
                  {contract.currency} {contract.paidAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">应收金额</p>
                <p className="text-lg font-semibold text-red-600">
                  {contract.currency} {contract.arAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">签署日期</p>
                <p className="text-lg font-semibold text-gray-900">
                  {contract.signedDate ? new Date(contract.signedDate).toLocaleDateString() : "-"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                概览
              </button>
              <button
                onClick={() => setActiveTab("payments")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "payments"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                付款记录
              </button>
              <button
                onClick={() => setActiveTab("content")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "content"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                合同内容
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">基本信息</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">项目名称</dt>
                        <dd className="text-sm text-gray-900">{contract.projectName}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">客户</dt>
                        <dd className="text-sm text-gray-900">{contract.customer}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">开始日期</dt>
                        <dd className="text-sm text-gray-900">
                          {contract.startDate ? new Date(contract.startDate).toLocaleDateString() : "-"}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">结束日期</dt>
                        <dd className="text-sm text-gray-900">
                          {contract.endDate ? new Date(contract.endDate).toLocaleDateString() : "-"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">财务信息</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">合同总金额</dt>
                        <dd className="text-sm text-gray-900">
                          {contract.currency} {contract.totalAmount.toLocaleString()}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">已付金额</dt>
                        <dd className="text-sm text-green-600">
                          {contract.currency} {contract.paidAmount.toLocaleString()}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">应收金额</dt>
                        <dd className="text-sm text-red-600">
                          {contract.currency} {contract.arAmount.toLocaleString()}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">付款进度</dt>
                        <dd className="text-sm text-gray-900">
                          {((contract.paidAmount / contract.totalAmount) * 100).toFixed(1)}%
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "payments" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">付款记录</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    添加付款记录
                  </button>
                </div>
                
                {payments.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">暂无付款记录</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            付款日期
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            金额
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            备注
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            操作
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {payments.map((payment) => (
                          <tr key={payment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {new Date(payment.paidDate).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {contract.currency} {payment.amount.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {payment.note || "-"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-4">
                                编辑
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                删除
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === "content" && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">合同内容</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {contract.text || "暂无合同内容"}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

