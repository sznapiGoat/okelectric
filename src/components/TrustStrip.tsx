import { QUALIFICATIONS } from "@/content/site";
import { PartnerLogos } from "@/components/PartnerLogos";

/**
 * Pás s oprávněními a pod nimi loga značek, se kterými firma pracuje.
 */
export function TrustStrip() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-4">
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
            <dl className="reveal-group grid grid-cols-1 border-t border-line sm:grid-cols-2">
              {QUALIFICATIONS.map((q) => (
                <div key={q.label} className="border-b border-line py-5 pr-6 sm:odd:border-r sm:odd:pr-8">
                  <dt className="font-display text-[1.0625rem] font-semibold text-ink">{q.label}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{q.detail}</dd>
                </div>
              ))}
            </dl>

            <div className="reveal mt-10">
              <p className="text-[0.8125rem] font-medium text-ink-faint">Značky, které montujeme</p>
              <PartnerLogos className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
