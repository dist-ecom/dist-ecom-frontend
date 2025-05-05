import { ArrowRight, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export function MarketplacePromo() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-slate-50">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              NEW
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Introducing DIST Marketplace</h2>
            <p className="text-lg text-slate-600">
              Shop from thousands of independent sellers or start selling your own products today. Join our growing community of entrepreneurs and customers.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">10,000+ Products</h3>
                  <p className="text-sm text-slate-500">Curated selection of unique items</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">500+ Sellers</h3>
                  <p className="text-sm text-slate-500">Independent businesses you can trust</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Low Fees</h3>
                  <p className="text-sm text-slate-500">Competitive seller commission rates</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-full">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Quick Setup</h3>
                  <p className="text-sm text-slate-500">Start selling in minutes, not days</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button size="lg" asChild>
                <Link href="/marketplace">
                  Shop the Marketplace
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/seller/register" className="group">
                  Become a Seller
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-3 shadow-sm border">
                <div className="aspect-square rounded-lg bg-slate-100 mb-2" />
                <div className="h-4 bg-slate-100 rounded w-2/3 mb-1" />
                <div className="h-3 bg-slate-100 rounded w-1/2" />
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm border mt-6">
                <div className="aspect-square rounded-lg bg-slate-100 mb-2" />
                <div className="h-4 bg-slate-100 rounded w-2/3 mb-1" />
                <div className="h-3 bg-slate-100 rounded w-1/2" />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="bg-white rounded-xl p-3 shadow-sm border">
                <div className="aspect-square rounded-lg bg-slate-100 mb-2" />
                <div className="h-4 bg-slate-100 rounded w-2/3 mb-1" />
                <div className="h-3 bg-slate-100 rounded w-1/2" />
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm border mt-6">
                <div className="aspect-square rounded-lg bg-slate-100 mb-2" />
                <div className="h-4 bg-slate-100 rounded w-2/3 mb-1" />
                <div className="h-3 bg-slate-100 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 