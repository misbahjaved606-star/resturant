"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const HERO_IMG =
  "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821383465-hero-pakistani-fashion.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMG}
          alt="Pakistani Fashion"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-200 text-xs md:text-sm font-medium tracking-wider uppercase">
              Premium Pakistani Fashion
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Premium Branded{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Cut Pieces
            </span>{" "}
            & Quality{" "}
            <span className="italic font-light text-emerald-300">Pakistani</span>{" "}
            Clothing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-stone-200 max-w-2xl leading-relaxed"
          >
            Discover stylish and affordable clothing for every occasion. From
            elegant unstitched fabrics to ready-to-wear collections — your
            destination for authentic Pakistani fashion in Islamabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 h-14 text-base rounded-full shadow-lg shadow-amber-500/30 transition-all hover:scale-105"
            >
              <a href="#contact" className="inline-flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-stone-900 px-8 h-14 text-base rounded-full transition-all"
            >
              <a
                href="tel:+923465617880"
                className="inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +92 346 5617880
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 md:gap-10 text-stone-300 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl font-bold">500+</span>
              <span>Happy Customers</span>
            </div>
            <div className="w-px h-8 bg-stone-500" />
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl font-bold">100%</span>
              <span>Branded Quality</span>
            </div>
            <div className="w-px h-8 bg-stone-500" />
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-2xl font-bold">★ 4.9</span>
              <span>Customer Rating</span>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent z-10" />
    </section>
  );
}
