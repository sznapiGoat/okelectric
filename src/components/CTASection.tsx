import { Mail, Phone } from "lucide-react";
import { NAP, REACH_LINE, TEAM } from "@/content/site";
import { ButtonAnchor } from "@/components/ui/Button";

type Props = {
  heading?: string;
  text?: string;
  ctaLabel?: string;
  /** Slug člena týmu, na kterého se má poptávka směřovat. */
  owner?: string;
};

export function CTASection({ heading, text, ctaLabel, owner }: Props) {
  const person = owner ? TEAM.find((m) => m.slug === owner) : undefined;
  const phone = person?.phone ?? NAP.phone;
  const phoneDisplay = person?.phoneDisplay ?? NAP.phoneDisplay;
  const email = person?.email ?? NAP.email;

  return (
    <section className="bg-ink text-paper">
      <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="font-display text-display-lg text-balance">
            {heading ?? "Řekněte nám, co potřebujete."}
          </h2>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-paper/70">
            {text ??
              `Zavolejte nebo napište. Ozveme se, domluvíme prohlídku a pošleme nabídku, se kterou se dá počítat. ${REACH_LINE}`}
          </p>

        </div>

        <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
          <ButtonAnchor
            href={`tel:${phone}`}
            variant="brand"
            size="lg"
            className="w-full justify-center sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden />
            {ctaLabel ? `${ctaLabel}: ${phoneDisplay}` : phoneDisplay}
          </ButtonAnchor>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 border border-paper/25 px-6 py-3.5 text-[0.9375rem] font-medium text-paper/85 transition-colors hover:border-paper hover:text-paper"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
