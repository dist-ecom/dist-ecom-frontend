import { Navbar } from "../../components/Navbar";
import { SellerDashboard } from "../../components/SellerDashboard";
import { Footer } from "../../components/Footer";

export default function SellerDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <SellerDashboard />
      </main>
      <Footer />
    </div>
  );
} 