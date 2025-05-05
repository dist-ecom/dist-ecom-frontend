import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Cube, ScanFace, Smartphone, RotateCcw, ZoomIn, Move3d, ViewIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export function ARProductViewer() {
  const [rotateEnabled, setRotateEnabled] = useState(false);
  
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Cube className="h-5 w-5 text-violet-500" />
            <h2 className="text-3xl font-bold tracking-tight">Virtual Try-On & 3D View</h2>
          </div>
          <Badge variant="outline" className="flex items-center gap-1.5 bg-violet-50 text-violet-800 hover:bg-violet-100 border-violet-200">
            <Smartphone className="h-3.5 w-3.5" />
            Open in AR App
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-slate-100 flex items-center justify-center">
                  {/* This would be a 3D viewer in a real implementation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-slate-100/50"></div>
                  <div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Cube className="w-24 h-24 text-violet-300" strokeWidth={1} />
                  </div>
                  
                  {/* Overlay controls */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/10 backdrop-blur-md rounded-full p-1.5">
                    <button 
                      className={`p-2 rounded-full ${rotateEnabled ? 'bg-white text-violet-900' : 'text-white hover:bg-white/10'}`}
                      onClick={() => setRotateEnabled(!rotateEnabled)}
                    >
                      <RotateCcw className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full text-white hover:bg-white/10">
                      <ZoomIn className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full text-white hover:bg-white/10">
                      <Move3d className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full text-white hover:bg-white/10">
                      <ViewIcon className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Product info overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="bg-black/10 backdrop-blur-md text-white px-3 py-1.5 rounded-md text-sm">
                      Premium Leather Jacket
                    </div>
                    <Badge className="bg-violet-500 hover:bg-violet-600 text-white">
                      <span className="animate-pulse mr-1.5">●</span> Live 3D
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 gap-3">
              <Button className="bg-violet-600 hover:bg-violet-700">
                <ScanFace className="h-4 w-4 mr-2" />
                Try On Virtually
              </Button>
              <Button variant="outline">
                <Smartphone className="h-4 w-4 mr-2" />
                View in Your Space
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Virtual Try-On Features</h3>
                
                <Tabs defaultValue="try-on">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="try-on">Try On</TabsTrigger>
                    <TabsTrigger value="view-space">View in Space</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="try-on" className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <ScanFace className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Smart Size Recommendations</h4>
                        <p className="text-xs text-slate-500 mt-1">
                          Our AI analyzes your body measurements to suggest the perfect size for you.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <ViewIcon className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Real-Time Visualization</h4>
                        <p className="text-xs text-slate-500 mt-1">
                          See how the garment looks on you from multiple angles.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <Cube className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Material Simulation</h4>
                        <p className="text-xs text-slate-500 mt-1">
                          Accurately simulates how different materials drape and move.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="view-space" className="mt-4 space-y-4">
                    <div className="aspect-video bg-slate-100 rounded-lg mb-3 flex items-center justify-center">
                      <Smartphone className="h-12 w-12 text-slate-300" />
                    </div>
                    <p className="text-sm text-slate-600">
                      Use your camera to place a 3D model of the product in your space. See how it fits in your room before purchasing.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-500">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                        Accurate to-scale dimensions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                        Works on all modern smartphones
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                        Save and share views with friends
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3">Recently Viewed In 3D</h3>
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({length: 3}).map((_, i) => (
                    <div key={i} className="aspect-square bg-slate-100 rounded-md relative cursor-pointer hover:opacity-90 transition-opacity">
                      <div className="absolute bottom-1 right-1">
                        <Cube className="h-3 w-3 text-violet-500" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full text-xs">View All 3D Products</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 