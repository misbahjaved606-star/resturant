"use client";

import { motion } from "framer-motion";
import {
  Bot, MessageSquare, UserCheck, Home, Calendar, Users, Key, HelpCircle,
  Smartphone, Globe, Sparkles,
} from "lucide-react";
import { Container } from "@/components/container";

const services = [
  { icon: Bot, title: "Real Estate AI Chatbot Development", desc: "Custom-built AI chatbots tailored for real estate businesses." },
  { icon: MessageSquare, title: "Property Inquiry Chatbots", desc: "Instantly answer property questions with intelligent automation." },
  { icon: UserCheck, title: "Lead Qualification Chatbots", desc: "Automatically qualify leads with smart conversational flows." },
  { icon: Home, title: "Property Recommendation Chatbots", desc: "Recommend properties based on buyer preferences automatically." },
  { icon: Calendar, title: "Appointment Booking Chatbots", desc: "Let clients book property viewings 24/7 without staff involvement." },
  { icon: Users, title: "Buyer & Seller Assistance Chatbots", desc: "Guide buyers and sellers through every step of the process." },
  { icon: Key, title: "Rental Property Chatbots", desc: "Handle rental inquiries, applications, and tenant questions." },
  { icon: HelpCircle, title: "FAQ Chatbots", desc: "Answer frequently asked questions instantly, any time of day." },
  { icon: Smartphone, title: "WhatsApp Chatbot Integration", desc: "Connect AI chatbots directly to WhatsApp for instant client access." },
  { icon: Globe, title: "Website Chatbot Integration", desc: "Seamlessly embed AI chatbots into your existing real estate website." },
  { icon: Sparkles, title: "Custom AI Chatbot Solutions", desc: "Bespoke AI chatbot solutions built for your unique real estate needs." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-400/20 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-100/90 font-medium">What I Offer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">AI Chatbot Services</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Comprehensive AI chatbot solutions designed exclusively for the real estate industry.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
