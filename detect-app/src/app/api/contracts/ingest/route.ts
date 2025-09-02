import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { prisma } from "@/lib/prisma";
import { chatJson } from "@/lib/llm";

async function callOCR(filePath: string): Promise<string> {
	const maxAttempts = 8;
	const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < maxAttempts; i++) {
		try {
			const ocrResp = await axios.post("http://127.0.0.1:7001/ocr", { filePath }, { timeout: 30000 });
			return ocrResp.data?.text || "";
		} catch (e) {
			if (i === maxAttempts - 1) throw e;
			await delay(2000);
		}
	}
	return "";
}

export async function POST(req: NextRequest) {
	try {
		console.log('开始处理合同...');
		const { orgId, filePath, fileName } = await req.json();
		console.log('请求参数:', { orgId, filePath, fileName });

		if (!orgId || !filePath) {
			return NextResponse.json(
				{ error: "缺少必要参数: orgId 和 filePath" },
				{ status: 400 }
			);
		}

		console.log('开始OCR处理...');
		const text: string = await callOCR(filePath);
		console.log('OCR结果长度:', text.length);

		if (!text || text.trim().length === 0) {
			return NextResponse.json(
				{ error: "OCR处理失败，无法提取文本内容" },
				{ status: 500 }
			);
		}

		console.log('开始LLM处理...');
		const schemaPrompt = `请从以下合同文本中抽取：customer, project_name, currency, total_amount, status, dates{signed,start,end}, items[{name,amount}]\n文本：\n${text}`;
		const meta = await chatJson(schemaPrompt);
		console.log('LLM处理结果:', meta);

		console.log('开始保存到数据库...');
		const c = await prisma.contract.create({
			data: {
				orgId,
				customer: meta.customer ?? "未知客户",
				projectName: meta.project_name ?? "未命名项目",
				currency: meta.currency ?? "CNY",
				totalAmount: Number(meta.total_amount ?? 0),
				status: (meta.status ?? "FOLLOW_UP"),
				signedDate: meta.dates?.signed ? new Date(meta.dates.signed) : null,
				startDate: meta.dates?.start ? new Date(meta.dates.start) : null,
				endDate: meta.dates?.end ? new Date(meta.dates.end) : null,
				text,
				filePath,
				metaJson: JSON.stringify(meta)
			}
		});

		await prisma.contract.update({
			where: { id: c.id },
			data: { arAmount: c.totalAmount - c.paidAmount }
		});

		console.log('合同处理完成:', c.id);
		return NextResponse.json({ 
			success: true, 
			id: c.id,
			message: "合同处理成功"
		});

	} catch (error: any) {
		console.error('合同处理错误:', error);
		return NextResponse.json(
			{ 
				error: "合同处理失败", 
				details: error.message 
			},
			{ status: 500 }
		);
	}
}
