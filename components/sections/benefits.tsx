"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Users, MessageSquare, Star, TrendingUp, Minus, Award } from "lucide-react";
import { Container } from "@/components/container";

const benefits = [
  { icon: Clock, title: "24/7 Customer Support", desc: "Your chatbot never sleeps — clients get answers any time, day or night." },
  { icon: Zap, title: "Instant Property Responses", desc: "Answer property questions immediately without keeping clients waiting." },
  { icon: Users, title: "Automatic Lead Collection", desc: "Capture and store lead information automatically in every conversation." },
  { icon: MessageSquare, title: "Faster Client Communication", desc: "Reduce response times from hours to seconds with AI automation." },
  { icon: Star, title: "Better Customer Experience", desc: "Deliver smooth, professional conversations that impress every client." },
  { icon: TrendingUp, title: "Higher Lead Conversion", desc: "Turn more inquiries into clients with instant, intelligent engagement." },
  { icon: Minus, title: "Reduced Manual Work", desc: "Free your team from repetitive questions and focus on closing deals." },
  { icon: Award, title: "Professional Brand Image", desc: "Stand out with cutting-edge AI technology that builds trust." },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">Why It Matters</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0f1e] tracking-tight">Benefits of AI Chatbots</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real, measurable advantages that transform how your real estate business operates.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <b.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#0a0f1e] font-semibold text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
