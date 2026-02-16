export default function HamburgerButton({
    menuOpen,
    onToggle,
}: {
    menuOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={onToggle}
            className="relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl transition-colors duration-200 active:bg-[hsl(var(--light-accent-hsl)/0.5)] md:hidden"
        >
            <span
                className={`block h-[2px] w-5 rounded-full bg-[hsl(var(--dark-accent-hsl))] transition-all duration-300 ${menuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                    }`}
            />
            <span
                className={`block h-[2px] w-5 rounded-full bg-[hsl(var(--dark-accent-hsl))] transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : ""
                    }`}
            />
            <span
                className={`block h-[2px] w-5 rounded-full bg-[hsl(var(--dark-accent-hsl))] transition-all duration-300 ${menuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                    }`}
            />
        </button>
    );
}
