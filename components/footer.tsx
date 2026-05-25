"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1815] pt-20 pb-8 border-t border-[var(--brand)]/10">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif text-4xl text-[var(--brand)] hover:text-[var(--brand-dark)] transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-[var(--cream-muted)] max-w-md leading-relaxed">
              An intimate Mediterranean escape in the heart of Fitzrovia. Handcrafted
              seafood, fine wines, and unforgettable evenings since 2012.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[var(--brand)]/30 flex items-center justify-center text-[var(--cream-muted)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-300"
                >
                  <span className="text-xs">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--text-secondary)] uppercase tracking-wider text-sm mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.link}>
                  <Link
                    href={link.link}
                    className="text-[var(--cream-muted)] hover:text-[var(--brand)] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#book"
                  className="text-[var(--cream-muted)] hover:text-[var(--brand)] transition-colors"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--text-secondary)] uppercase tracking-wider text-sm mb-6">
              Visit Us
            </h4>
            <ul className="space-y-4 text-[var(--cream-muted)]">
              <li>
                <p>12 Charlotte Street</p>
                <p>Fitzrovia, London</p>
                <p>W1T 2LX</p>
              </li>
              <li>
                <a
                  href="tel:+442012345678"
                  className="hover:text-[var(--brand)] transition-colors"
                >
                  020 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@bennie.co.uk"
                  className="hover:text-[var(--brand)] transition-colors"
                >
                  hello@bennie.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--brand)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--cream-muted)] text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-[var(--cream-muted)] hover:text-[var(--brand)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[var(--cream-muted)] hover:text-[var(--brand)] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
