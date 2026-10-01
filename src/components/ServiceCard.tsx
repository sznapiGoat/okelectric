import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";

/**
 * Dlaždice ve mřížce služeb. Karty nemají vlastní rámeček ani stín,
 * dělí je sdílená vlásková linka mřížky.
 *
 * Na mobilu je z karty jen řádek (ikona, název, šipka), osm plných karet
 * pod sebou by bylo přes dva tisíce pixelů scrollování. Popis a výzva se
 * ukážou od šířky sm.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group relative flex items-center gap-4 border-b border-r border-line px-5 py-4 transition-colors duration-200 hover:bg-mist sm:flex-col sm:items-stretch sm:justify-between sm:gap-8 sm:p-8"
    >
      <span
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />

      <div className="flex min-w-0 flex-1 items-center gap-4 sm:block">
        <ServiceIcon slug={service.slug} className="icon-draw h-8 w-8 shrink-0 text-brand sm:h-11 sm:w-11" />
        <div className="min-w-0">
          <h3 className="font-display text-[1.0625rem] font-semibold leading-snug tracking-tight text-ink sm:mt-6 sm:text-[1.3rem]">
            {service.navLabel}
          </h3>
          <p className="mt-3 hidden max-w-sm text-[0.9375rem] leading-relaxed text-ink-soft sm:block">
            {service.lead}
          </p>
        </div>
      </div>

      <ArrowRight className="h-5 w-5 shrink-0 text-brand-deep sm:hidden" aria-hidden />

      <span className="hidden items-center gap-2 text-[0.875rem] font-semibold text-brand-deep sm:inline-flex">
        {service.ctaLabel}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
