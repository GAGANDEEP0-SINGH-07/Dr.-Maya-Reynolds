import { navItems } from "@/content/nav";
import NavIcon from "./NavIcon";

export default function MobileMenu({
    menuOpen,
    onClose,
}: {
    menuOpen: boolean;
    onClose: () => void;
}) {
    return (
        <>
            {/* ── Mobile Overlay ── */}
            <div
                className={`fixed inset-0 z-[55] backdrop-blur-[2px] bg-[hsl(var(--dark-accent-hsl)/0.25)] transition-opacity duration-300 md:hidden ${menuOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* ── Mobile Menu Panel ── */}
            <nav
                aria-label="Mobile navigation"
                className={`mobile-menu-panel fixed right-0 top-0 z-[60] flex h-full w-[min(300px,85vw)] flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close button at top */}
                <div className="flex items-center justify-end px-6 pt-6 pb-2">
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--light-accent-hsl)/0.5)] text-[hsl(var(--dark-accent-hsl))] transition-colors hover:bg-[hsl(var(--light-accent-hsl))]"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                {/* Brand */}
                <div className="px-8 pb-6 pt-2">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent-hsl))]">
                        Navigation
                    </p>
                </div>

                {/* Nav links */}
                <ul className="flex flex-col px-6">
                    {navItems.map((item, i) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={onClose}
                                className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-colors duration-200 hover:bg-[hsl(var(--light-accent-hsl)/0.45)]"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--light-accent-hsl)/0.7)] text-[hsl(var(--accent-hsl))] transition-colors group-hover:bg-[hsl(var(--accent-hsl)/0.15)]">
                                    <NavIcon index={i} />
                                </span>
                                <span className="text-[1rem] font-semibold text-[hsl(var(--dark-accent-hsl))]">
                                    {item.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Bottom CTA */}
                <div className="mt-auto px-8 pb-10 pt-6">
                    <div className="mb-5 h-px bg-[hsl(var(--line-hsl)/0.4)]" />
                    <a
                        href="#contact"
                        onClick={onClose}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--dark-accent-hsl))] px-6 py-4 text-[0.92rem] font-semibold tracking-[0.03em] text-[hsl(var(--white-hsl))] shadow-[0_4px_20px_hsl(var(--dark-accent-hsl)/0.3)] transition-all duration-200 hover:shadow-[0_6px_28px_hsl(var(--dark-accent-hsl)/0.4)] active:scale-[0.98]"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <path d="M16 2v4" />
                            <path d="M8 2v4" />
                            <path d="M3 10h18" />
                        </svg>
                        Book a Session
                    </a>
                    <p className="mt-4 text-center text-[0.72rem] text-[hsl(var(--black-hsl)/0.4)]">
                        Free 15-min consultation
                    </p>
                </div>
            </nav>
        </>
    );
}
