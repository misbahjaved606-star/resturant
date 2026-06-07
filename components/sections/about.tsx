"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const highlights = [
  "Original branded cut pieces",
  "Men's & women's collections",
  "Affordable wholesale & retail",
  "New arrivals every week",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-700/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />

            <div className="relative grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-emerald-900">
                <img
                  src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821386006-cat-women.jpg"
                  alt="Women's collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-12">
                <div className="aspect-square rounded-2xl overflow-hidden bg-amber-100">
                  <img
                    src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821389207-cat-cutpiece.jpg"
                    alt="Cut pieces"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821384444-cat-men.jpg"
                    alt="Men's collection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                Fashion Partner
              </span>{" "}
              in Islamabad
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed">
              Lahore Clothes &amp; Branded Cut Piece is a trusted clothing
              store in Ghauri Town, Islamabad, offering quality branded cut
              pieces and fashionable clothing for men and women. We focus on
              quality, affordability, and customer satisfaction.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-full h-12 px-6"
              >
                <a
                  href="https://wa.me/923465617880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <div className="flex items-center gap-2 text-stone-600 text-sm px-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                Habib Plaza, Ghauri Town
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
