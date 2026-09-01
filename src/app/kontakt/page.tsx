import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SERVICES } from "@/content/services";
import { NAP, REGIONS_EXTENDED, REGION_LINE, TEAM } from "@/content/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PoptavkaForm } from "@/components/PoptavkaForm";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export const metadata = pageMetadata({
  title: "Kontakt | Elektrikář a topenář Písek, Protivín, Blatná | OKelectric",
  description:
    "Telefonní čísla a e-maily na jednotlivé členy týmu OKelectric. Písek, Protivín, Blatná, Čimelice, Šumava a Praha. Havárie řešíme dle možností i o víkendech.",
  path: "/kontakt",
});

const crumbs = [
  { name: "Úvod", path: "/" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function ContactPage() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="border-b border-line">
        <div className="shell pb-14 pt-8 sm:pb-16 sm:pt-10">
          <Breadcrumbs crumbs={crumbs} />

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="font-display text-display-lg text-balance">
                Zavolejte. Zvedneme to my, ne dispečink.
              </h1>
              <p className="mt-6 max-w-xl text-[1.15rem] leading-[1.6] text-ink-soft text-pretty">
                Nejrychlejší cesta k nabídce je telefon. Řekněte, o co jde, a domluvíme prohlídku.
                Pracujeme v oblasti {REGION_LINE}.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`tel:${NAP.phone}`}
                  className="inline-flex h-14 items-center gap-2 bg-brand px-7 font-semibold text-ink transition-colors hover:bg-brand-deep hover:text-paper"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {NAP.phoneDisplay}
                </a>
                <a
                  href={`mailto:${NAP.email}`}
                  className="inline-flex h-14 items-center gap-2 border border-ink px-7 font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  <Mail className="h-5 w-5" aria-hidden />
                  {NAP.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-4">
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-[1.0625rem] font-semibold">Havárie</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                  Urgentní situace a havarijní stavy řešíme podle svých možností i o víkendech.
                  Nejsme nonstop pohotovost, ale ozveme se, jakmile to jde.
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <h2 className="font-display text-[1.0625rem] font-semibold">Kde pracujeme</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {REGIONS_EXTENDED.join(", ")}. Vzdálenější zakázku posoudíme podle rozsahu.
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <h2 className="font-display text-[1.0625rem] font-semibold">Sledujte nás</h2>
                <p className="mt-2 flex gap-4 text-[0.9375rem]">
                  <a
                    href={NAP.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tech underline underline-offset-4 hover:text-tech-deep"
                  >
                    Facebook
                  </a>
                  <a
                    href={NAP.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tech underline underline-offset-4 hover:text-tech-deep"
                  >
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulář se objeví, jakmile je nastavené NEXT_PUBLIC_FORM_ENDPOINT.
          Bez endpointu by šlo o tlačítko, které nikam neodesílá. */}
      {formEndpoint && (
        <section className="border-b border-line bg-mist py-16 sm:py-20" aria-labelledby="poptavka">
          <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 id="poptavka" className="font-display text-display-md text-balance">
                Nechce se vám volat?
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-soft">
                Napište, co potřebujete, a ozveme se. Obvykle do druhého pracovního dne. U havárie
                raději rovnou zavolejte, formulář nikdo nehlídá v noci.
              </p>
            </div>
            <div className="lg:col-span-8">
              <PoptavkaForm endpoint={formEndpoint} />
            </div>
          </div>
        </section>
      )}

      <section className="shell py-16 sm:py-20" aria-labelledby="lide">
        <h2 id="lide" className="font-display text-display-md text-balance">
          Na koho se obrátit
        </h2>
        <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
          Každý obor má svého člověka. Vyberte podle toho, co potřebujete, nebo podle toho, kdo to má
          k vám nejblíž.
        </p>

        <div className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <TeamMemberCard key={m.slug} member={m} />
          ))}
          {/* Doplněk mřížky, aby spodní linka lícovala i při lichém počtu karet. */}
          <div className="hidden border-b border-r border-line sm:block lg:hidden" aria-hidden />
          <div className="hidden border-b border-r border-line lg:block" aria-hidden />
        </div>
      </section>

      <section className="border-t border-line bg-mist py-14">
        <div className="shell">
          <h2 className="font-display text-display-sm">Nevíte, koho volat?</h2>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
            Vyberte službu a na její stránce najdete přímé číslo na člověka, který ji vede.
          </p>
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
    </>
  );
}
