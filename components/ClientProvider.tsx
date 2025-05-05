'use client';

import { ReactNode, useEffect, useState } from 'react';

type ClientProviderProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function ClientProvider({ children, fallback }: ClientProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback || null;
  }

  return <>{children}</>;
} 