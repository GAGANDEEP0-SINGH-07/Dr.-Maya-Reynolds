import { approachContent } from "@/content/approach";
import { Container } from "@/components/ui";

const profileImage = "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600";
const detailImage = "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=600";

export default function Profile() {
    return (
        <section id="approach" className="theme-light">
            <Container className="py-16 md:py-20">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="order-2 space-y-6 md:order-1 md:pr-8">
                        <p className="text-[0.86rem] font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent-hsl))]">
                            Therapy Approach
                        </p>
                        <h2 className="text-[hsl(var(--dark-accent-hsl))]">
                            A warm, grounded approach — blending CBT, EMDR, and mindfulness.
                        </h2>

                        <div className="space-y-4 text-[1.06rem] leading-relaxed text-[hsl(var(--black-hsl))]">
                            {approachContent.approachParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <ul className="grid gap-2 pt-2 text-[0.96rem] text-[hsl(var(--dark-accent-hsl))]">
                            {approachContent.processItems.map((item) => (
                                <li key={item.title} className="flex items-start gap-2">
                                    <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-hsl))]" />
                                    <div>
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-[0.95rem] text-[hsl(var(--black-hsl))]">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <a href="#professional-background" className="btn btn-medium btn-dark">
                                See How We Work Together
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative mx-auto w-full max-w-[34rem] pb-16 md:pb-20">
                            <div className="ml-auto w-[76%]">
                                <div className="arch-mask">
                                    <img
                                        src={profileImage}
                                        alt="Private therapy office with natural light"
                                        className="h-[27rem] w-full object-cover md:h-[38rem]"
                                    />
                                </div>
                            </div>

                            <div className="absolute -bottom-4 left-0 w-[36%] md:left-[6%] md:w-[30%]">
                                <div className="circle-mask border-4 border-[hsl(var(--white-hsl))]">
                                    <img
                                        src={detailImage}
                                        alt="Therapy office detail"
                                        className="aspect-square h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
