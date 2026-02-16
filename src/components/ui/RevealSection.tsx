"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps children and triggers a scroll-reveal animation when the
 * element scrolls into view. Uses IntersectionObserver internally.
 */
export default function RevealSection({
    children,
    className = "",
    direction = "up",
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    direction?: "up" | "left" | "right";
    delay?: 0 | 1 | 2 | 3;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add will-change just before animation
                    el.style.willChange = 'transform, opacity';

                    // Trigger animation
                    el.classList.add("in-view");

                    // Remove will-change and transitions after animation completes
                    const cleanup = () => {
                        el.style.willChange = 'auto';
                        el.classList.add('revealed');
                        el.removeEventListener('transitionend', cleanup);
                    };

                    el.addEventListener('transitionend', cleanup);

                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const revealClass =
        direction === "left"
            ? "reveal-left"
            : direction === "right"
                ? "reveal-right"
                : "reveal";

    const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

    return (
        <div ref={ref} className={`${revealClass} ${delayClass} ${className}`}>
            {children}
        </div>
    );
}
