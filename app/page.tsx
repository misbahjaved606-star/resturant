import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <About />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
