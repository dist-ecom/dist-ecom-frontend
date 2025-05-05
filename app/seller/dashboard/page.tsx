import { Navbar } from "../../../components/custom/Navbar";
import { SellerDashboard } from "../../../components/custom/SellerDashboard";
import { Footer } from "../../../components/custom/Footer";

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