import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Sparkles, Zap, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AIPersonalization() {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-indigo-50 to-slate-50">
      <div className="w-full mx-auto space-y-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-500" />
          <h2 className="text-3xl font-bold tracking-tight">Your AI Shopping Assistant</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Personalized For You</h3>
                <p className="text-sm text-slate-500">Based on your style preferences and browsing history</p>
              </div>
              <Button size="sm" variant="ghost" className="ml-auto">
                <RefreshCw className="h-4 w-4 mr-1" /> Refresh
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {Array.from({length: 6}).map((_, i) => (
                <Card key={i} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden">
                      <div className="absolute inset-0 bg-slate-100 animate-pulse" />
                    </div>
                    <div className="p-3">
                      <div className="h-4 bg-slate-100 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <span>Style Profile</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-8 text-xs">Edit</Button>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Style</span>
                    <span className="font-medium">Minimalist, Casual</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Colors</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-black"></div>
                      <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                      <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Brands</span>
                    <span className="font-medium">EcoThreads, LuxuryLeather</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Price Range</span>
                    <span className="font-medium">$50 - $200</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Take Style Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Generate Outfit</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Let AI create a complete outfit based on your style and an occasion
                </p>
                <div className="space-y-3 mb-4">
                  <select className="w-full p-2 border rounded text-sm">
                    <option>Casual Day Out</option>
                    <option>Office / Work</option>
                    <option>Evening Event</option>
                    <option>Workout / Athletic</option>
                    <option>Beach Day</option>
                  </select>
                  <textarea 
                    className="w-full p-2 border rounded text-sm h-20" 
                    placeholder="Add more details (optional): e.g., 'Fall weather' or 'Going to a coffee shop'"
                  ></textarea>
                </div>
                <Button className="w-full flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Generate Outfit</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 