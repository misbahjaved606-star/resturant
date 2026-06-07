"use client";
import { Facebook, Instagram, Twitter, Youtube, Phone, MapPin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-emerald-700 to-yellow-500 rounded-md flex items-center justify-center text-white font-bold text-sm">L</div>
              <span className="font-bold text-white text-lg">Lahore Clothes & Branded Cut Piece</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your trusted destination for premium Pakistani clothing and branded cut pieces in Islamabad. Quality, affordability, and style — all in one place.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-gray-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+923465617880" className="hover:text-white transition-colors">
                  +92 346 5617880
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Office No. 103, Habib Plaza, Phase 4B, Ghauri Town, Islamabad</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>info@lahoreclothes.pk</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://wa.me/923465617880" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Lahore Clothes & Branded Cut Piece. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Islamabad
          </p>
        </div>
      </div>
    </footer>
  );
}
