"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { KleapForm } from "@/components/kleap-form";

const WHATSAPP_URL = "https://wa.me/923408575542";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-400/20 mb-4">
            <Mail className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-100/90 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Let&apos;s Build Your AI Chatbot</h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">Ready to automate your real estate conversations? Book a free consultation today.</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">Phone / WhatsApp</div>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-amber-400 transition-colors">+92 340 8575542</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">Email</div>
                    <a href="mailto:misbahjaved@email.com" className="text-white text-sm hover:text-amber-400 transition-colors">misbahjaved@email.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/misbah-javed-70372b397/" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-amber-400 transition-colors">Misbah Javed</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/misbah-javed-70372b397/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:misbahjaved@email.com" className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 hover:bg-amber-400/20 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <KleapForm
                formId="contact"
                title="Contact Misbah Javed"
                fields={[
                  { name: "name", label: "Full Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                  { name: "phone", label: "Phone Number", type: "tel", required: true },
                  { name: "message", label: "Message", type: "textarea", required: true },
                ]}
                submitText="Send Message"
                successMessage="Thank you! I'll get back to you within 24 hours."
              />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-medium hover:bg-emerald-500/20 transition-all">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
