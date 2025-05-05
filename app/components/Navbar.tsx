import Link from "next/link";
import { Button } from "../../components/ui/button";
import { User, Search, Menu, ShoppingCart } from "lucide-react";

export function Navbar() {
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
            <Link href="/seller/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Seller Dashboard
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
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