import { NavBar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { Portfolio } from "@/components/sections/portfolio";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { WhyChooseMe } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { BackToTop } from "@/components/sections/back-to-top";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Portfolio />
      <Features />
      <Process />
      <WhyChooseMe />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </main>
  );
}
