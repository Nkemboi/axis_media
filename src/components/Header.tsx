"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The pill/blur/border only appears once you scroll, on every page alike.
  const active = scrolled;
  // Only the homepage has a dark hero behind the header before you scroll,
  // so that's the only case where the pre-scroll nav text needs to be light.
  const overlayLight = isHome && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div
        className={[
          "w-full transition-all duration-500 ease-out",
          active
            ? "max-w-[1160px] mt-3 mx-4 rounded-full bg-page/95 backdrop-blur border border-black/10 shadow-lg shadow-black/5"
            : "max-w-none mt-0 mx-0 rounded-none bg-transparent border border-transparent shadow-none",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between px-6 md:px-8 transition-all duration-500 ease-out",
            active ? "h-16" : "h-20",
          ].join(" ")}
        >
          <Link href="/" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo-full.png"
              alt="Axis Media Solutions"
              width={1440}
              height={374}
              className="h-10 md:h-11 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  overlayLight ? "text-white/90 hover:text-axis-orange" : "text-muted hover:text-axis-orange"
                }`}
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
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 transition-colors ${
              overlayLight ? "text-white" : "text-ink"
            }`}
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
          <div className={`md:hidden border-t px-6 pb-6 ${active ? "border-black/10 rounded-b-3xl bg-page" : "border-white/10 bg-charcoal/95 backdrop-blur"}`}>
            <nav className="flex flex-col pt-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base transition-colors py-3 border-b ${
                    active ? "text-muted hover:text-axis-orange border-black/5" : "text-white/90 hover:text-axis-orange border-white/10"
                  }`}
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
      </div>
    </header>
  );
}
