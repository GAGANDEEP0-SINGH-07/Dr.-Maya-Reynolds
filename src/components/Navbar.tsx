"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { drMayaProfile, navItems } from "@/content/drMayaProfile";
import Container from "./Container";

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

  // Close menu on nav link click
  const handleNavClick = () => setMenuOpen(false);

  // Lock body scroll when menu is open
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
                {drMayaProfile.name}
              </Link>

              {/* Desktop Nav */}
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

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="btn btn-medium btn-dark min-h-0 px-4 py-3 md:px-5"
                >
                  Book a Session
                </a>

                {/* Hamburger Button — mobile only */}
                <button
                  type="button"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
                >
                  <span
                    className={`block h-[2px] w-5 rounded-full bg-[hsl(var(--dark-accent-hsl))] transition-transform duration-300 ${menuOpen
                        ? "translate-y-[7px] rotate-45"
                        : ""
                      }`}
                  />
                  <span
                    className={`block h-[2px] w-5 rounded-full bg-[hsl(var(--dark-accent-hsl))] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
                      }`}
                  />
                  <span
                    className={`block h-[2px] w-5 rounded-full bg-[hsl(var(--dark-accent-hsl))] transition-transform duration-300 ${menuOpen
                        ? "-translate-y-[7px] -rotate-45"
                        : ""
                      }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-45 h-full w-[280px] bg-[hsl(var(--white-hsl))] px-8 pt-28 shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col gap-6 text-[1.1rem] font-medium text-[hsl(var(--dark-accent-hsl))]">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleNavClick}
                className="block py-1 transition-colors hover:text-[hsl(var(--accent-hsl))]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-[hsl(var(--line-hsl)/0.5)] pt-6">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="btn btn-large btn-dark w-full text-center"
          >
            Book a Session
          </a>
        </div>
      </nav>
    </>
  );
}
