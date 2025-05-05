'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/components/AuthProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
} 