import { challengesContent } from "@/content/challenges";
import { Container } from "@/components/ui";

const imageUrl = "/images/challenges.webp";

export default function Challenges() {
    return (
        <section className="theme-bright">
            <Container className="py-16 md:py-0">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-0">
                    <div className="order-1 md:py-12 md:pl-4">
                        <img
                            src={imageUrl}
                            alt="Therapy office seating and natural light"
                            className="w-full object-cover rounded-3xl aspect-[4/5]"
                        />
                    </div>

                    <div className="order-2 md:py-20 md:pl-12 md:pr-3">
                        <div className="space-y-5 rounded-3xl border border-[hsl(var(--line-hsl)/0.7)] bg-[hsl(var(--white-hsl))] p-6 shadow-md md:p-8">
                            <div className="space-y-3">
                                <p className="text-[0.86rem] font-bold uppercase tracking-[0.15em] text-[hsl(var(--accent-hsl))]">
                                    Common Reasons for Seeking Therapy
                                </p>
                                <h2 className="text-[hsl(var(--dark-accent-hsl))]">
                                    Looking fine on the outside doesn&apos;t mean you&apos;re okay on the inside.
                                </h2>
                                <p>
                                    These are some of the most common reasons adults in Santa Monica and throughout California begin therapy with Dr. Reynolds:
                                </p>
                            </div>

                            <ul className="list-disc space-y-2 pl-6 text-[hsl(var(--black-hsl))]">
                                {challengesContent.commonReasonsForTherapy.map((challenge) => (
                                    <li key={challenge}>{challenge}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                <span className="pill">Safety-First Pacing</span>
                                <span className="pill">Nervous System Regulation</span>
                                <span className="pill">Sustainable Progress</span>
                            </div>

                            <div className="pt-1">
                                <a href="#contact" className="btn btn-large btn-dark">
                                    Book a Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
