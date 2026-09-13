"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6000;

/**
 * Střídající se fotky realizací v hero, jako karusel na původním webu.
 * Prolínání místo posunu: fotky jsou různé obory a posun by vypadal jako galerie,
 * kterou má člověk proklikat. První snímek má priority, protože je vidět hned,
 * ostatní se načtou líně.
 *
 * Automatické střídání se zastaví při najetí myší, při fokusu na ovládání
 * a úplně vypne u prefers-reduced-motion.
 */
export function HeroCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || projects.length < 2) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % projects.length), INTERVAL_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, reducedMotion, projects.length]);

  const current = projects[index];

  return (
    <figure
      className="relative"
      aria-roledescription="karusel"
      aria-label="Fotky z našich realizací"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:aspect-[4/3.5]">
        {projects.map((p, i) => (
          <Image
            key={p.id}
            src={p.image}
            alt={p.alt}
            fill
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "auto"}
            sizes="(min-width: 1024px) 46vw, 100vw"
            aria-hidden={i !== index}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line py-3.5 text-[0.8125rem]">
        <span aria-live="polite">
          <span className="font-semibold text-ink">{current.title}</span>
          <span className="text-ink-faint">
            {" "}
            · {current.place}, {current.dateLabel}
          </span>
        </span>

        {projects.length > 1 && (
          <span className="flex items-center gap-1">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Fotka ${i + 1} z ${projects.length}: ${p.title}`}
                aria-current={i === index}
                className="group flex h-6 items-center px-1"
              >
                <span
                  className={cn(
                    "block h-[3px] transition-all duration-300",
                    i === index ? "w-6 bg-brand" : "w-3 bg-line-strong group-hover:bg-ink-faint"
                  )}
                />
              </button>
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
