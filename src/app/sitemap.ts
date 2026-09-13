import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { PROJECTS_SORTED } from "@/content/projects";
import { SITE_URL } from "@/content/site";

/**
 * Datum poslední úpravy obsahu jednotlivých statických stránek.
 * Vědomě se nepoužívá čas buildu: ten by při každém nasazení tvrdil,
 * že se změnily všechny stránky, a Google by ten signál přestal brát vážně.
 * Při editaci textu je potřeba datum ručně posunout.
 */
const STATIC_UPDATED: Record<string, string> = {
  "/": "2026-09-13",
  "/o-nas": "2026-09-13",
  "/kontakt": "2026-09-01",
};

/** Reference se mění s poslední doloženou realizací. */
function referenceUpdated(): string {
  const newest = PROJECTS_SORTED[0]?.date ?? "2026-09";
  return `${newest}-01`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date(STATIC_UPDATED["/"]), changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/reference`,
      lastModified: new Date(referenceUpdated()),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/o-nas`,
      lastModified: new Date(STATIC_UPDATED["/o-nas"]),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: new Date(STATIC_UPDATED["/kontakt"]),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  for (const service of SERVICES) {
    entries.push({
      url: `${SITE_URL}/${service.slug}`,
      lastModified: new Date(service.updated),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  return entries;
}
