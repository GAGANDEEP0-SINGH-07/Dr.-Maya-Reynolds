import Link from "next/link";
import { drMayaProfile } from "@/content/drMayaProfile";
import Container from "./Container";

export default function Footer() {
  return (
    <footer id="office">
      <section className="theme-white">
        <Container className="py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <h3 className="font-[var(--font-family-heading)] text-[1.7rem] text-[hsl(var(--dark-accent-hsl))]">
                {drMayaProfile.name}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-[hsl(var(--black-hsl))] opacity-85">
                {drMayaProfile.role}
                <br />
                {drMayaProfile.officeAddress}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[1.4rem] text-[hsl(var(--dark-accent-hsl))]">Availability</h4>
              <p>
                In-person sessions
                <br />
                Santa Monica office
                <br />
                <br />
                Secure telehealth
                <br />
                California residents
              </p>
            </div>

            <div className="space-y-3 md:text-right">
              <h4 className="text-[1.4rem] text-[hsl(var(--dark-accent-hsl))]">Explore</h4>
              <p>
                <Link href="/">Home</Link>
                <br />
                <a href="#about">About</a>
                <br />
                <a href="#specialties">Services</a>
                <br />
                <a href="#approach">Approach</a>
                <br />
                <a href="#faqs">FAQ</a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="theme-light">
        <Container className="py-8 md:py-10">
          <div className="space-y-2 text-center text-[var(--small-text-size)]">
            <p className="opacity-60">
              &copy; {new Date().getFullYear()} {drMayaProfile.name}. All rights
              reserved.
            </p>
            <p className="text-[0.75rem] opacity-45">
              Built from the fictional profile details provided for Dr. Maya
              Reynolds.
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
}
