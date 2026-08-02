import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-01-01";

// Sanity is optional: if no project ID is configured, the app falls back
// to the placeholder content in lib/placeholder-data.ts so the site still
// builds and runs before a Studio is connected.
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = isSanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: any) {
  if (!builder) return "";
  return builder.image(source).url();
}
