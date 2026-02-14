import Container from "./Container";

const heroImage =
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg";

export default function Hero() {
  return (
    <section className="theme-white pt-24 md:pt-28">
      <Container className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-[48rem] gap-9 md:gap-10">
          <div className="mx-auto w-[78vw] max-w-[25rem] md:w-[32vw] md:max-w-[26rem]">
            <div className="arch-mask">
              <img
                src={heroImage}
                alt=""
                className="h-[25rem] w-full object-cover md:h-[39rem]"
              />
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h1>
              Live your life
              <br />
              in full bloom
            </h1>
            <p>Therapy for Adults in Minneapolis, MN.</p>
          </div>

          <div className="text-center">
            <a href="#contact" className="btn btn-medium btn-light">
              Connect with me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
