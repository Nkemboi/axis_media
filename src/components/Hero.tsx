import Link from "next/link";
import AxisMotif from "./AxisMotif";

const chips = ["Branding", "Graphic Design", "Digital Marketing", "Web Design", "Print Design", "Consultancy"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy">
      <div className="container-wide pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex flex-wrap gap-3 mb-10">
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-xs md:text-sm px-4 py-2 rounded-full border border-white/10 text-platinum bg-white/5"
            >
              {chip}
            </span>
          ))}
        </div>

        <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl text-soft">
          Creative Solutions That{" "}
          <span className="bg-gradient-orange bg-clip-text text-transparent">Move Brands Forward</span>
        </h1>

        <p className="mt-8 max-w-xl text-platinum text-base md:text-lg">
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
          <Link href="/work" className="text-sm text-platinum hover:text-axis-orange underline underline-offset-4">
            See what we've been up to
          </Link>
        </div>
      </div>

      <AxisMotif className="absolute bottom-0 left-0 w-full h-16 opacity-30" />
    </section>
  );
}
