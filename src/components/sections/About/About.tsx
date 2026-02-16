import { aboutContent } from "@/content/about";
import { Container } from "@/components/ui";

const introImage = "/images/maya-office-3.png";

export default function About() {
    return (
        <section id="about" className="theme-light">
            <Container className="py-16 md:py-0">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-0">
                    <div className="order-2 space-y-6 md:order-1 md:py-24 md:pr-12">
                        <p className="text-[0.86rem] font-bold uppercase tracking-[0.15em] text-[hsl(var(--accent-hsl))]">
                            About Dr. Maya Reynolds
                        </p>
                        <h2 className="text-[hsl(var(--dark-accent-hsl))]">
                            Helping adults move through anxiety, trauma, and burnout.
                        </h2>
                        <div className="space-y-4 text-[1.07rem] leading-relaxed text-[hsl(var(--black-hsl))] max-w-[60ch]">
                            {aboutContent.aboutParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="pill">Evidence-Based Care</span>
                            <span className="pill">Warm &amp; Collaborative</span>
                            <span className="pill">Depth-Oriented Insight</span>
                        </div>
                        <div className="pt-4">
                            <a href="#specialties" className="btn btn-large btn-dark">
                                Explore My Specialties
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 p-4 md:p-10">
                        <img
                            src={introImage}
                            alt="Dr. Maya Reynolds calm therapy office"
                            className="w-full rounded-3xl object-cover shadow-lg"
                            style={{ aspectRatio: "4/5" }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
