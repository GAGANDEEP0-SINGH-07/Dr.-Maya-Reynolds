import { contactContent } from "@/content/contact";
import { Container } from "@/components/ui";
import BenefitCard from "./BenefitCard";
import { benefits } from "./benefits";

export default function Contact() {
    return (
        <section id="contact" className="theme-dark">
            <Container className="py-20 text-center md:py-28">
                <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5">
                    {/* Sub-heading */}
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--bright-hsl))]">
                        Get Started
                    </p>

                    {/* Headline */}
                    <h3 className="leading-[1.15]">
                        Ready to take the first step
                        <br className="hidden sm:inline" />
                        {" "}toward feeling like yourself again?
                    </h3>

                    {/* ── Benefit cards row ───────────────────────────── */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                        {benefits.map((b) => (
                            <BenefitCard key={b.label} {...b} />
                        ))}
                    </div>

                    {/* CTA Button — primary focal point */}
                    <a
                        href="#contact"
                        className="mt-6 inline-block rounded-full border-none bg-[hsl(var(--accent-hsl))] px-10 py-3.5 text-[0.95rem] font-semibold text-[hsl(var(--dark-accent-hsl))] shadow-[0_6px_24px_hsl(var(--accent-hsl)/0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(var(--accent-hsl)/0.55)] hover:brightness-110 active:translate-y-0"
                    >
                        Schedule Your First Session
                    </a>

                    {/* Address — de-emphasised, below button */}
                    <p className="mt-4 text-[0.7rem] tracking-[0.06em] text-[hsl(var(--white-hsl)/0.35)]">
                        {contactContent.officeAddress}
                    </p>
                </div>
            </Container>
        </section>
    );
}
