import Link from "next/link";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { getPosts } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Insights",
  description: "News, views, and real lessons in brand and design from Axis Media Solutions.",
};

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="container-wide pt-[50px] pb-16">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-ink max-w-3xl">Insights</h1>
        <p className="mt-6 max-w-xl text-muted text-base md:text-lg">
          News, views, and real-life lessons in brand and design.
        </p>
      </section>

      <section className="container-wide pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="rounded-2xl bg-white border border-black/10 p-6 hover:border-axis-orange/40 transition-colors"
            >
              <p className="text-xs text-steel mb-3">
                {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 className="font-heading font-semibold text-ink text-lg">{post.title}</h2>
              <p className="text-sm text-muted mt-3 line-clamp-3">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
