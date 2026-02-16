import { servicesContent } from "@/content/services";
import { Container } from "@/components/ui";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section id="specialties" className="theme-white">
            <Container className="py-20 md:py-32">
                <div className="mx-auto max-w-[70rem]">
                    <div className="space-y-6 text-center">
                        <p className="text-[0.86rem] font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent-hsl))]">
                            Services
                        </p>
                        <h2 className="text-[hsl(var(--dark-accent-hsl))]">
                            Specialized therapy for anxiety, trauma, and burnout in Santa Monica.
                        </h2>
                        <p className="mx-auto max-w-[62ch] text-[1.08rem] text-[hsl(var(--black-hsl))]">
                            As a licensed clinical psychologist, Dr. Reynolds offers
                            evidence-based therapy for adults navigating the emotional weight
                            of past experiences and the relentless demands of modern life.
                        </p>
                    </div>

                    <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {servicesContent.specialtyCards.map((specialty) => (
                            <ServiceCard key={specialty.title} {...specialty} />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
