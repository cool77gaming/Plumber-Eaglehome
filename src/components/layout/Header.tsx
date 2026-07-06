"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { CallLink } from "@/components/ContactLinks";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-brand-black text-white shadow-md">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Logo className="h-14 w-14" />
          <span className="heading-serif hidden text-lg font-bold leading-tight sm:block">
            Eagle Home
            <br />
            Improvement VA
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold uppercase tracking-wide hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <CallLink className="font-semibold text-brand-gold hover:underline" />
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md bg-brand-gold px-3 py-2 text-brand-black md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-semibold uppercase tracking-wide hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <CallLink className="font-semibold text-brand-gold" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
