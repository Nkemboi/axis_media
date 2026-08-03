import Link from "next/link";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { getServices } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, graphic design, digital marketing, web design, print design, and consultancy from Axis Media Solutions.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="container-wide pt-[110px] pb-16">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-ink max-w-3xl">What we do</h1>
        <p className="mt-6 max-w-xl text-muted text-base md:text-lg">
          Six disciplines, one coherent brand system. We help you focus on the work that actually moves the needle.
        </p>
      </section>

      <section className="container-wide pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-2xl border border-black/10 bg-white p-8 hover:border-axis-orange/40 transition-colors"
            >
              <h2 className="font-heading font-bold text-xl text-ink">{service.name}</h2>
              <p className="text-sm text-muted mt-3">{service.shortDescription}</p>
              <span className="inline-block mt-6 text-sm text-axis-orange">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
