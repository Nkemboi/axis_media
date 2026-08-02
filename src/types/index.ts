export interface WorkItem {
  slug: string;
  client: string;
  quarter: string;
  summary: string;
  description: string;
  raised?: string;
  comingSoon?: boolean;
  image?: string;
  tags: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
}
