"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

const STARTERS = [
  { name: "Burrata con Pomodori", price: "£16", description: "Creamy burrata with heritage tomatoes, aged balsamic, and basil oil" },
  { name: "Calamari Fritti", price: "£14", description: "Lightly fried squid with smoked paprika aioli and lemon" },
  { name: "Carpaccio di Manzo", price: "£18", description: "Thinly sliced beef tenderloin, truffle, capers, and rocket" },
  { name: "Gambero Rosa", price: "£19", description: "Mediterranean red prawns, grilled and served with garlic butter" },
  { name: "Zuppa di Cozze", price: "£15", description: "Fresh mussels in white wine, cherry tomato, and fennel" },
];

const MAINS = [
  { name: "Branzino al Forno", price: "£38", description: "Whole roasted sea bass with herbs, capers, and olives" },
  { name: "Polpo alla Griglia", price: "£42", description: "Grilled Octopus, saffron potatoes, sun-dried tomatoes, chorizo oil" },
  { name: "Filetto di Manzo", price: "£48", description: "10oz prime beef fillet, bone marrow butter, truffle mash" },
  { name: "Risotto ai Funghi", price: "£28", description: "Wild mushroom risotto, aged parmesan, black truffle shavings" },
  { name: "Spaghetti alle Vongole", price: "£26", description: "Handmade spaghetti, clams, garlic, white wine, chili" },
  { name: "Agnello ScottadITO", price: "£44", description: "Grilled lamb chops, mint salsa verde, roasted vegetables" },
];

const DESSERTS = [
  { name: "Tiramisù della Casa", price: "£12", description: "Our signature tiramisu with espresso-soaked savoiardi" },
  { name: "Panna Cotta", price: "£10", description: "Vanilla panna cotta with seasonal berry compote" },
  { name: "Cannoli Siciliani", price: "£11", description: "Crispy pastry tubes filled with sweet ricotta and pistachios" },
  { name: "Selezione di Formaggi", price: "£16", description: "Selection of Mediterranean cheeses with honeycomb and fig jam" },
];

const WINES = [
  { name: "Santorini Assyrtiko", region: "Greece", price: "£12/£48", description: "Crisp, mineral white with citrus notes" },
  { name: "Chianti Classico Riserva", region: "Tuscany, Italy", price: "£14/£55", description: "Medium-bodied with cherry and spice" },
  { name: "Primitivo di Manduria", region: "Puglia, Italy", price: "£13/£52", description: "Rich, velvety red with dark fruit" },
  { name: "Albariño Rías Baixas", region: "Galicia, Spain", price: "£11/£44", description: "Fresh, oceanic white with stone fruit" },
];

export default function MenuPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)] to-black" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[var(--brand)] tracking-[0.3em] uppercase text-sm mb-4">
              Our Menu
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--cream)] mb-6">
              Mediterranean
              <br />
              <span className="italic text-[var(--brand)]">Flavours</span>
            </h1>
            <p className="text-[var(--cream-muted)] text-lg leading-relaxed">
              Discover our thoughtfully curated menu featuring the finest Mediterranean ingredients, prepared with passion and served with love.
            </p>
          </div>
        </Container>
      </section>

      {/* Starters */}
      <section className="py-24 bg-black">
        <Container>
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-[var(--brand)] tracking-[0.2em] uppercase text-xs mb-2">
                To Begin
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--cream)]">
                Starters
              </h2>
            </div>
            <div className="hidden md:block h-px bg-gradient-to-r from-[var(--brand)]/50 to-transparent w-48" />
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {STARTERS.map((dish) => (
              <div key={dish.name} className="group flex justify-between items-start py-4 border-b border-[var(--brand)]/10 hover:border-[var(--brand)]/30 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-[var(--cream)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-[var(--cream-muted)] text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
                <span className="text-[var(--brand)] font-medium ml-4">{dish.price}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mains */}
      <section className="py-24 bg-[var(--surface)]">
        <Container>
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-[var(--brand)] tracking-[0.2em] uppercase text-xs mb-2">
                Heart of the Menu
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--cream)]">
                Main Courses
              </h2>
            </div>
            <div className="hidden md:block h-px bg-gradient-to-r from-[var(--brand)]/50 to-transparent w-48" />
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {MAINS.map((dish) => (
              <div key={dish.name} className="group flex justify-between items-start py-4 border-b border-[var(--brand)]/10 hover:border-[var(--brand)]/30 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-[var(--cream)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-[var(--cream-muted)] text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
                <span className="text-[var(--brand)] font-medium ml-4">{dish.price}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Desserts */}
      <section className="py-24 bg-black">
        <Container>
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-[var(--brand)] tracking-[0.2em] uppercase text-xs mb-2">
                Sweet Endings
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--cream)]">
                Desserts
              </h2>
            </div>
            <div className="hidden md:block h-px bg-gradient-to-r from-[var(--brand)]/50 to-transparent w-48" />
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {DESSERTS.map((dish) => (
              <div key={dish.name} className="group flex justify-between items-start py-4 border-b border-[var(--brand)]/10 hover:border-[var(--brand)]/30 transition-all duration-300">
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-[var(--cream)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-[var(--cream-muted)] text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
                <span className="text-[var(--brand)] font-medium ml-4">{dish.price}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Wine Selection */}
      <section className="py-24 bg-[var(--surface)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--brand)] tracking-[0.2em] uppercase text-xs mb-2">
              Cellar Selection
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--cream)] mb-4">
                Wines by the Glass
              </h2>
              <p className="text-[var(--cream-muted)] text-sm">
                Our sommelier has curated an exceptional selection of Mediterranean wines
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {WINES.map((wine) => (
                <div key={wine.name} className="p-6 rounded-xl bg-black/50 border border-[var(--brand)]/10 hover:border-[var(--brand)]/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-lg text-[var(--cream)]">
                        {wine.name}
                      </h3>
                      <p className="text-[var(--brand)] text-xs tracking-wider uppercase">
                        {wine.region}
                      </p>
                    </div>
                    <span className="text-[var(--brand)] font-medium">{wine.price}</span>
                  </div>
                  <p className="text-[var(--cream-muted)] text-sm">
                    {wine.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-[var(--cream-muted)] text-sm mt-8">
              Full wine list available upon request · Our team is happy to recommend pairings
            </p>
          </div>
        </Container>
      </section>

      {/* Dietary Info */}
      <section className="py-16 bg-black">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl text-[var(--cream)] mb-4">
              Dietary Requirements
            </h3>
            <p className="text-[var(--cream-muted)] text-sm mb-6">
              Please inform our team of any allergies or dietary requirements. Many dishes can be adapted to accommodate vegetarian, vegan, and gluten-free diets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full border border-[var(--brand)]/30 text-[var(--brand)] text-xs tracking-wider uppercase">
                Vegetarian Options Available
              </span>
              <span className="px-4 py-2 rounded-full border border-[var(--brand)]/30 text-[var(--brand)] text-xs tracking-wider uppercase">
                Gluten-Free Options
              </span>
              <span className="px-4 py-2 rounded-full border border-[var(--brand)]/30 text-[var(--brand)] text-xs tracking-wider uppercase">
                Vegan Options Available
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--surface)]">
        <Container className="text-center">
          <h3 className="font-serif text-3xl text-[var(--cream)] mb-4">
            Ready to Experience Our Menu?
          </h3>
          <p className="text-[var(--cream-muted)] mb-6">
            Reserve your table and let us take you on a Mediterranean journey.
          </p>
          <a
            href="#book"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--brand)] text-black font-medium tracking-wider uppercase text-sm rounded-full hover:bg-[var(--brand-light)] transition-all duration-300"
          >
            Book a Table
          </a>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
