"use client";

import { motion } from "framer-motion";
import { Zap, MessageCircle, Home, UserCheck, Calendar, HelpCircle, Contact, Globe, Smartphone, Settings, Smartphone as Mobile, Shield } from "lucide-react";
import { Container } from "@/components/container";

const features = [
  { icon: Zap, title: "Instant Replies", desc: "Clients get answers in seconds, not hours." },
  { icon: MessageCircle, title: "Natural Conversations", desc: "AI that chats like a real human assistant." },
  { icon: Home, title: "Property Recommendations", desc: "Smart suggestions based on client preferences." },
  { icon: UserCheck, title: "Lead Qualification", desc: "Automatically filter and qualify potential clients." },
  { icon: Calendar, title: "Appointment Scheduling", desc: "Clients book viewings without staff help." },
  { icon: HelpCircle, title: "Frequently Asked Questions", desc: "Instant answers to common property questions." },
  { icon: Contact, title: "Contact Collection", desc: "Gather names, emails, and phone numbers automatically." },
  { icon: Globe, title: "Website Integration", desc: "Embed chatbots seamlessly into your website." },
  { icon: Smartphone, title: "WhatsApp Integration", desc: "Connect chatbots to WhatsApp effortlessly." },
  { icon: Settings, title: "Easy Management", desc: "Simple dashboard to manage chatbot behavior." },
  { icon: Mobile, title: "Mobile Responsive", desc: "Perfect experience on any device." },
  { icon: Shield, title: "Secure Conversations", desc: "Client data protected with enterprise-grade security." },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-400/5 to-transparent rounded-full blur-3xl" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <Zap className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0f1e] tracking-tight">Features of My AI Chatbots</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Every chatbot comes packed with powerful features designed for real estate success.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-amber-200 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0a0f1e] to-[#0f1a3a] flex items-center justify-center flex-shrink-0 group-hover:from-amber-400 group-hover:to-amber-600 transition-all">
                <f.icon className="w-5 h-5 text-amber-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-[#0a0f1e] font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
