import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/content/services";
import { PROJECTS_SORTED } from "@/content/projects";
import { NAP, TEAM } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { CoverageSection } from "@/components/CoverageSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroProof } from "@/components/HeroProof";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/BrandIcons";

export const metadata = pageMetadata({
  title: "Elektrikář a topenář Písek | Tepelná čerpadla, FVE | OKelectric",
  description:
    "Elektroinstalace a hromosvody, tepelná čerpadla, fotovoltaika, rekuperace, klimatizace, kamery a revize pod jednou firmou, včetně projektu. Sídlo u Písku, za prací jezdíme i daleko.",
  path: "/",
});

const latest = PROJECTS_SORTED.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero: fotky přes celou plochu, text vlevo nad nimi */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink text-white lg:min-h-[min(calc(100svh-5rem),860px)]">
        <HeroSlideshow />

        <div className="shell relative z-[5] flex flex-1 flex-col justify-end pb-24 pt-24 sm:pb-32 lg:justify-center lg:pb-36 lg:pt-28">
          <div className="max-w-2xl">
            <p className="eyebrow !text-white/75">Elektrikáři a topenáři od Písku</p>
            <h1 className="mt-4 font-display text-display-xl text-balance">
              Energie. Teplo.
              <br />
              Jeden tým.
            </h1>

            <p className="mt-7 max-w-lg text-[1.15rem] leading-[1.6] text-white/85 text-pretty sm:text-[1.25rem]">
              Elektroinstalace, hromosvody, kotelny a tepelná čerpadla, fotovoltaika, rekuperace i
              alarmy. Vše pod jednou firmou, včetně projektu i revize.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonAnchor href={`tel:${NAP.phone}`} variant="brand" size="lg">
                <PhoneIcon className="h-5 w-5" aria-hidden />
                {NAP.phoneDisplay}
              </ButtonAnchor>
              <ButtonLink href="/reference" variant="outlineLight" size="lg">
                Prohlédnout reference
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Tři argumenty hned pod fotkou */}
      <div className="border-b border-line">
        <HeroProof className="shell mt-0 border-t-0 py-2 sm:py-6" />
      </div>

      {/* Služby */}
      <section className="shell py-16 sm:py-24" aria-labelledby="sluzby">
        <div className="reveal max-w-2xl">
          <h2 id="sluzby" className="font-display text-display-lg text-balance">
            Osm oborů, jedno telefonní číslo.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Často to začne jednou drobností a skončí u kompletního řešení. Děláme elektriku, topení
            a další související práce proto, abyste nemuseli koordinovat více dodavatelů. O návaznost
            prací se postaráme my.
          </p>
        </div>

        <div className="reveal-group mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <TrustStrip />

      {/* Reference */}
      <section className="shell py-16 sm:py-24" aria-labelledby="reference">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="reference" className="font-display text-display-lg text-balance">
              Poslední realizace
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              Všechno jsou fotky z našich zakázek. Od bytového rozvaděče v Písku po osvětlení
              uvnitř mostní konstrukce dálnice D4.
            </p>
          </div>
          <Link
            href="/reference"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink hover:text-brand-deep"
          >
            Prohlédnout reference
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ProjectGrid projects={latest} featureEvery={7} className="reveal-group mt-12" />
      </section>

      {/* Tým: nadpis nahoře, čtyři lidé v řadě pod ním. Úvod má i tak dost
          sekcí s nadpisem vlevo a obsahem vpravo. */}
      <section className="border-t border-line bg-mist py-16 sm:py-24" aria-labelledby="tym">
        <div className="shell">
          <div className="reveal flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div className="max-w-2xl">
              <h2 id="tym" className="font-display text-display-lg text-balance">
                Volejte rovnou tomu, kdo to dělá.
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
                Nemáme dispečink ani formulářovou frontu. Každý obor má u nás svého člověka a ten vám
                telefon zvedne.
              </p>
            </div>
            <ButtonLink href="/o-nas" variant="outline" size="lg">
              Poznat tým a kvalifikace
            </ButtonLink>
          </div>

          <ul className="reveal-group mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <li
                key={m.slug}
                className="flex flex-col border-b border-line py-6 sm:px-6 sm:odd:border-r sm:odd:pl-0 lg:border-b-0 lg:border-r lg:odd:pl-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="font-display text-[1.125rem] font-semibold text-ink">{m.name}</p>
                <p className="mt-0.5 text-[0.8125rem] text-ink-faint">{m.town}</p>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">{m.role}</p>
                <a
                  href={`tel:${m.phone}`}
                  className="mt-5 font-display text-[1.125rem] font-semibold text-ink hover:text-brand-deep"
                >
                  {m.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CoverageSection />

      <ContactSection
        heading="Nejdřív se přijedeme podívat."
        text="Řekněte nám, co potřebujete a kde. Domluvíme prohlídku a pak pošleme nabídku."
      />
    </>
  );
}
