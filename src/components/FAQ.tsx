import Accordion from "./Accordion";
import Container from "./Container";

const faqImage =
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg";

const faqItems = [
  { title: "Do you take insurance?", description: "Answer goes here." },
  { title: "What are your rates?", description: "Answer goes here." },
  { title: "Do you have any openings?", description: "Answer goes here." },
];

export default function FAQ() {
  return (
    <section id="faqs" className="theme-white">
      <Container className="py-16 md:py-20">
        <div className="grid items-start gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          <div className="mx-auto w-full max-w-[30rem] md:mx-0">
            <div className="arch-mask">
              <img
                src={faqImage}
                alt=""
                className="h-[26rem] w-full object-cover md:h-[39rem]"
              />
            </div>
          </div>

          <div>
            <h2>FAQs</h2>
            <Accordion
              items={faqItems}
              iconPosition="left"
              iconSize={30}
              className="mt-7"
              titleClassName="pl-[2px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
