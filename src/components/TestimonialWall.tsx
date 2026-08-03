import { Testimonial } from "@/types";

export default function TestimonialWall({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="rounded-2xl bg-white border border-black/10 p-8">
          <p className="text-ink text-sm md:text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-ink">{t.name}</p>
            <p className="text-xs text-steel">{t.role}, {t.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
