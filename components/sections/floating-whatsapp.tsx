"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923465617880"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
      <span className="relative flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl shadow-emerald-500/40 transition-colors">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-semibold text-sm">
          Chat with us
        </span>
      </span>
    </motion.a>
  );
}
