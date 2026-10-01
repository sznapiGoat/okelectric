import { NAP, TEAM } from "@/content/site";
import { ButtonAnchor } from "@/components/ui/Button";
import { MailIcon, PhoneIcon } from "@/components/BrandIcons";

type Props = {
  heading?: string;
  text?: string;
  /** Slug člena týmu, na kterého se má poptávka směřovat (stránky služeb). */
  owner?: string;
};

/**
 * Jednoduchá kontaktní sekce na konci stránek: nadpis, jedna věta a pod nimi
 * tři kontakty vedle sebe (telefon, e-mail, kdy nás zastihnete). Světlá jako
 * zbytek stránky, tmavý blok uprostřed světlého webu působil jako cizí kus.
 * Na stránce služby vede telefon a e-mail přímo na člověka, který obor dělá.
 */
export function ContactSection({ heading, text, owner }: Props) {
  const person = owner ? TEAM.find((m) => m.slug === owner) : undefined;
  const phone = person?.phone ?? NAP.phone;
  const phoneDisplay = person?.phoneDisplay ?? NAP.phoneDisplay;
  const email = person?.email ?? NAP.email;
  const { days, opens, closes } = NAP.openingHours;

  return (
    <section className="border-t border-line" aria-labelledby="kontakt-sekce">
      <div className="shell py-16 sm:py-24">
        <div className="reveal max-w-2xl">
          <h2 id="kontakt-sekce" className="font-display text-display-lg text-balance">
            {heading ?? "Řekněte nám, co potřebujete."}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            {text ??
              "Zavolejte nebo napište. Ozveme se, domluvíme prohlídku a pošleme nabídku, se kterou se dá počítat."}
          </p>
        </div>

        <dl className="reveal-group mt-12 grid grid-cols-1 border-t border-line md:grid-cols-3">
          <div className="border-b border-line py-7 md:border-b-0 md:border-r md:pr-8">
            <dt className="text-[0.8125rem] font-medium text-ink-faint">
              {person ? `Telefon, ${person.name}` : "Telefon"}
            </dt>
            <dd className="mt-3">
              <ButtonAnchor href={`tel:${phone}`} variant="brand" size="lg">
                <PhoneIcon className="h-5 w-5" aria-hidden />
                {phoneDisplay}
              </ButtonAnchor>
            </dd>
          </div>

          <div className="border-b border-line py-7 md:border-b-0 md:border-r md:px-8">
            <dt className="text-[0.8125rem] font-medium text-ink-faint">E-mail</dt>
            <dd className="mt-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 font-display text-[1.25rem] font-semibold text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                <MailIcon className="h-5 w-5 text-brand" aria-hidden />
                {email}
              </a>
            </dd>
          </div>

          <div className="py-7 md:pl-8">
            <dt className="text-[0.8125rem] font-medium text-ink-faint">Kdy nás zastihnete</dt>
            <dd className="mt-3 text-[1.0625rem] leading-relaxed text-ink">
              {days} {opens.replace(/^0/, "")} až {closes} hodin
              <span className="mt-1 block text-[0.9375rem] text-ink-soft">
                Havárie řešíme podle možností i o víkendu.
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
