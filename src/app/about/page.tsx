import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Axis Media Solutions is a Nairobi-based creative agency helping businesses build brands that last.",
};

const values = ["Creativity", "Excellence", "Innovation", "Integrity", "Results"];

export default function AboutPage() {
  return (
    <>
      <section className="container-wide pt-[110px] pb-16">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-ink max-w-3xl">
          Creative Solutions That Move Brands Forward.
        </h1>
        <p className="mt-6 max-w-2xl text-muted text-base md:text-lg leading-relaxed">
          Axis Media Solutions is a Nairobi-based creative agency. We exist to empower businesses with brand and
          digital work that's bold, modern, and strategic — built for founders and teams who need to move fast
          without cutting corners.
        </p>
      </section>

      <section className="bg-section-alt py-20">
        <div className="container-wide grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-bold text-2xl text-ink mb-4">Our mission</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              To empower businesses across East Africa with creative work that builds trust, drives growth, and
              holds up under scrutiny — from a first pitch deck to a fully scaled brand.
            </p>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl text-ink mb-4">Our vision</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              To be the most trusted creative agency in East Africa — known for work that's as strategic as it is
              well designed.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-ink mb-10">What we stand for</h2>
        <div className="flex flex-wrap gap-3">
          {values.map((value) => (
            <span key={value} className="text-sm px-5 py-2.5 rounded-full border border-black/10 bg-white text-muted">
              {value}
            </span>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
