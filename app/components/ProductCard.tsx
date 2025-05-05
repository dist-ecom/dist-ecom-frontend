import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { StarIcon } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    rating?: number;
    reviewCount?: number;
    seller?: {
      name: string;
      verified?: boolean;
    };
    discount?: string;
    freeShipping?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border shadow-sm h-full flex flex-col">
      <CardContent className="p-0">
        <div className="aspect-square relative overflow-hidden group">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-red-500">{product.discount} OFF</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 space-y-2 flex-1">
        <h3 className="font-medium line-clamp-2">{product.name}</h3>
        
        {product.rating && (
          <div className="flex items-center text-sm space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i} 
                  className={`w-4 h-4 ${i < product.rating! ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                />
              ))}
            </div>
            {product.reviewCount && (
              <span className="text-gray-500">({product.reviewCount})</span>
            )}
          </div>
        )}
        
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-bold text-lg">{product.price}</span>
          {product.discount && (
            <span className="text-gray-500 line-through text-sm">
              ${(parseFloat(product.price.replace('$', '')) * 1.2).toFixed(2)}
            </span>
          )}
        </div>
        
        {product.seller && (
          <div className="text-xs text-gray-600 mt-1">
            Sold by: 
            <Link href={`/seller/${product.seller.name}`} className="ml-1 hover:underline">
              {product.seller.name}
            </Link>
            {product.seller.verified && (
              <Badge variant="outline" className="ml-1 py-0 px-1 text-[10px] border-green-500 text-green-700">
                Verified
              </Badge>
            )}
          </div>
        )}
        
        {product.freeShipping && (
          <p className="text-xs text-green-700 font-medium">Free Shipping</p>
        )}
        
        <div className="w-full mt-auto pt-3">
          <Button size="sm" className="w-full">Add to cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
} 