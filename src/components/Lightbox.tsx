"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CATEGORY_LABELS, type Project } from "@/content/projects";

type Props = {
  projects: Project[];
  /** Index otevřené fotografie, null znamená zavřeno. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ projects, index, onClose, onNavigate }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = index !== null;
  const project = open ? projects[index] : null;
  const many = projects.length > 1;

  const go = useCallback(
    (step: number) => {
      if (index === null) return;
      onNavigate((index + step + projects.length) % projects.length);
    },
    [index, projects.length, onNavigate],
  );

  // Klávesnice: Escape zavírá, šipky listují, Tab zůstává uvnitř dialogu.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowRight" && many) {
        e.preventDefault();
        go(1);
        return;
      }
      if (e.key === "ArrowLeft" && many) {
        e.preventDefault();
        go(-1);
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, many, go, onClose]);

  // Zamknutí scrollu pod dialogem.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Fokus na zavírací tlačítko hned po otevření.
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  if (!open || !project) return null;

  return (
    <div
      className="lightbox fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title}, ${project.place}, ${project.dateLabel}`}
        className="flex h-full flex-col"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="text-[0.8125rem] tabular-nums text-paper/60">
            {(index ?? 0) + 1} / {projects.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center border border-paper/25 text-paper transition-colors hover:border-paper focus-visible:outline-paper"
            aria-label="Zavřít náhled"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-6">
          {many && (
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center bg-ink/70 text-paper transition-colors hover:bg-ink focus-visible:outline-paper sm:left-4"
              aria-label="Předchozí realizace"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
          )}

          <div className="relative h-full w-full max-w-5xl">
            <Image
              key={project.id}
              src={project.image}
              alt={project.alt}
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-contain"
              priority
            />
          </div>

          {many && (
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center bg-ink/70 text-paper transition-colors hover:bg-ink focus-visible:outline-paper sm:right-4"
              aria-label="Další realizace"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          )}
        </div>

        <div className="shrink-0 px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-brand">
              {CATEGORY_LABELS[project.category]}
            </p>
            <h2 className="mt-1.5 font-display text-[1.15rem] font-semibold text-paper sm:text-[1.35rem]">
              {project.title}
            </h2>
            <p className="mt-1 text-[0.875rem] text-paper/60">
              {project.place}, {project.dateLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
