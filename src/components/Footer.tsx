import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SERVICES } from "@/content/services";
import { NAP } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center" aria-label="OKelectric, úvodní stránka">
            <BrandLogo variant="full" className="h-20" />
          </Link>
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-soft">
            Jsme vaši elektrikáři a topenáři. Elektroinstalace, kotelny, fotovoltaika,
            rekuperace i zabezpečení pod jednou firmou.
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="eyebrow">Služby</h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-[0.9375rem] text-ink-soft hover:text-brand-deep">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="eyebrow">Firma</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/reference" className="text-[0.9375rem] text-ink-soft hover:text-brand-deep">
                Reference
              </Link>
            </li>
            <li>
              <Link href="/o-nas" className="text-[0.9375rem] text-ink-soft hover:text-brand-deep">
                O nás a kvalifikace
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-[0.9375rem] text-ink-soft hover:text-brand-deep">
                Kontakt
              </Link>
            </li>
            <li>
              <a
                href={NAP.facebook}
                rel="noopener noreferrer"
                target="_blank"
                className="text-[0.9375rem] text-ink-soft hover:text-brand-deep"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={NAP.instagram}
                rel="noopener noreferrer"
                target="_blank"
                className="text-[0.9375rem] text-ink-soft hover:text-brand-deep"
              >
                Instagram
              </a>
            </li>
          </ul>

          <h2 className="eyebrow mt-8">Odkud jsme</h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
            Sídlo máme u Písku. Za prací jezdíme tam, kde je potřeba, stačí se ozvat.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-[0.8125rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} OKelectric</p>
          {/* Každý z týmu je samostatná OSVČ. IČO a zápis v rejstříku jsou u jejich
              karet na O nás, odsud na ně vede odkaz z každé stránky. */}
          <p>
            Pod značkou OKelectric pracují samostatní podnikatelé.{" "}
            <Link href="/o-nas#tym" className="underline underline-offset-4 hover:text-ink">
              IČO a údaje o zápisu
            </Link>
          </p>
          <p>
            <Link href="/ochrana-osobnich-udaju" className="underline underline-offset-4 hover:text-ink">
              Zpracování osobních údajů
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
