import { drMayaProfile } from "@/content/drMayaProfile";
import Container from "./Container";

const heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";

export default function Hero() {
  return (
    <section className="theme-white pt-32 md:pt-40">
      <Container className="pb-16 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          <div className="order-2 space-y-8 md:order-1">
            <p className="animate-rise text-[0.86rem] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--dark-accent-hsl))]">
              {drMayaProfile.role} · {drMayaProfile.officeCity}
            </p>

            <div className="space-y-6">
              <h1 className="animate-rise stagger-1 max-w-[16ch] text-[hsl(var(--dark-accent-hsl))]">
                {drMayaProfile.heroHeadline}
              </h1>
              <p className="animate-rise stagger-2 max-w-[68ch] text-[1.12rem] leading-relaxed text-[hsl(var(--black-hsl))]">
                {drMayaProfile.heroSubheading}
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

            <div className="animate-rise stagger-3 space-y-3">
              <div className="flex flex-wrap gap-2">
                {[
                  "Anxiety & Panic Therapy",
                  "Trauma & EMDR",
                  "Burnout & Perfectionism",
                  "CBT & Mindfulness",
                ].map((pill) => (
                  <span key={pill} className="pill">
                    {pill}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 text-[0.94rem] font-medium text-[hsl(var(--dark-accent-hsl))] md:grid-cols-2">
                <div className="flex items-center gap-2 rounded-xl bg-[hsl(var(--light-accent-hsl)/0.7)] px-5 py-3 shadow-sm">
                  <span className="block h-2 w-2 rounded-full bg-[hsl(var(--accent-hsl))]" />
                  In-person therapy in Santa Monica
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[hsl(var(--line-hsl)/0.5)] bg-[hsl(var(--white-hsl))] px-5 py-3 shadow-sm">
                  <span className="block h-2 w-2 rounded-full bg-[hsl(var(--accent-hsl))]" />
                  Secure telehealth throughout California
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mx-auto max-w-[34rem]">
              <div className="arch-mask relative isolate overflow-hidden border-4 border-[hsl(var(--white-hsl))] shadow-2xl">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[hsl(var(--dark-accent-hsl)/0.24)] to-transparent mix-blend-multiply" />
                <img
                  src={heroImage}
                  alt="Warm therapy office interior in Santa Monica"
                  className="h-[28rem] w-full object-cover md:h-[42rem]"
                />
                <div className="absolute bottom-5 left-5 rounded-2xl bg-[hsl(var(--white-hsl)/0.95)] px-4 py-3 text-sm font-semibold text-[hsl(var(--dark-accent-hsl))] shadow-md">
                  Calm, private office — natural light & quiet setting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
