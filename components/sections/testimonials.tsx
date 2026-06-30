"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/container";

const testimonials = [
  { name: "Sarah Mitchell", company: "Prime Property Group", rating: 5, text: "Misbah built an AI chatbot that handles all our property inquiries 24/7. We've seen a 40% increase in qualified leads since launch. Absolutely brilliant work.", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "James Carter", company: "Carter Realty", rating: 5, text: "The WhatsApp chatbot Misbah developed has transformed how we communicate with clients. Response times went from hours to instant. Highly recommended.", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Emily Roberts", company: "Roberts & Co. Properties", rating: 5, text: "Our appointment booking chatbot saves our team hours every week. Clients love the instant scheduling. Misbah understood our needs perfectly.", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "David Thompson", company: "Thompson Estates", rating: 5, text: "The lead qualification chatbot filters out time-wasters and sends us only serious buyers. It's like having an extra team member that never sleeps.", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % testimonials.length);
  const prev = () => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[idx];
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-400/20 mb-4">
            <Quote className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-100/90 font-medium">Client Feedback</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Client Testimonials</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex gap-1 mb-6 justify-center">
                {Array.from({ length: t.rating }).map((_, i) => (<Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />))}
              </div>
              <p className="text-white/80 text-lg md:text-xl text-center leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center justify-center gap-4">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/30" />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-amber-400/80 text-sm">{t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center"><ChevronLeft className="w-5 h-5" /></button>
            <div className="flex gap-2">{testimonials.map((_, i) => (<button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-amber-400 w-6" : "bg-white/20"}`} />))}</div>
            <button onClick={next} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </Container>
    </section>
  );
}
