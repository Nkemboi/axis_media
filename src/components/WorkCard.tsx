import Link from "next/link";
import { WorkItem } from "@/types";

export default function WorkCard({ item, size = "normal" }: { item: WorkItem; size?: "normal" | "large" }) {
  const content = (
    <div
      className={`group relative rounded-2xl bg-white border border-black/10 overflow-hidden hover:border-axis-orange/40 transition-colors ${
        size === "large" ? "p-10 md:p-14" : "p-8"
      }`}
    >
      <div className="flex items-center justify-between text-xs text-steel mb-4">
        <span>{item.client}</span>
        <span>{item.quarter}</span>
      </div>
      <p className={`text-ink font-medium ${size === "large" ? "text-xl md:text-2xl" : "text-base"}`}>
        {item.summary}
      </p>
      {item.raised && (
        <p className="mt-4 text-xs uppercase tracking-widest2 text-axis-orange">{item.raised}</p>
      )}
      {item.comingSoon && (
        <p className="mt-4 text-xs uppercase tracking-widest2 text-steel">Coming Soon</p>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="text-[11px] px-3 py-1 rounded-full bg-black/5 text-muted">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (item.comingSoon) return content;

  return (
    <Link href={`/work/${item.slug}`} className="block">
      {content}
    </Link>
  );
}
