"use client";

import { motion } from "framer-motion";
import { Target, Wrench, ShieldCheck, Cpu, MessageSquare, Rocket, TrendingUp } from "lucide-react";
import { Container } from "@/components/container";

const reasons = [
  { icon: Target, title: "Industry-Focused Solutions", desc: "Every chatbot is built specifically for real estate — no generic templates." },
  { icon: Wrench, title: "Customized Chatbot Development", desc: "Tailored to your agency's unique needs, brand voice, and workflow." },
  { icon: ShieldCheck, title: "Reliable Support", desc: "Ongoing maintenance and support to keep your chatbot running smoothly." },
  { icon: Cpu, title: "Modern AI Technology", desc: "Built with the latest AI for natural, intelligent conversations." },
  { icon: MessageSquare, title: "Clean Chatbot Conversations", desc: "Smooth, professional dialogue that reflects your brand quality." },
  { icon: Rocket, title: "Easy Deployment", desc: "Quick, hassle-free setup on your website or WhatsApp." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Chatbots that grow with your business and handle increasing volume." },
];

export function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">Why Work With Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0f1e] tracking-tight">Why Choose Me</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">The advantages of partnering with a specialist who focuses only on real estate AI chatbots.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} whileHover={{ y: -6 }} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a0f1e] to-[#0f1a3a] flex items-center justify-center mb-4 group-hover:from-amber-400 group-hover:to-amber-600 transition-all">
                <r.icon className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[#0a0f1e] font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
