import { useState } from "react";
import { 
  Cube, 
  Smartphone, 
  Maximize, 
  VenetianMask, 
  ZoomIn, 
  RotateCcw, 
  Scan, 
  Info, 
  ChevronRight, 
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "../ui/tabs";
import { Slider } from "../ui/slider";

export function ArVrProductViewer() {
  const [zoomLevel, setZoomLevel] = useState(50);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeTab, setActiveTab] = useState("3d");

  const handleRotate = (direction: 'left' | 'right') => {
    const change = direction === 'left' ? -45 : 45;
    setRotationAngle((prev) => (prev + change) % 360);
  };

  return (
    <div className="w-full">
      <div className="pb-6">
        <h2 className="text-3xl font-bold">AR/VR Product Visualization</h2>
        <p className="text-slate-600 mt-2">Experience products in immersive 3D and augmented reality before you buy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <Cube className="h-5 w-5 mr-2 text-blue-600" />
                3D Product Viewer
              </CardTitle>
              <CardDescription>Explore products from every angle</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="3d">3D View</TabsTrigger>
                  <TabsTrigger value="ar">AR View</TabsTrigger>
                  <TabsTrigger value="vr">VR Experience</TabsTrigger>
                </TabsList>
                
                <TabsContent value="3d" className="mt-0">
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
                      <div 
                        className="relative w-1/2 h-1/2 transition-all duration-500"
                        style={{ transform: `rotate(${rotationAngle}deg) scale(${zoomLevel / 50})` }}
                      >
                        <Image 
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" 
                          alt="Product 3D view"
                          width={400}
                          height={400}
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="absolute top-2 right-2 p-1 bg-white/80 backdrop-blur-sm rounded-lg flex items-center space-x-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => handleRotate('left')}>
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => handleRotate('right')}>
                          <RotateCcw className="h-4 w-4 transform rotate-180" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="absolute bottom-2 left-2 right-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <ZoomIn className="h-4 w-4 text-slate-600" />
                            <span className="text-xs font-medium">Zoom</span>
                          </div>
                          <Slider
                            value={[zoomLevel]}
                            min={25}
                            max={150}
                            step={5}
                            onValueChange={(newValue) => setZoomLevel(newValue[0])}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="aspect-square bg-slate-100 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-sm text-slate-400">View {i+1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900">3D Viewing Tips</h4>
                          <p className="text-sm text-blue-800 mt-1">
                            Click and drag to rotate the product. Use the zoom slider or pinch to zoom in and out. 
                            Click the full-screen button for a more immersive experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="ar" className="mt-0">
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 aspect-video flex flex-col items-center justify-center">
                      <Smartphone className="h-16 w-16 text-slate-400 mb-4" />
                      <h3 className="text-xl font-bold text-slate-800">Try in your space</h3>
                      <p className="text-slate-600 text-center max-w-xs mt-2">
                        Scan the QR code with your phone to view this product in your own space using AR
                      </p>
                      
                      <div className="mt-6 bg-white p-3 rounded-lg">
                        <div className="w-32 h-32 bg-slate-100 flex items-center justify-center">
                          <Scan className="h-12 w-12 text-slate-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Device Compatibility</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <Badge className="bg-green-100 text-green-800">Supported</Badge>
                              <span>iPhone X or newer (iOS 12+)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Badge className="bg-green-100 text-green-800">Supported</Badge>
                              <span>Android 8.0+ with ARCore</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Badge className="bg-slate-100 text-slate-800">Limited</Badge>
                              <span>Older devices (static 3D only)</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">How it Works</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ol className="space-y-2 text-sm list-decimal pl-4">
                            <li>Scan the QR code with your device</li>
                            <li>Point your camera at a flat surface</li>
                            <li>Tap to place the product in your space</li>
                            <li>Walk around to view from all angles</li>
                          </ol>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="vr" className="mt-0">
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 aspect-video flex flex-col items-center justify-center text-white">
                      <VenetianMask className="h-16 w-16 mb-4" />
                      <h3 className="text-xl font-bold">Immersive VR Experience</h3>
                      <p className="text-blue-100 text-center max-w-xs mt-2">
                        Explore our products in a fully immersive virtual reality environment
                      </p>
                      
                      <Button className="mt-6">
                        Launch VR Experience
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium text-center">Meta Quest</h4>
                          <div className="aspect-square bg-slate-100 rounded-lg my-3 flex items-center justify-center">
                            <span className="text-sm text-slate-400">VR Headset</span>
                          </div>
                          <p className="text-xs text-center text-slate-600">Compatible with Meta Quest 2 and newer</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium text-center">Steam VR</h4>
                          <div className="aspect-square bg-slate-100 rounded-lg my-3 flex items-center justify-center">
                            <span className="text-sm text-slate-400">VR Headset</span>
                          </div>
                          <p className="text-xs text-center text-slate-600">Works with HTC Vive, Valve Index</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium text-center">PlayStation VR</h4>
                          <div className="aspect-square bg-slate-100 rounded-lg my-3 flex items-center justify-center">
                            <span className="text-sm text-slate-400">VR Headset</span>
                          </div>
                          <p className="text-xs text-center text-slate-600">Compatible with PS VR and PS VR2</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Product Specifications</CardTitle>
              <CardDescription>Detailed information about the product</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <h4 className="font-medium text-sm text-slate-600 mb-2">Dimensions</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center text-sm">
                      <span>Width</span>
                      <span className="font-medium">42mm</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span>Height</span>
                      <span className="font-medium">10mm</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span>Depth</span>
                      <span className="font-medium">42mm</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span>Weight</span>
                      <span className="font-medium">35g</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-slate-600 mb-2">Materials</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center text-sm">
                      <span>Case</span>
                      <span className="font-medium">Stainless Steel</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span>Band</span>
                      <span className="font-medium">Italian Leather</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span>Glass</span>
                      <span className="font-medium">Sapphire Crystal</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span>Water Resistance</span>
                      <span className="font-medium">5 ATM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Premium Minimalist Watch</CardTitle>
              <CardDescription>Japanese Movement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">$249.99</div>
              
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 1L15.09 7.26L22 8.27L17 13.14L18.18 20.02L12 16.77L5.82 20.02L7 13.14L2 8.27L8.91 7.26L12 1Z" />
                    </svg>
                  ))}
                </div>
                <span>4.9 (128 reviews)</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                <span className="text-slate-600">Ships in 1-2 business days</span>
              </div>
              
              <div className="pt-4">
                <Button className="w-full">Add to Cart</Button>
                <Button variant="outline" className="w-full mt-2">
                  Try in AR
                  <Smartphone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Benefits of 3D & AR Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 text-blue-600 shrink-0 mt-0.5">
                    <Cube className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">See Every Detail</h4>
                    <p className="text-sm text-slate-600">Examine products from all angles with 3D visualization</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 text-blue-600 shrink-0 mt-0.5">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Try Before You Buy</h4>
                    <p className="text-sm text-slate-600">See how products look in your space with AR</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 text-blue-600 shrink-0 mt-0.5">
                    <VenetianMask className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Immersive Shopping</h4>
                    <p className="text-sm text-slate-600">Experience products in VR for a realistic feel</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 text-blue-600 shrink-0 mt-0.5">
                    <Maximize className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Accurate Sizing</h4>
                    <p className="text-sm text-slate-600">Understand true dimensions and scale with AR</p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
} 