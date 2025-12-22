import { createZenblogClient } from "zenblog";

// Initialize Zenblog client
// Get your Blog ID from the Zenblog dashboard
export const zenblog = createZenblogClient({
  blogId: process.env.NEXT_PUBLIC_ZENBLOG_BLOG_ID || "",
});

// Type definitions for our blog posts
export interface BlogPost {
  title: string;
  html_content: string;
  slug: string;
  category?: {
    name: string;
    slug: string;
  };
  tags?: Array<{
    name: string;
    slug: string;
  }>;
  authors?: Array<{
    slug: string;
    name: string;
    image_url?: string;
    website?: string;
    twitter?: string;
  }>;
  excerpt?: string;
  published_at: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export interface BlogTag {
  name: string;
  slug: string;
}

export interface BlogAuthor {
  name: string;
  slug: string;
  image_url?: string;
  twitter?: string;
  website?: string;
  bio?: string;
}
