import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { getService, getServices } from "@/lib/queries";

export async function generateStaticParams() {
  const items = await getServices();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = await getService(params.slug);
  if (!item) return {};
  return { title: item.name, description: item.shortDescription };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="container-wide pt-20 pb-16">
        <Link href="/services" className="text-sm text-steel hover:text-axis-orange">&larr; All services</Link>

        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-soft max-w-3xl mt-8">
          {service.name}
        </h1>
        <p className="mt-6 max-w-2xl text-platinum text-base md:text-lg leading-relaxed">
          {service.description}
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl">
          {service.deliverables.map((item) => (
            <div key={item} className="rounded-xl bg-slate-900 border border-white/5 px-5 py-4 text-sm text-soft">
              {item}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center mt-12 rounded-full bg-axis-orange px-7 py-3.5 font-semibold text-charcoal hover:bg-axis-gold transition-colors"
        >
          Start a project
        </Link>
      </section>

      <CTASection />
    </>
  );
}
