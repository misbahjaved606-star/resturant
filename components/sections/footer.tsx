"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/Logo";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-stone-400 text-sm leading-relaxed">
              Premium branded cut pieces and quality Pakistani clothing for
              men and women in Islamabad.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-900 flex items-center justify-center transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "#"],
                ["Categories", "#categories"],
                ["Products", "#products"],
                ["Why Choose Us", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-stone-400 hover:text-amber-400 transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Collections
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Men's Collection",
                "Women's Collection",
                "Branded Cut Pieces",
                "New Arrivals",
                "Seasonal Specials",
              ].map((c) => (
                <li key={c}>
                  <a
                    href="#categories"
                    className="text-stone-400 hover:text-amber-400 transition"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <a
                  href="tel:+923465617880"
                  className="text-stone-400 hover:text-amber-400 transition"
                >
                  +92 346 5617880
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-stone-400">
                  Office No. 103, Habib Plaza, Phase 4B, Ghauri Town,
                  Islamabad
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@lahoreclothes.pk"
                  className="text-stone-400 hover:text-amber-400 transition"
                >
                  info@lahoreclothes.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>
            © {new Date().getFullYear()} Lahore Clothes &amp; Branded Cut Piece.
            All rights reserved.
          </p>
          <p className="text-stone-600">
            Crafted with care in Islamabad, Pakistan
          </p>
        </div>
      </Container>
    </footer>
  );
}
