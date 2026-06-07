"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

type Product = {
  name: string;
  desc: string;
  price: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    name: "Premium Lawn 3-Piece Suit",
    desc: "Soft printed lawn with embroidered front and chiffon dupatta.",
    price: "PKR 3,500",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821391542-prod-1.jpg",
    tag: "Bestseller",
  },
  {
    name: "Branded Cotton Cut Piece",
    desc: "Original branded unstitched fabric for shalwar kameez.",
    price: "PKR 2,200",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821393049-prod-2.jpg",
    tag: "New",
  },
  {
    name: "Embroidered Kurta Collection",
    desc: "Elegant men's kurta with traditional embroidery work.",
    price: "PKR 2,800",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821394876-prod-3.jpg",
    tag: "Trending",
  },
  {
    name: "Chiffon Branded Dupatta Set",
    desc: "Luxury chiffon dupatta with matching fabric piece.",
    price: "PKR 4,200",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821396739-prod-4.jpg",
    tag: "Premium",
  },
  {
    name: "Casual Shirt Cut Piece",
    desc: "Branded casual fabric for stitching summer shirts.",
    price: "PKR 1,800",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821397365-prod-5.jpg",
    tag: "Value",
  },
  {
    name: "Winter Shawl Collection",
    desc: "Premium woolen shawl for the chilly season.",
    price: "PKR 3,900",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821399495-prod-6.jpg",
    tag: "Seasonal",
  },
];

function buildWhatsappLink(p: Product): string {
  const text = `Hi! I'm interested in: ${p.name} (${p.price})`;
  return `https://wa.me/923465617880?text=${encodeURIComponent(text)}`;
}

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-stone-50"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Featured
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Bestselling{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-lg">
            Handpicked styles loved by our customers across Islamabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-stone-900 text-xs font-bold rounded-full shadow-md">
                  {p.tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-900 text-lg line-clamp-1">
                  {p.name}
                </h3>
                <p className="text-sm text-stone-500 mt-1 line-clamp-2 min-h-[2.5rem]">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider">
                      Price
                    </p>
                    <p className="text-xl font-bold text-emerald-800">
                      {p.price}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-full h-10 px-4"
                  >
                    <a
                      href={buildWhatsappLink(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
