"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Clock, Building2, Bot, Headphones, Zap } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/923408575542";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e] pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0f1a3a] to-[#0a0f1e]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_50%)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 backdrop-blur-xl border border-amber-400/20 flex items-center justify-center">
          <Bot className="w-7 h-7 text-amber-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-20 hidden lg:block"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/10 backdrop-blur-xl border border-blue-400/20 flex items-center justify-center">
          <Building2 className="w-6 h-6 text-blue-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/4 hidden lg:block"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 backdrop-blur-xl border border-amber-400/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>
      </motion.div>

      <Container className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-amber-400/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-100/90 font-medium">Premium AI Solutions for Real Estate</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
          >
            Real Estate
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              AI Chatbot
            </span>
            <br />
            Specialist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            I help real estate agencies, brokers, and property developers automate customer conversations,
            answer property inquiries instantly, qualify leads, and improve customer engagement with
            intelligent AI-powered chatbots available 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-[#0a0f1e] font-semibold rounded-full px-8 h-14 shadow-lg shadow-amber-500/30"
            >
              <a href="#portfolio">
                View Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 h-14"
            >
              <a href="#contact">Book a Free Consultation</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-emerald-400/30 bg-emerald-500/10 backdrop-blur-xl text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/50 rounded-full px-8 h-14"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Zap, label: "Fast Delivery" },
              { icon: Building2, label: "Real Estate Focused" },
              { icon: Bot, label: "AI-Powered Solutions" },
              { icon: Headphones, label: "24/7 Customer Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex justify-center"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}