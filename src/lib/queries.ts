import { sanityClient, isSanityConfigured } from "./sanity";
import { workItems, services, testimonials, posts } from "./placeholder-data";
import { WorkItem, Service, Testimonial, Post } from "@/types";

export async function getWorkItems(): Promise<WorkItem[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch(
        `*[_type == "work"] | order(date desc){
          "slug": slug.current, client, quarter, summary, description, raised, comingSoon, "image": image.asset->url, tags
        }`
      );
      if (data?.length) return data;
    } catch (e) {
      console.error("Sanity fetch failed, using placeholder work items", e);
    }
  }
  return workItems;
}

export async function getWorkItem(slug: string): Promise<WorkItem | undefined> {
  const items = await getWorkItems();
  return items.find((i) => i.slug === slug);
}

export async function getServices(): Promise<Service[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch(
        `*[_type == "service"] | order(order asc){
          "slug": slug.current, name, shortDescription, description, deliverables
        }`
      );
      if (data?.length) return data;
    } catch (e) {
      console.error("Sanity fetch failed, using placeholder services", e);
    }
  }
  return services;
}

export async function getService(slug: string): Promise<Service | undefined> {
  const items = await getServices();
  return items.find((i) => i.slug === slug);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch(`*[_type == "testimonial"]{ quote, name, role, company }`);
      if (data?.length) return data;
    } catch (e) {
      console.error("Sanity fetch failed, using placeholder testimonials", e);
    }
  }
  return testimonials;
}

export async function getPosts(): Promise<Post[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const data = await sanityClient.fetch(
        `*[_type == "post"] | order(date desc){
          "slug": slug.current, title, excerpt, body, date
        }`
      );
      if (data?.length) return data;
    } catch (e) {
      console.error("Sanity fetch failed, using placeholder posts", e);
    }
  }
  return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const items = await getPosts();
  return items.find((i) => i.slug === slug);
}
