import type { ReactNode } from "react";

type BenefitCardProps = {
    icon: ReactNode;
    label: string;
    description: string;
};

export default function BenefitCard({ icon, label, description }: BenefitCardProps) {
    return (
        <div
            className="flex max-w-[280px] flex-col items-center gap-3 place-self-center rounded-[24px] border border-white/[0.08] bg-white/[0.07] px-5 py-6 transition-[border-color,background-color] duration-300 hover:border-[hsl(var(--accent-hsl)/0.35)] hover:bg-white/[0.1]"
        >
            {/* Icon with circular background */}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--accent-hsl)/0.12)] text-[hsl(var(--accent-hsl))]">
                {icon}
            </span>

            {/* Card title */}
            <span className="text-[14px] font-bold uppercase tracking-[1px] text-[hsl(var(--white-hsl)/0.95)]">
                {label}
            </span>

            {/* Card description */}
            <span className="text-[13px] leading-[1.5] text-[hsl(var(--white-hsl)/0.65)]">
                {description}
            </span>
        </div>
    );
}
