import type { ReactNode } from "react";

export const benefits = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
            </svg>
        ),
        label: "Evidence-Based Tools",
        description: "CBT, EMDR & mindfulness techniques grounded in research.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        label: "Depth-Oriented Insight",
        description: "Go beyond symptoms to understand the deeper patterns.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        label: "Compassionate Connection",
        description: "A warm, judgment-free space tailored to your pace.",
    },
];
