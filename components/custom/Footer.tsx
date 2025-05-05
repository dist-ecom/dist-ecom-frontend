import Link from "next/link";
import { Separator } from "../ui/separator";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-4 md:px-8 lg:px-12">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">DIST</h3>
            <p className="text-sm mb-4">
              Modern fashion for the modern person. Quality materials, sustainable practices.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white">All Products</Link></li>
              <li><Link href="/categories/men" className="hover:text-white">Men</Link></li>
              <li><Link href="/categories/women" className="hover:text-white">Women</Link></li>
              <li><Link href="/categories/accessories" className="hover:text-white">Accessories</Link></li>
              <li><Link href="/sale" className="hover:text-white">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-white">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/size-guide" className="hover:text-white">Size Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 DIST. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 