"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

const categories = [
  {
    title: "Men's Collection",
    subtitle: "Shirts, kurtas & more",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821384444-cat-men.jpg",
    accent: "from-emerald-700/90 to-emerald-900/90",
  },
  {
    title: "Women's Collection",
    subtitle: "Elegant & trendy styles",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821386006-cat-women.jpg",
    accent: "from-amber-700/90 to-amber-900/90",
  },
  {
    title: "Branded Cut Pieces",
    subtitle: "Premium unstitched fabric",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821389207-cat-cutpiece.jpg",
    accent: "from-stone-800/90 to-black/90",
  },
  {
    title: "New Arrivals",
    subtitle: "Fresh seasonal picks",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821389634-cat-new.jpg",
    accent: "from-emerald-800/90 to-black/90",
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-stone-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Explore
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Shop by{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-lg">
            Curated collections for men, women, and the whole family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href="#products"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.accent} opacity-80 group-hover:opacity-90 transition-opacity`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">{cat.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-stone-900 group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
