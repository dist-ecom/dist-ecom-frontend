import { Navbar } from "../components/custom/Navbar";
import { HeroBanner } from "../components/custom/HeroBanner";
import { CategoryGrid } from "../components/custom/CategoryGrid";
import { FeaturedProducts } from "../components/custom/FeaturedProducts";
import { MarketplacePromo } from "../components/custom/MarketplacePromo";
import { Newsletter } from "../components/custom/Newsletter";
import { Footer } from "../components/custom/Footer";

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
