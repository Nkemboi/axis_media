import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide py-32 text-center">
      <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-ink">Page not found</h1>
      <p className="mt-6 text-muted">The page you're looking for doesn't exist or has moved.</p>
      <Link
        href="/"
        className="inline-flex items-center mt-10 rounded-full bg-axis-orange px-7 py-3.5 font-semibold text-charcoal hover:bg-axis-gold transition-colors"
      >
        Back to home
      </Link>
    </section>
  );
}
