"use client";

import { useMemo, useState } from "react";
import { CATEGORY_LABELS, type Project, type ProjectCategory } from "@/content/projects";
import { ProjectGalleryItem } from "@/components/ProjectGalleryItem";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "vse";

export function ReferenceGallery({
  projects,
  headingLevel = 3,
}: {
  projects: Project[];
  headingLevel?: 2 | 3;
}) {
  const [filter, setFilter] = useState<Filter>("vse");

  const categories = useMemo(() => {
    const present = new Set(projects.map((p) => p.category));
    return (Object.keys(CATEGORY_LABELS) as ProjectCategory[]).filter((c) => present.has(c));
  }, [projects]);

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["vse", projects.length]]);
    for (const c of categories) map.set(c, projects.filter((p) => p.category === c).length);
    return map;
  }, [projects, categories]);

  const visible = filter === "vse" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtr referencí podle oboru">
        {(["vse", ...categories] as Filter[]).map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={active}
              className={cn(
                "border px-3.5 py-2 text-[0.875rem] font-medium transition-colors duration-200",
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-soft hover:border-ink hover:text-ink"
              )}
            >
              {c === "vse" ? "Vše" : CATEGORY_LABELS[c]}
              <span className={cn("ml-2 tabular-nums", active ? "text-paper/50" : "text-ink-faint")}>
                {counts.get(c)}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Zobrazeno {visible.length} realizací.
      </p>

      <div className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectGalleryItem key={p.id} project={p} priority={i < 3} headingLevel={headingLevel} />
        ))}
      </div>
    </div>
  );
}
