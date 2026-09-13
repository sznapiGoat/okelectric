import { Phone } from "lucide-react";
import { SERVICES } from "@/content/services";
import { NAP } from "@/content/site";
import { ServiceLinkGrid } from "@/components/ServiceLinkGrid";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";

/*
 * Robots je nutné uvést explicitně. Bez toho se sem propíše index, follow
 * z rootového layoutu a stránka pak nese dvě protichůdné direktivy.
 */
export const metadata = {
  title: "Stránka nenalezena",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="shell py-20 sm:py-28">
      <p className="font-display text-[4rem] font-bold leading-none text-brand">404</p>
      <h1 className="mt-4 font-display text-display-lg text-balance">Tahle stránka tu není.</h1>
      <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
        Možná se přesunula, možná jste se překlikli. Zavolejte, nebo si vyberte z toho, co děláme.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonAnchor href={`tel:${NAP.phone}`} variant="brand" size="lg">
          <Phone className="h-5 w-5" aria-hidden />
          {NAP.phoneDisplay}
        </ButtonAnchor>
        <ButtonLink href="/" variant="outline" size="lg">
          Zpět na úvod
        </ButtonLink>
      </div>

      <h2 className="mt-16 font-display text-display-sm">Co děláme</h2>
      <ServiceLinkGrid services={SERVICES} columns={4} className="mt-8" />
    </section>
  );
}
