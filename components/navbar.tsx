"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Menu", link: "/menu" },
  { title: "Private Hire", link: "/private-hire" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-black/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <h1 className="font-serif text-2xl md:text-3xl text-white tracking-wider">
              BENNIE
            </h1>
            <p className="text-[10px] md:text-xs text-amber-400/80 tracking-[0.3em] uppercase mt-1">
              Restaurant & Bar
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-sm text-white/80 hover:text-amber-400 transition-colors tracking-wide uppercase"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2.5 text-sm font-medium tracking-wide transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/98 backdrop-blur-lg lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-white/80 hover:text-amber-400 transition-colors tracking-wide uppercase"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 text-lg font-medium tracking-wide transition-colors mt-4"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-4 right-4 z-50 lg:hidden">
        <Link
          href="/contact"
          className="block w-full bg-amber-500 hover:bg-amber-600 text-black py-4 text-center font-medium tracking-wide transition-colors"
        >
          Reserve Your Table
        </Link>
      </div>
    </>
  );
}
