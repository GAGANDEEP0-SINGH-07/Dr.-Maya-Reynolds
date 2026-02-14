import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <section className="theme-white">
        <Container className="py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr_0.65fr]">
            <div className="space-y-3">
              <h3 className="text-[2rem]">Lilac Template</h3>
              <p>
                123 Example Road
                <br />
                Minneapolis, MN
                <br />
                <br />
                <a href="http://squarespace.com">email@example.com</a>
                <br />
                <a href="http://squarespace.com">(555) 555-5555</a>
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[1.5rem]">Hours</h4>
              <p>
                Monday - Friday
                <br />
                10am - 6pm
              </p>
            </div>

            <div className="space-y-3 md:text-right">
              <h4 className="text-[1.5rem]">Find</h4>
              <p>
                <Link href="/">Home</Link>
                <br />
                <br />
                <a href="#contact">Contact</a>
                <br />
                <a href="/blog">Blog</a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="theme-light">
        <Container className="py-8 md:py-10">
          <div className="space-y-4 text-center text-[var(--small-text-size)]">
            <p className="leading-relaxed">
              <a href="/privacy-policy">Privacy & Cookies Policy</a>{" "}
              <a href="/good-faith-estimate">Good Faith Estimate</a>{" "}
              <a href="/terms-conditions">Website Terms & Conditions</a>{" "}
              <a href="/disclaimer">Disclaimer</a>
            </p>
            <p>
              Website Template Credits:{" "}
              <a href="https://www.gobloomcreative.com/">Go Bloom Creative</a>
            </p>
            <p>All Rights Reserved (c) 2024 Your Business Name Here, LLC.</p>
          </div>
        </Container>
      </section>
    </footer>
  );
}
