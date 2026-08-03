import Link from "next/link";
import Image from "next/image";
import AxisMotif from "./AxisMotif";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="container-wide pt-20 pb-10">
        <h2 className="font-heading font-extrabold text-4xl md:text-6xl text-soft max-w-2xl">
          Creative Solutions That Move Brands Forward.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-6 text-xl md:text-2xl font-heading font-semibold text-soft hover:text-axis-orange transition-colors"
        >
          Get in touch
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <AxisMotif className="w-full h-8 my-14 opacity-30" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Image
              src="/logo-footer.png"
              alt="Axis Media Solutions"
              width={1313}
              height={349}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/60 text-sm max-w-xs">
              We partner with ambitious East African businesses that know great creative work fuels faster growth.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-steel mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-axis-orange">Home</Link></li>
              <li><Link href="/work" className="text-white/70 hover:text-axis-orange">Work</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-axis-orange">About</Link></li>
              <li><Link href="/insights" className="text-white/70 hover:text-axis-orange">Insights</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-axis-orange">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-steel mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/branding" className="text-white/70 hover:text-axis-orange">Branding</Link></li>
              <li><Link href="/services/web-design" className="text-white/70 hover:text-axis-orange">Web Design</Link></li>
              <li><Link href="/services/digital-marketing" className="text-white/70 hover:text-axis-orange">Digital Marketing</Link></li>
              <li><Link href="/services/print-design" className="text-white/70 hover:text-axis-orange">Print Design</Link></li>
              <li><Link href="/services/consultancy" className="text-white/70 hover:text-axis-orange">Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-steel mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>hello@axismediasolutions.com</li>
              <li>+254 700 123 456</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-steel">
          <p>Copyright &copy; {new Date().getFullYear()} Axis Media Solutions. All Rights Reserved.</p>
          <p>Creative Solutions That Move Brands Forward.</p>
        </div>
      </div>
    </footer>
  );
}
