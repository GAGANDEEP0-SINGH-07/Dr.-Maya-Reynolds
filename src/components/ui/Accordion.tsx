"use client";

import { useState } from "react";

export type AccordionItem = {
    title: string;
    description: string;
};

export default function Accordion({
    items,
    iconPosition = "right",
    iconSize = 14,
    titleClassName = "",
    className = "",
    descriptionClassName = "",
}: {
    items: AccordionItem[];
    iconPosition?: "left" | "right";
    iconSize?: number;
    titleClassName?: string;
    className?: string;
    descriptionClassName?: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const isLeft = iconPosition === "left";

    const toggle = (i: number) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };

    return (
        <ul
            className={`border-y border-[hsl(var(--line-hsl)/0.64)] divide-y divide-[hsl(var(--line-hsl)/0.64)] ${className}`}
        >
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <li key={item.title}>
                        <button
                            type="button"
                            onClick={() => toggle(i)}
                            className="w-full cursor-pointer py-4 text-left"
                            aria-expanded={isOpen}
                        >
                            {isLeft ? (
                                <div className="flex items-center gap-3">
                                    <PlusIcon size={iconSize} isOpen={isOpen} />
                                    <span className={titleClassName}>{item.title}</span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between gap-3">
                                    <span className={titleClassName}>{item.title}</span>
                                    <PlusIcon size={iconSize} isOpen={isOpen} />
                                </div>
                            )}
                        </button>
                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div
                                    className={`min-w-[70%] max-w-[42rem] pb-[28px] pr-2 text-[hsl(var(--black-hsl))] ${descriptionClassName}`}
                                >
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

function PlusIcon({ size, isOpen }: { size: number; isOpen: boolean }) {
    return (
        <span
            className="relative block shrink-0 text-[hsl(var(--dark-accent-hsl))]"
            style={{ height: `${size}px`, width: `${size}px` }}
            aria-hidden
        >
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
            <span
                className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"
                    }`}
            />
        </span>
    );
}
