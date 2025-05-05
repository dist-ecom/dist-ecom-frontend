'use client';

import Link from "next/link";
import { Button } from "../../components/ui/button";
import { User, Search, Menu, ShoppingCart, LogIn, LogOut } from "lucide-react";
import { useAuth, canAccessSellerDashboard } from "@/lib/auth";
import { useEffect, useState } from "react";

export function Navbar() {
  const { user, login, logout, isLoading } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  
  // Set isMounted to true when component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Demo login function for testing role-based UI
  const handleDemoLogin = async (role: string) => {
    try {
      await login(`${role}@example.com`, 'password123');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <header className="w-full border-b">
      <div className="w-full flex items-center justify-between h-16 px-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="font-bold text-2xl">
            DIST
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/marketplace" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            
            {/* Only render conditional content on the client side */}
            {isMounted && canAccessSellerDashboard(user) && (
              <Link href="/seller/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
                Seller Dashboard
              </Link>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Only render authentication UI on the client side */}
          {isMounted && !isLoading && (
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <>
                  <span className="text-sm">
                    {user.name} ({user.role})
                  </span>
                  <Button variant="ghost" size="sm" onClick={() => logout()}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={() => handleDemoLogin('user')}>
                    User Login
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDemoLogin('merchant')}>
                    Merchant Login
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDemoLogin('admin')}>
                    Admin Login
                  </Button>
                </>
              )}
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
} 