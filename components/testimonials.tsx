"use client";

const TESTIMONIALS = [
  {
    quote:
      "An extraordinary evening from start to finish. The grilled octopus was the best I've had in London, and the private dining room made my wife's birthday truly magical.",
    author: "James R.",
    title: "Verified Google Review",
    rating: 5,
  },
  {
    quote:
      "We hosted a corporate dinner for 12 guests. The attention to detail, the impeccable service, and the exceptional food made it our best business lunch yet.",
    author: "Sarah M.",
    title: "Local Business Owner",
    rating: 5,
  },
  {
    quote:
      "Finally, a restaurant where we can bring our dog! The staff made such a fuss of her, and we enjoyed a wonderful evening without compromise.",
    author: "Michael & Emma T.",
    title: "Regular Guests",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[var(--surface)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
            Guest Experiences
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-[var(--cream)] mb-6">
            What People
            <br />
            <span className="italic text-[var(--brand)]">Are Saying</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--brand)]/10 hover:border-[var(--brand)]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[var(--brand)] text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl text-[var(--cream)] mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--brand)]/20 flex items-center justify-center">
                  <span className="text-[var(--brand)] font-serif text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[var(--cream)] font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-[var(--cream-muted)] text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-[var(--brand)]/30 hover:border-[var(--brand)] hover:bg-[var(--brand)]/5 transition-all duration-300 group"
          >
            <span className="text-2xl">G</span>
            <span className="text-[var(--cream)]">Read All Reviews on Google</span>
            <span className="text-[var(--brand)] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
