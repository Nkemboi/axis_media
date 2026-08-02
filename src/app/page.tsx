import Link from "next/link";
import Hero from "@/components/Hero";
import WorkCard from "@/components/WorkCard";
import TestimonialWall from "@/components/TestimonialWall";
import EngagementTiers from "@/components/EngagementTiers";
import CTASection from "@/components/CTASection";
import AxisMotif from "@/components/AxisMotif";
import { getWorkItems, getServices, getTestimonials, getPosts } from "@/lib/queries";

export default async function HomePage() {
  const [work, services, testimonials, posts] = await Promise.all([
    getWorkItems(),
    getServices(),
    getTestimonials(),
    getPosts(),
  ]);

  const featured = work.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="container-wide py-20 md:py-28">
        <h2 className="font-heading font-bold text-2xl md:text-3xl max-w-2xl text-soft">
          Since 2021, our creative work has helped businesses across East Africa launch, rebrand, and grow.
        </h2>
        <Link href="/work" className="inline-block mt-6 text-axis-orange hover:text-axis-gold text-sm font-medium">
          Find out how we do it &rarr;
        </Link>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {featured.map((item, i) => (
            <WorkCard key={item.slug} item={item} size={i === 0 ? "large" : "normal"} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-axis-orange px-7 py-3.5 font-semibold text-charcoal hover:bg-axis-gold transition-colors"
          >
            Start a project
          </Link>
          <Link href="/work" className="text-sm text-platinum hover:text-axis-orange underline underline-offset-4">
            Or view more work
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 py-20 md:py-28">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl max-w-2xl text-soft">What we do</h2>
          <p className="mt-4 max-w-xl text-platinum text-sm md:text-base">
            We turn early ideas and growing businesses into brands people remember — by focusing on the work that
            actually moves the needle.
          </p>
          <Link href="/contact" className="inline-block mt-4 text-axis-orange hover:text-axis-gold text-sm font-medium">
            Tell us about your business &rarr;
          </Link>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-white/5 bg-charcoal p-6 hover:border-axis-orange/40 transition-colors"
              >
                <h3 className="font-heading font-semibold text-soft">{service.name}</h3>
                <p className="text-xs text-steel mt-2">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <h2 className="font-heading font-bold text-2xl md:text-3xl max-w-2xl text-soft">
          Hear it from the ones who are thriving today.
        </h2>
        <p className="mt-4 max-w-xl text-platinum text-sm md:text-base">
          We've helped clients across East Africa sharpen their brand, launch new products, and grow into new
          markets.
        </p>
        <div className="mt-12">
          <TestimonialWall testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-slate-900 py-20 md:py-28">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl max-w-2xl text-soft">
            Tight timelines. High stakes. We're built for growing businesses that just need to get to the point.
          </h2>
          <div className="mt-12">
            <EngagementTiers />
          </div>
        </div>
      </section>

      <CTASection />

      <section className="container-wide py-20 md:py-28">
        <h2 className="font-heading font-bold text-2xl md:text-3xl max-w-2xl text-soft">Insights</h2>
        <p className="mt-4 max-w-xl text-platinum text-sm md:text-base">
          News, views, and real lessons in brand and design.
        </p>
        <Link href="/insights" className="inline-block mt-4 text-axis-orange hover:text-axis-gold text-sm font-medium">
          See what we have to say &rarr;
        </Link>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="rounded-2xl bg-slate-900 border border-white/5 p-6 hover:border-axis-orange/40 transition-colors"
            >
              <h3 className="font-heading font-semibold text-soft text-lg">{post.title}</h3>
              <p className="text-sm text-platinum mt-3 line-clamp-3">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="rounded-3xl bg-gradient-orange p-12 md:p-16 text-center relative overflow-hidden">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal">Less process, more progress.</h2>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 rounded-full bg-charcoal px-7 py-3.5 font-semibold text-soft hover:bg-slate-900 transition-colors"
          >
            Ready when you are
          </Link>
          <AxisMotif className="absolute -bottom-4 left-0 w-full h-16 opacity-20" />
        </div>
      </section>
    </>
  );
}
