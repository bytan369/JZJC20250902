"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Report {
  id: string;
  reportNo: string;
  sampleDate: string | null;
  receiveDate: string | null;
  issueDate: string | null;
  filePath: string;
  text: string;
  createdAt: string;
  findings: QAFinding[];
}

interface QAFinding {
  id: string;
  type: string;
  detail: string;
  severity: string;
  createdAt: string;
}

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      // TODO: 实现API调用获取报告列表
      // const response = await fetch('/api/reports');
      // const data = await response.json();
      // setReports(data);
      
      // 模拟数据
      setReports([
        {
          id: "1",
          reportNo: "R-202401001",
          sampleDate: "2024-01-15",
          receiveDate: "2024-01-16",
          issueDate: "2024-01-20",
          filePath: "/storage/report1.pdf",
          text: "检测报告内容...",
          createdAt: "2024-01-16",
          findings: [
            {
              id: "1",
              type: "不合格项",
              detail: "混凝土强度不符合要求",
              severity: "major",
              createdAt: "2024-01-20"
            },
            {
              id: "2",
              type: "存疑",
              detail: "检测方法需要进一步确认",
              severity: "minor",
              createdAt: "2024-01-20"
            }
          ]
        },
        {
          id: "2",
          reportNo: "R-202401002",
          sampleDate: "2024-01-18",
          receiveDate: "2024-01-19",
          issueDate: "2024-01-22",
          filePath: "/storage/report2.pdf",
          text: "检测报告内容...",
          createdAt: "2024-01-19",
          findings: [
            {
              id: "3",
              type: "检查通过",
              detail: "所有检测项目均符合标准要求",
              severity: "minor",
              createdAt: "2024-01-22"
            }
          ]
        }
      ]);
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "major":
        return "bg-red-100 text-red-800";
      case "minor":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case "major":
        return "严重";
      case "minor":
        return "轻微";
      default:
        return severity;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "不合格项":
        return "bg-red-100 text-red-800";
      case "存疑":
        return "bg-yellow-100 text-yellow-800";
      case "检查通过":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredReports = reports.filter(report => {
    if (filter === "all") return true;
    if (filter === "issues") {
      return report.findings.some(f => f.type === "不合格项");
    }
    if (filter === "passed") {
      return report.findings.every(f => f.type === "检查通过");
    }
    return true;
  });

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
              <h1 className="text-2xl font-bold text-gray-900">报告管理</h1>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              上传报告
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
              onClick={() => setFilter("issues")}
              className={`px-4 py-2 rounded-lg ${
                filter === "issues"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              有问题
            </button>
            <button
              onClick={() => setFilter("passed")}
              className={`px-4 py-2 rounded-lg ${
                filter === "passed"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              检查通过
            </button>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              检测报告 ({filteredReports.length})
            </h2>
          </div>
          
          {filteredReports.length === 0 ? (
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
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <p className="text-gray-500">暂无报告数据</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <div key={report.id} className="p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {report.reportNo}
                        </h3>
                        <div className="flex space-x-2">
                          {report.findings.map((finding) => (
                            <span
                              key={finding.id}
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(finding.type)}`}
                            >
                              {finding.type}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">取样日期：</span>
                          {report.sampleDate ? new Date(report.sampleDate).toLocaleDateString() : "-"}
                        </div>
                        <div>
                          <span className="font-medium">接收日期：</span>
                          {report.receiveDate ? new Date(report.receiveDate).toLocaleDateString() : "-"}
                        </div>
                        <div>
                          <span className="font-medium">签发日期：</span>
                          {report.issueDate ? new Date(report.issueDate).toLocaleDateString() : "-"}
                        </div>
                      </div>
                      
                      {report.findings.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">检测发现：</h4>
                          <div className="space-y-2">
                            {report.findings.slice(0, 2).map((finding) => (
                              <div key={finding.id} className="flex items-start space-x-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(finding.severity)}`}>
                                  {getSeverityText(finding.severity)}
                                </span>
                                <p className="text-sm text-gray-700 flex-1">{finding.detail}</p>
                              </div>
                            ))}
                            {report.findings.length > 2 && (
                              <p className="text-sm text-gray-500">
                                还有 {report.findings.length - 2} 个发现...
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Link
                        href={`/reports/${report.id}`}
                        className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                      >
                        查看详情
                      </Link>
                      <button className="text-green-600 hover:text-green-900 text-sm font-medium">
                        下载
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

