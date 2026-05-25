"use client";

import { Container } from "@/components/container";
import { Fish, Wine, Leaf, Sparkles } from "lucide-react";

const signatureDishes = [
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
    name: "Grilled Mediterranean Octopus",
    description: "Charred to perfection, served with saffron potatoes and橄榄油 lemon",
    price: "£28"
  },
  {
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=800",
    name: "Dry-Aged Ribeye",
    description: "28-day aged prime cut with bone marrow butter and wild mushrooms",
    price: "£58"
  },
  {
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800",
    name: "Handmade Lobster Linguine",
    description: "Fresh Cornwall lobster with cherry tomatoes and basil oil",
    price: "£42"
  },
  {
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",
    name: "Signature Negroni",
    description: "Our take on the classic with aged rum and house-made bitters",
    price: "£16"
  }
];

const features = [
  {
    icon: Fish,
    title: "Sustainable Seafood",
    description: "Sourced daily from sustainable fisheries across the Mediterranean coast"
  },
  {
    icon: Wine,
    title: "Award-Winning Wine List",
    description: "Over 300 carefully curated wines from premier Mediterranean vineyards"
  },
  {
    icon: Leaf,
    title: "Locally Sourced",
    description: "Fresh ingredients from trusted British farms and suppliers"
  },
  {
    icon: Sparkles,
    title: "Michelin-Starred Chef",
    description: "Executive Chef Marco Bellini brings 20 years of culinary excellence"
  }
];

export function Features() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[var(--surface)]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[var(--accent)] font-medium tracking-widest uppercase text-sm mb-4 block">
            The Menu
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Signature <span className="italic text-[var(--accent)]">Experiences</span>
          </h2>
          <p className="text-lg text-white/60">
            Each dish tells a story of the Mediterranean — from the azure waters of Greece 
            to the sun-drenched vineyards of Tuscany.
          </p>
        </div>
        
        {/* Signature Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {signatureDishes.map((dish, index) => (
            <div 
              key={index}
              className="group relative bg-black/40 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[var(--accent)] font-medium text-sm">{dish.price}</span>
                <h3 className="text-xl font-serif font-semibold text-white mt-1 group-hover:text-[var(--accent)] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-sm text-white/60 mt-2 line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[var(--accent)]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                <feature.icon className="w-8 h-8 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
