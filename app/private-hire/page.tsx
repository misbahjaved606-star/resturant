"use client";

import { Container } from "@/components/container";
import { KleapForm } from "@/components/kleap-form";
import { Footer } from "@/components/footer";

const SPACES = [
  {
    name: "The Main Dining Room",
    capacity: "Up to 60 guests",
    description: "Our elegant main space with soaring ceilings, ambient lighting, and stunning artwork creates the perfect backdrop for large celebrations and corporate events.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=500&fit=crop",
  },
  {
    name: "The Private Dining Room",
    capacity: "Up to 24 guests",
    description: "An intimate escape with bespoke menus, dedicated service, and a secluded atmosphere ideal for wedding receptions, anniversaries, and exclusive dinners.",
    image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&h=500&fit=crop",
  },
  {
    name: "The Chef's Table",
    capacity: "Up to 10 guests",
    description: "A once-in-a-lifetime experience at the heart of the kitchen, where our culinary team crafts a personalized tasting menu just for your party.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=500&fit=crop",
  },
];

const SERVICES = [
  "Customized Mediterranean tasting menus",
  "Wine pairing recommendations from our sommelier",
  "Dedicated event coordinator",
  "AV equipment for presentations",
  "Floral arrangements and decor",
  "Champagne receptions",
  "Live entertainment options",
  "Photography services",
];

export default function PrivateHirePage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=1600&h=900&fit=crop"
            alt="Private dining at Bennie"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
              Exclusive Hire
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--cream)] mb-6">
              Private Dining
              <br />
              <span className="italic text-[var(--brand)]">& Events</span>
            </h1>
            <p className="text-[var(--cream-muted)] text-lg leading-relaxed max-w-2xl">
              Create unforgettable moments in our elegant private spaces. From intimate gatherings to grand celebrations, Bennie offers bespoke experiences tailored to your vision.
            </p>
          </div>
        </Container>
      </section>

      {/* Spaces */}
      <section className="py-24 bg-black">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
              Our Spaces
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)]">
              Find Your Perfect Setting
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {SPACES.map((space) => (
              <div
                key={space.name}
                className="group rounded-2xl overflow-hidden border border-[var(--brand)]/10 hover:border-[var(--brand)]/30 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-[var(--surface)]">
                  <p className="text-[var(--brand)] text-sm tracking-wider uppercase mb-2">
                    {space.capacity}
                  </p>
                  <h3 className="font-serif text-2xl text-[var(--cream)] mb-3">
                    {space.name}
                  </h3>
                  <p className="text-[var(--cream-muted)] text-sm leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--surface)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
                Bespoke Service
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-6">
                Every Detail,
                <br />
                <span className="italic text-[var(--brand)]">Curated</span>
              </h2>
              <p className="text-[var(--cream-muted)] leading-relaxed mb-8">
                Our dedicated events team will work closely with you to create a truly memorable experience. From customized menus to thoughtful decorations, we handle every detail.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {SERVICES.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--brand)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[var(--cream-muted)] text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop"
                alt="Elegant event setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 bg-black">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
                Get in Touch
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-6">
                Plan Your Event
              </h2>
              <p className="text-[var(--cream-muted)] leading-relaxed">
                Tell us about your vision and we will create a bespoke proposal tailored to your needs.
              </p>
            </div>
            <div className="bg-[var(--surface)]/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[var(--brand)]/10">
              <KleapForm
                formId="private-hire-enquiry"
                title="Private Hire Enquiry"
                fields={[
                  { name: "name", label: "Full Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                  { name: "phone", label: "Phone Number", type: "tel", required: true },
                  { name: "event_type", label: "Event Type", type: "select", options: ["Corporate Event", "Wedding Reception", "Birthday Celebration", "Private Dinner", "Other"], required: true },
                  { name: "guests", label: "Expected Guests", type: "text", required: true },
                  { name: "date", label: "Preferred Date", type: "text", required: true },
                  { name: "budget", label: "Budget Range", type: "select", options: ["2,000 - 5,000", "5,000 - 10,000", "10,000 - 20,000", "20,000+"], required: true },
                  { name: "message", label: "Tell Us More", type: "textarea" }
                ]}
                submitText="Submit Enquiry"
                successMessage="Thank you for your enquiry! Our events team will be in touch within 24 hours."
              />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
