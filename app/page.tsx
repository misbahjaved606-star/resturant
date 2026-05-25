import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { SignatureDishes } from "@/components/signature-dishes";
import { Experience } from "@/components/experience";
import { PrivateDining } from "@/components/private-dining";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">
      <Hero />
      <SocialProof />
      <SignatureDishes />
      <Experience />
      <PrivateDining />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
