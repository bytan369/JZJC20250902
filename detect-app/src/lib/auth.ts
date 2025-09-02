import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export interface AuthUser {
  userId: string;
  email: string;
  role: string;
  orgId: string;
}

export function verifyToken(request: NextRequest): AuthUser | null {
  try {
    const token = request.headers.get("authorization")?.replace("Bearer ", "");
    
    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
    return decoded;
  } catch (error) {
    return null;
  }
}

export function requireAuth(handler: (request: NextRequest, user: AuthUser) => Promise<Response>) {
  return async (request: NextRequest) => {
    const user = verifyToken(request);
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: "需要认证" }),
        { 
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return handler(request, user);
  };
}

export function requireRole(roles: string[]) {
  return function(handler: (request: NextRequest, user: AuthUser) => Promise<Response>) {
    return async (request: NextRequest) => {
      const user = verifyToken(request);
      
      if (!user) {
        return new Response(
          JSON.stringify({ error: "需要认证" }),
          { 
            status: 401,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      if (!roles.includes(user.role)) {
        return new Response(
          JSON.stringify({ error: "权限不足" }),
          { 
            status: 403,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return handler(request, user);
    };
  };
}

