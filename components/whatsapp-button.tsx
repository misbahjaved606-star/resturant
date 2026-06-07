"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923465617880?text=Hi! I'm interested in your products at Lahore Clothes & Branded Cut Piece."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-semibold hidden sm:inline">Order on WhatsApp</span>
    </motion.a>
  );
}
