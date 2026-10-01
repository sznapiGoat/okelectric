import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { SERVICE_HEROES } from "@/content/hero";
import { projectsByCategory } from "@/content/projects";
import { coverageLine, TEAM } from "@/content/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ButtonAnchor } from "@/components/ui/Button";
import { CheckIcon, PhoneIcon } from "@/components/BrandIcons";

export function ServicePageTemplate({ service }: { service: Service }) {
  const owner = TEAM.find((m) => m.slug === service.owner);
  const projects = projectsByCategory(...service.projectCategories).slice(0, 3);
  // Fotka do textu: z hlavního oboru služby a jiná než ty tři v mřížce níž.
  // U oborů s málo fotkami žádná nezbyde a text zůstane bez ní.
  const shown = new Set(projects.map((p) => p.id));
  const primary = service.projectCategories[0];
  const bodyPhoto = primary ? projectsByCategory(primary).find((p) => !shown.has(p.id)) : undefined;
  const hero = SERVICE_HEROES[service.slug];

  const crumbs = [
    { name: "Úvod", path: "/" },
    { name: service.navLabel, path: `/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(service.faq), breadcrumbSchema(crumbs)]} />

      {/* Hlavička služby: fotka oboru přes celou šířku, text vlevo nad ní */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        {hero && (
          <div className="absolute inset-0 -z-10" aria-hidden>
            <Image
              src={hero.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="photo-drift object-cover"
              style={{ objectPosition: hero.focus, transformOrigin: hero.focus }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/55 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/60 lg:to-ink/15" />
          </div>
        )}

        <div className="shell pb-16 pt-8 sm:pb-24 sm:pt-10 lg:pb-28">
          <Breadcrumbs crumbs={crumbs} onDark />

          <div className="mt-14 max-w-2xl sm:mt-20">
            <ServiceIcon slug={service.slug} className="h-12 w-12 text-brand" />
            <h1 className="mt-6 font-display text-display-lg text-balance">{service.title}</h1>
            <p className="mt-6 max-w-xl text-[1.15rem] leading-[1.6] text-white/85 text-pretty">
              {service.lead}
            </p>

            {owner && (
              <div className="mt-9">
                <ButtonAnchor href={`tel:${owner.phone}`} variant="brand" size="lg">
                  <PhoneIcon className="h-5 w-5" aria-hidden />
                  {service.ctaLabel}
                </ButtonAnchor>
                <p className="mt-3.5 max-w-md text-[0.9375rem] leading-relaxed text-white/70">
                  {service.ctaNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Co dodáváme: pruh hned pod fotkou */}
      <section className="border-b border-line bg-mist">
        <div className="shell py-10 sm:py-12">
          <h2 className="font-display text-[1.0625rem] font-semibold text-ink">{service.scope.heading}</h2>
          <ul className="mt-5 grid gap-x-10 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {service.scope.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hlavní text */}
      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-body lg:col-span-8">
            {service.body.map((block, i) => (
              <Reveal key={block.heading} className={i > 0 ? "mt-14" : undefined}>
                <h2 className="font-display text-display-md text-balance">{block.heading}</h2>
                <div className="mt-5 max-w-prose">
                  {block.paragraphs.map((p, j) => (
                    <p key={j} className={j > 0 ? "mt-4" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
                {i === 0 && bodyPhoto && (
                  <figure className="mt-12">
                    <div className="relative aspect-[3/2] overflow-hidden bg-mist">
                      <Image
                        src={bodyPhoto.image}
                        alt={bodyPhoto.alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 92vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.875rem] text-ink-faint">
                      {bodyPhoto.title}, {bodyPhoto.place}, {bodyPhoto.dateLabel}
                    </figcaption>
                  </figure>
                )}
              </Reveal>
            ))}
          </div>

          {/* Jak to probíhá */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-display-sm">Jak to probíhá</h2>
              <ol className="mt-6 border-t border-line">
                {service.process.map((step) => (
                  <li key={step.title} className="relative border-b border-line py-5 pl-5">
                    <span
                      className="absolute left-0 top-6 h-2 w-2 bg-brand"
                      aria-hidden
                    />
                    <h3 className="font-display text-[1rem] font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{step.text}</p>
                  </li>
                ))}
              </ol>
              {/* Tichá zmínka o dojezdu. U velkých oborů říká, že vzdálenost neřešíme,
                  ale drobným písmem na konci - ne jako slib na půl obrazovky. */}
              <p className="mt-6 text-[0.875rem] leading-relaxed text-ink-faint">
                {coverageLine(service.reach)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference k této službě */}
      {projects.length > 0 && (
        <section className="border-t border-line bg-mist py-16 sm:py-20">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-display-md text-balance">
                Takhle to u nás vypadá hotové
              </h2>
              <Link
                href="/reference"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink hover:text-brand-deep"
              >
                Všechny reference
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <ProjectGrid projects={projects} className="reveal-group mt-10" />
          </div>
        </section>
      )}

      {/* Časté dotazy */}
      <section className="shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-display-md text-balance">Časté dotazy</h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              Nenašli jste to své? Zavolejte, odpovíme rovnou.
            </p>
          </div>
          <div className="reveal lg:col-span-8">
            <FAQAccordion items={service.faq} />
          </div>
        </div>
      </section>

      <CTASection ctaLabel={service.ctaLabel} owner={service.owner} />
    </>
  );
}
