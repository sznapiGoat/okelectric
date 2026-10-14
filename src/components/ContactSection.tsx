import { NAP, TEAM } from "@/content/site";
import { PhoneIcon } from "@/components/BrandIcons";

type Props = {
  heading?: string;
  text?: string;
};

/**
 * Jednoduchá kontaktní sekce na konci stránek: nadpis, jedna věta a pod nimi
 * telefony na všechny čtyři lidi s místem, odkud jezdí, a vedle nich kdy nás
 * zastihnete. Zákazník volá tomu, kdo to má k němu nejblíž. Světlá jako
 * zbytek stránky, tmavý blok uprostřed světlého webu působil jako cizí kus.
 */
export function ContactSection({ heading, text }: Props) {
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

        <div className="reveal-group mt-12 grid grid-cols-1 border-t border-line lg:grid-cols-3">
          <div className="border-b border-line py-7 lg:col-span-2 lg:border-b-0 lg:border-r lg:pr-8">
            <p className="text-[0.8125rem] font-medium text-ink-faint">Zavolejte tomu, kdo je vám nejblíže</p>
            <ul className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {TEAM.map((m) => (
                <li key={m.slug}>
                  <p className="font-display text-[1.0625rem] font-semibold text-ink">{m.name}</p>
                  <p className="text-[0.8125rem] text-ink-faint">{m.town}</p>
                  <a
                    href={`tel:${m.phone}`}
                    className="mt-1.5 inline-flex items-center gap-2 font-display text-[1.125rem] font-semibold text-ink hover:text-brand-deep"
                  >
                    <PhoneIcon className="h-4 w-4 text-brand" aria-hidden />
                    {m.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <dl className="py-7 lg:pl-8">
            <dt className="text-[0.8125rem] font-medium text-ink-faint">Kdy nás zastihnete</dt>
            <dd className="mt-3 text-[1.0625rem] leading-relaxed text-ink">
              {days} {opens.replace(/^0/, "")} až {closes} hodin
              <span className="mt-1 block text-[0.9375rem] text-ink-soft">
                Havárie řešíme podle možností i o víkendu.
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
