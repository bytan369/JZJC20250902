import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// 添加运行时配置
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// 验证schema
const RegisterSchema = z.object({
  name: z.string().min(1, '姓名必填').max(64),
  email: z.string().email('邮箱格式不正确'),
  password: z.string().min(8, '密码至少8位').max(128),
  orgName: z.string().optional(),
  role: z.enum(['ADMIN', 'FINANCE', 'QA', 'SALESPM', 'READONLY']).default('READONLY')
});

export async function POST(request: NextRequest) {
  try {
    console.log('注册请求开始...');
    
    const json = await request.json().catch(() => ({}));
    console.log('请求数据:', { ...json, password: '[HIDDEN]' });
    
    const { email, password, name, orgName, role } = RegisterSchema.parse(json);

    console.log('参数验证通过，开始检查用户是否存在...');
    
    // 检查用户是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      console.log('用户已存在:', email);
      return NextResponse.json(
        { error: "邮箱已被注册" },
        { status: 409 }
      );
    }

    console.log('开始处理组织...');
    
    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);

    let orgId: string;

    if (orgName) {
      // 查找或创建组织
      let org = await prisma.org.findFirst({
        where: { name: orgName }
      });

      if (!org) {
        console.log('创建新组织:', orgName);
        org = await prisma.org.create({
          data: {
            name: orgName,
            description: `由用户 ${name} 创建的组织`
          }
        });
      }
      orgId = org.id;
    } else {
      // 使用默认组织
      const defaultOrg = await prisma.org.findFirst({
        where: { name: "默认组织" }
      });
      
      if (!defaultOrg) {
        console.log('创建默认组织');
        const newOrg = await prisma.org.create({
          data: {
            name: "默认组织",
            description: "系统默认组织"
          }
        });
        orgId = newOrg.id;
      } else {
        orgId = defaultOrg.id;
      }
    }
    
    console.log('组织ID:', orgId);

    console.log('开始创建用户...');
    
    // 创建用户
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: role as any,
        orgId
      },
      include: { org: true }
    });

    console.log('用户创建成功:', user.id);

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

    console.log('注册成功，返回响应');
    return NextResponse.json({
      success: true,
      token,
      user: userWithoutPassword
    });

  } catch (error: any) {
    console.error("注册错误详情:", error);
    
    // 常见错误分类
    if (error?.name === 'ZodError') {
      console.log('参数验证失败:', error.issues);
      return NextResponse.json(
        { error: '参数不合法', issues: error.issues },
        { status: 400 }
      );
    }
    
    if (error?.code === 'P2002') { // Prisma 唯一键冲突
      console.log('唯一键冲突:', error.meta);
      return NextResponse.json(
        { error: '邮箱已被注册' }, 
        { status: 409 }
      );
    }
    
    if (error?.code === 'P2003') { // 外键约束失败
      console.log('外键约束失败:', error.meta);
      return NextResponse.json(
        { error: '组织不存在' }, 
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "服务器内部错误", details: error.message },
      { status: 500 }
    );
  }
}
