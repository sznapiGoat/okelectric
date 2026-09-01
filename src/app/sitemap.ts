import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/content/services";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/reference`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/o-nas`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/kontakt`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes].map((r) => ({ ...r, lastModified: now }));
}
