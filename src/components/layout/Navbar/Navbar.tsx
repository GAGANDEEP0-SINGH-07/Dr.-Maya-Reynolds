"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { heroContent } from "@/content/hero";
import { Container } from "@/components/ui";
import DesktopNav from "./DesktopNav";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastY = useRef(0);

    useEffect(() => {
        const THRESHOLD = 8;
        let ticking = false;

        const update = () => {
            const y = window.scrollY;
            if (y > lastY.current + THRESHOLD) {
                setHidden(true);
            } else if (y < lastY.current - THRESHOLD) {
                setHidden(false);
            }
            lastY.current = y;
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 pt-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
                    }`}
            >
                <Container>
                    <div className="glass-bar px-5 py-3 md:px-8 md:py-4">
                        <div className="flex items-center justify-between gap-4">
                            <Link
                                href="/"
                                className="font-[var(--font-family-heading)] text-[1.3rem] font-semibold tracking-tight text-[hsl(var(--dark-accent-hsl))] md:text-[1.5rem]"
                            >
                                {heroContent.name}
                            </Link>

                            <DesktopNav />

                            <div className="flex items-center gap-3">
                                <a
                                    href="#contact"
                                    className="btn btn-medium btn-dark min-h-0 px-4 py-3 md:px-5"
                                >
                                    Book a Session
                                </a>

                                <HamburgerButton
                                    menuOpen={menuOpen}
                                    onToggle={() => setMenuOpen((v) => !v)}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

            <MobileMenu
                menuOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}
