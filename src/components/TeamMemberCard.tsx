import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SERVICES } from "@/content/services";
import type { TeamMember } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Karta člena týmu. Pod kontaktem jsou všechny obory firmy a podsvícené jsou ty,
 * které dělá. Při pohledu na kartu vedle karty je tak vidět, kdo se v čem překrývá,
 * bez samostatné tabulky.
 */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col border-b border-r border-line p-6 sm:p-8">
      <h3 className="font-display text-[1.3rem] font-semibold tracking-tight text-ink">{member.name}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{member.role}</p>

      <p className="mt-3 flex items-center gap-2 text-[0.875rem] text-ink-faint">
        <MapPin className="h-4 w-4 text-brand" aria-hidden />
        {member.town}
      </p>

      <div className="mt-6 space-y-1.5">
        <a
          href={`tel:${member.phone}`}
          className="flex items-center gap-2.5 font-display text-[1.15rem] font-semibold text-ink hover:text-brand-deep"
        >
          <Phone className="h-4 w-4 text-brand" aria-hidden />
          {member.phoneDisplay}
        </a>
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-2.5 text-[0.9375rem] text-ink-soft hover:text-ink"
        >
          <Mail className="h-4 w-4 text-brand" aria-hidden />
          {member.email}
        </a>
      </div>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-6" aria-label={`Obory, které dělá ${member.name}`}>
        {SERVICES.map((s) => {
          const does = member.handles.includes(s.slug);
          return (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className={cn(
                  "inline-block border px-2.5 py-1 text-[0.75rem] font-medium transition-colors",
                  does
                    ? "border-tech bg-tech text-paper hover:border-ink hover:bg-ink"
                    : "border-transparent bg-mist text-ink-faint hover:text-ink"
                )}
              >
                {s.navLabel}
                {!does && <span className="sr-only"> (nedělá)</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
