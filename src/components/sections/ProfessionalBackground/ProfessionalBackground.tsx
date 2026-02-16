import { approachContent } from "@/content/approach";
import { Accordion, Container } from "@/components/ui";

export default function ProfessionalBackground() {
    return (
        <section id="professional-background" className="theme-white">
            <Container className="py-16 md:py-24">
                <div className="mx-auto max-w-[54rem]">
                    <p className="text-center text-[0.86rem] font-bold uppercase tracking-[0.15em] text-[hsl(var(--accent-hsl))]">
                        What to Expect
                    </p>
                    <h3 className="mt-3 text-center text-[hsl(var(--dark-accent-hsl))]">
                        How we work together in therapy
                    </h3>
                    <Accordion
                        items={approachContent.processItems}
                        iconPosition="right"
                        iconSize={14}
                        className="mt-8"
                        titleClassName="text-[1rem] md:text-[1.08rem]"
                    />
                </div>
            </Container>
        </section>
    );
}
