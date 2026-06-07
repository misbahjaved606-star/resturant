"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-black to-gray-900 p-10 text-white">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">Visit Our Store</p>
            <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
            <p className="mt-3 text-gray-300">We would love to welcome you to our store in Islamabad</p>
            <div className="mt-8 space-y-4">
              <a href="tel:+923465617880" className="flex items-start gap-4 rounded-lg bg-white/5 p-4 transition hover:bg-white/10">
                <Phone className="mt-0.5 h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="font-semibold">+92 346 5617880</p>
                </div>
              </a>
              <a href="https://wa.me/923465617880" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-lg bg-white/5 p-4 transition hover:bg-white/10">
                <MessageCircle className="mt-0.5 h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="font-semibold">Chat with us instantly</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-lg bg-white/5 p-4">
                <MapPin className="mt-0.5 h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Visit Store</p>
                  <p className="font-semibold">Habib Plaza, Ghauri Town Phase 4B, Islamabad</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg bg-white/5 p-4">
                <Clock className="mt-0.5 h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Opening Hours</p>
                  <p className="font-semibold">Mon - Sun: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-yellow-500 p-10 text-black">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Shop Premium Fashion?</h2>
            <p className="mt-4 text-lg text-black/80">Browse our collection of branded cut pieces, designer wear, and accessories. Order easily via WhatsApp and get fast delivery.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
                <a href="https://wa.me/923465617880" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-black/20 pt-6">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-black/70">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-black/70">Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5 star</div>
                <div className="text-sm text-black/70">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
