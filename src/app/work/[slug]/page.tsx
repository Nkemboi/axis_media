import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { getWorkItem, getWorkItems } from "@/lib/queries";

export async function generateStaticParams() {
  const items = await getWorkItems();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = await getWorkItem(params.slug);
  if (!item) return {};
  return { title: item.client, description: item.summary };
}

export default async function WorkDetailPage({ params }: { params: { slug: string } }) {
  const item = await getWorkItem(params.slug);
  if (!item) notFound();

  return (
    <>
      <section className="container-wide pt-20 pb-16">
        <Link href="/work" className="text-sm text-steel hover:text-axis-orange">&larr; Back to work</Link>

        <div className="flex items-center justify-between text-sm text-steel mt-8">
          <span>{item.client}</span>
          <span>{item.quarter}</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-soft max-w-3xl mt-4">
          {item.summary}
        </h1>

        {item.raised && (
          <p className="mt-6 inline-block text-xs uppercase tracking-widest2 text-axis-orange bg-white/5 rounded-full px-4 py-2">
            {item.raised}
          </p>
        )}

        <p className="mt-10 max-w-2xl text-platinum text-base md:text-lg leading-relaxed">
          {item.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-platinum">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
