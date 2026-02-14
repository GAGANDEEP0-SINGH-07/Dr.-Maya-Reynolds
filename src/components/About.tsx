import Container from "./Container";

const introImage =
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg";

export default function About() {
  return (
    <section className="theme-light">
      <Container className="py-16 md:py-0">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-0">
          <div className="order-2 space-y-5 md:order-1 md:pr-10 md:py-20">
            <h2>Live a fulfilling life.</h2>
            <p>
              Life can be challenging - especially when you&apos;re trying to
              balance your personal and professional life.
            </p>
            <p>
              It&apos;s easy to feel like you&apos;re alone in facing these
              challenges, but I want you to know that I&apos;m here to help.
            </p>
            <div className="pt-1">
              <a href="#contact" className="btn btn-large btn-light">
                Get in touch
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={introImage}
              alt=""
              className="h-[22rem] w-full object-cover md:h-[42rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
