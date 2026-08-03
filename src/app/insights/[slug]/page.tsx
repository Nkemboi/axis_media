import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { getPost, getPosts } from "@/lib/queries";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="container-wide pt-[50px] pb-24 max-w-2xl">
        <Link href="/insights" className="text-sm text-steel hover:text-axis-orange">&larr; All insights</Link>

        <p className="text-xs text-steel mt-8">
          {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-ink mt-4">{post.title}</h1>

        <div className="mt-10 text-muted text-base leading-relaxed space-y-6">
          <p>{post.body}</p>
        </div>
      </article>

      <CTASection />
    </>
  );
}
