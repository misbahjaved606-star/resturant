"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, MapPin } from "lucide-react";
import { Container } from "@/components/container";

const categories = ["All", "Property Chatbots", "Lead Generation", "WhatsApp Chatbots", "Customer Support", "Real Estate Automation"];

const projects = [
  { title: "Estate Inquiry Bot", category: "Property Chatbots", desc: "AI chatbot that answers property questions instantly for a real estate agency.", features: ["Instant property Q&A", "Image gallery display", "Price range filter"], tech: ["AI NLP", "WhatsApp API", "Web Widget"], img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Smart Lead Qualifier", category: "Lead Generation", desc: "Chatbot that qualifies leads through smart conversational flows.", features: ["Budget assessment", "Intent scoring", "Auto CRM sync"], tech: ["AI NLP", "CRM API", "Web Widget"], img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "WhatsApp Property Bot", category: "WhatsApp Chatbots", desc: "WhatsApp-integrated chatbot for instant property inquiries on the go.", features: ["WhatsApp integration", "Property cards", "Agent handoff"], tech: ["WhatsApp API", "AI NLP", "Cloud Functions"], img: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "24/7 Support Assistant", category: "Customer Support", desc: "Round-the-clock support chatbot handling common real estate questions.", features: ["FAQ automation", "Ticket creation", "Multi-language"], tech: ["AI NLP", "Helpdesk API", "Web Widget"], img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Auto Booking System", category: "Real Estate Automation", desc: "Automated appointment booking chatbot for property viewings.", features: ["Calendar sync", "Auto reminders", "Agent scheduling"], tech: ["AI NLP", "Calendar API", "Web Widget"], img: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Rental Inquiry Bot", category: "Property Chatbots", desc: "Specialized chatbot for rental property inquiries and applications.", features: ["Rental listings", "Application forms", "Tenant screening"], tech: ["AI NLP", "WhatsApp API", "CRM API"], img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-400/20 mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-100/90 font-medium">My Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Portfolio</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">A selection of AI chatbot solutions built for real estate businesses.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "bg-gradient-to-r from-amber-400 to-amber-600 text-[#0a0f1e]" : "bg-white/5 text-white/60 border border-white/10 hover:border-amber-400/30"}`}>{c}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400/90 text-[#0a0f1e] text-xs font-medium">{p.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-white/60 text-sm mb-3 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.features.map((f) => (<span key={f} className="px-2 py-1 rounded-md bg-white/5 text-white/50 text-xs">{f}</span>))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (<span key={t} className="px-2 py-1 rounded-md bg-amber-400/10 text-amber-300/80 text-xs">{t}</span>))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 text-[#0a0f1e] text-sm font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all"><ExternalLink className="w-4 h-4" /> Live Demo</button>
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 transition-all"><FileText className="w-4 h-4" /> Case Study</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
