import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SERVICES } from "@/content/services";
import type { TeamMember } from "@/content/site";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const handled = SERVICES.filter((s) => member.handles.includes(s.slug));

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

      {handled.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {handled.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="inline-block border border-line px-2.5 py-1 text-[0.75rem] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                {s.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
