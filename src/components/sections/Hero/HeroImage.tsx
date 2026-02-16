const heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";

export default function HeroImage() {
    return (
        <div className="order-1 md:order-2">
            <div className="mx-auto max-w-[34rem]">
                <div className="arch-mask relative isolate overflow-hidden border-4 border-[hsl(var(--white-hsl))] shadow-2xl">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[hsl(var(--dark-accent-hsl)/0.24)] to-transparent mix-blend-multiply" />
                    <img
                        src={heroImage}
                        alt="Warm therapy office interior in Santa Monica"
                        className="h-[20rem] w-full object-cover sm:h-[28rem] md:h-[42rem]"
                    />
                    <div className="absolute bottom-5 left-5 rounded-2xl bg-[hsl(var(--white-hsl)/0.95)] px-4 py-3 text-sm font-semibold text-[hsl(var(--dark-accent-hsl))] shadow-md">
                        Calm, private office — natural light &amp; quiet setting.
                    </div>
                </div>
            </div>
        </div>
    );
}
