"use client";

import { motion } from "framer-motion";
import { ClipboardList, Lightbulb, Code2, TestTube, Rocket, LifeBuoy } from "lucide-react";
import { Container } from "@/components/container";

const steps = [
  { icon: ClipboardList, title: "Requirement Discussion", desc: "We discuss your real estate business needs and chatbot goals in detail." },
  { icon: Lightbulb, title: "Planning", desc: "I create a detailed plan and conversation flow for your AI chatbot." },
  { icon: Code2, title: "Chatbot Development", desc: "Your chatbot is built with cutting-edge AI technology and real estate logic." },
  { icon: TestTube, title: "Testing", desc: "Thorough testing ensures smooth, natural conversations and accurate responses." },
  { icon: Rocket, title: "Deployment", desc: "Your chatbot goes live on your website, WhatsApp, or preferred platform." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing support and improvements keep your chatbot performing at its best." },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <Rocket className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">How I Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0f1e] tracking-tight">Work Process</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">A clear, proven process from first conversation to ongoing support.</p>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400/30 via-amber-400/20 to-transparent -translate-x-1/2" />
          <div className="space-y-8 lg:space-y-0">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:py-6`}>
                <div className="lg:w-1/2 lg:text-right" style={{ textAlign: i % 2 === 0 ? undefined : "right" }}>
                  <div className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-amber-200 transition-all duration-300 ${i % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                    <div className="flex items-center gap-3 mb-3" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                      <h3 className="text-[#0a0f1e] font-bold text-lg">{s.title}</h3>
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-14 h-14 rounded-full bg-gradient-to-br from-[#0a0f1e] to-[#0f1a3a] border-4 border-gray-50 items-center justify-center flex-shrink-0 z-10 shadow-lg">
                  <s.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
