import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-charcoal/90 backdrop-blur border-b border-white/5">
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo-mark.png"
            alt="Axis Media Solutions"
            width={36}
            height={36}
            className="h-8 w-8"
          />
          <span className="font-heading font-bold tracking-wide text-soft text-sm md:text-base">
            AXIS <span className="text-axis-orange">MEDIA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-platinum hover:text-axis-orange transition-colors"
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

        {/* Mobile: simple link fallback, no JS menu to keep this dependency-free */}
        <Link
          href="/contact"
          className="md:hidden inline-flex items-center rounded-full bg-axis-orange px-4 py-2 text-xs font-semibold text-charcoal"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
