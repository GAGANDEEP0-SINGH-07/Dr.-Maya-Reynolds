import { Navbar, Footer } from "@/components/layout";
import { Container, RevealSection } from "@/components/ui";
import {
  Hero,
  About,
  Challenges,
  Services,
  Office,
  Profile,
  ProfessionalBackground,
  FAQ,
  Contact,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RevealSection>
          <About />
        </RevealSection>
        <RevealSection direction="left">
          <Challenges />
        </RevealSection>
        <RevealSection>
          <Services />
        </RevealSection>
        <RevealSection>
          <Office />
        </RevealSection>
        <RevealSection direction="right">
          <Profile />
        </RevealSection>
        <RevealSection>
          <ProfessionalBackground />
        </RevealSection>
        <RevealSection direction="left">
          <FAQ />
        </RevealSection>
        <RevealSection>
          <Contact />
        </RevealSection>
      </main>
      <RevealSection>
        <Footer />
      </RevealSection>
    </>
  );
}
