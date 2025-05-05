import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BarChart, LineChart, DollarSign, Package, TrendingUp, Users } from "lucide-react";

export function SellerDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Seller Dashboard</h1>
          <p className="text-slate-600">Manage your products and orders</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline">View Store</Button>
          <Button>+ Add New Product</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-2xl font-bold">$4,235.89</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-2xl font-bold">65</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">18 need to be shipped</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-orange-500" />
              <span className="text-2xl font-bold">3.2%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+0.5% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Page Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-violet-500" />
              <span className="text-2xl font-bold">1,452</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+32% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md mb-4">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-lg mb-4">Your Products (12)</h3>
            
            <div className="space-y-4">
              {/* This would be a product list with management options */}
              <p className="text-muted-foreground text-sm">You have 12 products listed in your store. 3 products are low in stock.</p>
              <Button variant="outline">Manage Products</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="orders">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-lg mb-4">Recent Orders</h3>
            <p className="text-muted-foreground text-sm">You have 18 orders pending shipment and 3 orders with customer questions.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-lg mb-4">Sales Analytics</h3>
            <div className="flex space-x-2 mb-4">
              <Button size="sm" variant="outline" className="text-xs">Last 7 Days</Button>
              <Button size="sm" variant="outline" className="text-xs">Last 30 Days</Button>
              <Button size="sm" variant="outline" className="text-xs">This Year</Button>
            </div>
            <div className="aspect-[4/1] bg-slate-100 border rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-2 text-slate-400">
                <LineChart className="w-5 h-5" />
                <span>Sales chart will appear here</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-lg mb-4">Store Settings</h3>
            <p className="text-muted-foreground text-sm">Manage your store settings, payment methods, and shipping options.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 