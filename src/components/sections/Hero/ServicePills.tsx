export default function ServicePills() {
    return (
        <div className="animate-rise stagger-3 space-y-3">
            <div className="flex flex-wrap gap-2">
                {[
                    "Anxiety & Panic Therapy",
                    "Trauma & EMDR",
                    "Burnout & Perfectionism",
                    "CBT & Mindfulness",
                ].map((pill) => (
                    <span key={pill} className="pill">
                        {pill}
                    </span>
                ))}
            </div>
            <div className="grid gap-3 text-[0.94rem] font-medium text-[hsl(var(--dark-accent-hsl))] md:grid-cols-2">
                <div className="flex items-center gap-2 rounded-xl bg-[hsl(var(--light-accent-hsl)/0.7)] px-5 py-3 shadow-sm">
                    <span className="block h-2 w-2 rounded-full bg-[hsl(var(--accent-hsl))]" />
                    In-person therapy in Santa Monica
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[hsl(var(--line-hsl)/0.5)] bg-[hsl(var(--white-hsl))] px-5 py-3 shadow-sm">
                    <span className="block h-2 w-2 rounded-full bg-[hsl(var(--accent-hsl))]" />
                    Secure telehealth throughout California
                </div>
            </div>
        </div>
    );
}
