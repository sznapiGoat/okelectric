import Image from "next/image";
import { CATEGORY_LABELS, type Project } from "@/content/projects";

type Props = {
  project: Project;
  /** LCP obrázky dostanou priority a větší sizes. */
  priority?: boolean;
  sizes?: string;
  /** Úroveň nadpisu se řídí tím, co je nad galerií na dané stránce. */
  headingLevel?: 2 | 3;
};

export function ProjectGalleryItem({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw",
  headingLevel = 3,
}: Props) {
  const Heading = (headingLevel === 2 ? "h2" : "h3") as "h2" | "h3";

  return (
    <figure className="group border-b border-r border-line">
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
    </figure>
  );
}
