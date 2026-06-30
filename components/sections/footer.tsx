"use client";

import { MessageCircle, Linkedin, Mail, Bot } from "lucide-react";
import { Container } from "@/components/container";

const WHATSAPP_URL = "https://wa.me/923408575542";

const links = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Services", link: "#services" },
  { title: "Portfolio", link: "#portfolio" },
  { title: "FAQ", link: "#faq" },
  { title: "Contact", link: "#contact" },
];

const legal = [
  { title: "Privacy Policy", link: "#" },
  { title: "Terms & Conditions", link: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#060a14] border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#0a0f1e]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Misbah Javed</h3>
                <p className="text-amber-400 text-xs">Real Estate AI Chatbot Specialist</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Helping real estate agencies automate customer conversations, capture qualified leads, and grow with intelligent AI chatbots.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-emerald-400 hover:border-emerald-400/30 transition-all"><MessageCircle className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/in/misbah-javed-70372b397/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-blue-400 hover:border-blue-400/30 transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="mailto:misbahjaved@email.com" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-400/30 transition-all"><Mail className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (<li key={l.title}><a href={l.link} className="text-white/50 text-sm hover:text-amber-400 transition-colors">{l.title}</a></li>))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((l) => (<li key={l.title}><a href={l.link} className="text-white/50 text-sm hover:text-amber-400 transition-colors">{l.title}</a></li>))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/50 text-xs mb-2">Get in touch</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-amber-400 transition-colors">+92 340 8575542</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Misbah Javed. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
