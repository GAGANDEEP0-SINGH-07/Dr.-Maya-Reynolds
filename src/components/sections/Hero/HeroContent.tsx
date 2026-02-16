import { heroContent } from "@/content/hero";

export default function HeroContent() {
    return (
        <div className="order-2 space-y-8 md:order-1">
            <p className="animate-rise text-[0.86rem] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--dark-accent-hsl))]">
                {heroContent.role} · {heroContent.officeCity}
            </p>

            <div className="space-y-6">
                <h1 className="animate-rise stagger-1 max-w-[16ch] text-[hsl(var(--dark-accent-hsl))]">
                    {heroContent.heroHeadline}
                </h1>
                <p className="animate-rise stagger-2 max-w-[68ch] text-[1.12rem] leading-relaxed text-[hsl(var(--black-hsl))]">
                    {heroContent.heroSubheading}
                </p>
            </div>

            <div className="animate-rise stagger-3 flex flex-wrap gap-3 pt-1">
                <a href="#contact" className="btn btn-large btn-dark border-none shadow-lg">
                    Schedule a Free Consultation
                </a>
                <a
                    href="#approach"
                    className="inline-flex items-center border-b border-transparent pb-1 text-[0.95rem] font-semibold uppercase tracking-[0.1em] text-[hsl(var(--dark-accent-hsl))] transition-colors hover:border-[hsl(var(--accent-hsl))] hover:text-[hsl(var(--accent-hsl))]"
                >
                    Learn About My Approach
                </a>
            </div>
        </div>
    );
}
