import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export function MarketplaceHeader() {
  return (
    <div className="bg-slate-50 border-b">
      <div className="w-full py-4 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">DIST Marketplace</h1>
            <p className="text-sm text-slate-600">Shop from thousands of independent sellers</p>
          </div>
          <div className="flex items-center gap-2 self-stretch sm:self-auto">
            <Button size="sm" variant="outline" asChild>
              <Link href="/seller/register">Become a Seller</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/seller/dashboard">Seller Dashboard</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-6">
          <Tabs defaultValue="shopping" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="shopping">Shopping</TabsTrigger>
              <TabsTrigger value="selling">Selling</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 