import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { 
  Users, MessageSquare, Heart, Share2, 
  TrendingUp, ShoppingBag, Video, UserPlus 
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

export function SocialShopping() {
  const [activeTab, setActiveTab] = useState("trending");
  
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12">
      <div className="w-full mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-pink-500" />
            <h2 className="text-3xl font-bold tracking-tight">Social Shopping</h2>
          </div>
          <Button size="sm" variant="outline" className="hidden md:flex">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Friends
          </Button>
        </div>
        
        <Tabs defaultValue="trending" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="trending" className="gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Trending</span>
              </TabsTrigger>
              <TabsTrigger value="friends" className="gap-1">
                <Users className="h-4 w-4" />
                <span>Friends' Picks</span>
              </TabsTrigger>
              <TabsTrigger value="live" className="gap-1">
                <Video className="h-4 w-4" />
                <span>Live Shopping</span>
                <Badge className="ml-1 bg-red-500 h-5 w-5 p-0 flex items-center justify-center text-[10px]">5</Badge>
              </TabsTrigger>
            </TabsList>
            
            <Button size="sm" variant="ghost" className="hidden sm:flex text-xs">
              See All
            </Button>
          </div>
          
          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({length: 4}).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video relative bg-slate-100">
                      {/* Product image would go here */}
                      <div className="absolute bottom-2 left-2 flex -space-x-2">
                        {Array.from({length: 3}).map((_, j) => (
                          <Avatar key={j} className="border-2 border-white w-6 h-6">
                            <AvatarFallback className="text-[8px]">U{j}</AvatarFallback>
                          </Avatar>
                        ))}
                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-white text-[8px] border-2 border-white">
                          +15
                        </div>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white text-black text-xs">
                          <TrendingUp className="h-3 w-3 mr-1 text-pink-500" />
                          Trending
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm mb-1">Premium Item #{i+1}</h3>
                      <p className="text-xs text-slate-500 mb-2">Trending in your network</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">$149.99</span>
                        <div className="flex gap-1">
                          <button className="p-1 rounded-full hover:bg-slate-100">
                            <Heart className="h-4 w-4 text-slate-400" />
                          </button>
                          <button className="p-1 rounded-full hover:bg-slate-100">
                            <MessageSquare className="h-4 w-4 text-slate-400" />
                          </button>
                          <button className="p-1 rounded-full hover:bg-slate-100">
                            <Share2 className="h-4 w-4 text-slate-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 pt-0">
                    <Button className="w-full text-xs h-8" size="sm">
                      <ShoppingBag className="h-3 w-3 mr-1" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="friends" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-sm">Jane Doe</h3>
                      <p className="text-xs text-slate-500">Updated their wishlist 1h ago</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({length: 3}).map((_, i) => (
                      <div key={i} className="aspect-square bg-slate-100 rounded-md relative">
                        {/* Product image */}
                        <div className="absolute bottom-1 right-1">
                          <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-sm">Alex Lee</h3>
                      <p className="text-xs text-slate-500">Purchased an item 2h ago</p>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-md aspect-video relative">
                    {/* Product image */}
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-green-500 text-white text-xs">
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        Purchased
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="live" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-slate-900 relative">
                    {/* Live video placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="h-12 w-12 text-white opacity-20" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white text-xs animate-pulse">
                        LIVE
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8 border-2 border-white">
                            <AvatarFallback>FC</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-xs font-medium text-white">Fashion Creator</h4>
                            <p className="text-[10px] text-slate-300">Summer Collection Preview</p>
                          </div>
                        </div>
                        <Badge className="bg-black/50 text-white backdrop-blur-sm">
                          <Users className="h-3 w-3 mr-1" />
                          1.2k watching
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-3 flex justify-between items-center">
                  <span className="text-sm font-medium">Trending Items</span>
                  <Button size="sm" variant="outline" className="h-8 text-xs">
                    Join Stream
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="grid grid-cols-2 gap-3">
                {Array.from({length: 4}).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-slate-100 relative">
                        {/* Product image */}
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-red-500 text-white text-xs">
                            Live
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-2">
                      <div className="w-full">
                        <h4 className="text-xs font-medium truncate">Featured Product #{i+1}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-bold">$89.99</span>
                          <Button size="sm" variant="ghost" className="h-6 text-[10px] p-0 px-2">
                            <ShoppingBag className="h-3 w-3 mr-1" />
                            Buy
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {activeTab === "trending" && (
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="sm">
              Load More Trending Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
} 