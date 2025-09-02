import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
	const { name } = await req.json();
	const org = await prisma.org.create({ data: { name } });
	return NextResponse.json(org);
}

export async function GET() {
	const orgs = await prisma.org.findMany({ orderBy: { createdAt: "desc" } });
	return NextResponse.json(orgs);
}
