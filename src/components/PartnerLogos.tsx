import { PARTNERS } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Loga značek s odkazem na web výrobce. Loga jsou v klidu jednobarevná a ztlumená,
 * po najetí naplno. Jednobarevnost řeší i to, že některé firmy mají na webu jen
 * bílou variantu pro tmavou hlavičku.
 *
 * Obyčejné img místo next/image: jde o drobné SVG a PNG, optimalizace by u nich
 * nic neušetřila a SVG by navíc vyžadovalo dangerouslyAllowSVG.
 */
export function PartnerLogos({ className }: { className?: string }) {
  if (PARTNERS.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-8 gap-y-5", className)}>
      {PARTNERS.map((p) => (
        <li key={p.name}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${p.name}: ${p.detail}`}
            className="group flex h-9 items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.logo}
              alt={p.name}
              style={{ height: p.logoHeight }}
              className="w-auto opacity-60 brightness-0 transition-opacity duration-200 group-hover:opacity-100"
              loading="lazy"
              decoding="async"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
