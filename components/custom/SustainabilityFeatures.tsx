import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Leaf, Droplet, Recycle, Shield, Truck, Info } from "lucide-react";
import Link from "next/link";

export function SustainabilityFeatures() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-green-50 to-slate-50">
      <div className="w-full mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200" variant="secondary">
            <Leaf className="h-3.5 w-3.5 mr-1" />
            Eco-Conscious Shopping
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Shop Sustainably With DIST</h2>
          <p className="text-slate-600">
            Make informed choices with real-time sustainability metrics, carbon footprint tracking, and 
            verified eco-friendly products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-white/70 backdrop-blur border-green-100">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Impact Dashboard</h3>
              <p className="text-sm text-slate-600 mb-4">
                Track your environmental impact with every purchase. See your carbon footprint, water savings, and plastic reduction.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-green-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Your Impact This Year</span>
                  <Info className="h-4 w-4 text-slate-400" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-600">Carbon Offset</span>
                      <span className="font-medium">42.5 kg CO₂</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-600">Water Saved</span>
                      <span className="font-medium">1,240 L</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-600">Plastic Reduced</span>
                      <span className="font-medium">3.7 kg</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pb-6">
              <Button variant="outline" size="sm" className="w-full">View Full Impact Report</Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-white/70 backdrop-blur border-green-100">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ethical Sourcing</h3>
              <p className="text-sm text-slate-600 mb-4">
                All products are verified for ethical labor practices, sustainable materials, and responsible manufacturing.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white border border-transparent hover:border-green-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                    <Droplet className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Water Conservation</h4>
                    <p className="text-xs text-slate-500">Products that use water-saving production techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white border border-transparent hover:border-green-100">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex-shrink-0 flex items-center justify-center">
                    <Recycle className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Circular Economy</h4>
                    <p className="text-xs text-slate-500">Recyclable, upcycled, and biodegradable materials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white border border-transparent hover:border-green-100">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                    <Truck className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Low-Carbon Shipping</h4>
                    <p className="text-xs text-slate-500">Optimized delivery routes and carbon-neutral shipping</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pb-6">
              <Button variant="outline" size="sm" className="w-full">Learn More About Our Standards</Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-white/70 backdrop-blur border-green-100">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Collections</h3>
              <p className="text-sm text-slate-600 mb-4">
                Discover products carefully selected for their environmental and social impact.
              </p>
              
              <div className="space-y-3">
                {[
                  { name: "Organic Essentials", count: 42, color: "bg-green-600" },
                  { name: "Recycled Materials", count: 38, color: "bg-blue-600" },
                  { name: "Ethical Fashion", count: 27, color: "bg-purple-600" },
                  { name: "Zero Waste", count: 19, color: "bg-amber-600" },
                ].map((collection, i) => (
                  <Link 
                    href={`/collections/${collection.name.toLowerCase().replace(' ', '-')}`} 
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white border border-transparent hover:border-green-100 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${collection.color}`}></div>
                      <span className="text-sm font-medium group-hover:text-green-800">{collection.name}</span>
                    </div>
                    <span className="text-xs text-slate-500">{collection.count} products</span>
                  </Link>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pb-6">
              <Button variant="outline" size="sm" className="w-full">Browse All Sustainable Collections</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="bg-white p-6 rounded-xl border-green-100 border max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Leaf className="h-8 w-8 text-green-700" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Carbon Offset on Every Purchase</h3>
            <p className="text-sm text-slate-600 mb-4">
              We automatically offset the carbon footprint of every order at no extra cost to you. 
              Together we've offset over 150,000 kg of CO₂ this year.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Leaf className="h-4 w-4 mr-2" /> Shop Sustainably
              </Button>
              <Button size="sm" variant="outline">Learn About Our Climate Initiatives</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 