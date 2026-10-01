"use client";

import { useCallback, useRef, useState } from "react";
import type { Project } from "@/content/projects";
import { ProjectGalleryItem } from "@/components/ProjectGalleryItem";
import { Lightbox } from "@/components/Lightbox";
import { cn } from "@/lib/utils";

type Props = {
  projects: Project[];
  headingLevel?: 2 | 3;
  /** Kolik prvních obrázků načíst přednostně. */
  priorityCount?: number;
  className?: string;
  sizes?: string;
  /**
   * Každá n-tá dlaždice (od první) bude velká. Mřížka se doplňuje hustě
   * (grid-flow-dense), velké dlaždice se tak střídají vlevo a vpravo.
   */
  featureEvery?: number;
};

/**
 * Mřížka realizací s náhledem přes celou obrazovku. Fokus se po zavření
 * vrací na dlaždici, ze které se náhled otevřel.
 */
export function ProjectGrid({
  projects,
  headingLevel = 3,
  priorityCount = 0,
  className,
  sizes,
  featureEvery,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const triggerIndex = useRef<number | null>(null);

  const close = useCallback(() => {
    const i = triggerIndex.current;
    setOpenIndex(null);
    if (i === null) return;
    // Vrácení fokusu na dlaždici, ze které se náhled otevřel.
    requestAnimationFrame(() => {
      const buttons = gridRef.current?.querySelectorAll<HTMLButtonElement>("figure > button");
      buttons?.[i]?.focus();
    });
  }, []);

  const open = useCallback((i: number) => {
    triggerIndex.current = i;
    setOpenIndex(i);
  }, []);

  return (
    <>
      <div
        ref={gridRef}
        className={cn(
          "grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3",
          featureEvery && "grid-flow-row-dense",
          className
        )}
      >
        {projects.map((p, i) => {
          const featured = !!featureEvery && projects.length > 4 && i % featureEvery === 0;
          return (
          <ProjectGalleryItem
            key={p.id}
            project={p}
            featured={featured}
            sizes={featured ? "(min-width: 1024px) 62vw, (min-width: 640px) 92vw, 92vw" : sizes}
            headingLevel={headingLevel}
            priority={i < priorityCount}
            onOpen={() => open(i)}
          />
          );
        })}
      </div>

      <Lightbox
        projects={projects}
        index={openIndex}
        onClose={close}
        onNavigate={(i) => {
          triggerIndex.current = i;
          setOpenIndex(i);
        }}
      />
    </>
  );
}
