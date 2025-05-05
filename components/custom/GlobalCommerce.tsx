import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Globe, Truck, CreditCard, Languages, DollarSign, MapPin, ShieldCheck, HelpCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../../components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" }
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" }
];

const regions = [
  { code: "na", name: "North America" },
  { code: "eu", name: "Europe" },
  { code: "as", name: "Asia" },
  { code: "sa", name: "South America" },
  { code: "oc", name: "Oceania" },
  { code: "af", name: "Africa" }
];

export function GlobalCommerce() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedRegion, setSelectedRegion] = useState("na");
  const [autoConvert, setAutoConvert] = useState(true);
  
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-sky-50 to-white">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-sky-500" />
            <h2 className="text-3xl font-bold tracking-tight">Global Shopping</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Shopping From:</span>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map(region => (
                  <SelectItem key={region.code} value={region.code}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Your Personalized Global Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-sky-500" />
                        <span className="font-medium">Currency</span>
                      </div>
                      <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select Currency" />
                        </SelectTrigger>
                        <SelectContent>
                          {currencies.map(currency => (
                            <SelectItem key={currency.code} value={currency.code}>
                              {currency.symbol} {currency.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Languages className="h-4 w-4 text-sky-500" />
                        <span className="font-medium">Language</span>
                      </div>
                      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map(language => (
                            <SelectItem key={language.code} value={language.code}>
                              {language.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-sky-500" />
                        <span className="font-medium">Auto-Convert Prices</span>
                      </div>
                      <Switch 
                        checked={autoConvert} 
                        onCheckedChange={setAutoConvert} 
                      />
                    </div>
                  </div>
                  
                  <div className="bg-sky-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <ShieldCheck className="h-5 w-5 text-sky-600 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-sky-900">Your Global Shopping Protection</h4>
                        <p className="text-xs text-sky-700 mt-1">
                          Shop with confidence worldwide with our buyer protection program.
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs text-sky-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        All purchases insured up to $2,500
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        No hidden currency conversion fees
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        Easy international returns
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        24/7 multilingual customer support
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">International Shipping</h3>
                  <MapPin className="h-5 w-5 text-sky-500" />
                </div>
                
                <Tabs defaultValue="shipping">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                    <TabsTrigger value="duties">Duties & Taxes</TabsTrigger>
                    <TabsTrigger value="returns">Returns</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="shipping" className="mt-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { speed: "Standard", days: "7-10 days", price: "$12.99" },
                          { speed: "Express", days: "3-5 days", price: "$24.99" },
                          { speed: "Priority", days: "1-2 days", price: "$39.99" }
                        ].map((option, i) => (
                          <div key={i} className="border border-slate-200 rounded-lg p-3 hover:border-sky-200 hover:bg-sky-50 cursor-pointer transition-colors">
                            <div className="font-medium text-sm">{option.speed}</div>
                            <div className="text-xs text-slate-500 mt-1">{option.days}</div>
                            <div className="text-sky-600 font-medium mt-2">{option.price}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg text-sm">
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-slate-400" />
                          <span>FREE shipping on orders over $75</span>
                        </div>
                        <Button variant="link" size="sm" className="text-sky-600">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="duties" className="mt-4">
                    <div className="space-y-4">
                      <div className="bg-amber-50 p-4 rounded-lg text-sm">
                        <div className="flex items-start gap-2">
                          <HelpCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-amber-800">
                              Based on your location (United States), you may be charged import duties and taxes when your order arrives.
                            </p>
                            <p className="text-amber-700 text-xs mt-2">
                              These charges are not included in the product price or shipping cost.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Estimated Import Costs</h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                          <div className="text-slate-600">Import Duty:</div>
                          <div>Approx. 2-5% of order value</div>
                          <div className="text-slate-600">VAT/GST:</div>
                          <div>Approx. 10-25% depending on product</div>
                          <div className="text-slate-600">Handling Fee:</div>
                          <div>$10-20 (charged by carrier)</div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        Calculate Exact Import Costs
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="returns" className="mt-4">
                    <div className="space-y-4">
                      <p className="text-sm text-slate-600">
                        We offer hassle-free international returns within 30 days of delivery. Return shipping is free for defective items.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="border border-slate-200 rounded-lg p-3">
                          <h4 className="font-medium text-sm">Return by Mail</h4>
                          <p className="text-xs text-slate-500 mt-1">
                            Print a prepaid label and drop off at any courier location.
                          </p>
                          <div className="text-sky-600 font-medium text-xs mt-2">
                            Return Fee: $9.99
                          </div>
                        </div>
                        
                        <div className="border border-slate-200 rounded-lg p-3">
                          <h4 className="font-medium text-sm">Return by Pickup</h4>
                          <p className="text-xs text-slate-500 mt-1">
                            Schedule a pickup from your address on a convenient date.
                          </p>
                          <div className="text-sky-600 font-medium text-xs mt-2">
                            Return Fee: $14.99
                          </div>
                        </div>
                      </div>
                      
                      <Button size="sm" className="w-full bg-sky-600 hover:bg-sky-700">
                        Start International Return
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Global Shopping Benefits</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Local Currency Payment</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Pay in your local currency with no hidden conversion fees.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <Truck className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Fast Global Shipping</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Optimized international logistics network for quick delivery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Global Buyer Protection</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Full purchase protection and easy cross-border returns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <Languages className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Localized Experience</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Shop in your language with region-specific recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Global VIP Program</h3>
                  <ShieldCheck className="h-5 w-5" />
                </div>
                
                <p className="text-sm opacity-90 mb-4">
                  Join our Global VIP program for premium international shopping benefits.
                </p>
                
                <ul className="space-y-2 text-sm opacity-80 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    Priority customs clearance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    Free express shipping worldwide
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    Dedicated global concierge
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    Exclusive international offers
                  </li>
                </ul>
                
                <Button className="w-full bg-white text-sky-600 hover:bg-sky-50">
                  Join Global VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 