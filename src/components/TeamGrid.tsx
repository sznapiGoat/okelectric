import { TEAM } from "@/content/site";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { cn } from "@/lib/utils";

/**
 * Karty celého týmu s podsvícenými obory. Sdílí ji O nás i Kontakt, aby obě
 * stránky vypadaly stejně. Čtyři lidi padnou beze zbytku do dvou i do čtyř
 * sloupců, doplňkové buňky mřížky proto nejsou potřeba. Při jiném počtu lidí
 * je potřeba sloupce upravit, jinak spodní linka nebude lícovat.
 */
export function TeamGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "reveal-group grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {TEAM.map((m) => (
        <TeamMemberCard key={m.slug} member={m} />
      ))}
    </div>
  );
}
