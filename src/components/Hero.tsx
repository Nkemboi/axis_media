import Link from "next/link";
import Image from "next/image";
import AxisMotif from "./AxisMotif";

const chips = [
  { label: "Branding", slug: "branding" },
  { label: "Graphic Design", slug: "graphic-design" },
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Web Design", slug: "web-design" },
  { label: "Print Design", slug: "print-design" },
  { label: "Consultancy", slug: "consultancy" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/70 to-charcoal" />
      </div>

      <div className="container-wide pt-20 pb-24 md:pt-28 md:pb-32 relative">
        <div className="flex flex-wrap gap-3 mb-10">
          {chips.map((chip) => (
            <Link
              key={chip.slug}
              href={`/services/${chip.slug}`}
              className="text-xs md:text-sm px-4 py-2 rounded-full border border-white/10 text-white bg-white/5 backdrop-blur-sm hover:bg-axis-orange hover:text-charcoal hover:border-axis-orange transition-colors"
            >
              {chip.label}
            </Link>
          ))}
        </div>

        <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl text-soft">
          Creative Solutions That{" "}
          <span className="bg-gradient-orange bg-clip-text text-transparent">Move Brands Forward</span>
        </h1>

        <p className="mt-8 max-w-xl text-white/80 text-base md:text-lg">
          We help East African businesses turn strategy into brand, and brand into growth — without the layers of
          process that slow smaller teams down.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-axis-orange px-7 py-3.5 font-semibold text-charcoal hover:bg-axis-gold transition-colors"
          >
            Start a project
          </Link>
          <Link href="/work" className="text-sm text-white/80 hover:text-axis-orange underline underline-offset-4">
            See what we've been up to
          </Link>
        </div>
      </div>

      <AxisMotif className="absolute bottom-0 left-0 w-full h-16 opacity-30" />
    </section>
  );
}
