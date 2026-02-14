import { drMayaProfile } from "@/content/drMayaProfile";
import Container from "./Container";

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
            {drMayaProfile.specialtyCards.map((specialty) => (
              <li
                key={specialty.title}
                className="group card-surface flex flex-col rounded-[1.8rem] p-6 transition-all hover:-translate-y-1.5 hover:shadow-2xl md:p-8"
              >
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={specialty.image}
                    alt={`Representation of ${specialty.title}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: specialty.objectPosition }}
                  />
                </div>
                <h3 className="mb-4 text-[1.5rem] leading-tight text-[hsl(var(--dark-accent-hsl))]">
                  {specialty.title}
                </h3>
                <p className="text-[0.98rem] leading-relaxed text-[hsl(var(--black-hsl))]">
                  {specialty.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
