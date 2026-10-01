import Image from "next/image";
import { NAP, TEAM } from "@/content/site";
import { ButtonAnchor } from "@/components/ui/Button";
import { MailIcon, PhoneIcon } from "@/components/BrandIcons";

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
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      {/* Fotka z práce v pozadí, silně ztmavená: blok tak není prázdná tmavá
          plocha a navazuje na fotky v hlavičkách. */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/hero/full/s4.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "45% 55%" }}
        />
        <div className="absolute inset-0 bg-ink/80 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/70 lg:to-ink/35" />
      </div>

      <div className="shell grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:items-end">
        <div className="reveal lg:col-span-7">
          <h2 className="font-display text-display-lg text-balance">
            {heading ?? "Řekněte nám, co potřebujete."}
          </h2>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-paper/70">
            {text ??
              `Zavolejte nebo napište. Ozveme se, domluvíme prohlídku a pošleme nabídku, se kterou se dá počítat.`}
          </p>

        </div>

        <div className="reveal flex flex-col gap-3 lg:col-span-5 lg:items-end">
          <ButtonAnchor
            href={`tel:${phone}`}
            variant="brand"
            size="lg"
            className="w-full justify-center sm:w-auto"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden />
            {ctaLabel ? `${ctaLabel}: ${phoneDisplay}` : phoneDisplay}
          </ButtonAnchor>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 border border-paper/25 px-6 py-3.5 text-[0.9375rem] font-medium text-paper/85 transition-[color,border-color,transform] hover:border-paper hover:text-paper active:translate-y-px"
          >
            <MailIcon className="h-4 w-4" aria-hidden />
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
