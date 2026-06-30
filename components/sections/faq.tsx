"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Container } from "@/components/container";

const faqs = [
  { q: "What is an AI chatbot?", a: "An AI chatbot is a software application that uses artificial intelligence to simulate human-like conversations. It can answer questions, provide information, and assist users automatically — 24/7 without human intervention." },
  { q: "How can it help my real estate business?", a: "AI chatbots help real estate businesses by answering property inquiries instantly, qualifying leads automatically, scheduling appointments, and providing 24/7 customer support — all while saving your team valuable time." },
  { q: "Can it answer property questions?", a: "Yes! The chatbot is trained on your property listings and can answer questions about prices, locations, features, availability, and more — instantly and accurately." },
  { q: "Can it collect leads automatically?", a: "Absolutely. The chatbot captures names, emails, phone numbers, and other details during conversations, then stores them for your team to follow up with qualified leads." },
  { q: "Can it connect with WhatsApp?", a: "Yes, I can integrate the AI chatbot directly with WhatsApp, allowing clients to interact with your business through the platform they already use every day." },
  { q: "How long does development take?", a: "Development time depends on complexity, but most real estate chatbots are completed within 1-3 weeks. I'll provide a clear timeline during our initial consultation." },
  { q: "Do you provide support?", a: "Yes, I provide ongoing support after deployment to ensure your chatbot runs smoothly, stays updated, and continues to deliver results for your business." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">Questions & Answers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0f1e] tracking-tight">Frequently Asked Questions</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl bg-white border border-gray-100 hover:border-amber-200 transition-colors overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="text-[#0a0f1e] font-semibold text-base md:text-lg pr-4">{f.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${open === i ? "bg-amber-400 text-white" : "bg-gray-100 text-gray-500"}`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
