import Link from "next/link";
import Image from "next/image";
import AxisMotif from "./AxisMotif";

export default function Footer() {
  return (
    <footer className="bg-section-alt border-t border-black/5">
      <div className="container-wide py-16">
        <AxisMotif className="w-full h-8 mb-12 opacity-40" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Image
              src="/logo-full.png"
              alt="Axis Media Solutions"
              width={1422}
              height={417}
              className="h-9 w-auto mb-4"
            />
            <p className="text-muted text-sm max-w-xs">
              We partner with ambitious East African businesses that know great creative work fuels faster growth.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-steel mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted hover:text-axis-orange">Home</Link></li>
              <li><Link href="/work" className="text-muted hover:text-axis-orange">Work</Link></li>
              <li><Link href="/about" className="text-muted hover:text-axis-orange">About</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-axis-orange">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-steel mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/branding" className="text-muted hover:text-axis-orange">Branding</Link></li>
              <li><Link href="/services/web-design" className="text-muted hover:text-axis-orange">Web Design</Link></li>
              <li><Link href="/services/digital-marketing" className="text-muted hover:text-axis-orange">Digital Marketing</Link></li>
              <li><Link href="/services/print-design" className="text-muted hover:text-axis-orange">Print Design</Link></li>
              <li><Link href="/services/consultancy" className="text-muted hover:text-axis-orange">Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest2 text-steel mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>hello@axismediasolutions.com</li>
              <li>+254 700 123 456</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-steel">
          <p>Copyright &copy; {new Date().getFullYear()} Axis Media Solutions. All Rights Reserved.</p>
          <p>Creative Solutions That Move Brands Forward.</p>
        </div>
      </div>
    </footer>
  );
}
