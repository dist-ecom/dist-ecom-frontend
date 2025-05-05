import Link from "next/link";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "../ui/carousel";
import { ProductCard } from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Leather Jacket - Genuine Cowhide, Water Resistant",
    price: "$299.99",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 128,
    seller: {
      name: "LuxuryLeather",
      verified: true
    },
    freeShipping: true
  },
  {
    id: 2,
    name: "Designer Denim Jeans - Slim Fit, Stretch Fabric",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop",
    rating: 4.2,
    reviewCount: 75,
    seller: {
      name: "FashionFusion",
      verified: true
    },
    discount: "15%"
  },
  {
    id: 3,
    name: "Casual Cotton T-Shirt - Breathable Material",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 210,
    seller: {
      name: "EcoThreads",
      verified: true
    },
    discount: "10%"
  },
  {
    id: 4,
    name: "Athletic Sneakers - Lightweight & Supportive",
    price: "$159.99",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=500&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 167,
    seller: {
      name: "ActiveGear",
      verified: false
    },
    freeShipping: true
  },
  {
    id: 5,
    name: "Minimalist Watch - Japanese Movement",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 95,
    seller: {
      name: "TimeWorks",
      verified: true
    },
    discount: "20%",
    freeShipping: true
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-sm font-medium hover:underline">
            View all
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
} 