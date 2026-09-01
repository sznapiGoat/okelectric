import Link from "next/link";
import { SERVICES } from "@/content/services";
import { NAP } from "@/content/site";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Stránka nenalezena",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="shell py-24 sm:py-32">
      <p className="font-display text-[4rem] font-bold leading-none text-brand">404</p>
      <h1 className="mt-4 font-display text-display-lg text-balance">
        Tahle stránka tu není.
      </h1>
      <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
        Možná se přesunula, možná jste se překlikli. Zkuste některou ze služeb níž, nebo rovnou
        zavolejte.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="outline" size="lg">
          Zpět na úvod
        </ButtonLink>
        <ButtonAnchor href={`tel:${NAP.phone}`} variant="brand" size="lg">
          {NAP.phoneDisplay}
        </ButtonAnchor>
      </div>

      <ul className="mt-14 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <li key={s.slug} className="border-b border-r border-line">
            <Link
              href={`/${s.slug}`}
              className="block p-5 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-mist"
            >
              {s.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
