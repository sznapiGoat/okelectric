import Link from "next/link";
import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { cn } from "@/lib/utils";

type Props = {
  services: Service[];
  columns?: 3 | 4;
  /** Vypnout u hustých seznamů, kde stačí samotný název. */
  showTagline?: boolean;
  className?: string;
};

/**
 * Sdílená mřížka odkazů na služby. Používá ji blok Souvisí s tím,
 * přehled na stránce O nás i chybová stránka 404, aby všude vypadaly
 * dlaždice stejně.
 */
export function ServiceLinkGrid({
  services,
  columns = 3,
  showTagline = true,
  className,
}: Props) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 border-l border-t border-line sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        className
      )}
    >
      {services.map((s) => (
        <li key={s.slug} className="border-b border-r border-line">
          <Link
            href={`/${s.slug}`}
            className="group relative flex h-full items-start gap-4 p-5 transition-colors hover:bg-mist sm:p-6"
          >
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
                s.accent === "green" ? "bg-brand" : "bg-tech"
              )}
              aria-hidden
            />
            <ServiceIcon
              slug={s.slug}
              className={cn(
                "mt-0.5 h-7 w-7 shrink-0",
                s.accent === "green" ? "text-brand" : "text-tech"
              )}
            />
            <span>
              <span className="block font-display text-[1.0625rem] font-semibold leading-snug text-ink">
                {s.navLabel}
              </span>
              {showTagline && (
                <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-ink-soft">
                  {s.tagline}
                </span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
