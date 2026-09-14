import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { cn } from "@/lib/utils";

/**
 * Dlaždice ve mřížce služeb. Karty nemají vlastní rámeček ani stín,
 * dělí je sdílená vlásková linka mřížky.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group relative flex flex-col justify-between gap-8 border-b border-r border-line p-6 transition-colors duration-200 hover:bg-mist sm:p-8"
    >
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
          service.accent === "green" ? "bg-brand" : "bg-tech"
        )}
        aria-hidden
      />

      <div>
        <ServiceIcon
          slug={service.slug}
          className={cn(
            "icon-draw h-9 w-9",
            service.accent === "green" ? "text-brand" : "text-tech"
          )}
        />
        <h3 className="mt-6 font-display text-[1.3rem] font-semibold leading-snug tracking-tight text-ink">
          {service.navLabel}
        </h3>
        <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-soft">{service.lead}</p>
      </div>

      <span
        className={cn(
          "inline-flex items-center gap-2 text-[0.875rem] font-semibold",
          service.accent === "green" ? "text-brand-deep" : "text-tech"
        )}
      >
        {service.ctaLabel}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
