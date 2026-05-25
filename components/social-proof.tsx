"use client";

export function SocialProof() {
  const stats = [
    { value: "4.8", suffix: "★", label: "Google Rating" },
    { value: "500+", suffix: "+", label: "Happy Guests Weekly" },
    { value: "12", suffix: "+", label: "Years in Fitzrovia" },
  ];

  const pressLogos = [
    "London Dining Guide",
    "Evening Standard",
    "Time Out London",
    "The Sunday Times",
  ];

  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 border border-[var(--brand)]/10 rounded-2xl bg-[var(--surface-elevated)] hover:border-[var(--brand)]/30 hover:shadow-xl hover:shadow-[var(--gold-glow)] transition-all duration-500 group"
            >
              <div className="font-serif text-6xl md:text-7xl text-[var(--brand)] mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
                <span className="text-4xl">{stat.suffix}</span>
              </div>
              <p className="text-[var(--cream-muted)] tracking-wider uppercase text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured In */}
        <div className="text-center">
          <p className="text-[var(--cream-muted)] text-sm tracking-widest uppercase mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {pressLogos.map((publication) => (
              <span
                key={publication}
                className="text-[var(--cream)]/40 hover:text-[var(--brand)] transition-colors duration-300 font-serif text-xl md:text-2xl italic"
              >
                {publication}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
