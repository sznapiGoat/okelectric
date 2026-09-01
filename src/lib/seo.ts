import type { Metadata } from "next";
import { NAP, QUALIFICATIONS, REGIONS_EXTENDED, SITE_URL, TEAM } from "@/content/site";
import type { FaqItem, Service } from "@/content/services";

/**
 * Náhledový obrázek se odvozuje z cesty, aby se nemusel psát u každé stránky.
 * Soubory leží v public/og a generují se skriptem z referenčních fotografií.
 */
function ogImageForPath(path: string) {
  const slug = path === "/" ? "home" : path.replace(/^\//, "").replace(/\/$/, "");
  return `/og/${slug}.jpg`;
}

/** Sestaví Metadata s kanonickou URL a Open Graph pro libovolnou trasu. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image ?? ogImageForPath(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "cs_CZ",
      siteName: "OKelectric",
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  addressLocality: NAP.addressLocality,
  addressRegion: NAP.addressRegion,
  postalCode: NAP.postalCode,
  addressCountry: NAP.addressCountry,
};

/** LocalBusiness pro domovskou stránku. Electrician i HVACBusiness, firma dělá obojí. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Electrician", "HVACBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: NAP.name,
    legalName: NAP.legalName,
    description:
      "Elektroinstalace, hromosvody, tepelná čerpadla a kotelny, fotovoltaika, rekuperace, alarmy a revize na Písecku, Protivínsku a Blatensku.",
    url: SITE_URL,
    telephone: NAP.phone,
    email: NAP.email,
    image: `${SITE_URL}/brand/logo.png`,
    logo: `${SITE_URL}/brand/logo.png`,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: REGIONS_EXTENDED.map((name) => ({ "@type": "City", name })),
    sameAs: [NAP.facebook, NAP.instagram],
    employee: TEAM.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      telephone: `+420${m.phone.replace("+420", "")}`,
      email: m.email,
    })),
    hasCredential: QUALIFICATIONS.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      name: q.label,
      description: q.detail,
    })),
    knowsLanguage: "cs",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    serviceType: service.navLabel,
    url: `${SITE_URL}/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: REGIONS_EXTENDED.map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.scope.heading,
      itemListElement: service.scope.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export function faqSchema(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "OKelectric",
    inLanguage: "cs-CZ",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}
