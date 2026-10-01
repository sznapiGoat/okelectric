"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { HERO_SLIDES } from "@/content/hero";
import { cn } from "@/lib/utils";

const SLIDE_MS = 7000;

/**
 * Fotky přes celé hero. Každá se během zobrazení pomalu přiblíží a posune
 * (Ken Burns, směr se u fotek střídá), pak se prolne do další. Dole je
 * přepínač s oborem a popisem, jeho proužek ukazuje, kdy přijde další fotka.
 *
 * Pohyb delší než 5 sekund musí jít zastavit (WCAG 2.2.2): tlačítko
 * Pozastavit. Na skryté záložce se nepřepíná. Při prefers-reduced-motion
 * fotky stojí a nepřepínají se samy, jen přepínačem.
 *
 * Vrstva je absolutně přes celý rodič (sekci hero), text leží nad ní.
 */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Fotky, které už smějí být v DOM. Na začátku jen první a druhá, další
  // přibývají s přepínáním (vždy aktuální a následující). Zbytek se tak
  // nestahuje hned a nepřetahuje se o linku s první fotkou (LCP).
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0, 1]));

  useEffect(() => {
    const next = (index + 1) % HERO_SLIDES.length;
    setMounted((m) => (m.has(index) && m.has(next) ? m : new Set(Array.from(m).concat(index, next))));
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onMq = () => setReduced(mq.matches);
    const onVis = () => setHidden(document.visibilityState === "hidden");
    mq.addEventListener("change", onMq);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const running = !paused && !reduced && !hidden;

  const go = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
  };

  // Další fotka po SLIDE_MS. Časovač se nastavuje znovu při každé změně,
  // takže ruční přepnutí začne odpočet od nuly.
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => {
      setPrev(index);
      setIndex((index + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, running]);

  // Předchozí fotka dojede prolnutí a pak ji přestaneme animovat.
  useEffect(() => {
    if (prev === null) return;
    const t = window.setTimeout(() => setPrev(null), 1600);
    return () => window.clearTimeout(t);
  }, [prev]);

  const active = HERO_SLIDES[index];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden>
        {HERO_SLIDES.map((s, i) => {
          if (!mounted.has(i)) return null;
          const visible = i === index;
          const moving = visible || i === prev;
          return (
            <div
              key={s.src}
              className={cn(
                "absolute inset-0 transition-opacity duration-[1500ms] ease-out",
                visible ? "z-[1] opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={s.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={cn(
                  "hero-slide object-cover",
                  moving && !reduced && (i % 2 ? "hero-slide--b" : "hero-slide--a"),
                  !running && "hero-slide--paused"
                )}
                style={{ objectPosition: s.focus, transformOrigin: s.focus }}
              />
            </div>
          );
        })}

        {/* Ztmavení pod textem: zleva na desktopu, zespodu na mobilu */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-ink/90 via-ink/65 to-ink/55 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/55 lg:to-ink/10" />
      </div>

      {/* Popis aktuální fotky pro čtečky, oznámí se při ruční změně */}
      <p className="sr-only" aria-live={running ? "off" : "polite"}>
        Fotka {index + 1} z {HERO_SLIDES.length}: {active.alt}
      </p>

      {/* Přepínač fotek a pauza */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="shell flex items-end gap-4 pb-5 sm:pb-7">
          <ol className="flex flex-1 gap-2 sm:gap-3" aria-label="Fotky z naší práce">
            {HERO_SLIDES.map((s, i) => {
              const current = i === index;
              return (
                <li key={s.src} className="min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={current ? "true" : undefined}
                    aria-label={`${s.tag}: ${s.caption}`}
                    className="group block w-full pt-3 text-left"
                  >
                    <span className="relative block h-[3px] overflow-hidden bg-white/25 transition-colors group-hover:bg-white/45">
                      <span
                        key={current ? `on-${index}` : "off"}
                        className={cn(
                          "absolute inset-y-0 left-0 bg-brand",
                          current ? (reduced ? "w-full" : "hero-progress") : "w-0",
                          current && !running && "hero-progress--paused"
                        )}
                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                      />
                    </span>
                    <span
                      className={cn(
                        "mt-2.5 hidden truncate text-[0.75rem] font-semibold uppercase tracking-[0.12em] transition-colors md:block",
                        current ? "text-white" : "text-white/55 group-hover:text-white/85"
                      )}
                    >
                      {s.tag}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 hidden truncate text-[0.8125rem] transition-colors lg:block",
                        current ? "text-white/80" : "text-white/40 group-hover:text-white/70"
                      )}
                    >
                      {s.caption}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] font-medium text-white/70 hover:text-white motion-reduce:hidden"
          >
            {paused ? <Play className="h-3.5 w-3.5" aria-hidden /> : <Pause className="h-3.5 w-3.5" aria-hidden />}
            <span className="hidden sm:inline">{paused ? "Spustit" : "Pozastavit"}</span>
            <span className="sr-only sm:hidden">{paused ? "Spustit" : "Pozastavit"}</span>
          </button>
        </div>
      </div>
    </>
  );
}
