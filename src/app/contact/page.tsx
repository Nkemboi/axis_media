import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Axis Media Solutions.",
};

export default function ContactPage() {
  return (
    <section className="container-wide pt-20 pb-28">
      <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-soft max-w-2xl">Let's work together.</h1>
      <p className="mt-6 max-w-xl text-platinum text-base md:text-lg">
        Tell us a little about your business and what you're looking to achieve. We reply within one business day.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-14">
        <form
          action="mailto:hello@axismediasolutions.com"
          method="POST"
          encType="text/plain"
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-platinum mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-soft placeholder:text-steel focus:border-axis-orange outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-platinum mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-soft placeholder:text-steel focus:border-axis-orange outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-platinum mb-2">Tell us about your project</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-soft placeholder:text-steel focus:border-axis-orange outline-none"
              placeholder="What are you looking to build?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-axis-orange px-7 py-3.5 font-semibold text-charcoal hover:bg-axis-gold transition-colors"
          >
            Send message
          </button>
          <p className="text-xs text-steel pt-2">
            Note: this form opens your email client. Swap in a form provider (e.g. Formspree, Resend) before launch
            for a fully in-page submission.
          </p>
        </form>

        <div className="space-y-8">
          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-steel mb-2">Email</h2>
            <p className="text-soft">hello@axismediasolutions.com</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-steel mb-2">Phone</h2>
            <p className="text-soft">+254 700 123 456</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest2 text-steel mb-2">Location</h2>
            <p className="text-soft">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}
