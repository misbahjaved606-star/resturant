"use client";

const PRIVATE_DINING_IMAGE = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1779724172446-private-dining";

const EVENT_TYPES = [
  {
    title: "Corporate Gatherings",
    description: "Impress clients and reward teams in an elegant private setting",
  },
  {
    title: "Wedding Receptions",
    description: "Intimate celebrations with bespoke menus and dedicated service",
  },
  {
    title: "Birthday Celebrations",
    description: "Milestone moments deserve an extraordinary backdrop",
  },
  {
    title: "Exclusive Dinners",
    description: "Private chef's table experiences for discerning diners",
  },
];

export function PrivateDining() {
  return (
    <section className="py-32 bg-[#fdfcfa]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={PRIVATE_DINING_IMAGE}
                alt="Private dining room at Bennie"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--brand)] text-black px-8 py-4 rounded-xl shadow-xl">
              <p className="font-serif text-2xl">Up to 24</p>
              <p className="text-sm uppercase tracking-wider">Guests</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
              Exclusive Hire
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[var(--text-primary)] mb-6">
              Private Dining
              <br />
              <span className="italic text-[var(--brand)]">& Events</span>
            </h2>
            <p className="text-[var(--cream-muted)] text-lg mb-8 leading-relaxed">
              Our private dining room offers an intimate escape for celebrations,
              corporate gatherings, and special occasions. With bespoke menus,
              dedicated service, and an atmosphere of refined elegance.
            </p>

            {/* Event Types */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {EVENT_TYPES.map((event) => (
                <div
                  key={event.title}
                  className="p-6 rounded-xl bg-[#c9a962] border border-[var(--brand)]/10 hover:border-[var(--brand)]/30 transition-all duration-300 group"
                >
                  <h4 className="font-serif text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-[var(--cream-muted)] text-sm">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/private-hire"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--brand)] text-[var(--brand)] font-medium tracking-wider uppercase text-sm rounded-full hover:bg-[var(--brand)] hover:text-black transition-all duration-300"
            >
              Enquire Now
              <span className="w-2 h-2 bg-current rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
