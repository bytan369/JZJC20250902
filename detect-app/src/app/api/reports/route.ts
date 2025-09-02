import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orgId = searchParams.get("orgId");
    const filter = searchParams.get("filter");

    if (!orgId) {
      return NextResponse.json({ error: "orgId is required" }, { status: 400 });
    }

    const where: any = { orgId };
    
    // 根据过滤条件添加查询条件
    if (filter === "issues") {
      where.findings = {
        some: {
          type: "不合格项"
        }
      };
    } else if (filter === "passed") {
      where.findings = {
        every: {
          type: "检查通过"
        }
      };
    }

    const reports = await prisma.report.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        findings: {
          orderBy: { createdAt: "desc" }
        }
      }
    });

    return NextResponse.json(reports);
  } catch (error) {
    console.error("Failed to fetch reports:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { orgId, filePath } = await req.json();

    if (!orgId || !filePath) {
      return NextResponse.json({ error: "orgId and filePath are required" }, { status: 400 });
    }

    // 调用报告处理API
    const response = await fetch(`${req.nextUrl.origin}/api/reports/ingest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orgId, filePath })
    });

    if (!response.ok) {
      throw new Error("Failed to process report");
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to create report:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

