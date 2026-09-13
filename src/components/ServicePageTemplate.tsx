import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import type { Service } from "@/content/services";
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
import { cn } from "@/lib/utils";

export function ServicePageTemplate({ service }: { service: Service }) {
  const owner = TEAM.find((m) => m.slug === service.owner);
  const projects = projectsByCategory(...service.projectCategories).slice(0, 3);
  const accentText = service.accent === "green" ? "text-brand" : "text-tech";
  const accentBg = service.accent === "green" ? "bg-brand" : "bg-tech";

  const crumbs = [
    { name: "Úvod", path: "/" },
    { name: service.navLabel, path: `/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(service.faq), breadcrumbSchema(crumbs)]} />

      {/* Hlavička služby */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="schematic pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
        <div className="shell relative pb-14 pt-8 sm:pb-20 sm:pt-10">
          <Breadcrumbs crumbs={crumbs} />

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ServiceIcon slug={service.slug} className={cn("h-12 w-12", accentText)} />
              <h1 className="mt-6 font-display text-display-lg text-balance">{service.title}</h1>
              <p className="mt-6 max-w-xl text-[1.15rem] leading-[1.6] text-ink-soft text-pretty">
                {service.lead}
              </p>

              {owner && (
                <div className="mt-9">
                  <ButtonAnchor
                    href={`tel:${owner.phone}`}
                    variant={service.accent === "green" ? "brand" : "tech"}
                    size="lg"
                  >
                    <Phone className="h-5 w-5" aria-hidden />
                    {service.ctaLabel}
                  </ButtonAnchor>
                  <p className="mt-3.5 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
                    {service.ctaNote}
                  </p>
                </div>
              )}
            </div>

            <aside className="lg:col-span-5 lg:pt-6">
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-[1.0625rem] font-semibold text-ink">
                  {service.scope.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {service.scope.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                      <Check className={cn("mt-1 h-4 w-4 shrink-0", accentText)} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Hlavní text */}
      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-body lg:col-span-8">
            {service.body.map((block, i) => (
              <Reveal key={block.heading} delay={i * 0.05} className={i > 0 ? "mt-14" : undefined}>
                <h2 className="font-display text-display-md text-balance">{block.heading}</h2>
                <div className="mt-5 max-w-prose">
                  {block.paragraphs.map((p, j) => (
                    <p key={j} className={j > 0 ? "mt-4" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
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
                      className={cn("absolute left-0 top-6 h-2 w-2", accentBg)}
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

      {/* Výrobek, který k službě montujeme. Parametry přebírá z webu výrobce a na něj i odkazuje. */}
      {service.product && (
        <section className="border-t border-line">
          <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className={cn("text-[0.8125rem] font-semibold uppercase tracking-[0.08em]", accentText)}>
                Co montujeme
              </p>
              <h2 className="mt-3 font-display text-display-md text-balance">{service.product.name}</h2>
              <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
                {service.product.intro}
              </p>
              <a
                href={service.product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-ink hover:text-brand-deep"
              >
                Detail na webu výrobce {service.product.maker}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </div>
            <dl className="border-t border-line lg:col-span-7">
              {service.product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 gap-1 border-b border-line py-3.5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                >
                  <dt className="text-[0.9375rem] font-semibold text-ink">{spec.label}</dt>
                  <dd className="text-[0.9375rem] text-ink-soft">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

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

            <ProjectGrid projects={projects} className="mt-10" />
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
          <div className="lg:col-span-8">
            <FAQAccordion items={service.faq} />
          </div>
        </div>
      </section>

      <CTASection ctaLabel={service.ctaLabel} owner={service.owner} />
    </>
  );
}
