import { navItems } from "@/content/nav";

export default function DesktopNav() {
    return (
        <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-7 text-[0.95rem] font-medium text-[hsl(var(--black-hsl))]">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="transition-colors hover:text-[hsl(var(--accent-hsl))]"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
