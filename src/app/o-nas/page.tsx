import { PARTNERS, QUALIFICATIONS, REGIONS_EXTENDED, REGION_LINE, TEAM } from "@/content/site";
import { SERVICES } from "@/content/services";
import { PROJECTS_SORTED } from "@/content/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ServiceLinkGrid } from "@/components/ServiceLinkGrid";
import { TeamMatrix } from "@/components/TeamMatrix";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export const metadata = pageMetadata({
  title: "O nás, tým a kvalifikace | OKelectric Písek, Protivín, Blatná",
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
                  OKelectric vzniklo z jednoduché úvahy. Na většině zakázek se elektrika a topení
                  potkávají a právě na tom rozhraní vzniká nejvíc problémů, když se na stavbě sejdou
                  dvě nezávislé party. Tepelné čerpadlo potřebuje rozvaděč, fotovoltaika hromosvod,
                  alarm připravenou kabeláž. Děláme obojí, takže se nemáme s kým dohadovat.
                </p>
                <p>
                  Pracujeme v oblasti {REGION_LINE}. Základnu máme v Protivíně, Písku, Blatné a
                  Čimelicích, jednotlivé zakázky nás ale zavedly i na Vysočinu a do Uničova.
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
            Volejte rovnou tomu, kdo má obor na starosti. Ušetříte si jedno přepojení a my čas.
          </p>
        </div>

        {/* Čtyři lidi padnou beze zbytku do dvou i do čtyř sloupců, doplňky mřížky nejsou potřeba. */}
        <div className="mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 xl:grid-cols-4">
          {TEAM.map((m) => (
            <TeamMemberCard key={m.slug} member={m} />
          ))}
        </div>

        <div className="mt-16 max-w-3xl">
          <h3 className="font-display text-[1.4rem] font-semibold tracking-tight text-ink">
            Kdo dělá co
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
            Elektroinstalaci dělá celá parta, u specializovaných oborů má každý svoje.
            Volejte rovnou tomu, koho se to týká.
          </p>
          <div className="mt-6">
            <TeamMatrix />
          </div>
        </div>
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
            <dl className="border-t border-line">
              {QUALIFICATIONS.map((q) => (
                <div key={q.label} className="border-b border-line py-5">
                  <dt className="font-display text-[1.15rem] font-semibold text-ink">{q.label}</dt>
                  <dd className="mt-1.5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
                    {q.detail}
                  </dd>
                </div>
              ))}
            </dl>

            {PARTNERS.length > 0 && (
              <>
                <h3 className="mt-12 font-display text-display-sm">Značky, se kterými pracujeme</h3>
                <dl className="mt-6 grid grid-cols-1 border-l border-t border-line sm:grid-cols-3">
                  {PARTNERS.map((p) => (
                    <div key={p.name} className="border-b border-r border-line p-5">
                      <dt className="font-display text-[1.15rem] font-semibold text-ink">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink hover:text-brand-deep"
                        >
                          {p.name}
                        </a>
                      </dt>
                      <dd className="mt-1 text-[0.9375rem] text-ink-soft">{p.detail}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
            <p className="mt-5 max-w-xl text-[0.875rem] leading-relaxed text-ink-faint">
              Pro montáž zabezpečovací techniky držíme koncesovanou živnost.
            </p>
          </div>
        </div>
      </section>

      {/* Co děláme */}
      <section className="shell py-16 sm:py-20">
        <h2 className="font-display text-display-sm">Čemu se věnujeme</h2>
        <ServiceLinkGrid services={SERVICES} columns={4} className="mt-8" />
      </section>

      <CTASection />
    </>
  );
}
