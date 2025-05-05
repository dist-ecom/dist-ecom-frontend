'use client';

import { ReactNode, useEffect, useState } from 'react';
import { AuthContext, User } from '@/lib/auth';

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on mount (client-side only)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to get user from localStorage (only in browser)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        
        // Here you would normally fetch the current user profile from your API
        // const response = await fetch('/api/auth/profile', { credentials: 'include' });
        // if (response.ok) {
        //   const userData = await response.json();
        //   setUser(userData);
        //   localStorage.setItem('user', JSON.stringify(userData));
        // }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would call your backend API
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      //   credentials: 'include',
      // });
      
      // if (!response.ok) throw new Error('Login failed');
      // const data = await response.json();
      
      // For demo purposes, simulate a successful login
      const mockUser: User = {
        id: '123',
        name: 'Demo User',
        email: email,
        role: email.includes('merchant') ? 'MERCHANT' : 
              email.includes('admin') ? 'ADMIN' : 'USER'
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // In a real app, you would call your backend API to invalidate the session
    // fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
} 