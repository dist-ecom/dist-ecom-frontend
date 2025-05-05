import { useState } from "react";
import { 
  Sparkles, 
  Brain, 
  History, 
  Heart, 
  Shirt, 
  Smartphone, 
  ShoppingBag, 
  RefreshCw, 
  ThumbsUp, 
  ThumbsDown, 
  Info,
  User
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Separator } from "../../components/ui/separator";
import { Progress } from "../../components/ui/progress";

export function AiProductRecommendations() {
  const [preferences, setPreferences] = useState({
    style: true,
    price: true,
    brand: false,
    sustainable: true
  });
  
  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [dislikedProducts, setDislikedProducts] = useState<string[]>([]);
  
  const handleLike = (productId: string) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter(id => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
      setDislikedProducts(dislikedProducts.filter(id => id !== productId));
    }
  };
  
  const handleDislike = (productId: string) => {
    if (dislikedProducts.includes(productId)) {
      setDislikedProducts(dislikedProducts.filter(id => id !== productId));
    } else {
      setDislikedProducts([...dislikedProducts, productId]);
      setLikedProducts(likedProducts.filter(id => id !== productId));
    }
  };
  
  // Sample products data
  const recommendedProducts = [
    {
      id: "p1",
      name: "Premium Cotton T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=80",
      price: "$29.99",
      match: 97,
      category: "Clothing",
      reasons: ["Based on your style preferences", "Similar to items you've viewed"]
    },
    {
      id: "p2",
      name: "Wireless Earbuds Pro",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=80",
      price: "$89.99",
      match: 93,
      category: "Electronics",
      reasons: ["Complementary to your recent purchase", "Trending in your area"]
    },
    {
      id: "p3",
      name: "Minimalist Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
      price: "$129.99",
      match: 88,
      category: "Accessories",
      reasons: ["Matches your style profile", "Popular with similar customers"]
    },
    {
      id: "p4",
      name: "Sustainable Canvas Tote",
      image: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?w=500&auto=format&fit=crop&q=80",
      price: "$38.99",
      match: 85,
      category: "Bags",
      reasons: ["Aligns with your sustainability preferences", "Trending item"]
    }
  ];
  
  const recentlyViewedProducts = [
    {
      id: "rv1",
      name: "Leather Laptop Sleeve",
      image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&auto=format&fit=crop&q=80",
      price: "$45.99",
      timeViewed: "2 hours ago"
    },
    {
      id: "rv2",
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format&fit=crop&q=80",
      price: "$79.99",
      timeViewed: "Yesterday"
    }
  ];

  return (
    <div className="w-full">
      <div className="pb-6">
        <h2 className="text-3xl font-bold flex items-center">
          AI-Powered Recommendations
          <Sparkles className="h-6 w-6 ml-2 text-amber-500" />
        </h2>
        <p className="text-slate-600 mt-2">Personalized product suggestions based on your preferences and browsing history.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-xl">
                <Brain className="h-5 w-5 mr-2 text-purple-600" />
                Personalized For You
              </CardTitle>
              <CardDescription>
                Products selected by our AI based on your preferences and behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="recommended" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="history">Recently Viewed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recommended" className="mt-0 space-y-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-1/3 aspect-square sm:aspect-[4/3]">
                          <Image 
                            src={product.image} 
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white">
                              {product.match}% Match
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-sm text-slate-500">{product.category}</p>
                              </div>
                              <span className="font-bold text-lg">{product.price}</span>
                            </div>
                            
                            <div className="mt-2">
                              <div className="text-sm font-medium text-slate-600 mb-1">Why we recommend this:</div>
                              <ul className="space-y-1">
                                {product.reasons.map((reason, index) => (
                                  <li key={index} className="text-sm flex items-center">
                                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                                    {reason}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                            <div className="space-x-2">
                              <Button 
                                size="sm" 
                                variant={likedProducts.includes(product.id) ? "default" : "outline"}
                                className={likedProducts.includes(product.id) ? "bg-green-600 hover:bg-green-700" : ""}
                                onClick={() => handleLike(product.id)}
                              >
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                Like
                              </Button>
                              <Button 
                                size="sm" 
                                variant={dislikedProducts.includes(product.id) ? "default" : "outline"}
                                className={dislikedProducts.includes(product.id) ? "bg-red-600 hover:bg-red-700" : ""}
                                onClick={() => handleDislike(product.id)}
                              >
                                <ThumbsDown className="h-4 w-4 mr-1" />
                                Less like this
                              </Button>
                            </div>
                            <Button>Add to Cart</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-center pt-4">
                    <Button variant="outline" className="flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh Recommendations
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recentlyViewedProducts.map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="aspect-[3/2] relative">
                          <Image 
                            src={product.image} 
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{product.name}</h3>
                              <p className="text-sm text-slate-500">{product.price}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">{product.timeViewed}</Badge>
                          </div>
                          <Button className="w-full mt-3">View Again</Button>
                        </CardContent>
                      </Card>
                    ))}
                    
                    <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                      <History className="h-8 w-8 text-slate-400 mb-2" />
                      <h3 className="font-medium text-slate-800">View More History</h3>
                      <p className="text-sm text-slate-500 text-center mt-1">
                        See all your recently viewed products
                      </p>
                      <Button variant="outline" className="mt-4">View All History</Button>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <ShoppingBag className="h-5 w-5 mr-2 text-purple-600" />
                Complete Your Purchase
              </CardTitle>
              <CardDescription>
                Items that complement products in your cart
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="rounded-lg border overflow-hidden">
                    <div className="aspect-square relative">
                      <Image 
                        src={`https://picsum.photos/id/${10 + i}/500/500`} 
                        alt={`Complementary product ${i+1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sm truncate">Complementary Item {i+1}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm font-bold">${(24.99 + i * 10).toFixed(2)}</span>
                        <Badge className="text-xs">Pairs Well</Badge>
                      </div>
                      <Button size="sm" className="w-full mt-2">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-purple-600" />
                Your Preference Profile
              </CardTitle>
              <CardDescription>
                How we tailor recommendations for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">AI Personalization Level</span>
                  <Badge>Advanced</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Your Preferences</h4>
                <div className="space-y-3">
                  {Object.entries(preferences).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div className="flex items-center">
                        {key === "style" && <Shirt className="h-4 w-4 mr-2 text-slate-600" />}
                        {key === "price" && <ShoppingBag className="h-4 w-4 mr-2 text-slate-600" />}
                        {key === "brand" && <Heart className="h-4 w-4 mr-2 text-slate-600" />}
                        {key === "sustainable" && <RefreshCw className="h-4 w-4 mr-2 text-slate-600" />}
                        <span className="text-sm capitalize">{key}</span>
                      </div>
                      <Button
                        variant={value ? "default" : "outline"}
                        size="sm"
                        className={`h-8 min-w-[80px] ${value ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                        onClick={() => togglePreference(key as keyof typeof preferences)}
                      >
                        {value ? "Active" : "Disabled"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="text-sm font-medium mb-2">Categories You Like</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Electronics</Badge>
                  <Badge variant="secondary">Clothing</Badge>
                  <Badge variant="secondary">Home Decor</Badge>
                  <Badge variant="secondary">Books</Badge>
                  <Badge variant="outline">+ Add Category</Badge>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">Recently Liked Brands</h4>
                  <Button variant="ghost" size="sm" className="h-8 px-2">Edit</Button>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Avatar key={i} className="h-8 w-8">
                      <AvatarImage src={`https://picsum.photos/id/${20 + i}/100/100`} />
                      <AvatarFallback>B{i+1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Update Preferences
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>How AI Recommendations Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-full p-1.5 text-purple-600 shrink-0 mt-0.5">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Personalized Learning</h4>
                    <p className="text-sm text-slate-600">Our AI learns from your browsing, purchases, and feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-full p-1.5 text-purple-600 shrink-0 mt-0.5">
                    <History className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Behavior Analysis</h4>
                    <p className="text-sm text-slate-600">We analyze patterns to predict items you'll love</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-full p-1.5 text-purple-600 shrink-0 mt-0.5">
                    <ThumbsUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Feedback Loop</h4>
                    <p className="text-sm text-slate-600">Your likes and dislikes improve future recommendations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-full p-1.5 text-purple-600 shrink-0 mt-0.5">
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Privacy First</h4>
                    <p className="text-sm text-slate-600">Your data is processed on-device for enhanced privacy</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More About AI
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
} 