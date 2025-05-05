import React, { useState } from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Cube,
  View,
  Phone,
  Info,
  CameraIcon,
  CheckCircle,
  XCircle,
  RotateCw,
  ZoomIn,
  ArrowLeft,
  Share2,
  Download,
  Smartphone
} from "lucide-react";

type ARProductViewProps = {
  productId: string;
  productName: string;
  productImage: string;
  modelUrl?: string;
  className?: string;
  hasARSupport?: boolean;
};

export function ARProductView({
  productId,
  productName,
  productImage,
  modelUrl,
  className,
  hasARSupport = true
}: ARProductViewProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "ar" | "instructions">("preview");
  const [isARActive, setIsARActive] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Simulate model loading
  const handleLoadModel = () => {
    setIsModelLoaded(false);
    setTimeout(() => {
      setIsModelLoaded(true);
    }, 1500);
  };

  // Simulate AR view
  const launchAR = () => {
    setIsARActive(true);
  };

  // Rotate the 3D model
  const rotateModel = () => {
    setRotation((prev) => (prev + 45) % 360);
  };

  // Adjust zoom level
  const adjustZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  return (
    <div className={className}>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1.5 rounded-full"
            onClick={() => {
              setActiveTab("preview");
              handleLoadModel();
            }}
          >
            <Cube className="h-4 w-4" />
            <span>View in 3D & AR</span>
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[800px] p-0">
          <div className="flex flex-col h-[80vh] sm:h-[600px]">
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8" 
                  onClick={() => {
                    if (isARActive) {
                      setIsARActive(false);
                      setActiveTab("ar");
                    } else if (activeTab !== "preview") {
                      setActiveTab("preview");
                    } else {
                      setIsDialogOpen(false);
                    }
                  }}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <DialogTitle className="text-base font-medium">
                  {isARActive ? "AR View" : productName}
                </DialogTitle>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
                {!isARActive && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
            
            {/* Content */}
            {isARActive ? (
              <div className="flex-1 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Simulated camera view with product overlay */}
                  <div className="w-full h-full relative">
                    <Image 
                      src="/images/ar-room-background.jpg" 
                      alt="Camera view" 
                      fill 
                      className="object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#f1f5f9';
                      }}
                    />
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(-50%, -50%) scale(${zoomLevel}) rotate(${rotation}deg)`,
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <Image 
                        src={productImage} 
                        alt={productName} 
                        width={300} 
                        height={300} 
                        className="object-contain drop-shadow-xl"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/300x300/f1f5f9/64748b?text=Product";
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* AR Controls */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
                      onClick={rotateModel}
                    >
                      <RotateCw className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="h-16 w-16 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
                      onClick={() => setIsARActive(false)}
                    >
                      <XCircle className="h-8 w-8" />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
                      onClick={adjustZoom}
                    >
                      <ZoomIn className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Instructions overlay */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                    Move your phone to place the product
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <Tabs 
                  value={activeTab} 
                  onValueChange={(value) => setActiveTab(value as "preview" | "ar" | "instructions")}
                  className="flex-1 flex flex-col"
                >
                  <TabsList className="w-full justify-stretch rounded-none border-b bg-transparent h-auto py-0">
                    <TabsTrigger 
                      value="preview" 
                      className="flex-1 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                    >
                      <View className="h-4 w-4 mr-2" />
                      3D Preview
                    </TabsTrigger>
                    <TabsTrigger 
                      value="ar"
                      className="flex-1 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                      disabled={!hasARSupport}
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      View in AR
                    </TabsTrigger>
                    <TabsTrigger 
                      value="instructions"
                      className="flex-1 py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                    >
                      <Info className="h-4 w-4 mr-2" />
                      Help
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="preview" className="flex-1 mt-0 p-0 relative">
                    <div className="relative w-full h-full bg-slate-50 flex items-center justify-center">
                      {!isModelLoaded ? (
                        <div className="text-center">
                          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                          <p className="text-sm text-slate-600">Loading 3D model...</p>
                        </div>
                      ) : (
                        <>
                          <div 
                            className="relative"
                            style={{
                              transform: `rotate(${rotation}deg) scale(${zoomLevel})`,
                              transition: 'transform 0.3s ease'
                            }}
                          >
                            <Image 
                              src={productImage} 
                              alt={productName} 
                              width={400} 
                              height={400} 
                              className="object-contain drop-shadow-xl"
                              onError={(e) => {
                                // Fallback if image doesn't exist
                                const target = e.target as HTMLImageElement;
                                target.src = "https://placehold.co/400x400/f1f5f9/64748b?text=3D+Model";
                              }}
                            />
                          </div>
                          
                          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
                            <Button 
                              variant="secondary" 
                              size="icon" 
                              className="h-10 w-10 rounded-full"
                              onClick={rotateModel}
                            >
                              <RotateCw className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="secondary" 
                              size="icon" 
                              className="h-10 w-10 rounded-full"
                              onClick={adjustZoom}
                            >
                              <ZoomIn className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ar" className="flex-1 mt-0 p-0">
                    <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6">
                      <div className="max-w-md w-full space-y-6 text-center">
                        <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                          <Phone className="h-8 w-8 text-slate-600" />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-xl font-medium">Experience this product in your space</h3>
                          <p className="text-sm text-slate-500">
                            Use your smartphone or tablet to view this product in augmented reality
                          </p>
                        </div>
                        
                        <div>
                          <Button 
                            size="lg" 
                            className="gap-2"
                            onClick={launchAR}
                          >
                            <CameraIcon className="h-4 w-4" />
                            Launch AR Experience
                          </Button>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <div className="text-xs text-slate-500 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                              <span>View product in your space at actual size</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                              <span>Move around and see all angles</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                              <span>Make sure it fits before you buy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="instructions" className="flex-1 mt-0 p-0">
                    <div className="w-full h-full overflow-auto">
                      <div className="p-6 max-w-lg mx-auto space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">How to use AR view</h3>
                          <p className="text-sm text-slate-500 mb-4">
                            Follow these steps to view this product in your space using augmented reality.
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                                1
                              </div>
                              <div>
                                <h4 className="font-medium">Tap "View in AR"</h4>
                                <p className="text-sm text-slate-500">
                                  Select the AR tab and tap the launch button
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                                2
                              </div>
                              <div>
                                <h4 className="font-medium">Scan your environment</h4>
                                <p className="text-sm text-slate-500">
                                  Move your device around to let it detect surfaces
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                                3
                              </div>
                              <div>
                                <h4 className="font-medium">Place and resize</h4>
                                <p className="text-sm text-slate-500">
                                  Tap to place the product and use pinch gestures to resize
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                                4
                              </div>
                              <div>
                                <h4 className="font-medium">Move around</h4>
                                <p className="text-sm text-slate-500">
                                  Walk around the object to see it from all angles
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-slate-50 rounded-lg">
                          <h4 className="font-medium text-sm mb-2 flex items-center gap-1.5">
                            <Info className="h-4 w-4 text-slate-500" />
                            Device compatibility
                          </h4>
                          <p className="text-xs text-slate-500 mb-2">
                            AR experiences require a compatible device with:
                          </p>
                          <ul className="text-xs text-slate-500 space-y-1">
                            <li className="flex items-start gap-1.5">
                              <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5" />
                              <span>iOS: iPhone/iPad with iOS 12 or later</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5" />
                              <span>Android: ARCore-supported device with Android 8.0 or later</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function ARProductViewDemo() {
  const product = {
    id: "prod-001",
    name: "Modern Lounge Chair",
    image: "/images/product-chair.png"
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium">AR Product View Demo</h2>
        <p className="text-sm text-slate-500">Experience products in augmented reality before you buy</p>
      </div>
      
      <div className="flex items-center justify-center border rounded-lg p-6 bg-slate-50">
        <div className="flex flex-col items-center">
          <div className="mb-6 relative">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={300} 
              height={300} 
              className="object-contain"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/300x300/f1f5f9/64748b?text=Product";
              }}
            />
            <Badge variant="secondary" className="absolute top-0 right-0 bg-slate-100">
              AR Available
            </Badge>
          </div>
          
          <h3 className="font-medium mb-1">{product.name}</h3>
          <p className="text-sm text-slate-500 mb-4">See how this would look in your space</p>
          
          <ARProductView 
            productId={product.id}
            productName={product.name}
            productImage={product.image}
          />
        </div>
      </div>
    </div>
  );
} 