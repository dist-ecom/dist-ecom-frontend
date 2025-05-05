"use client";

import { Navbar } from "@/components/custom/Navbar";
import { Footer } from "@/components/custom/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeaturedProducts } from "@/components/custom/FeaturedProducts";
import { Banknote, Truck, Shield, Clock, Tag } from "lucide-react";

// Category data with images
const categories = [
  {
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=500&auto=format&fit=crop",
    description: "Explore our trendy and comfortable clothing collection"
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=500&auto=format&fit=crop",
    description: "Discover cutting-edge tech and gadgets"
  },
  {
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=500&auto=format&fit=crop",
    description: "Transform your living space with our home essentials"
  },
  {
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop",
    description: "Premium beauty and personal care products"
  }
];

// Deals of the day
const dailyDeals = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    price: "$29.99",
    originalPrice: "$79.99",
    discount: "63% OFF",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: "$49.99",
    originalPrice: "$99.99",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Electric Coffee Grinder",
    price: "$24.99",
    originalPrice: "$59.99",
    discount: "58% OFF",
    image: "https://images.unsplash.com/photo-1595246007497-68e1e9dc8589?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: "$34.99",
    originalPrice: "$89.99",
    discount: "61% OFF",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=500&auto=format&fit=crop",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 z-10 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Sale is Here!</h1>
              <p className="text-xl mb-8 opacity-90">Up to 70% off on thousands of products. Limited time only.</p>
              <div className="flex gap-4">
                <Link href="/marketplace" className="px-6 py-3 bg-white text-primary font-medium rounded hover:bg-gray-100 transition-colors">
                  Shop Now
                </Link>
                <Link href="/routes/products" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors">
                  View Deals
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-full h-64 md:h-80 relative z-10 opacity-90">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop" 
                  alt="Summer Sale"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Badges */}
        <section className="bg-gray-50 py-6 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Banknote className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products Carousel */}
        <FeaturedProducts />
        
        {/* Deals of the Day */}
        <section className="py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Deals of the Day</h2>
                <p className="text-gray-600">Limited time offers at incredible prices</p>
              </div>
              <Link href="/routes/products" className="text-sm font-medium hover:underline">
                View all deals
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dailyDeals.map((deal) => (
                <div key={deal.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={deal.image} 
                      alt={deal.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {deal.discount}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm line-clamp-2 mb-2">{deal.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-lg">{deal.price}</span>
                      <span className="text-gray-500 line-through text-sm">{deal.originalPrice}</span>
                    </div>
                    <Button className="w-full mt-3" size="sm">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Browse by Category */}
        <section className="py-12 px-4 md:px-8 lg:px-12 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.name} 
                  href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="group"
                >
                  <div className="rounded-lg overflow-hidden shadow-md bg-white group-hover:shadow-lg transition-shadow">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Marketplace</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Become a seller today and reach millions of customers.
              Start your business with zero listing fees for the first month.
            </p>
            <Link 
              href="/register" 
              className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Tag className="h-5 w-5" />
              Start Selling
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
