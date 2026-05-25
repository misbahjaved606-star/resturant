"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

const TEAM = [
  {
    name: "Marco Rossi",
    role: "Head Chef",
    bio: "With 20 years of experience in Michelin-starred kitchens across Italy and Greece, Marco brings authentic Mediterranean flavors to every dish.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
  },
  {
    name: "Elena Papadopoulos",
    role: "Head Sommelier",
    bio: "Elena's passion for wine has taken her across the Mediterranean, curating one of London's most impressive Greek and Italian wine lists.",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop",
  },
  {
    name: "James Chen",
    role: "General Manager",
    bio: "James ensures every guest experiences the warmth of Mediterranean hospitality, with meticulous attention to service excellence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const VALUES = [
  {
    title: "Fresh, Seasonal Ingredients",
    description: "We source the finest produce daily from trusted suppliers across the Mediterranean, ensuring every dish celebrates peak seasonality.",
  },
  {
    title: "Time-Honored Techniques",
    description: "Our recipes draw from generations of Mediterranean tradition, reimagined with modern culinary innovation.",
  },
  {
    title: "Warm Mediterranean Spirit",
    description: "More than a restaurant, Bennie is a place where guests become family, sharing laughter, stories, and exceptional food.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)] to-black" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--cream)] mb-6">
              Where Mediterranean
              <br />
              <span className="italic text-[var(--brand)]">Tradition</span> Meets London
            </h1>
            <p className="text-[var(--cream-muted)] text-lg leading-relaxed max-w-2xl">
              Born from a love of Mediterranean cuisine and a passion for creating memorable dining experiences, Bennie opened its doors in the heart of Fitzrovia.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                alt="Bennie Restaurant interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl text-[var(--cream)] mb-6">
                The Bennie Story
              </h2>
              <p className="text-[var(--cream-muted)] leading-relaxed mb-6">
                Bennie was founded with a simple vision: to bring the warmth, flavors, and spirit of Mediterranean coastal dining to London. Our founders, inspired by countless journeys along the shores of Greece, Italy, and Spain, wanted to create a space where guests could escape the city's bustle and immerse themselves in authentic Mediterranean hospitality.
              </p>
              <p className="text-[var(--cream-muted)] leading-relaxed mb-6">
                Every detail at Bennie has been thoughtfully curated—from our hand-selected olive oils and artisan cheeses to our carefully curated wine list featuring rare vintages from family-owned Mediterranean vineyards. Our kitchen celebrates the time-honored techniques passed down through generations, while embracing modern innovation.
              </p>
              <p className="text-[var(--cream-muted)] leading-relaxed">
                Whether you're joining us for an intimate dinner, a special celebration, or a leisurely weekend brunch, we invite you to pull up a chair, relax, and let us transport you to the sun-drenched coasts of the Mediterranean.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--surface)]">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)]">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-black/50 border border-[var(--brand)]/20 hover:border-[var(--brand)]/40 transition-all duration-300"
              >
                <h3 className="font-serif text-2xl text-[var(--cream)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--cream-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 bg-black">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
              The Team
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)]">
              The Heart of Bennie
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--cream)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--brand)] text-sm tracking-wider uppercase mb-3">
                  {member.role}
                </p>
                <p className="text-[var(--cream-muted)] text-sm leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--surface)]">
        <Container className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-6">
            Experience Bennie
          </h2>
          <p className="text-[var(--cream-muted)] text-lg mb-8 max-w-xl mx-auto">
            Join us for an unforgettable Mediterranean dining experience in the heart of Fitzrovia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--brand)] text-black font-medium tracking-wider uppercase text-sm rounded-full hover:bg-[var(--brand-light)] transition-all duration-300"
            >
              Reserve a Table
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--cream-muted)]/30 text-[var(--cream)] font-medium tracking-wider uppercase text-sm rounded-full hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
