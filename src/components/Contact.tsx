import Container from "./Container";

export default function Contact() {
  return (
    <section id="contact" className="theme-dark">
      <Container className="py-16 text-center md:py-24">
        <div className="mx-auto max-w-[48rem] space-y-5">
          <h3>Get started today.</h3>
          <p>
            Ready to take the first step towards a happier, healthier you?
            <br />
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>
          <div className="pt-1">
            <a href="#contact" className="btn btn-medium btn-dark">
              Get in touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
