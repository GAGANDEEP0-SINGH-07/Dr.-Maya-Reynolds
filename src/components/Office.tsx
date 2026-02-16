import Container from "./Container";
import Link from "next/link";

export default function Office() {
    // extracted IDs from the provided drive links
    const images = {
        left: "/images/office1.jpeg",
        right: "/images/office2.jpeg",
    };

    return (
        <section id="office" className="theme-light py-20 md:py-28 relative">
            <Container>
                <div className="mb-12 md:text-center max-w-[70ch] mx-auto">
                    <p className="text-[0.86rem] font-bold uppercase tracking-[0.15em] text-[hsl(var(--accent-hsl))] mb-4">
                        Our Office
                    </p>
                    <h2 className="text-[hsl(var(--dark-accent-hsl))] mb-6">
                        A Calm Space for Healing
                    </h2>
                    <p className="text-[1.07rem] leading-relaxed text-[hsl(var(--black-hsl))]">
                        Designed to be a sanctuary from the outside world, our office offers a
                        private, warm, and comfortable environment where you can feel safe to
                        explore your thoughts and feelings.
                    </p>
                </div>

                {/* 2-Column Grid for 2 Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    {/* Left Column Image */}
                    <div className="office-image-container relative h-[500px] md:h-[600px] transition-transform duration-700 hover:scale-[1.03] cursor-pointer">
                        <img
                            src={images.left}
                            alt="Therapy office interior"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Column Image */}
                    <div className="office-image-container relative h-[500px] md:h-[600px] transition-transform duration-700 hover:scale-[1.03] cursor-pointer">
                        <img
                            src={images.right}
                            alt="Detailed view of the office"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
