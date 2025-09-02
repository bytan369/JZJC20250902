import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { prisma } from "@/lib/prisma";
import { chatJson } from "@/lib/llm";

export async function POST(req: NextRequest) {
	const { orgId, filePath } = await req.json();

	const ocrResp = await axios.post("http://127.0.0.1:7001/ocr", { filePath });
	const text: string = ocrResp.data?.text || "";

	const report = await prisma.report.create({
		data: { orgId, filePath, text, reportNo: `R-${Date.now()}` }
	});

	const paras = text.split(/\n{2,}/).slice(0, 20);

	for (const p of paras) {
		const { data: hits } = await axios.post("http://127.0.0.1:7001/rag/search", {
			collection: "standards",
			query: p,
			top_k: 5
		});

		const comparePrompt = `报告段落：\n${p}\n\n候选规范条款：\n${JSON.stringify(hits, null, 2)}\n\n请输出：{"verdict":"合规|不合规|存疑","reasons":[...],"refs":[{"code":"","title":""}]}`;
		const res = await chatJson(comparePrompt);

		await prisma.qAFinding.create({
			data: {
				reportId: report.id,
				type: res.verdict === "不合规" ? "不合格项" : (res.verdict === "存疑" ? "存疑" : "检查通过"),
				detail: JSON.stringify({ reasons: res.reasons, refs: res.refs }, null, 2),
				severity: res.verdict === "不合规" ? "major" : "minor"
			}
		});
	}

	return NextResponse.json({ id: report.id });
}
