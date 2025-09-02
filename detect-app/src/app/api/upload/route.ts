import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
	const storage = process.env.STORAGE_DIR || "./storage";
	const absStorage = path.isAbsolute(storage) ? storage : path.join(process.cwd(), storage);
	await fs.promises.mkdir(absStorage, { recursive: true });

	const buffer = Buffer.from(await req.arrayBuffer());
	const hinted = req.headers.get("x-filename") || "upload.bin";
	const decodedFilename = decodeURIComponent(hinted);
	const safeBase = path.basename(decodedFilename);
	const finalPath = path.join(absStorage, `${Date.now()}-${safeBase}`);
	await fs.promises.writeFile(finalPath, buffer);

	return NextResponse.json({ filePath: finalPath });
}
