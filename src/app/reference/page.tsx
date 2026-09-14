import Link from "next/link";
import { PROJECTS_SORTED } from "@/content/projects";
import { SERVICES } from "@/content/services";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ReferenceGallery } from "@/components/ReferenceGallery";

export const metadata = pageMetadata({
  title: "Reference | Fotovoltaika, tepelná čerpadla, elektro | OKelectric",
  description:
    "Fotogalerie dokončených zakázek: fotovoltaika, elektroinstalace, hromosvody, tepelná čerpadla, rekuperace a klimatizace. Od Písku, Blatné a Strakonic po velké zakázky po celé ČR.",
  path: "/reference",
});

const crumbs = [
  { name: "Úvod", path: "/" },
  { name: "Reference", path: "/reference" },
];

export default function ReferencePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="border-b border-line">
        <div className="shell pb-14 pt-8 sm:pb-16 sm:pt-10">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="font-display text-display-lg text-balance">
                {PROJECTS_SORTED.length} realizací, které si můžete prohlédnout
              </h1>
              <p className="mt-6 max-w-xl text-[1.15rem] leading-[1.6] text-ink-soft text-pretty">
                Rodinné domy, průmyslové areály i dálniční most. Všechny fotky jsou z našich vlastních
                zakázek, ne z katalogu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-14 sm:py-16">
        <ReferenceGallery projects={PROJECTS_SORTED} headingLevel={2} />
      </section>

      <section className="border-t border-line bg-mist py-14">
        <div className="shell">
          <h2 className="font-display text-display-sm">Hledáte konkrétní službu?</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="inline-block border border-line bg-paper px-3.5 py-2 text-[0.875rem] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Chcete něco podobného?"
        text="Řekněte nám, co máte v plánu a kde. Přijedeme se podívat a pošleme nabídku."
      />
    </>
  );
}
