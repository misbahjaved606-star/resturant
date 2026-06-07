import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { BlurImage } from "@/components/blur-image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categoriesData = [
  {
    name: "Branded Cut Pieces",
    description: "Premium quality fabric cut pieces from top brands",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
    count: "120+ Products",
  },
  {
    name: "Men's Wear",
    description: "Stylish kurtas, shalwar kameez & western wear",
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&h=600&fit=crop",
    count: "85+ Products",
  },
  {
    name: "Women's Wear",
    description: "Elegant dresses, suits & casual wear",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=600&fit=crop",
    count: "150+ Products",
  },
  {
    name: "Dresses",
    description: "Trendy dresses for every occasion",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=600&fit=crop",
    count: "90+ Products",
  },
  {
    name: "Handbags",
    description: "Designer handbags & clutches",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop",
    count: "60+ Products",
  },
  {
    name: "Fashion Accessories",
    description: "Watches, jewelry, scarves & more",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop",
    count: "100+ Products",
  },
  {
    name: "Cosmetics",
    description: "Premium beauty & makeup products",
    image: "https://images.unsplash.com/photo-1522335789203-aaa78ce6cd05?w=800&h=600&fit=crop",
    count: "75+ Products",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        <div className="text-center mb-16">
          <Heading className="text-black">Shop by Category</Heading>
          <Subheading className="text-neutral-600 mt-4">
            Explore our wide range of premium fashion categories
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <Link
              key={category.name}
              href="/shop"
              className="group relative overflow-hidden bg-black aspect-[4/3] block"
            >
              <BlurImage
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <p className="text-amber-500 text-sm font-medium uppercase tracking-widest mb-2">
                  {category.count}
                </p>
                <h3 className="text-3xl font-bold mb-3 text-center">
                  {category.name}
                </h3>
                <p className="text-neutral-200 text-center text-sm mb-4 max-w-xs">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-4 transition-all">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
