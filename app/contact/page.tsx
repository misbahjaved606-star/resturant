"use client";

import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";
import { Footer } from "@/components/footer";
import { KleapForm } from "@/components/kleap-form";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-32">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--accent)] font-medium tracking-widest uppercase text-sm mb-4 block">
            Bennie Restaurant & Bar
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Get in <span className="italic text-[var(--accent)]">Touch</span>
          </h1>
          <p className="text-lg text-white/60">
            We'd love to hear from you. Whether you have a question, 
            want to make a reservation, or plan a private event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-white/60">42 Newman Street<br />Fitzrovia, London<br />W1T 1QD</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+442071234567" className="text-[var(--accent)] hover:underline">+44 20 7123 4567</a>
                  <p className="text-sm text-white/50 mt-1">For reservations and enquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:hello@bennie.co.uk" className="text-[var(--accent)] hover:underline">hello@bennie.co.uk</a>
                  <p className="text-sm text-white/50 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Opening Hours</h3>
                  <div className="text-white/60 text-sm space-y-1">
                    <p>Monday - Thursday: 12pm - 10pm</p>
                    <p>Friday - Saturday: 12pm - 11pm</p>
                    <p>Sunday: 12pm - 9pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--accent)]/30 transition-colors">
                <Instagram className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-white">@bennierestaurant</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-8">Send Us a Message</h2>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <KleapForm
                formId="contact"
                title="Contact Bennie"
                fields={[
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "subject", label: "Subject", type: "select", options: ["General Enquiry", "Reservations", "Private Hire", "Feedback", "Other"], required: true },
                  { name: "date", label: "Preferred Date (if event)", type: "text" },
                  { name: "guests", label: "Number of Guests (if event)", type: "text" },
                  { name: "message", label: "Message", type: "textarea", required: true }
                ]}
                submitText="Send Message"
                successMessage="Thank you for your message! We'll be in touch within 24 hours."
              />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-20 rounded-3xl overflow-hidden h-80 bg-[var(--surface)] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[var(--accent)] mx-auto mb-4" />
            <p className="text-white/60">42 Newman Street, Fitzrovia, London W1T 1QD</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-[var(--accent)] hover:underline">
              Open in Google Maps
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
