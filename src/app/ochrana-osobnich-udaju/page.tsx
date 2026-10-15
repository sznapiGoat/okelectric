import Link from "next/link";
import { NAP, TEAM } from "@/content/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Zpracování osobních údajů | OKelectric",
  description:
    "Jaké osobní údaje OKelectric zpracovává, když nám zavoláte, napíšete nebo pošlete poptávku, jak dlouho je držíme a jaká máte práva.",
  path: "/ochrana-osobnich-udaju",
  image: "/og/kontakt.jpg",
});

const crumbs = [
  { name: "Úvod", path: "/" },
  { name: "Zpracování osobních údajů", path: "/ochrana-osobnich-udaju" },
];

/** Datum poslední úpravy textu. Při změně posunout i v sitemap.ts. */
const UPDATED = "15. 10. 2026";

/*
 * Poptávky z formuláře chodí na NAP.email, proto je správcem jeho majitel.
 * Pokud se to změní (jiná adresa, jiný člověk), upravit správce níž.
 */
const controller = TEAM.find((m) => m.email === NAP.email) ?? TEAM[0];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-display-sm text-balance">{title}</h2>
      <div className="prose-body mt-4">{children}</div>
    </section>
  );
}

const LIST = "mt-4 list-disc space-y-2 pl-5 text-[1.0625rem] leading-[1.72] text-ink-soft";
const LINK = "text-brand-deep underline underline-offset-4 hover:text-ink";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <article className="shell max-w-3xl pb-20 pt-8 sm:pb-28 sm:pt-10">
        <Breadcrumbs crumbs={crumbs} />

        <h1 className="mt-10 font-display text-display-lg text-balance">
          Zpracování osobních údajů
        </h1>
        <p className="mt-6 text-[1.15rem] leading-[1.6] text-ink-soft text-pretty">
          Údaje, které nám dáte, potřebujeme, abychom se vám mohli ozvat, připravit nabídku a
          zakázku udělat. Nikomu je neprodáváme a reklamu podle nich necílíme.
        </p>

        <Section title="Kdo údaje zpracovává">
          <p>
            Pod značkou OKelectric pracují samostatní podnikatelé. Správcem údajů z poptávkového
            formuláře a z e-mailu {NAP.email} je {controller.name}, IČO {controller.ico},{" "}
            {controller.address}.
          </p>
          <p>
            Když zavoláte nebo napíšete přímo někomu jinému z týmu, správcem je ten, s kým jednáte.
            Kontakty a IČO všech jsou na stránce{" "}
            <Link href="/o-nas#tym" className={LINK}>
              O nás
            </Link>
            .
          </p>
        </Section>

        <Section title="Jaké údaje a proč">
          <p>
            Z formuláře, e-mailu nebo telefonátu: jméno, telefon, e-mail, obec nebo adresu zakázky a
            to, co nám o zakázce napíšete. Použijeme je k tomu, abychom se vám ozvali, domluvili
            prohlídku a poslali nabídku. Právním základem je jednání o smlouvě na vaši žádost
            (čl. 6 odst. 1 písm. b GDPR).
          </p>
          <p>
            Když zakázku uděláme, zpracováváme navíc údaje potřebné k fakturaci a k dokladům, které
            k práci patří (třeba revizní zprávy). Tady jde o plnění smlouvy a o povinnosti, které
            nám ukládají zákony o účetnictví, dani a revizích (čl. 6 odst. 1 písm. b a c GDPR).
          </p>
        </Section>

        <Section title="Jak dlouho je držíme">
          <ul className={LIST}>
            <li>Poptávku, ze které zakázka nebude, smažeme nejpozději do jednoho roku.</li>
            <li>
              Údaje k hotové zakázce držíme po dobu záruky a promlčení případných nároků, faktury
              a účetní doklady tak dlouho, jak to vyžaduje zákon (nejčastěji 10 let).
            </li>
          </ul>
        </Section>

        <Section title="Kdo další k údajům má přístup">
          <p>Jen služby, bez kterých by web a pošta nefungovaly:</p>
          <ul className={LIST}>
            <li>Vercel Inc. (USA) provozuje web a vede technické záznamy o přístupech.</li>
            <li>Formspree, Inc. (USA) doručí vyplněný formulář do našeho e-mailu.</li>
            <li>WEDOS Internet, a.s. (ČR) provozuje naši e-mailovou schránku.</li>
          </ul>
          <p className="mt-4">
            Přenos do USA se řídí standardními smluvními doložkami schválenými Evropskou komisí,
            případně rámcem EU–USA pro ochranu osobních údajů.
          </p>
        </Section>

        <Section title="Cookies a měření návštěvnosti">
          <p>
            Web nepoužívá reklamní ani sledovací cookies, proto se vás na ně neptáme. Návštěvnost
            měříme službou Vercel Web Analytics, která cookies neukládá a jednotlivé návštěvníky
            nerozlišuje déle než jeden den. Vidíme jen souhrnná čísla, třeba kolik lidí přišlo na
            stránku fotovoltaiky.
          </p>
          <p>
            Web nenačítá nic od Facebooku, Instagramu ani Googlu. Odkazy na ně vedou na jejich
            stránky a co tam dělají s údaji, popisují jejich vlastní zásady.
          </p>
        </Section>

        <Section title="Vaše práva">
          <p>
            Můžete chtít vědět, jaké údaje o vás máme, nechat je opravit nebo smazat, omezit jejich
            zpracování, vznést námitku nebo je dostat ve strojově čitelné podobě. Stačí napsat na{" "}
            <a href={`mailto:${controller.email}`} className={LINK}>
              {controller.email}
            </a>{" "}
            nebo zavolat na{" "}
            <a href={`tel:${controller.phone}`} className={LINK}>
              {controller.phoneDisplay}
            </a>
            . Odpovíme nejpozději do měsíce.
          </p>
          <p>
            Pokud se vám nebude líbit, jak s údaji zacházíme, můžete si stěžovat u Úřadu pro
            ochranu osobních údajů (
            <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer" className={LINK}>
              uoou.gov.cz
            </a>
            ).
          </p>
        </Section>

        <p className="mt-14 text-[0.875rem] text-ink-faint">Platné od {UPDATED}.</p>
      </article>
    </>
  );
}
