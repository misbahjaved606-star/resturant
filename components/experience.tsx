"use client";

const EXPERIENCES = [
  {
    title: "Intimate Date Nights",
    description:
      "Candlelit tables, curated wine pairings, and an atmosphere designed for romance. Let us create an evening to remember.",
    icon: "♡",
  },
  {
    title: "Celebratory Dinners",
    description:
      "Birthdays, anniversaries, promotions — mark life's milestones with exceptional food and impeccable service.",
    icon: "★",
  },
  {
    title: "Family Gatherings",
    description:
      "Spacious tables, welcoming atmosphere, and a menu that delights every generation. Little ones are always welcome.",
    icon: "⌂",
  },
  {
    title: "Business Luncheons",
    description:
      "Private corners, refined menu options, and efficient service. Where deals are sealed over extraordinary dishes.",
    icon: "◎",
  },
  {
    title: "Brunch Culture",
    description:
      "Weekend gatherings with bottomless options,共享 plates, and the perfect atmosphere for long, lazy afternoons.",
    icon: "☀",
  },
  {
    title: "Dog-Friendly Evenings",
    description:
      "Your four-legged companions are welcome in our bar area. Water bowls, treats, and a warm welcome await.",
    icon: "♺",
  },
];

export function Experience() {
  return (
    <section className="py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
            More Than Dining
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-[var(--text-primary)] mb-6">
            Every Visit Is
            <br />
            <span className="italic text-[var(--brand)]">An Experience</span>
          </h2>
          <p className="text-[var(--cream-muted)] text-lg">
            Beyond exceptional food, Bennie offers moments crafted for connection,
            celebration, and comfort. Whatever brings you through our doors.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.title}
              className="group p-8 rounded-2xl bg-[var(--surface)] border border-[var(--brand)]/10 hover:border-[var(--brand)]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 transition-all duration-500"
            >
              <span className="text-4xl text-[var(--brand)] mb-6 block group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
              </span>
              <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-4 group-hover:text-[var(--brand)] transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-[var(--cream-muted)] leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
