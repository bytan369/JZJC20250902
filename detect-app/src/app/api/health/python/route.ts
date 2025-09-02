import { NextResponse } from "next/server";

export async function GET() {
	try {
		const resp = await fetch("http://127.0.0.1:7001/docs", { cache: "no-store" });
		return NextResponse.json({ ok: resp.ok, status: resp.status });
	} catch (err: any) {
		return NextResponse.json({ ok: false, error: String(err) }, { status: 503 });
	}
}
