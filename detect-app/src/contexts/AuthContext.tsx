"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  orgId: string;
  org?: {
    id: string;
    name: string;
    description: string | null;
  };
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string, orgName?: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 从localStorage恢复认证状态
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      fetchUserInfo(savedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserInfo = async (authToken: string) => {
    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        // Token无效，清除本地存储
        localStorage.removeItem('token');
        setToken(null);
      }
    } catch (error) {
      console.error('获取用户信息失败:', error);
      localStorage.removeItem('token');
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        return true;
      } else {
        const error = await response.json();
        console.error('登录失败:', error.error);
        return false;
      }
    } catch (error) {
      console.error('登录错误:', error);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string, orgName?: string): Promise<boolean> => {
    try {
      console.log('开始注册请求...', { email, name, orgName });
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name, orgName })
      });

      console.log('注册响应状态:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('注册成功:', data);
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        return true;
      } else {
        const error = await response.json().catch(() => ({ error: '服务器响应格式错误' }));
        console.error('注册失败:', error);
        throw new Error(error.error || `注册失败 (${response.status})`);
      }
    } catch (error: any) {
      console.error('注册错误:', error);
      throw error; // 重新抛出错误，让调用者处理
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
