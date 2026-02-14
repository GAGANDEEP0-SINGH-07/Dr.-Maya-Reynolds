import Container from "./Container";

const profileImage =
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg";
const flowerImage =
  "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg";

export default function Profile() {
  return (
    <section className="theme-light">
      <Container className="py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 space-y-6 md:order-1 md:pr-8">
            <h2>Hi, I&apos;m Lilac.</h2>
            <p>
              I&apos;m committed to providing a safe and supportive environment
              where we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we&apos;ll work together to navigate the
              challenges life throws your way.
            </p>
            <div>
              <a href="#contact" className="btn btn-medium btn-light">
                Let&apos;s chat
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-[34rem] pb-14 md:pb-16">
              <div className="ml-auto w-[76%]">
                <div className="arch-mask">
                  <img
                    src={profileImage}
                    alt=""
                    className="h-[27rem] w-full object-cover md:h-[38rem]"
                  />
                </div>
              </div>

              <div className="absolute -bottom-1 left-0 w-[43%] md:left-[6%] md:w-[35%]">
                <div className="circle-mask">
                  <img
                    src={flowerImage}
                    alt=""
                    className="aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
