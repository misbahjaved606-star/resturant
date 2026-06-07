"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Tag, Heart, Sparkles } from "lucide-react";
import { Container } from "@/components/container";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    desc: "Only original branded fabrics and carefully selected clothing pieces.",
  },
  {
    icon: Tag,
    title: "Affordable Prices",
    desc: "Best wholesale and retail prices in Ghauri Town, Islamabad.",
  },
  {
    icon: Heart,
    title: "Trusted Local Store",
    desc: "Hundreds of satisfied customers across Islamabad and beyond.",
  },
  {
    icon: Sparkles,
    title: "Customer Satisfaction",
    desc: "Personalized service and friendly guidance for every shopper.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-700/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-600/20 blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Lahore
            </span>{" "}
            Promise
          </h2>
          <p className="mt-4 text-stone-300 text-lg">
            What makes us the trusted choice for branded cut pieces in
            Islamabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl bg-stone-800/60 backdrop-blur-sm border border-stone-700/50 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-stone-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
