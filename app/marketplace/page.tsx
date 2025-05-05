import { Navbar } from "../../components/custom/Navbar";
import { Footer } from "../../components/custom/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, Filter, Search, SlidersHorizontal } from "lucide-react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://placehold.co/300x400",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://placehold.co/300x400",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Leather Messenger Bag",
    price: 89.99,
    image: "https://placehold.co/300x400",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://placehold.co/300x400",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Minimalist Watch",
    price: 79.99,
    image: "https://placehold.co/300x400",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 99.99,
    image: "https://placehold.co/300x400",
    category: "Footwear",
  },
  {
    id: 7,
    name: "Hooded Sweatshirt",
    price: 49.99,
    image: "https://placehold.co/300x400",
    category: "Clothing",
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 39.99,
    image: "https://placehold.co/300x400",
    category: "Accessories",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filters</h3>
              <Button variant="ghost" size="sm" className="text-sm">
                Clear all
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Categories</h4>
                <div className="space-y-2">
                  {["Clothing", "Accessories", "Footwear", "Electronics"].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category}
                        className="mr-2 h-4 w-4"
                      />
                      <label htmlFor={category} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="px-2">
                  <Slider defaultValue={[0, 200]} max={200} step={10} />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>$0</span>
                    <span>$200+</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Rating</h4>
                <div className="space-y-2">
                  {["4 & above", "3 & above", "2 & above", "1 & above"].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        id={rating}
                        className="mr-2 h-4 w-4"
                      />
                      <label htmlFor={rating} className="text-sm">
                        {rating}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="text-sm">Sort by:</span>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                    <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                    <SelectItem value="bestSelling">Best Selling</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[250px] object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                    <CardTitle className="text-base font-medium">{product.name}</CardTitle>
                    <div className="mt-2 font-semibold">${product.price.toFixed(2)}</div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
