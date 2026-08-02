import Link from "next/link";

const tiers = [
  {
    title: "Embedded Design",
    description:
      "A senior creative embedded in your team on a simple monthly rate. We plug into your channels and your calendar so you can keep shipping.",
    cta: "Start a project",
    href: "/contact",
  },
  {
    title: "Fixed Scope Projects",
    description:
      "One-off, fixed-scope engagements for when you need something done properly — a rebrand, a new site, a campaign launch.",
    cta: "Start a project",
    href: "/contact",
  },
  {
    title: "Brand to Market",
    description:
      "Everything a growing business needs to go from unclear to unmistakable: identity, website, and campaign support, built lean.",
    cta: "Learn more",
    href: "/about",
  },
  {
    title: "Referral Program",
    description:
      "Know a business that needs us? Refer them and earn a reward when they come on board as a client.",
    cta: "hello@axismediasolutions.com",
    href: "mailto:hello@axismediasolutions.com",
  },
];

export default function EngagementTiers() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {tiers.map((tier) => (
        <div key={tier.title} className="rounded-2xl border border-white/5 bg-slate-900 p-8">
          <h3 className="font-heading font-bold text-xl text-soft mb-3">{tier.title}</h3>
          <p className="text-platinum text-sm leading-relaxed mb-6">{tier.description}</p>
          <Link href={tier.href} className="text-sm text-axis-orange hover:text-axis-gold font-medium">
            {tier.cta} &rarr;
          </Link>
        </div>
      ))}
    </div>
  );
}
