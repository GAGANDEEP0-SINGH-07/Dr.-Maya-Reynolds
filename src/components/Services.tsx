import Container from "./Container";

const specialties = [
  {
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg",
    objectPosition: "14.2% 57.6%",
  },
  {
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg",
    objectPosition: "53.6% 100%",
  },
  {
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg",
    objectPosition: "50% 50%",
  },
];

export default function Services() {
  return (
    <section className="theme-white">
      <Container className="py-16 md:py-28">
        <div className="mx-auto max-w-[70rem]">
          <h2 className="text-center">My Specialties</h2>

          <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {specialties.map((specialty) => (
              <li
                key={specialty.title}
                className="theme-light p-5 md:min-h-[34rem] md:p-6"
              >
                <h3 className="text-[2rem] leading-[1.2]">{specialty.title}</h3>
                <p className="mt-[10%]">{specialty.description}</p>
                <div className="mt-[10%] w-3/4">
                  <div className="circle-mask">
                    <img
                      src={specialty.image}
                      alt=""
                      className="aspect-square object-cover"
                      style={{ objectPosition: specialty.objectPosition }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
