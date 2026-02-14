import About from "@/components/About";
import Challenges from "@/components/Challenges";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import Profile from "@/components/Profile";
import RevealSection from "@/components/RevealSection";
import Services from "@/components/Services";

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
