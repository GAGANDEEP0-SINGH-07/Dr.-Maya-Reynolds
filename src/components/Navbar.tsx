"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { drMayaProfile, navItems } from "@/content/drMayaProfile";
import Container from "./Container";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const THRESHOLD = 8; // px of scroll needed to trigger
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + THRESHOLD) {
        setHidden(true); // scrolling DOWN → hide
      } else if (y < lastY.current - THRESHOLD) {
        setHidden(false); // scrolling UP → show
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${hidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <Container>
        <div className="glass-bar px-5 py-3 md:px-8 md:py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-[var(--font-family-heading)] text-[1.3rem] font-semibold tracking-tight text-[hsl(var(--dark-accent-hsl))] md:text-[1.5rem]"
            >
              {drMayaProfile.name}
            </Link>

            <nav aria-label="Main" className="hidden md:block">
              <ul className="flex items-center gap-7 text-[0.95rem] font-medium text-[hsl(var(--black-hsl))]">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors hover:text-[hsl(var(--accent-hsl))]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a href="#contact" className="btn btn-medium btn-dark min-h-0 px-4 py-3 md:px-5">
              Book a Session
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
