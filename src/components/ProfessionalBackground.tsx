import Accordion from "./Accordion";
import Container from "./Container";

const description =
  "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.";

const items = [
  { title: "Education", description },
  { title: "Licensure", description },
  { title: "Certifications", description },
];

export default function ProfessionalBackground() {
  return (
    <section className="theme-light">
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-[42rem]">
          <h3 className="text-center">My Professional Background</h3>
          <Accordion
            items={items}
            iconPosition="right"
            iconSize={14}
            className="mt-7"
            titleClassName="text-[1rem] md:text-[1.1rem]"
          />
        </div>
      </Container>
    </section>
  );
}
