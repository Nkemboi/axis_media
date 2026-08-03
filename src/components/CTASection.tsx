import Link from "next/link";

export default function CTASection({ label = "Let's work together." }: { label?: string }) {
  const repeated = Array.from({ length: 6 }).fill(label) as string[];

  return (
    <div className="bg-axis-orange overflow-hidden py-8">
      <Link href="/contact" className="marquee-group block group">
        <div className="marquee-track flex whitespace-nowrap w-max">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex" aria-hidden={setIndex === 1}>
              {repeated.map((text, i) => (
                <span
                  key={`${setIndex}-${i}`}
                  className="font-heading font-bold text-3xl md:text-5xl text-white group-hover:text-charcoal px-6 transition-colors"
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
