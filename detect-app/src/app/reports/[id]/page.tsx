"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

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

export default function ReportDetailPage() {
  const params = useParams();
  const reportId = params.id as string;
  
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (reportId) {
      fetchReportDetails();
    }
  }, [reportId]);

  const fetchReportDetails = async () => {
    try {
      // TODO: 实现API调用获取报告详情
      // const response = await fetch(`/api/reports/${reportId}`);
      // const data = await response.json();
      // setReport(data);
      
      // 模拟数据
      setReport({
        id: reportId,
        reportNo: "R-202401001",
        sampleDate: "2024-01-15",
        receiveDate: "2024-01-16",
        issueDate: "2024-01-20",
        filePath: "/storage/report1.pdf",
        text: "检测报告详细内容...",
        createdAt: "2024-01-16",
        findings: [
          {
            id: "1",
            type: "不合格项",
            detail: "混凝土强度不符合要求，实际强度为25.5MPa，低于设计要求的30MPa",
            severity: "major",
            createdAt: "2024-01-20"
          },
          {
            id: "2",
            type: "存疑",
            detail: "检测方法需要进一步确认，建议采用标准GB/T 50081-2019进行复检",
            severity: "minor",
            createdAt: "2024-01-20"
          },
          {
            id: "3",
            type: "检查通过",
            detail: "钢筋规格符合设计要求，化学成分检测合格",
            severity: "minor",
            createdAt: "2024-01-20"
          }
        ]
      });
    } catch (error) {
      console.error('Failed to fetch report details:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "major":
        return "bg-red-100 text-red-800 border-red-200";
      case "minor":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "不合格项":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case "存疑":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
      case "检查通过":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
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

  if (!report) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">报告不存在</p>
          <Link href="/reports" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            返回报告列表
          </Link>
        </div>
      </div>
    );
  }

  const majorFindings = report.findings.filter(f => f.severity === "major");
  const minorFindings = report.findings.filter(f => f.severity === "minor");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/reports" className="text-blue-600 hover:text-blue-800 mr-4">
                ← 返回报告列表
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">报告详情</h1>
            </div>
            <div className="flex space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                下载报告
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                重新检测
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Report Header */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{report.reportNo}</h2>
                <p className="text-gray-600 mt-1">检测报告</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">签发日期</p>
                <p className="text-lg font-semibold text-gray-900">
                  {report.issueDate ? new Date(report.issueDate).toLocaleDateString() : "-"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">取样日期</p>
                <p className="text-lg font-semibold text-gray-900">
                  {report.sampleDate ? new Date(report.sampleDate).toLocaleDateString() : "-"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">接收日期</p>
                <p className="text-lg font-semibold text-gray-900">
                  {report.receiveDate ? new Date(report.receiveDate).toLocaleDateString() : "-"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">严重问题</p>
                <p className="text-lg font-semibold text-red-600">
                  {majorFindings.length} 个
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">轻微问题</p>
                <p className="text-lg font-semibold text-yellow-600">
                  {minorFindings.length} 个
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
                onClick={() => setActiveTab("findings")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "findings"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                检测发现 ({report.findings.length})
              </button>
              <button
                onClick={() => setActiveTab("content")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "content"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                报告内容
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
                        <dt className="text-sm font-medium text-gray-500">报告编号</dt>
                        <dd className="text-sm text-gray-900">{report.reportNo}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">取样日期</dt>
                        <dd className="text-sm text-gray-900">
                          {report.sampleDate ? new Date(report.sampleDate).toLocaleDateString() : "-"}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">接收日期</dt>
                        <dd className="text-sm text-gray-900">
                          {report.receiveDate ? new Date(report.receiveDate).toLocaleDateString() : "-"}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">签发日期</dt>
                        <dd className="text-sm text-gray-900">
                          {report.issueDate ? new Date(report.issueDate).toLocaleDateString() : "-"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">检测结果统计</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">总检测项</dt>
                        <dd className="text-sm text-gray-900">{report.findings.length} 项</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">不合格项</dt>
                        <dd className="text-sm text-red-600">
                          {report.findings.filter(f => f.type === "不合格项").length} 项
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">存疑项</dt>
                        <dd className="text-sm text-yellow-600">
                          {report.findings.filter(f => f.type === "存疑").length} 项
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">检查通过</dt>
                        <dd className="text-sm text-green-600">
                          {report.findings.filter(f => f.type === "检查通过").length} 项
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "findings" && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">检测发现详情</h3>
                
                {report.findings.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">暂无检测发现</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {report.findings.map((finding) => (
                      <div
                        key={finding.id}
                        className={`border rounded-lg p-4 ${getSeverityColor(finding.severity)}`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {getTypeIcon(finding.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(finding.type)}`}>
                                {finding.type}
                              </span>
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(finding.severity)}`}>
                                {getSeverityText(finding.severity)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700">{finding.detail}</p>
                            <p className="text-xs text-gray-500 mt-2">
                              检测时间：{new Date(finding.createdAt).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "content" && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">报告内容</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {report.text || "暂无报告内容"}
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

