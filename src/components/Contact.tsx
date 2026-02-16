import { drMayaProfile } from "@/content/drMayaProfile";
import Container from "./Container";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
      </svg>
    ),
    label: "Evidence-Based Tools",
    description: "CBT, EMDR & mindfulness techniques grounded in research.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: "Depth-Oriented Insight",
    description: "Go beyond symptoms to understand the deeper patterns.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "Compassionate Connection",
    description: "A warm, judgment-free space tailored to your pace.",
  },
];

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
              <div
                key={b.label}
                className="flex max-w-[280px] flex-col items-center gap-3 place-self-center rounded-[24px] border border-white/[0.08] bg-white/[0.07] px-5 py-6 transition-[border-color,background-color] duration-300 hover:border-[hsl(var(--accent-hsl)/0.35)] hover:bg-white/[0.1]"
              >
                {/* Icon with circular background */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--accent-hsl)/0.12)] text-[hsl(var(--accent-hsl))]">
                  {b.icon}
                </span>

                {/* Card title */}
                <span className="text-[14px] font-bold uppercase tracking-[1px] text-[hsl(var(--white-hsl)/0.95)]">
                  {b.label}
                </span>

                {/* Card description */}
                <span className="text-[13px] leading-[1.5] text-[hsl(var(--white-hsl)/0.65)]">
                  {b.description}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button — primary focal point */}
          <button
            type="button"
            className="mt-6 inline-block rounded-full border-none bg-[hsl(var(--accent-hsl))] px-10 py-3.5 text-[0.95rem] font-semibold text-[hsl(var(--dark-accent-hsl))] shadow-[0_6px_24px_hsl(var(--accent-hsl)/0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(var(--accent-hsl)/0.55)] hover:brightness-110 active:translate-y-0"
          >
            Schedule Your First Session
          </button>

          {/* Address — de-emphasised, below button */}
          <p className="mt-4 text-[0.7rem] tracking-[0.06em] text-[hsl(var(--white-hsl)/0.35)]">
            {drMayaProfile.officeAddress}
          </p>
        </div>
      </Container>
    </section>
  );
}
