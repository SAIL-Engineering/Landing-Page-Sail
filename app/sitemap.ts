import { MetadataRoute } from "next/types";

const BASE_URL = "https://www.sailgtx.com";

const pages: Array<{
  route: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}> = [
  { route: "/", priority: 1, changeFrequency: "weekly" },
  {
    route: "/solutions/enterprise-compliance",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    route: "/solutions/customs-brokerage",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    route: "/solutions/advisory-trade-law",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { route: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { route: "/terms-of-service", priority: 0.5, changeFrequency: "yearly" },
  { route: "/signin", priority: 0.6, changeFrequency: "monthly" },
  { route: "/signup", priority: 0.6, changeFrequency: "monthly" },
  { route: "/reset-password", priority: 0.4, changeFrequency: "yearly" },
  { route: "/update-password", priority: 0.4, changeFrequency: "yearly" },
  { route: "/verification", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ route, priority, changeFrequency }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
