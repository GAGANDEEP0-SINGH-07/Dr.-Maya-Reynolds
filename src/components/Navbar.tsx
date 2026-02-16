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

  const handleNavClick = () => setMenuOpen(false);

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
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-[55] backdrop-blur-[2px] bg-[hsl(var(--dark-accent-hsl)/0.25)] transition-opacity duration-300 md:hidden ${menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
        onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
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
                onClick={handleNavClick}
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
            onClick={handleNavClick}
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

/* Compact nav icons for each link */
function NavIcon({ index }: { index: number }) {
  const icons = [
    // About
    <svg key="about" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>,
    // Services
    <svg key="services" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
      <path d="M9 12l2 2 4-4" />
    </svg>,
    // Approach
    <svg key="approach" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>,
    // FAQ
    <svg key="faq" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>,
    // Contact
    <svg key="contact" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>,
  ];
  return icons[index] || icons[0];
}
