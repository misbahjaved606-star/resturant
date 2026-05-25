"use client";

import { Container } from "@/components/container";
import { KleapForm } from "@/components/kleap-form";

export function CTASection() {
  return (
    <section id="book" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--accent)] rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA Content */}
          <div className="text-left">
            <p className="text-[var(--brand)] text-sm tracking-[0.3em] uppercase mb-6">
              Reservations
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--cream)] mb-6 leading-tight">
              Join Us for an
              <br />
              <span className="text-[var(--brand)]">Unforgettable</span> Evening
            </h2>
            <p className="text-[var(--cream-muted)] text-lg mb-10 max-w-lg">
              Reserve your table and experience the essence of Mediterranean dining in the heart of Fitzrovia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-[var(--cream-muted)]">
                <svg className="w-5 h-5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Open Daily: 12pm - 11pm</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--cream-muted)]">
                <svg className="w-5 h-5 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>020 7123 4567</span>
              </div>
            </div>
          </div>

          {/* Right - Reservation Form */}
          <div className="bg-[var(--surface)]/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[var(--cream-subtle)]/10">
            <KleapForm
              formId="reservations"
              title="Book a Table"
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
                { name: "date", label: "Preferred Date", type: "text", required: true },
                { name: "time", label: "Preferred Time", type: "text", required: true },
                { name: "guests", label: "Number of Guests", type: "text", required: true },
                { name: "requests", label: "Special Requests", type: "textarea" }
              ]}
              submitText="Request Reservation"
              successMessage="Thank you! We will confirm your reservation shortly."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
