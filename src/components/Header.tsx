"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur border-b border-black/5">
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo-full.png"
            alt="Axis Media Solutions"
            width={1422}
            height={417}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-axis-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-axis-orange px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-axis-gold transition-colors"
        >
          Start a project
        </Link>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-black/5 bg-page">
          <nav className="container-wide flex flex-col py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-muted hover:text-axis-orange transition-colors py-3 border-b border-black/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-axis-orange px-5 py-3 mt-5 text-sm font-semibold text-charcoal"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
