import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TEAM } from "@/content/site";
import { SERVICES } from "@/content/services";
import { projectsByCategory } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { ServiceLinkGrid } from "@/components/ServiceLinkGrid";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/BrandIcons";

/**
 * Elektronická vizitka člena týmu. Vedou na ni QR kódy z papírových vizitek
 * (staré adresy /prijmeni.htm se sem přesměrují v next.config.mjs). Kdo kód
 * načte, chce hlavně uložit kontakt, proto jsou tlačítka nahoře; pod nimi je
 * vidět, co člověk dělá a jak to vypadá hotové.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = TEAM.find((m) => m.slug === params.slug);
  if (!member) return {};
  return {
    ...pageMetadata({
      title: `${member.name} | OKelectric`,
      description: `${member.role}. Telefon ${member.phoneDisplay}, e-mail ${member.email}.`,
      path: `/vizitka/${member.slug}`,
      image: "/og/home.jpg",
    }),
    // Osobní vizitky nemají ve vyhledávání soutěžit se stránkami služeb.
    robots: { index: false, follow: true },
  };
}

export default function BusinessCardPage({ params }: { params: { slug: string } }) {
  const member = TEAM.find((m) => m.slug === params.slug);
  if (!member) notFound();

  const services = SERVICES.filter((s) => member.handles.includes(s.slug));
  const categories = Array.from(new Set(services.flatMap((s) => s.projectCategories)));
  const projects = projectsByCategory(...categories).slice(0, 6);

  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-14 pt-10 sm:pb-16 sm:pt-14">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-brand-deep">
            Vizitka · OKelectric
          </p>
          <h1 className="mt-4 font-display text-display-lg text-balance">{member.name}</h1>
          <p className="mt-4 max-w-2xl text-[1.15rem] leading-[1.6] text-ink-soft text-pretty">{member.role}</p>
          <p className="mt-3 flex items-center gap-2 text-[0.9375rem] text-ink-faint">
            <PinIcon className="h-4 w-4 text-brand" aria-hidden />
            {member.town}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonAnchor href={`tel:${member.phone}`} variant="brand" size="lg">
              <PhoneIcon className="h-5 w-5" aria-hidden />
              {member.phoneDisplay}
            </ButtonAnchor>
            <ButtonAnchor href={`mailto:${member.email}`} variant="outline" size="lg">
              <MailIcon className="h-5 w-5" aria-hidden />
              {member.email}
            </ButtonAnchor>
            <ButtonAnchor href={`/vizitka/${member.slug}/kontakt.vcf`} download variant="ghost" size="lg">
              Uložit do kontaktů
            </ButtonAnchor>
          </div>
        </div>
      </section>

      <section className="shell py-14 sm:py-20">
        <h2 className="font-display text-display-md text-balance">Na čem pracuji</h2>
        <ServiceLinkGrid services={services} className="mt-8" />
      </section>

      {projects.length > 0 && (
        <section className="border-t border-line bg-mist py-14 sm:py-20">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-display-md text-balance">Z našich zakázek</h2>
              <Link
                href="/reference"
                className="text-[0.9375rem] font-semibold text-brand-deep underline underline-offset-4 hover:text-ink"
              >
                Všechny reference
              </Link>
            </div>
            <ProjectGrid projects={projects} className="mt-8" />
          </div>
        </section>
      )}

      <section className="shell py-14 sm:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft text-pretty">
            Jsem součástí týmu OKelectric. Kontakty na ostatní najdete na stránce Kontakt.
          </p>
          <ButtonLink href="/kontakt" variant="outline">
            Celý tým
          </ButtonLink>
        </div>
        {/* Každý z týmu je samostatná OSVČ, zákon vyžaduje tyto údaje na webu uvést. */}
        <p className="mt-10 border-t border-line pt-4 text-[0.75rem] leading-relaxed text-ink-faint">
          IČO {member.ico}
          {member.dic && `, DIČ ${member.dic}`}, {member.address}. Fyzická osoba zapsaná v živnostenském rejstříku
          vedeném u MÚ {member.tradeOffice}.
        </p>
      </section>
    </>
  );
}
