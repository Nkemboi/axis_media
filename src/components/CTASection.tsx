import Link from "next/link";

export default function CTASection({ label = "Let's work together." }: { label?: string }) {
  const repeated = Array.from({ length: 8 }).fill(label) as string[];
  return (
    <div className="border-y border-white/5 bg-slate-900 overflow-hidden py-8">
      <Link href="/contact" className="block">
        <div className="flex whitespace-nowrap animate-none">
          {repeated.map((text, i) => (
            <span
              key={i}
              className="font-heading font-bold text-3xl md:text-5xl text-soft/20 hover:text-axis-orange px-6 transition-colors"
            >
              {text}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
