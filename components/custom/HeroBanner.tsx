import Image from "next/image";
import { Button } from "../ui/button";

export function HeroBanner() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop"
          alt="Fashion model showcase"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
      </div>
      <div className="relative z-10 px-4 md:px-8 lg:px-12 mx-auto w-full">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Summer Collection 2024</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover our latest styles with premium quality and sustainable design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 