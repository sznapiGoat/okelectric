import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Direktivu Host Google nezná, a kdyby se lišila od domény, na které web
// opravdu běží, jen by mátla. Kanonickou doménu určuje SITE_URL v sitemapě.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
