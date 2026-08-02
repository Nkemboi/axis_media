import { Metadata } from "next";
import WorkCard from "@/components/WorkCard";
import CTASection from "@/components/CTASection";
import { getWorkItems } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Axis Media Solutions across branding, web design, and digital marketing.",
};

export default async function WorkPage() {
  const items = await getWorkItems();

  return (
    <>
      <section className="container-wide pt-20 pb-16">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-soft max-w-3xl">Our Work</h1>
        <p className="mt-6 max-w-xl text-platinum text-base md:text-lg">
          A selection of brand, web, and campaign work for businesses across East Africa.
        </p>
      </section>

      <section className="container-wide pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
