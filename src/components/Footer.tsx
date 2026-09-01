import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { SERVICES } from "@/content/services";
import { NAP, REGIONS_EXTENDED, TEAM } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandMark className="h-10 w-10" />
            <span className="font-display text-xl font-bold tracking-tight text-tech">
              OK<span className="text-brand-deep">electric</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-soft">
            Jsme vaši elektrikáři a topenáři. Elektroinstalace, kotelny, fotovoltaika, rekuperace a
            zabezpečení na jihu Čech i v Praze.
          </p>

          <div className="mt-6 space-y-2 text-[0.9375rem]">
            <a
              href={`tel:${NAP.phone}`}
              className="flex items-center gap-2.5 font-semibold text-ink hover:text-brand-deep"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden />
              {NAP.phoneDisplay}
            </a>
            <a
              href={`mailto:${NAP.email}`}
              className="flex items-center gap-2.5 text-ink-soft hover:text-ink"
            >
              <Mail className="h-4 w-4 text-brand" aria-hidden />
              {NAP.email}
            </a>
            <p className="flex items-start gap-2.5 text-ink-soft">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
              <span>
                {NAP.addressLocality}, {NAP.addressRegion}
              </span>
            </p>
          </div>
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

          <h2 className="eyebrow mt-8">Kde pracujeme</h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
            {REGIONS_EXTENDED.join(", ")}
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-[0.8125rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} OKelectric</p>
          <p>
            {TEAM.length} lidí v týmu, {SERVICES.length} oborů, jeden telefon:{" "}
            <a href={`tel:${NAP.phone}`} className="font-semibold text-ink hover:text-brand-deep">
              {NAP.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
