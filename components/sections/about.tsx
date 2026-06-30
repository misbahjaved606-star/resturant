"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Bot, Target } from "lucide-react";
import { Container } from "@/components/container";

const benefits = [
  "Answer property inquiries instantly",
  "Capture qualified leads automatically",
  "Improve customer engagement",
  "Save staff time",
  "Provide 24/7 support",
  "Increase conversion opportunities",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0f1e] to-[#0f1a3a] p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-[#0a0f1e]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Misbah Javed</h3>
                  <p className="text-amber-400 text-sm">Real Estate AI Chatbot Specialist</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Specializing exclusively in building intelligent AI chatbots for the real estate industry.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "100%", label: "Real Estate Focus" },
                  { num: "24/7", label: "Chatbot Support" },
                  { num: "AI", label: "Powered Solutions" },
                ].map((s, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-amber-400 font-bold text-lg">{s.num}</div>
                    <div className="text-white/60 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
              <Target className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-amber-700 font-medium">About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a0f1e] tracking-tight leading-tight">
              Specialized in{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                Real Estate AI Chatbots
              </span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              I specialize exclusively in building AI chatbots for the real estate industry. My chatbots
              help businesses automate conversations, engage clients, and grow — all without adding
              extra workload to your team.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
