import { WorkItem, Service, Testimonial, Post } from "@/types";

export const services: Service[] = [
  {
    slug: "branding",
    name: "Branding",
    shortDescription: "Identity systems built to earn trust fast.",
    description:
      "We shape names, marks, colour, and voice into a single coherent identity — one that reads as credible from the first pitch deck to the hundredth customer touchpoint.",
    deliverables: ["Brand strategy", "Logo & identity system", "Colour & type system", "Brand guidelines"],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    shortDescription: "Visual assets that stay on-brand at scale.",
    description:
      "From pitch decks to social templates, we produce the everyday visual assets growing teams need — consistent, reusable, and built to hand off to your own team.",
    deliverables: ["Pitch decks", "Social templates", "Marketing collateral", "Asset libraries"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortDescription: "Campaigns that turn attention into pipeline.",
    description:
      "We plan and design campaigns across paid, social, and email — grounded in the same brand system so every touchpoint compounds instead of competing.",
    deliverables: ["Campaign strategy", "Social content", "Email design", "Performance creative"],
  },
  {
    slug: "web-design",
    name: "Web Design",
    shortDescription: "Sites that convert, not just impress.",
    description:
      "We design and build fast, accessible websites that translate your brand into a working product for customers, investors, and partners alike.",
    deliverables: ["UX/UI design", "Responsive build", "CMS integration", "SEO foundations"],
  },
  {
    slug: "print-design",
    name: "Print Design",
    shortDescription: "Physical materials that feel as sharp as digital.",
    description:
      "Business cards, brochures, signage, packaging — we make sure your brand holds up in the physical world with the same discipline as your digital presence.",
    deliverables: ["Business collateral", "Brochures & signage", "Packaging", "Print-ready files"],
  },
  {
    slug: "consultancy",
    name: "Consultancy",
    shortDescription: "Strategic direction when the stakes are high.",
    description:
      "An embedded strategic partner for brand and product decisions — helping founders and marketing leads make the calls that shape how the business is perceived.",
    deliverables: ["Brand audits", "Positioning workshops", "Go-to-market support", "Ongoing advisory"],
  },
];

export const workItems: WorkItem[] = [
  {
    slug: "meridian-health",
    client: "Meridian Health",
    quarter: "Q3 2026",
    summary: "A full identity and digital rebrand for a growing East African telehealth network.",
    description:
      "Meridian Health came to us with a clinical, dated identity that undersold their growth. We rebuilt their brand system, designed a new patient-facing website, and produced a full campaign toolkit for their regional expansion.",
    comingSoon: true,
    tags: ["Branding", "Web Design"],
  },
  {
    slug: "harborline-logistics",
    client: "Harborline Logistics",
    quarter: "Q2 2026",
    summary: "A logistics platform's brand and site refresh that helped it win three enterprise contracts.",
    description:
      "Harborline needed to look as reliable as they operate. We delivered a new identity, a rebuilt corporate site, and a print and pitch toolkit for their enterprise sales team.",
    raised: "3 new enterprise contracts",
    tags: ["Branding", "Consultancy"],
  },
  {
    slug: "verdant-retail-group",
    client: "Verdant Retail Group",
    quarter: "Q1 2026",
    summary: "Store-to-screen brand consistency for a fast-growing regional retail chain.",
    description:
      "We unified in-store signage, packaging, and digital marketing under one visual system, giving Verdant a consistent presence across 12 locations and their online store.",
    tags: ["Print Design", "Digital Marketing"],
  },
  {
    slug: "kessler-and-vine",
    client: "Kessler & Vine",
    quarter: "Q4 2025",
    summary: "Positioning and campaign creative for a hospitality group's flagship launch.",
    description:
      "Ahead of their flagship venue launch, we developed brand positioning, a full campaign creative suite, and print materials that carried the identity from menus to marquee.",
    tags: ["Branding", "Print Design"],
  },
  {
    slug: "northstar-education",
    client: "Northstar Education",
    quarter: "Q3 2025",
    summary: "A digital learning platform redesigned for clarity and trust with parents and educators.",
    description:
      "We redesigned Northstar's product experience and marketing site to speak clearly to two very different audiences: parents evaluating trust, and educators evaluating utility.",
    tags: ["Web Design", "Branding"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Axis Media understood our business faster than agencies we'd worked with for years. The brand system they built is still the backbone of everything we ship.",
    name: "Amara Owusu",
    role: "Co-Founder",
    company: "Meridian Health",
  },
  {
    quote:
      "Sharp, responsive, and genuinely invested in our growth. The rebrand paid for itself within the first quarter.",
    name: "David Mwangi",
    role: "Managing Director",
    company: "Harborline Logistics",
  },
  {
    quote:
      "They took a scattered, inconsistent brand across 12 stores and made it feel like one company. Customers noticed immediately.",
    name: "Grace Nakato",
    role: "Head of Marketing",
    company: "Verdant Retail Group",
  },
  {
    quote:
      "Creative, strategic, and easy to work with under a tight launch deadline. Exactly what we needed.",
    name: "Samuel Otieno",
    role: "Founder",
    company: "Kessler & Vine",
  },
];

export const posts: Post[] = [
  {
    slug: "why-brand-consistency-wins-customers",
    title: "Why Brand Consistency Wins Customers",
    excerpt:
      "A consistent brand across every touchpoint builds trust faster than any single great design ever could. Here's why that matters most for growing companies.",
    body: "A consistent brand across every touchpoint builds trust faster than any single great design ever could. When a customer sees the same tone, colour, and voice from your website to your invoice to your social posts, it signals that the whole business is under control — not just the parts they can see.",
    date: "2026-06-12",
  },
  {
    slug: "choosing-a-design-agency-what-to-ask",
    title: "Choosing a Design Agency: What to Ask",
    excerpt:
      "Before you sign with a design agency, there are a handful of questions that reveal whether they'll actually move your business forward.",
    body: "Before you sign with a design agency, there are a handful of questions that reveal whether they'll actually move your business forward — from how they measure success to who actually does the work.",
    date: "2026-05-03",
  },
  {
    slug: "print-still-matters-heres-why",
    title: "Print Still Matters. Here's Why.",
    excerpt:
      "In a digital-first world, physical materials still carry weight in first impressions — especially across East African markets.",
    body: "In a digital-first world, physical materials still carry weight in first impressions — especially across markets where a business card, a brochure, or in-store signage is often the first tangible thing a customer holds.",
    date: "2026-03-21",
  },
];
