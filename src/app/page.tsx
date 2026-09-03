import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES } from "@/content/services";
import { PROJECTS_SORTED } from "@/content/projects";
import { NAP, REGIONS_EXTENDED, REGION_LINE, TEAM } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { CTASection } from "@/components/CTASection";
import { HeroProof } from "@/components/HeroProof";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";

export const metadata = pageMetadata({
  title: "Elektrikáři a topenáři Písek, Protivín, Blatná | OKelectric",
  description:
    "Elektroinstalace a hromosvody, kotelny a tepelná čerpadla, fotovoltaika, rekuperace, alarmy a revize pod jednou firmou. Písek, Protivín, Blatná, Šumava a Praha.",
  path: "/",
});

// Fotka do hero se vybírá podle id, aby se nezměnila při přeřazení referencí.
const heroProject = PROJECTS_SORTED.find((p) => p.id === "p02") ?? PROJECTS_SORTED[0];
const latest = PROJECTS_SORTED.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="schematic pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(120%_90%_at_15%_0%,black,transparent)]"
          aria-hidden
        />

        <div className="shell relative grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-14 lg:pb-24 lg:pt-24">
          <div className="lg:col-span-6 xl:col-span-6">
            <h1 className="font-display text-display-xl text-balance">
              Elektrikáři,
              <br />
              kteří umí i topit.
            </h1>

            <p className="mt-7 max-w-lg text-[1.15rem] leading-[1.6] text-ink-soft text-pretty sm:text-[1.25rem]">
              Elektroinstalace, hromosvody, kotelny a tepelná čerpadla, fotovoltaika, rekuperace i
              alarmy. Vše pod jednou firmou, včetně revize, kterou vystavíme sami.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonAnchor href={`tel:${NAP.phone}`} variant="brand" size="lg">
                <Phone className="h-5 w-5" aria-hidden />
                {NAP.phoneDisplay}
              </ButtonAnchor>
              <ButtonLink href="/reference" variant="outline" size="lg">
                Prohlédnout reference
              </ButtonLink>
            </div>

            <HeroProof />
          </div>

          <div className="lg:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:aspect-[4/3.5]">
                <Image
                  src={heroProject.image}
                  alt={heroProject.alt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-3.5 text-[0.8125rem]">
                <span className="font-semibold text-ink">{heroProject.title}</span>
                <span className="text-ink-faint">
                  {heroProject.place}, {heroProject.dateLabel}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Pás obcí */}
        <div className="relative border-t border-line bg-mist">
          <div className="shell flex flex-wrap items-center gap-x-5 gap-y-2 py-4 text-[0.8125rem] text-ink-faint">
            <span className="font-semibold text-ink-soft">Jezdíme do:</span>
            {REGIONS_EXTENDED.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Služby */}
      <section className="shell py-16 sm:py-24" aria-labelledby="sluzby">
        <div className="max-w-2xl">
          <h2 id="sluzby" className="font-display text-display-lg text-balance">
            Osm oborů, jedno telefonní číslo.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Většina zakázek u nás začíná jednou věcí a skončí u tří. Právě proto děláme elektriku i
            topení pod jednou střechou, aby se na stavbě nedohadovaly dvě party nad jedním rozvaděčem.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <TrustStrip />

      {/* Reference */}
      <section className="shell py-16 sm:py-24" aria-labelledby="reference">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="reference" className="font-display text-display-lg text-balance">
              Poslední realizace
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              Fotky z vlastních zakázek, ne z katalogu. Od bytového rozvaděče v Písku po osvětlení
              uvnitř mostní konstrukce dálnice D4.
            </p>
          </div>
          <Link
            href="/reference"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink hover:text-brand-deep"
          >
            Všech {PROJECTS_SORTED.length} realizací
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ProjectGrid projects={latest} className="mt-12" />
      </section>

      {/* Tým */}
      <section className="border-t border-line bg-mist py-16 sm:py-24" aria-labelledby="tym">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="tym" className="font-display text-display-lg text-balance">
              Volejte rovnou tomu, kdo to dělá.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              Nemáme dispečink ani formulářovou frontu. Každý obor má u nás svého člověka a ten vám
              telefon zvedne. Pracujeme v oblasti {REGION_LINE}.
            </p>
            <ButtonLink href="/o-nas" variant="outline" size="lg" className="mt-8">
              Poznat tým a kvalifikace
            </ButtonLink>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-line">
              {TEAM.map((m) => (
                <li
                  key={m.slug}
                  className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <div className="sm:w-56 sm:shrink-0">
                    <p className="font-display text-[1.0625rem] font-semibold text-ink">{m.name}</p>
                    <p className="text-[0.8125rem] text-ink-faint">{m.town}</p>
                  </div>
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">{m.role}</p>
                  <a
                    href={`tel:${m.phone}`}
                    className="font-display text-[1.0625rem] font-semibold text-ink hover:text-brand-deep sm:shrink-0"
                  >
                    {m.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        heading="Vaše spokojenost je naším cílem a závazkem."
        text={`Každý projekt je jiný, proto začínáme tím, že posloucháme. Zavolejte a řekněte, co potřebujete. Pracujeme v oblasti ${REGION_LINE}.`}
      />
    </>
  );
}
