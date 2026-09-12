import { PARTNERS, QUALIFICATIONS } from "@/content/site";

/**
 * Pás s oprávněními a autorizacemi. Bez log třetích stran, jen fakta,
 * aby nevznikal dojem partnerství, které firma nemá doložené.
 */
export function TrustStrip() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="font-display text-display-md text-balance">
              Papíry na to máme.
              <br />
              A umíme je použít.
            </h2>
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-ink-soft">
              Revizi po vlastní montáži si vystavíme sami, takže na ni nečekáte a neplatíte externího
              technika navíc.
            </p>
          </div>

          <div className="lg:col-span-8">
            <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
              {QUALIFICATIONS.map((q) => (
                <div key={q.label} className="border-b border-line py-5 pr-6 sm:odd:border-r sm:odd:pr-8">
                  <dt className="font-display text-[1.0625rem] font-semibold text-ink">{q.label}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{q.detail}</dd>
                </div>
              ))}
            </dl>

            {PARTNERS.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[0.8125rem] font-medium text-ink-faint">Pracujeme se systémy</span>
                {PARTNERS.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={p.detail}
                    className="border border-line-strong bg-paper px-3 py-1.5 text-[0.8125rem] font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
