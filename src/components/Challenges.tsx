import Container from "./Container";

const imageUrl =
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg";

const challenges = [
  "Persistent feelings of sadness or hopelessness",
  "Trouble focusing or making decisions",
  "Difficulty maintaining relationships",
  "Feeling constantly exhausted or unmotivated",
  "A pervasive sense of being overwhelmed",
];

export default function Challenges() {
  return (
    <section className="theme-bright">
      <Container className="py-16 md:py-0">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-0">
          <div className="order-1">
            <img
              src={imageUrl}
              alt=""
              className="h-[23rem] w-full object-cover md:h-[44rem]"
            />
          </div>

          <div className="order-2 space-y-6 md:pl-12 md:pr-3 md:py-20">
            <div className="space-y-4">
              <h2>
                You don&apos;t have to do this all <em>alone</em>.
              </h2>
              <p>If you are facing any of these, there&apos;s hope:</p>
            </div>

            <ul className="list-disc space-y-1 pl-6">
              {challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>

            <p>
              With empathy and guidance, we&apos;ll work together to navigate
              the challenges life throws your way.
            </p>

            <div className="pt-1">
              <a href="#contact" className="btn btn-large btn-light">
                Work with me
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
