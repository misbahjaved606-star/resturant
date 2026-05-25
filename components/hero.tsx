"use client";

import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1779724170098-hero-restaurant";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen -mt-24 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-subtle-zoom"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
          }}
        />
        {/* Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand)]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[var(--brand)]/10 rounded-full blur-2xl animate-float delay-300" />

      {/* Content */}
      <div className="container relative z-10 pt-32">
        <div className="max-w-3xl">
          {/* Pre-heading */}
          <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in-up">
            Mediterranean Dining · Fitzrovia
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 animate-fade-in-up delay-100">
            An Intimate
            <br />
            <span className="italic text-[var(--brand)]">Escape</span>
            <br />
            Awaits
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-xl animate-fade-in-up delay-200">
            Handcrafted seafood, fine wines, and unforgettable evenings in the
            heart of London. Where Mediterranean tradition meets modern elegance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-10 py-4 bg-[var(--brand)] text-black font-medium tracking-wider uppercase text-sm rounded-full hover:bg-[var(--brand-light)] hover:scale-105 transition-all duration-300 shadow-xl shadow-[var(--gold-glow)]"
            >
              Reserve Your Table
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center px-10 py-4 border border-[var(--cream-muted)]/30 text-white font-medium tracking-wider uppercase text-sm rounded-full hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-300"
            >
              View Menu
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-[var(--brand)]/20 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <span className="text-[var(--brand)] text-lg">★</span>
              <span className="text-white/70 text-sm">4.8 Google Reviews</span>
            </div>
            <div className="h-4 w-px bg-[var(--brand)]/30" />
            <span className="text-white/70 text-sm">
              Open Tue–Sun · 12pm–11pm
            </span>
            <div className="h-4 w-px bg-[var(--brand)]/30" />
            <span className="text-white/70 text-sm">Dog Friendly</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-[var(--brand)] transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
