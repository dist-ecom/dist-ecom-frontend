import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MarketplaceHeader } from "../components/MarketplaceHeader";
import { ProductCard } from "../components/ProductCard";

const marketplaceProducts = [
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
  },
  {
    id: 6,
    name: "Wireless Bluetooth Headphones - Noise Cancelling",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 142,
    seller: {
      name: "AudioTech",
      verified: true
    },
    discount: "10%"
  },
  {
    id: 7,
    name: "Handmade Ceramic Mug - Artisan Collection",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=500&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 83,
    seller: {
      name: "ArtisanCrafts",
      verified: false
    }
  },
  {
    id: 8,
    name: "Organic Cotton Bed Sheets - Queen Size",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 117,
    seller: {
      name: "EcoHome",
      verified: true
    },
    freeShipping: true
  }
];

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <MarketplaceHeader />
        
        <section className="py-8 px-4 md:px-8 lg:px-12">
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Products</h2>
              <div className="flex items-center gap-2 text-sm">
                <span>Sort by:</span>
                <select className="border rounded p-1">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {marketplaceProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">1</button>
                <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">2</button>
                <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">3</button>
                <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">4</button>
                <span>...</span>
                <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">12</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 