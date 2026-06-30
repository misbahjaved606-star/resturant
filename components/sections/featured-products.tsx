"use client";

import { motion } from "framer-motion";
import { Zap, Send, UserPlus, MessageSquare, Heart, TrendingUp, Briefcase, Award } from "lucide-react";
import { Container } from "@/components/container";

const features = [
  { icon: Zap, title: "Instant Replies", desc: "Reply to visitors and prospects in real time, every time." },
  { icon: MessageSquare, title: "Natural Conversations", desc: "Human-like dialogue powered by advanced AI and NLP." },
  { icon: Heart, title: "Property Recommendations", desc: "Smart suggestions based on buyer preferences and behavior." },
  { icon: UserPlus, title: "Lead Qualification", desc: "Automatically score and qualify leads with structured questions." },
  { icon: Send, title: "Appointment Scheduling", desc: "Book property viewings directly through chat." },
  { icon: Award, title: "Frequently Asked Questions", desc: "Answer common questions instantly without staff involvement." },
  { icon: UserPlus, title: "Contact Collection", desc: "Capture emails, phone numbers, and key details automatically." },
  { icon: Zap, title: "Website Integration", desc: "Embed seamlessly into any real estate website." },
  { icon: Send, title: "WhatsApp Integration", desc: "Deploy on WhatsApp to reach customers where they already are." },
  { icon: Briefcase, title: "Easy Management", desc: "Simple dashboard to update listings, FAQs, and flows." },
  { icon: TrendingUp, title: "Mobile Responsive", desc: "Looks and works beautifully on every device." },
  { icon: Briefcase, title: "Secure Conversations", desc: "Encrypted, privacy-first chat to protect customer data." },
];

export function FeaturedProducts() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/50 mb-6">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0f1e] mb-6 leading-tight">
            Powerful Features
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Built In
            </span>
          </h2>
          <p className="text-lg text-stone-600">
            Everything your real estate chatbot needs to convert visitors into qualified leads.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white border border-stone-200/60 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a0f1e] to-[#1a2547] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <f.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0a0f1e] mb-2">{f.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}