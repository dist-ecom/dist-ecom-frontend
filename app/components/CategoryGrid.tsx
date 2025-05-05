import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Women",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=500&auto=format&fit=crop",
    link: "/categories/women"
  },
  {
    id: 2,
    name: "Men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=500&auto=format&fit=crop",
    link: "/categories/men"
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=500&auto=format&fit=crop",
    link: "/categories/accessories"
  },
  {
    id: 4,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6b00b37?q=80&w=500&auto=format&fit=crop",
    link: "/categories/footwear"
  }
];

export function CategoryGrid() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.id}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <div className="absolute inset-0 bg-black/30 z-10 transition-all group-hover:bg-black/40" />
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 