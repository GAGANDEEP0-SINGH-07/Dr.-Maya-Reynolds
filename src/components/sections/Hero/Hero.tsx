import { Container } from "@/components/ui";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ServicePills from "./ServicePills";

export default function Hero() {
    return (
        <section className="theme-white pt-32 md:pt-40">
            <Container className="pb-16 md:pb-24">
                <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
                    <div className="order-2 space-y-8 md:order-1">
                        <HeroContent />
                        <ServicePills />
                    </div>

                    <HeroImage />
                </div>
            </Container>
        </section>
    );
}
