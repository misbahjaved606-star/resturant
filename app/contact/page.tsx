"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { KleapForm } from "@/components/kleap-form";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#faf8f5]" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920')] bg-cover bg-center opacity-30"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-100 mb-4">Get in Touch</h1>
          <p className="text-amber-200/70 text-lg">We'd love to hear from you</p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1815] mb-3">Contact Information</h2>
              <p className="text-[#1a1815]/60 text-sm md:text-base">Visit us, call us, or send us a message. We look forward to welcoming you.</p>
            </div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 p-4 md:p-6 rounded-2xl bg-white border border-[#c9a962]/20 hover:shadow-xl hover:border-[#c9a962]/40 cursor-pointer group"
            >
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9a962]/20 transition-colors"
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#c9a962]" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-[#1a1815] mb-1">Location</h3>
                <p className="text-[#1a1815]/60 text-sm md:text-base">42 Newman Street<br />Fitzrovia, London<br />W1T 1QD</p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 p-4 md:p-6 rounded-2xl bg-white border border-[#c9a962]/20 hover:shadow-xl hover:border-[#c9a962]/40 cursor-pointer group"
            >
              <motion.div 
                whileHover={{ rotate: -5, scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9a962]/20 transition-colors"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#c9a962]" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-[#1a1815] mb-1">Phone</h3>
                <a href="tel:+442071234567" className="text-[#c9a962] hover:underline text-sm md:text-base">+44 20 7123 4567</a>
                <p className="text-xs md:text-sm text-[#1a1815]/50 mt-1">For reservations and enquiries</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 p-4 md:p-6 rounded-2xl bg-white border border-[#c9a962]/20 hover:shadow-xl hover:border-[#c9a962]/40 cursor-pointer group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9a962]/20 transition-colors"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#c9a962]" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-[#1a1815] mb-1">Email</h3>
                <a href="mailto:hello@bennie.co.uk" className="text-[#c9a962] hover:underline text-sm md:text-base">hello@bennie.co.uk</a>
                <p className="text-xs md:text-sm text-[#1a1815]/50 mt-1">We respond within 24 hours</p>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 p-4 md:p-6 rounded-2xl bg-white border border-[#c9a962]/20 hover:shadow-xl hover:border-[#c9a962]/40 cursor-pointer group"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9a962]/20 transition-colors"
              >
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#c9a962]" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-[#1a1815] mb-1">Opening Hours</h3>
                <div className="text-[#1a1815]/60 text-xs md:text-sm space-y-1">
                  <p>Monday - Thursday: 12pm - 10pm</p>
                  <p>Friday - Saturday: 12pm - 11pm</p>
                  <p>Sunday: 12pm - 9pm</p>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="pt-2">
              <h3 className="font-semibold text-[#1a1815] mb-4">Follow Us</h3>
              <motion.a 
                href="https://instagram.com/bennierestaurant" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c9a962] text-white hover:bg-[#1a1815] transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>@bennierestaurant</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1a1815] mb-6 md:mb-8">Send Us a Message</h2>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 rounded-3xl bg-white border border-[#c9a962]/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <KleapForm
                formId="contact"
                title="Contact Bennie"
                fields={[
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "subject", label: "Subject", type: "select", options: ["General Enquiry", "Reservations", "Private Hire", "Feedback", "Other"], required: true },
                  { name: "message", label: "Message", type: "textarea", required: true }
                ]}
                submitText="Send Message"
                successMessage="Thank you for your message! We'll be in touch within 24 hours."
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-20 rounded-3xl overflow-hidden h-64 md:h-80 bg-[#f5f0e8] border border-[#c9a962]/20 flex items-center justify-center"
        >
          <div className="text-center px-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-[#c9a962] mx-auto mb-4" />
            </motion.div>
            <p className="text-[#1a1815]/60 text-sm md:text-base mb-2">42 Newman Street, Fitzrovia, London W1T 1QD</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-[#c9a962] hover:underline text-sm md:text-base">
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
