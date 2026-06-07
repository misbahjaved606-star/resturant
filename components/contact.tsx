"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-amber-600 uppercase tracking-widest text-sm font-medium mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Visit Our Store
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Stop by our store in Islamabad or reach out via phone and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 text-center border border-neutral-200 hover:border-amber-600 transition-colors">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-600 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-black font-semibold text-lg mb-2">Location</h3>
            <p className="text-neutral-600 text-sm">
              Habib Plaza, Ghauri Town Phase 4B, Islamabad, Pakistan
            </p>
          </div>

          <div className="bg-white p-8 text-center border border-neutral-200 hover:border-amber-600 transition-colors">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-600 rounded-full mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-black font-semibold text-lg mb-2">Phone</h3>
            <a
              href="tel:+923465617880"
              className="text-neutral-600 text-sm hover:text-amber-600"
            >
              +92 346 5617880
            </a>
          </div>

          <div className="bg-white p-8 text-center border border-neutral-200 hover:border-amber-600 transition-colors">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-full mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-black font-semibold text-lg mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/923465617880"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 text-sm hover:text-green-600"
            >
              Chat with us
            </a>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-amber-600 px-8"
          >
            <a href="/contact">Send us a Message</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
