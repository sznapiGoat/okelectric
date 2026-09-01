import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { CATEGORY_LABELS, type Project } from "@/content/projects";

type Props = {
  project: Project;
  /** LCP obrázky dostanou priority a větší sizes. */
  priority?: boolean;
  sizes?: string;
  /** Úroveň nadpisu se řídí tím, co je nad galerií na dané stránce. */
  headingLevel?: 2 | 3;
  /** Když je předáno, překryje dlaždici tlačítko otevírající náhled. */
  onOpen?: () => void;
};

export function ProjectGalleryItem({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw",
  headingLevel = 3,
  onOpen,
}: Props) {
  const Heading = (headingLevel === 2 ? "h2" : "h3") as "h2" | "h3";

  return (
    <figure className="group relative border-b border-r border-line">
      <div className="relative aspect-[5/4] overflow-hidden bg-mist">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
        />
        <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/[0.06]" />
        {onOpen && (
          <span
            className="pointer-events-none absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center bg-ink/70 text-paper opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
            aria-hidden
          >
            <Maximize2 className="h-4 w-4" />
          </span>
        )}
      </div>

      <figcaption className="p-5">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-brand-deep">
          {CATEGORY_LABELS[project.category]}
        </p>
        <Heading className="mt-2 font-display text-[1.0625rem] font-semibold leading-snug text-ink">
          {project.title}
        </Heading>
        <p className="mt-1.5 text-[0.875rem] text-ink-faint">
          {project.place}, {project.dateLabel}
        </p>
      </figcaption>

      {/* Tlačítko překrývá celou dlaždici, aby nadpis zůstal mimo interaktivní prvek. */}
      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="absolute inset-0 z-10 h-full w-full"
          aria-label={`Zvětšit fotografii: ${project.title}, ${project.place}, ${project.dateLabel}`}
        />
      )}
    </figure>
  );
}
