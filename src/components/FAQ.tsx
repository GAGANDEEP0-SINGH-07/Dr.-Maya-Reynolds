import { drMayaProfile } from "@/content/drMayaProfile";
import Accordion from "./Accordion";
import Container from "./Container";

const faqImage = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800";

export default function FAQ() {
  return (
    <section id="faqs" className="theme-white">
      <Container className="py-16 md:py-20">
        <div className="grid items-start gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          <div className="mx-auto w-full max-w-[30rem] md:mx-0">
            <div className="arch-mask shadow-xl">
              <img
                src={faqImage}
                alt="Calm therapy room"
                className="h-[26rem] w-full object-cover md:h-[39rem]"
              />
            </div>
          </div>

          <div>
            <p className="text-[0.86rem] font-bold uppercase tracking-[0.15em] text-[hsl(var(--accent-hsl))]">
              FAQ
            </p>
            <h2 className="mt-3 text-[hsl(var(--dark-accent-hsl))]">
              Questions about therapy with Dr. Reynolds
            </h2>
            <Accordion
              items={drMayaProfile.faqItems}
              iconPosition="left"
              iconSize={26}
              className="mt-7"
              titleClassName="pl-[2px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
