"use client";

import { motion } from "framer-motion";
import {
  Bot, Home, UserCheck, Sparkles, Calendar, Users, Building, HelpCircle,
  MessageCircle, Globe, Wand2, ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/container";

const services = [
  { icon: Bot, title: "Real Estate AI Chatbot Development", desc: "Custom-built AI chatbots engineered specifically for real estate workflows and customer journeys." },
  { icon: Home, title: "Property Inquiry Chatbots", desc: "Instantly answer questions about listings, prices, amenities, and availability 24/7." },
  { icon: UserCheck, title: "Lead Qualification Chatbots", desc: "Automatically qualify prospects by collecting budget, location, and timeline data." },
  { icon: Sparkles, title: "Property Recommendation Chatbots", desc: "Smart AI recommends the right properties to each buyer based on their preferences." },
  { icon: Calendar, title: "Appointment Booking Chatbots", desc: "Schedule property viewings and consultations directly through the chatbot." },
  { icon: Users, title: "Buyer & Seller Assistance Chatbots", desc: "Guide buyers and sellers through every step with intelligent automated support." },
  { icon: Building, title: "Rental Property Chatbots", desc: "Handle rental inquiries, application info, and tenant questions automatically." },
  { icon: HelpCircle, title: "FAQ Chatbots", desc: "Reduce repetitive questions by providing instant answers to common queries." },
  { icon: MessageCircle, title: "WhatsApp Chatbot Integration", desc: "Deploy your chatbot on WhatsApp to reach customers on their favorite platform." },
  { icon: Globe, title: "Website Chatbot Integration", desc: "Seamlessly embed intelligent chat on your real estate website for instant engagement." },
  { icon: Wand2, title: "Custom AI Solutions for Real Estate", desc: "Bespoke chatbot solutions designed around your unique business needs." },
];

export function Categories() {
  return (
    <section id="services" className="relative py-28 bg-[#0a0f1e] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-amber-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-100/90 font-medium">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI Chatbot Solutions
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              for Real Estate
            </span>
          </h2>
          <p className="text-lg text-white/70">
            Comprehensive chatbot services tailored to the real estate industry — from inquiry handling
            to lead qualification and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/0 to-amber-400/0 group-hover:from-amber-400/5 group-hover:to-amber-600/5 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-amber-500/30">
                    <service.icon className="w-7 h-7 text-[#0a0f1e]" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}