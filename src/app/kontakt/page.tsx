import { NAP } from "@/content/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PoptavkaForm } from "@/components/PoptavkaForm";
import { TeamGrid } from "@/components/TeamGrid";
import { ButtonAnchor } from "@/components/ui/Button";
import { MailIcon, PhoneIcon } from "@/components/BrandIcons";

export const metadata = pageMetadata({
  title: "Kontakt | Elektrikáři a topenáři od Písku | OKelectric",
  description:
    "Telefonní čísla a e-maily na jednotlivé členy týmu OKelectric. Sídlo máme u Písku, pracovní dny 7 až 18 hodin. Havárie řešíme dle možností i o víkendech.",
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
                Zavolejte, telefon zvedne někdo z nás.
              </h1>
              <p className="mt-6 max-w-xl text-[1.15rem] leading-[1.6] text-ink-soft text-pretty">
                Nejrychlejší cesta k nabídce je telefon. Řekněte, o co jde a kde, a domluvíme prohlídku.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonAnchor href={`tel:${NAP.phone}`} variant="brand" size="lg">
                  <PhoneIcon className="h-5 w-5" aria-hidden />
                  {NAP.phoneDisplay}
                </ButtonAnchor>
                <ButtonAnchor href={`mailto:${NAP.email}`} variant="outline" size="lg">
                  <MailIcon className="h-5 w-5" aria-hidden />
                  {NAP.email}
                </ButtonAnchor>
              </div>
            </div>

            <dl className="border-t border-line lg:col-span-5 lg:mt-4">
              <div className="border-b border-line py-5">
                <dt className="font-display text-[1.0625rem] font-semibold">Kdy nás zastihnete</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {NAP.openingHours.days} {NAP.openingHours.opens.replace(/^0/, "")} až{" "}
                  {NAP.openingHours.closes} hodin. Havárie řešíme podle možností i o víkendu, nonstop
                  pohotovost ale nejsme.
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="font-display text-[1.0625rem] font-semibold">Kde nás najdete</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {NAP.streetAddress}, {NAP.postalCode} {NAP.addressLocality}.{" "}
                  <a
                    href={NAP.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-deep underline underline-offset-4 hover:text-ink"
                  >
                    Mapy Google
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-display text-[1.0625rem] font-semibold">Sledujte nás</dt>
                <dd className="mt-1.5 flex gap-4 text-[0.9375rem]">
                  <a
                    href={NAP.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-deep underline underline-offset-4 hover:text-ink"
                  >
                    Facebook
                  </a>
                  <a
                    href={NAP.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-deep underline underline-offset-4 hover:text-ink"
                  >
                    Instagram
                  </a>
                </dd>
              </div>
            </dl>
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

        <TeamGrid className="mt-10" />
      </section>

    </>
  );
}
