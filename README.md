# Axis Media Solutions — Website

Next.js 14 (App Router) + Tailwind CSS site for Axis Media Solutions, with optional Sanity CMS
integration for Work case studies and Insights posts.

## Structure

- `/` — Home
- `/work`, `/work/[slug]` — Case studies
- `/services`, `/services/[slug]` — Service pages (Branding, Graphic Design, Digital Marketing,
  Web Design, Print Design, Consultancy)
- `/about` — Agency story, mission, vision, values
- `/insights`, `/insights/[slug]` — Blog
- `/contact` — Contact page

All content currently comes from `src/lib/placeholder-data.ts` — swap in real copy any time.

## Running locally

```bash
npm install
npm run dev
```

## Connecting Sanity (optional, recommended)

The site works fine without Sanity — it falls back to the placeholder data. To make content
editable:

1. Install the Sanity CLI and create a Studio project (outside this repo, or in a `/studio`
   folder alongside it):
   ```bash
   npm create sanity@latest
   ```
2. Copy the schema files from `sanity/schemaTypes/` in this repo into your Studio's schema
   folder, and register them in your Studio's `sanity.config.ts`.
3. Deploy the Studio (`sanity deploy`) or run it locally.
4. In this project, create a `.env.local` file:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
5. Restart the dev server. Once documents exist in Sanity for `work`, `service`, `testimonial`,
   and `post`, the site automatically uses them instead of the placeholder data (per content
   type — it falls back type-by-type if a dataset is empty).

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo → framework preset detects Next.js
   automatically.
3. Add the two `NEXT_PUBLIC_SANITY_*` environment variables in the Vercel project settings if
   using Sanity.
4. Deploy. No other configuration needed.

## Notes

- The contact form currently submits via `mailto:` so it works with zero backend. Before launch,
  wire it to a form provider (Formspree, Resend, etc.) for an in-page submission and swap the
  `<form>` action in `src/app/contact/page.tsx`.
- Colours, type, and spacing all come from `tailwind.config.ts` — update there to restyle
  globally.
- Fonts: Montserrat (headings) and Inter (body), loaded via `next/font/google`.
