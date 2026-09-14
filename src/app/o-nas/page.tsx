import { QUALIFICATIONS, REGIONS_EXTENDED, TEAM } from "@/content/site";
import { SERVICES } from "@/content/services";
import { PROJECTS_SORTED } from "@/content/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PartnerLogos } from "@/components/PartnerLogos";
import { ServiceLinkGrid } from "@/components/ServiceLinkGrid";
import { TeamGrid } from "@/components/TeamGrid";

export const metadata = pageMetadata({
  title: "O nás a kvalifikace | Elektrikáři od Písku | OKelectric",
  description:
    "Čtyři lidi, osm oborů. Oprávnění dle §6, §7 a §8 NV č. 194/2022, kvalifikace pro fotovoltaiku 26-014-H a tepelná čerpadla 26-074-M, revize vyhrazených elektrických zařízení.",
  path: "/o-nas",
});

const crumbs = [
  { name: "Úvod", path: "/" },
  { name: "O nás", path: "/o-nas" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative overflow-hidden border-b border-line">
        <div
          className="schematic pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
        <div className="shell relative pb-16 pt-8 sm:pb-20 sm:pt-10">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="font-display text-display-lg text-balance">
                Čtyři lidi, osm oborů, jeden telefon.
              </h1>
              <div className="prose-body mt-7 max-w-prose">
                <p>
                  Vaše spokojenost je naším cílem a závazkem. Každý projekt je pro nás jedinečný, a
                  proto nasloucháme vašim potřebám a přáním. To není fráze do patičky, ale způsob, jak
                  se dá dělat řemeslo v regionu, kde se lidé znají.
                </p>
                <p>
                  OKelectric vzniklo z jednoduché úvahy: na většině akcí se potkává více profesí,
                  pojďme tedy tyhle lidi dát dohromady a ušetřit všem čas a starosti.
                </p>
                <p>
                  Sídlo máme u Písku, ale spousta zákazníků nás povolává i do Prahy, Plzně
                  a na Moravu.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-4">
              <dl className="grid grid-cols-2 border-t border-line">
                <div className="border-b border-r border-line py-5 pr-5">
                  <dt className="text-[0.8125rem] text-ink-faint">Doložených realizací</dt>
                  <dd className="mt-1 font-display text-[2rem] font-bold tabular-nums">
                    {PROJECTS_SORTED.length}
                  </dd>
                </div>
                <div className="border-b border-line py-5 pl-5">
                  <dt className="text-[0.8125rem] text-ink-faint">Oborů</dt>
                  <dd className="mt-1 font-display text-[2rem] font-bold tabular-nums">
                    {SERVICES.length}
                  </dd>
                </div>
                <div className="border-b border-r border-line py-5 pr-5">
                  <dt className="text-[0.8125rem] text-ink-faint">Lidí v týmu</dt>
                  <dd className="mt-1 font-display text-[2rem] font-bold tabular-nums">{TEAM.length}</dd>
                </div>
                <div className="border-b border-line py-5 pl-5">
                  <dt className="text-[0.8125rem] text-ink-faint">Obcí a měst</dt>
                  <dd className="mt-1 font-display text-[2rem] font-bold tabular-nums">
                    {REGIONS_EXTENDED.length}+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Tým */}
      <section className="shell py-16 sm:py-24" aria-labelledby="tym">
        <div className="max-w-2xl">
          <h2 id="tym" className="font-display text-display-lg text-balance">
            Kdo k vám přijede
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Volejte rovnou tomu, kdo má obor na starosti. U každého jsou podsvícené obory, které
            dělá.
          </p>
        </div>

        <TeamGrid className="mt-12" />

      </section>

      {/* Kvalifikace */}
      <section className="border-t border-line bg-mist py-16 sm:py-24" aria-labelledby="kvalifikace">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="kvalifikace" className="font-display text-display-lg text-balance">
              Oprávnění a kvalifikace
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              Jsme držiteli platných oprávnění pro práci na elektrických zařízeních ve smyslu §6, §7 a
              §8 nařízení vlády č. 194/2022, obor 26-51-H, a pro provádění revizí vyhrazených
              elektrických zařízení.
            </p>
          </div>

          <div className="lg:col-span-8">
            <dl className="reveal-group border-t border-line">
              {QUALIFICATIONS.map((q) => (
                <div key={q.label} className="border-b border-line py-5">
                  <dt className="font-display text-[1.15rem] font-semibold text-ink">{q.label}</dt>
                  <dd className="mt-1.5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
                    {q.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <h3 className="font-display text-display-sm">Značky, které montujeme</h3>
              <PartnerLogos className="mt-6" />
            </div>
            <p className="mt-5 max-w-xl text-[0.875rem] leading-relaxed text-ink-faint">
              Pro montáž zabezpečovací techniky držíme koncesovanou živnost.
            </p>
          </div>
        </div>
      </section>

      {/* Co děláme */}
      <section className="shell py-16 sm:py-20">
        <h2 className="font-display text-display-sm">Čemu se věnujeme</h2>
        <ServiceLinkGrid services={SERVICES} columns={4} className="reveal-group mt-8" />
      </section>

      <CTASection />
    </>
  );
}
