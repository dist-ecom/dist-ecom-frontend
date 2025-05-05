import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import {
  CreditCard,
  Shield,
  ShoppingBag,
  Truck,
  Zap,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Progress } from "../../components/ui/progress";
import { cn } from "../../lib/utils";

type PaymentMethod = {
  id: string;
  type: "card" | "paypal" | "applepay" | "googlepay";
  name: string;
  lastFour?: string;
  expiryDate?: string;
  isDefault?: boolean;
};

type ShippingAddress = {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
};

export type OneClickPurchaseProps = {
  productId: string;
  productName: string;
  productPrice: number;
  productImage?: string;
  variant?: "button" | "text" | "icon";
  size?: "sm" | "md" | "lg";
  savedPaymentMethods?: PaymentMethod[];
  savedAddresses?: ShippingAddress[];
  className?: string;
  onPurchaseComplete?: (orderId: string) => void;
};

export function OneClickPurchase({
  productId,
  productName,
  productPrice,
  productImage,
  variant = "button",
  size = "md",
  savedPaymentMethods = [],
  savedAddresses = [],
  className,
  onPurchaseComplete,
}: OneClickPurchaseProps) {
  // State for the purchase flow
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<"confirm" | "processing" | "complete" | "error">(
    "confirm"
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(
    savedPaymentMethods.find((p) => p.isDefault)?.id || 
    (savedPaymentMethods.length > 0 ? savedPaymentMethods[0].id : null)
  );
  const [selectedAddress, setSelectedAddress] = useState<string | null>(
    savedAddresses.find((a) => a.isDefault)?.id || 
    (savedAddresses.length > 0 ? savedAddresses[0].id : null)
  );
  const [rememberChoice, setRememberChoice] = useState(true);
  const [processingProgress, setProcessingProgress] = useState(0);
  
  // Demo payment methods if none provided
  const paymentMethods = savedPaymentMethods.length > 0 
    ? savedPaymentMethods 
    : [
        {
          id: "card-1",
          type: "card" as const,
          name: "Visa ending in 4242",
          lastFour: "4242",
          expiryDate: "12/25",
          isDefault: true,
        },
        {
          id: "paypal-1",
          type: "paypal" as const,
          name: "PayPal - user@example.com",
          isDefault: false,
        },
      ];
  
  // Demo addresses if none provided
  const addresses = savedAddresses.length > 0 
    ? savedAddresses 
    : [
        {
          id: "addr-1",
          name: "Home",
          line1: "123 Main St",
          city: "San Francisco",
          state: "CA",
          postalCode: "94103",
          country: "USA",
          isDefault: true,
        },
        {
          id: "addr-2",
          name: "Work",
          line1: "456 Market St",
          line2: "Suite 300",
          city: "San Francisco",
          state: "CA",
          postalCode: "94105",
          country: "USA",
          isDefault: false,
        },
      ];

  // Process the payment simulation
  const processPayment = () => {
    setCurrentStep("processing");
    setProcessingProgress(0);
    
    // Simulate the payment processing with progress updates
    const interval = setInterval(() => {
      setProcessingProgress((prev) => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(interval);
          // Simulate a 95% success rate
          const isSuccess = Math.random() < 0.95;
          setTimeout(() => {
            setCurrentStep(isSuccess ? "complete" : "error");
            if (isSuccess && onPurchaseComplete) {
              onPurchaseComplete(`order-${Date.now()}`);
            }
          }, 500);
        }
        return next;
      });
    }, 300);
  };
  
  // Reset the flow when closing
  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      // Small delay to avoid flickering during dialog animation
      setTimeout(() => {
        setCurrentStep("confirm");
        setProcessingProgress(0);
      }, 300);
    }
  };
  
  // Button label based on variant and size
  const getButtonLabel = () => {
    switch (variant) {
      case "button":
        return "Buy Now";
      case "text":
        return "One-Click Purchase";
      case "icon":
        return null;
    }
  };
  
  // Button sizes
  const buttonSizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-base",
  };
  
  return (
    <div className={className}>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogTrigger asChild>
          <Button 
            variant="default" 
            className={cn(
              "gap-1.5 font-medium",
              variant === "icon" && "w-10 px-0",
              buttonSizeClasses[size]
            )}
          >
            <Zap className={cn("h-4 w-4", variant === "icon" && "h-5 w-5")} />
            {getButtonLabel()}
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          {currentStep === "confirm" && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  One-Click Purchase
                </DialogTitle>
              </DialogHeader>
              
              <div className="py-4 space-y-6">
                {/* Product info */}
                <div className="flex items-center">
                  {productImage && (
                    <div className="h-16 w-16 rounded-md border bg-slate-50 p-1 mr-4">
                      <img 
                        src={productImage}
                        alt={productName}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/64x64/f1f5f9/64748b?text=Product";
                        }}
                      />
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium">{productName}</h3>
                    <p className="text-xl font-semibold text-primary">
                      ${productPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
                
                {/* Shipping address */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    <Truck className="h-4 w-4 inline mr-1.5" />
                    Ship to:
                  </Label>
                  
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        className={cn(
                          "relative cursor-pointer rounded-md border p-3 text-sm transition-colors",
                          selectedAddress === address.id
                            ? "border-primary bg-primary/5"
                            : "hover:bg-slate-50"
                        )}
                        onClick={() => setSelectedAddress(address.id)}
                      >
                        <p className="font-medium">{address.name}</p>
                        <p className="text-xs text-slate-500 line-clamp-1">{address.line1}</p>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {address.city}, {address.state} {address.postalCode}
                        </p>
                        
                        {selectedAddress === address.id && (
                          <CheckCircle className="absolute top-2 right-2 h-4 w-4 text-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Payment methods */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    <CreditCard className="h-4 w-4 inline mr-1.5" />
                    Pay with:
                  </Label>
                  
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={cn(
                          "relative cursor-pointer rounded-md border p-3 text-sm transition-colors",
                          selectedPaymentMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "hover:bg-slate-50"
                        )}
                        onClick={() => setSelectedPaymentMethod(method.id)}
                      >
                        <p className="font-medium">
                          {method.type === "card" && (
                            <span className="inline-block w-8 mr-1">
                              <img
                                src="/images/visa-logo.svg"
                                alt="Visa"
                                className="h-4"
                                onError={(e) => {
                                  // Fallback if image doesn't exist
                                  const target = e.target as HTMLImageElement;
                                  target.src = "https://placehold.co/32x16/f1f5f9/64748b?text=Visa";
                                }}
                              />
                            </span>
                          )}
                          {method.type === "paypal" && (
                            <span className="inline-block w-8 mr-1">
                              <img
                                src="/images/paypal-logo.svg"
                                alt="PayPal"
                                className="h-4"
                                onError={(e) => {
                                  // Fallback if image doesn't exist
                                  const target = e.target as HTMLImageElement;
                                  target.src = "https://placehold.co/32x16/f1f5f9/64748b?text=PayPal";
                                }}
                              />
                            </span>
                          )}
                          {method.name}
                        </p>
                        {method.lastFour && (
                          <p className="text-xs text-slate-500">
                            ••••{method.lastFour}
                            {method.expiryDate && ` • ${method.expiryDate}`}
                          </p>
                        )}
                        
                        {selectedPaymentMethod === method.id && (
                          <CheckCircle className="absolute top-2 right-2 h-4 w-4 text-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Remember choice */}
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberChoice}
                    onCheckedChange={(checked) => 
                      setRememberChoice(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember my choices for faster checkout
                  </label>
                </div>
                
                {/* Trust badges */}
                <div className="flex items-center justify-around py-2 border-t text-xs text-slate-500">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex flex-col items-center gap-1">
                        <Shield className="h-4 w-4" />
                        <span>Secure</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>All transactions are secure and encrypted</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger className="flex flex-col items-center gap-1">
                        <Truck className="h-4 w-4" />
                        <span>Fast Delivery</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Get your order within 2-3 business days</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger className="flex flex-col items-center gap-1">
                        <ShoppingBag className="h-4 w-4" />
                        <span>Easy Returns</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>30-day money-back guarantee</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button 
                  type="button" 
                  onClick={processPayment}
                  disabled={!selectedPaymentMethod || !selectedAddress}
                  className="gap-1.5"
                >
                  <Zap className="h-4 w-4" />
                  Complete Purchase
                </Button>
              </DialogFooter>
            </>
          )}
          
          {currentStep === "processing" && (
            <div className="py-12 text-center space-y-6">
              <div className="flex flex-col items-center">
                <div className="animate-spin h-12 w-12 border-2 border-primary border-t-transparent rounded-full mb-4"></div>
                <h3 className="text-lg font-medium">Processing Your Order</h3>
                <p className="text-sm text-slate-500 mt-1">Please wait a moment...</p>
              </div>
              
              <div className="max-w-xs mx-auto space-y-2">
                <Progress value={processingProgress} className="h-2" />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Verifying payment</span>
                  <span>{processingProgress}%</span>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === "complete" && (
            <div className="py-12 text-center space-y-4">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-medium">Order Complete!</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Your order for {productName} has been placed
                </p>
              </div>
              
              <div className="max-w-xs mx-auto mt-6 pt-6 border-t text-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-500">Estimated delivery:</span>
                  <span className="font-medium">2-3 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Order details:</span>
                  <span className="font-medium text-primary underline cursor-pointer">
                    View details
                  </span>
                </div>
              </div>
              
              <Button 
                className="mt-6" 
                variant="default" 
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          )}
          
          {currentStep === "error" && (
            <div className="py-12 text-center space-y-4">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-medium">Something went wrong</h3>
                <p className="text-sm text-slate-500 mt-1">
                  We couldn't process your payment at this time
                </p>
              </div>
              
              <div className="max-w-xs mx-auto mt-6 pt-6 border-t text-sm">
                <p className="text-slate-500 mb-4">
                  Please try again or use a different payment method.
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => setCurrentStep("confirm")}
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function OneClickPurchaseDemo() {
  const product = {
    id: "prod-001",
    name: "Premium Wireless Headphones",
    price: 149.99,
    image: "/images/product-headphones.png"
  };
  
  const handlePurchaseComplete = (orderId: string) => {
    console.log(`Order complete: ${orderId}`);
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium">One-Click Purchase Demo</h2>
        <p className="text-sm text-slate-500">
          Streamlined checkout process for faster shopping
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-8 border rounded-lg p-6 bg-slate-50">
        <div className="flex-shrink-0 w-full sm:w-64 h-64 bg-white rounded-md border p-4 flex items-center justify-center">
          <img 
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/300x300/f1f5f9/64748b?text=Headphones";
            }}
          />
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">{product.name}</h1>
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="h-5 w-5 fill-amber-400" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-500">
                (142 reviews)
              </span>
            </div>
            
            <div className="space-y-1 text-sm text-slate-500">
              <p>• Premium sound quality with noise cancellation</p>
              <p>• 30+ hours of battery life</p>
              <p>• Comfortable over-ear design</p>
              <p>• Built-in microphone for calls</p>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="text-sm text-green-600 font-medium">
                Free shipping
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="flex-1 sm:flex-initial"
              >
                Add to Cart
              </Button>
              
              <OneClickPurchase 
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
                productImage={product.image}
                onPurchaseComplete={handlePurchaseComplete}
                className="flex-1 sm:flex-initial"
              />
            </div>
            
            <p className="text-xs text-slate-500 mt-3 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              In stock - ships within 24 hours
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 pt-4 border-t">
        <h3 className="text-sm font-medium">Button variants</h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <p className="text-xs text-slate-500 mb-2">Default</p>
            <OneClickPurchase 
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              variant="button"
            />
          </div>
          
          <div>
            <p className="text-xs text-slate-500 mb-2">Text variant</p>
            <OneClickPurchase 
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              variant="text"
            />
          </div>
          
          <div>
            <p className="text-xs text-slate-500 mb-2">Icon only</p>
            <OneClickPurchase 
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              variant="icon"
            />
          </div>
          
          <div>
            <p className="text-xs text-slate-500 mb-2">Small size</p>
            <OneClickPurchase 
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              size="sm"
            />
          </div>
          
          <div>
            <p className="text-xs text-slate-500 mb-2">Large size</p>
            <OneClickPurchase 
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 