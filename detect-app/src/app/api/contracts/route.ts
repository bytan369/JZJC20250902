import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orgId = searchParams.get("orgId");
    const status = searchParams.get("status");

    if (!orgId) {
      return NextResponse.json({ error: "orgId is required" }, { status: 400 });
    }

    const where: any = { orgId };
    if (status && status !== "all") {
      where.status = status;
    }

    const contracts = await prisma.contract.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        payments: {
          orderBy: { paidDate: "desc" }
        }
      }
    });

    return NextResponse.json(contracts);
  } catch (error) {
    console.error("Failed to fetch contracts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { orgId, filePath } = await req.json();

    if (!orgId || !filePath) {
      return NextResponse.json({ error: "orgId and filePath are required" }, { status: 400 });
    }

    // 调用合同处理API
    const response = await fetch(`${req.nextUrl.origin}/api/contracts/ingest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orgId, filePath })
    });

    if (!response.ok) {
      throw new Error("Failed to process contract");
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to create contract:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

