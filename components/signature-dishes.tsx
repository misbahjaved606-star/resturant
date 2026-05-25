"use client";

const DISHES = [
  {
    name: "Grilled Octopus",
    description:
      "Charred to perfection, served with saffron potatoes, caper berries, and a drizzle of premium olive oil",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1779724168785-signature-octopus",
    price: "£28",
  },
  {
    name: "Dry-Aged Ribeye",
    description:
      "28-day aged Scottish beef, herb butter, roasted bone marrow, and truffle chips",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1779724172682-signature-steak",
    price: "£52",
  },
  {
    name: "Handmade Pasta",
    description:
      "Fresh pappardelle, wild mushrooms, black truffle, aged parmesan, and brown butter",
    image:
      "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1779724171297-signature-pasta",
    price: "£32",
  },
];

export function SignatureDishes() {
  return (
    <section className="py-32 bg-[var(--surface)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
            The Menu
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-[var(--cream)] mb-6">
            Signature Plates
          </h2>
          <p className="text-[var(--cream-muted)] max-w-2xl mx-auto">
            Each dish tells a story of Mediterranean tradition, crafted with the
            finest seasonal ingredients and modern culinary artistry.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DISHES.map((dish, index) => (
            <div
              key={dish.name}
              className="group relative overflow-hidden rounded-2xl bg-[var(--surface-elevated)] border border-[var(--brand)]/10 hover:border-[var(--brand)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl text-[var(--cream)] group-hover:text-[var(--brand)] transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="text-[var(--brand)] font-serif text-xl">
                    {dish.price}
                  </span>
                </div>
                <p className="text-[var(--cream-muted)] leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand)]/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Menu CTA */}
        <div className="text-center mt-16">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 text-[var(--brand)] tracking-wider uppercase text-sm group"
          >
            Explore Full Menu
            <span className="w-8 h-px bg-[var(--brand)] group-hover:w-16 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
