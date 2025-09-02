import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "邮箱和密码不能为空" },
        { status: 400 }
      );
    }

    // 查找用户
    const user = await prisma.user.findUnique({
      where: { email },
      include: { org: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: "用户不存在" },
        { status: 401 }
      );
    }

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "密码错误" },
        { status: 401 }
      );
    }

    // 生成JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role,
        orgId: user.orgId 
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 返回用户信息（不包含密码）
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      success: true,
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error("登录错误:", error);
    return NextResponse.json(
      { error: "服务器内部错误" },
      { status: 500 }
    );
  }
}

