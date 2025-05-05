import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { CategoryGrid } from "./components/CategoryGrid";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { MarketplacePromo } from "./components/MarketplacePromo";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid />
        <FeaturedProducts />
        <MarketplacePromo />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
