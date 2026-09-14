"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";
import { CATEGORY_LABELS, PROJECTS_SORTED } from "@/content/projects";
import { REALIZATIONS_COUNT } from "@/content/site";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

/**
 * Běžící pás realizací pod hero. Ukazuje objem práce skutečnými zakázkami
 * místo čísla: náhled, místo a obor, klik vede do referencí.
 *
 * Pás je v kódu dvakrát za sebou a posouvá se o polovinu své šířky, takže
 * smyčka nemá šev. Druhá kopie je pro čtečky skrytá a mimo pořadí tabulátoru.
 *
 * Pohyb delší než 5 sekund musí jít zastavit (WCAG 2.2.2), proto tlačítko
 * pozastavení. Zastaví se i při najetí myší a fokusu. Při prefers-reduced-motion
 * pás neběží vůbec a dá se jen posouvat do strany.
 */
export function RealizationsStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="border-b border-line bg-paper py-10 sm:py-14" aria-labelledby="pas-realizaci">
      <div className="shell flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <h2 id="pas-realizaci" className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          {REALIZATIONS_COUNT !== null && (
            <CountUp
              value={REALIZATIONS_COUNT}
              suffix="+"
              className="font-display text-display-lg font-semibold leading-none text-ink"
            />
          )}
          <span className="text-[1.0625rem] font-medium leading-snug text-ink-soft">
            {REALIZATIONS_COUNT !== null ? "realizací za námi. Tady je výběr z nich." : "Z našich realizací"}
          </span>
        </h2>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="realizations-toggle inline-flex items-center motion-reduce:hidden gap-1.5 text-[0.8125rem] font-medium text-ink-faint hover:text-ink"
          >
            {paused ? <Play className="h-3.5 w-3.5" aria-hidden /> : <Pause className="h-3.5 w-3.5" aria-hidden />}
            {paused ? "Spustit" : "Pozastavit"}
          </button>
          <Link
            href="/reference"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-ink hover:text-brand-deep"
          >
            Všechny reference
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="realizations-viewport mt-6 overflow-x-auto">
        <div className={cn("realizations-track flex w-max", paused && "realizations-track--paused")}>
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 gap-3 pr-3"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {PROJECTS_SORTED.map((p) => (
                <li key={p.id} className="w-52 shrink-0 sm:w-60">
                  <Link
                    href="/reference"
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                      <Image
                        src={p.image}
                        alt={copy === 1 ? "" : p.alt}
                        fill
                        sizes="240px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-2.5 truncate text-[0.875rem] font-semibold text-ink">{p.place}</p>
                    <p className="truncate text-[0.8125rem] text-ink-faint">{CATEGORY_LABELS[p.category]}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
