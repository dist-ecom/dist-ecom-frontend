import { useState } from "react";
import { 
  Shield, 
  CheckCircle, 
  Info, 
  FileText, 
  Clock, 
  ChevronRight, 
  MapPin,
  ArrowRight,
  ExternalLink
} from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";

export function BlockchainAuthenticity() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full">
      <div className="pb-6">
        <h2 className="text-3xl font-bold">Blockchain Authentication</h2>
        <p className="text-slate-600 mt-2">Verify the authenticity and origin of your products with our secure blockchain verification system.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <Shield className="h-5 w-5 mr-2 text-green-600" />
                Product Authentication
              </CardTitle>
              <CardDescription>Verify the authenticity of your products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <div className="aspect-video bg-slate-100 flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop" 
                      alt="Product authentication demonstration"
                      width={800}
                      height={450}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-600">Verified</Badge>
                      <span className="text-sm font-medium">Premium Minimalist Watch - Japanese Movement</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-3">How to authenticate your product</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="text-sm">Scan the QR code on your product's certificate or packaging</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="text-sm">Enter the unique product code in the authentication field</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="text-sm">View the blockchain verification results and product journey</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="flex items-center gap-3">
                  <div className="grow">
                    <input 
                      type="text" 
                      placeholder="Enter product authentication code" 
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <Button>
                    Verify
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Product Journey</CardTitle>
              <CardDescription>Trace your product from creation to delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="certificates">Certificates</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-0">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-slate-600">Origin</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-slate-500" />
                            <span className="font-medium">Kyoto, Japan</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-slate-600">Materials</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center gap-2">
                            <Info className="h-4 w-4 text-slate-500" />
                            <span className="font-medium">Ethical Sourcing</span>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-slate-600">Carbon Footprint</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-600">Low Impact</Badge>
                            <span className="text-sm">6.2kg CO₂e</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Blockchain Verification</h3>
                      <p className="text-sm text-slate-600 mb-3">
                        This product's authenticity is verified on the Ethereum blockchain, providing an immutable record of ownership and provenance.
                      </p>
                      <div className="bg-slate-50 p-3 rounded font-mono text-xs overflow-x-auto">
                        TX: 0x7c5ea36c703a1119d415b1f73a3f834d42e28398af9cd7e55b595e5f08b421dc
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="timeline" className="mt-0">
                  <div className="space-y-4">
                    <div className="relative border-l-2 border-slate-200 pl-6 pb-2 space-y-6">
                      <div className="relative">
                        <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-green-600"></div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800">Manufacturing</Badge>
                            <span className="text-sm text-slate-500">March 15, 2023</span>
                          </div>
                          <h4 className="font-medium mt-1">Product Created</h4>
                          <p className="text-sm text-slate-600 mt-1">Handcrafted in Kyoto workshop using traditional techniques</p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-green-600"></div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-blue-100 text-blue-800">Quality Control</Badge>
                            <span className="text-sm text-slate-500">March 18, 2023</span>
                          </div>
                          <h4 className="font-medium mt-1">Testing & Certification</h4>
                          <p className="text-sm text-slate-600 mt-1">Passed 27-point quality inspection and precision timing test</p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-green-600"></div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-purple-100 text-purple-800">Distribution</Badge>
                            <span className="text-sm text-slate-500">March 25, 2023</span>
                          </div>
                          <h4 className="font-medium mt-1">Shipped to Retailer</h4>
                          <p className="text-sm text-slate-600 mt-1">Carbon-offset shipping to authorized retailer network</p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-green-600"></div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-amber-100 text-amber-800">Purchase</Badge>
                            <span className="text-sm text-slate-500">April 12, 2023</span>
                          </div>
                          <h4 className="font-medium mt-1">Sold to Customer</h4>
                          <p className="text-sm text-slate-600 mt-1">Ownership transferred and registered on blockchain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="certificates" className="mt-0">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] bg-slate-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <FileText className="h-12 w-12 text-slate-400" />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-3 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-sm">Authenticity Certificate</h4>
                            <p className="text-sm text-slate-500">Verified on Blockchain</p>
                          </div>
                          <Button size="sm" variant="outline">
                            View
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        </CardFooter>
                      </Card>
                      
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] bg-slate-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <FileText className="h-12 w-12 text-slate-400" />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-3 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-sm">Materials Certificate</h4>
                            <p className="text-sm text-slate-500">Ethical Sourcing Verification</p>
                          </div>
                          <Button size="sm" variant="outline">
                            View
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Benefits of Blockchain Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Verify Authenticity</h4>
                    <p className="text-sm text-slate-600">Ensure your products are genuine and not counterfeit</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Track Provenance</h4>
                    <p className="text-sm text-slate-600">Follow your product's journey from creation to delivery</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Verify Ethical Standards</h4>
                    <p className="text-sm text-slate-600">Confirm materials are ethically sourced and produced</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Secure Ownership</h4>
                    <p className="text-sm text-slate-600">Digital proof of ownership for valuable items</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Environmental Impact</h4>
                    <p className="text-sm text-slate-600">Monitor the carbon footprint of your purchases</p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Verified Brands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({length: 6}).map((_, i) => (
                  <div key={i} className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="font-medium text-slate-500">Brand {i+1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Partners
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
} 