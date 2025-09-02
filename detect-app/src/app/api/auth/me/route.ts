import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "未提供认证令牌" },
        { status: 401 }
      );
    }

    // 验证JWT token
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    // 获取用户信息
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: { org: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: "用户不存在" },
        { status: 404 }
      );
    }

    // 返回用户信息（不包含密码）
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      success: true,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error("获取用户信息错误:", error);
    return NextResponse.json(
      { error: "认证失败" },
      { status: 401 }
    );
  }
}

