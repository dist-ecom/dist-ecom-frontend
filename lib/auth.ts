import { createContext, useContext } from 'react';

export type UserRole = 'USER' | 'MERCHANT' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

// Helper function to check if user can access seller dashboard
export const canAccessSellerDashboard = (user: User | null): boolean => {
  if (!user) return false;
  return user.role === 'MERCHANT' || user.role === 'ADMIN';
}; 