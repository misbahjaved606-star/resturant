"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Bot } from "lucide-react";

const navLinks = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Services", link: "#services" },
  { title: "Portfolio", link: "#portfolio" },
  { title: "Process", link: "#process" },
  { title: "Testimonials", link: "#testimonials" },
  { title: "FAQ", link: "#faq" },
  { title: "Contact", link: "#contact" },
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
            ? "bg-[#0a0f1e]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20"
            : "bg-[#0a0f1e]/80 backdrop-blur-sm py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="relative z-50 flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#0a0f1e]" />
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-tight">Misbah Javed</h1>
              <p className="text-amber-400 text-[10px] tracking-wide">AI Chatbot Specialist</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.link}
                className="text-sm text-white/70 hover:text-amber-400 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-[#0a0f1e] text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all"
          >
            Free Consultation
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#0a0f1e]/98 backdrop-blur-lg lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-white/80 hover:text-amber-400 transition-colors"
            >
              {link.title}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-[#0a0f1e] font-semibold"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </>
  );
}
