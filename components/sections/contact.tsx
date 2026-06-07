"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Store, MessageCircle, Clock, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { KleapForm } from "@/components/kleap-form";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-stone-50 to-white"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Visit Us or{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
              Say Hello
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-lg">
            We'd love to help you find the perfect outfit. Drop by, call, or
            send a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-800/10 flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Store Name
                  </p>
                  <p className="text-stone-900 font-bold mt-1">
                    Lahore Clothes &amp; Branded Cut Piece
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-800/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Phone
                  </p>
                  <a
                    href="tel:+923465617880"
                    className="text-stone-900 font-bold mt-1 hover:text-emerald-800 transition"
                  >
                    +92 346 5617880
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-800/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Address
                  </p>
                  <p className="text-stone-900 font-medium mt-1 leading-relaxed">
                    Office No. 103, Habib Plaza, Phase 4B, Ghauri Town,
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-800 text-white shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-stone-900" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-emerald-200 font-semibold">
                    Store Hours
                  </p>
                  <p className="font-medium mt-1">Mon – Sat: 10:00 AM – 9:00 PM</p>
                  <p className="text-emerald-200 text-sm">Sunday: 12:00 PM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-14 text-base"
            >
              <a
                href="https://wa.me/923465617880"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Send us a message
                  </h3>
                  <p className="text-sm text-stone-500">
                    We'll respond as soon as possible.
                  </p>
                </div>
              </div>
              <KleapForm
                formId="contact"
                title="Contact Form - Lahore Clothes"
                fields={[
                  {
                    name: "name",
                    label: "Your Name",
                    type: "text",
                    required: true,
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    required: true,
                  },
                  {
                    name: "email",
                    label: "Email (optional)",
                    type: "email",
                  },
                  {
                    name: "interest",
                    label: "What are you looking for?",
                    type: "select",
                    options: [
                      "Men's Collection",
                      "Women's Collection",
                      "Branded Cut Pieces",
                      "New Arrivals",
                      "Other",
                    ],
                  },
                  {
                    name: "message",
                    label: "Your Message",
                    type: "textarea",
                    required: true,
                  },
                ]}
                submitText="Send Message"
                successMessage="Thank you! We'll get back to you shortly."
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
