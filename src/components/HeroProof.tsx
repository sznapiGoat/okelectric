import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Proof = {
  claim: string;
  detail: string;
  accent: "brand" | "tech";
};

/**
 * Tři důvody pod hlavním CTA. Nahrazuje pás holých čísel: „8 oborů" ani
 * „5 lidí v týmu" nejsou argumenty, u malé firmy spíš vybízejí ke srovnávání.
 * Místo toho odpovídáme na to, co zákazník opravdu řeší: nemusí shánět dvě
 * party, nečeká na revizního technika a může si práci prohlédnout.
 * „Stovky realizací" je číslo firmy, na webu je z nich nafocený jen výběr.
 *
 * Záměrně jako dl, ne jako nadpisy. Jsou to dvojice tvrzení a vysvětlení,
 * do osnovy nadpisů stránky nepatří.
 */
const PROOFS: Proof[] = [
  {
    claim: "Dvě řemesla, jedna firma",
    detail: "Elektrikář i topenář v jedné partě.",
    accent: "brand",
  },
  {
    claim: "Revizi vystavíme sami",
    detail: "Oprávnění §6 až §8. Nečekáte na technika.",
    accent: "tech",
  },
  {
    claim: "Stovky realizací s fotkou",
    detail: "Od bytového rozvaděče po most na D4.",
    accent: "brand",
  },
];

export function HeroProof() {
  return (
    <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-3">
      {PROOFS.map((p, i) => (
        <div
          key={p.claim}
          style={{ "--proof-delay": `${250 + i * 160}ms` } as CSSProperties}
          className={cn(
            "hero-proof border-b border-line py-5 sm:border-b-0",
            i < 2 && "sm:border-r",
            i === 0 && "sm:pr-5",
            i === 1 && "sm:px-5",
            i === 2 && "sm:pl-5"
          )}
        >
          <span
            className={cn("hero-proof__bar block h-1.5 w-6", p.accent === "brand" ? "bg-brand" : "bg-tech")}
            aria-hidden
          />
          <dt className="mt-3 font-display text-[1.0625rem] font-semibold leading-snug text-ink">
            {p.claim}
          </dt>
          <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-soft">
            {p.detail}
            {i === 2 && (
              <Link
                href="/reference"
                className="group mt-2 flex items-center gap-1.5 text-[0.875rem] font-semibold text-brand-deep hover:text-ink"
              >
                Prohlédnout
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
