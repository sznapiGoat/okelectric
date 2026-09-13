import { COVERAGE } from "@/content/site";

/** brand.DEFAULT z tailwind.config. V SVG se hodnota opakuje, proto konstanta. */
const BRAND = "#60B23A";

const TIERS = [COVERAGE.core, COVERAGE.extended, COVERAGE.nationwide] as const;

/**
 * Dojezd jako okruhy kolem sídla, ne jako výčet obcí ani jako region.
 *
 * Okruhy jsou rozdělené podle druhu práce, ne podle kilometrů: čím větší zakázka,
 * tím dál. Vnější okruh schválně mizí za okrajem rámu, takže působnost nikde
 * nekončí hranicí, a přitom nikde nestojí "celá ČR".
 */
export function CoverageSection() {
  return (
    <section className="border-t border-line bg-mist py-16 sm:py-24" aria-labelledby="pusobnost">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="pusobnost" className="scroll-mt-24 font-display text-display-lg text-balance">
            Odkud k&nbsp;vám jedeme
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Sídlo máme u Písku. Jak daleko za prací vyrazíme, neurčuje mapa, ale zakázka:
            na drobnou opravu jezdíme po okolí, za kotelnou nebo rozvodnou i přes půl republiky.
          </p>

          <dl className="mt-9 space-y-6">
            {TIERS.map((tier, i) => (
              <div key={tier.label} className="flex gap-4">
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded-full border border-brand"
                  style={{ backgroundColor: `rgba(96, 178, 58, ${0.75 - i * 0.28})` }}
                  aria-hidden
                />
                <div>
                  <dt className="font-display text-[1.05rem] font-semibold text-ink">
                    {tier.label}
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {tier.promise}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <CoverageRings />
        </div>
      </div>
    </section>
  );
}

/**
 * Okruhy. Schéma, ne mapa: poloměry nevyjadřují kilometry, proto nemá měřítko
 * ani severku, aby se za mapu nevydávalo.
 */
function CoverageRings() {
  return (
    <figure className="relative mx-auto max-w-lg">
      <svg
        viewBox="0 0 400 300"
        className="h-auto w-full overflow-hidden rounded-xl border border-line bg-paper"
        role="img"
        aria-label="Schéma dojezdu: sídlo u Písku uprostřed, okruhy podle velikosti zakázky bez ostré hranice."
      >
        <defs>
          {/* Vnější okruh se vytrácí, aby působnost nekončila čárou. */}
          <radialGradient id="cov-fade" cx="50%" cy="50%">
            <stop offset="55%" stopColor={BRAND} stopOpacity="0.22" />
            <stop offset="100%" stopColor={BRAND} stopOpacity="0" />
          </radialGradient>
          <pattern id="cov-grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M25 0H0V25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect width="400" height="300" fill="url(#cov-grid)" className="text-line" />

        <circle cx="200" cy="150" r="185" fill="url(#cov-fade)" />
        <circle
          cx="200"
          cy="150"
          r="108"
          fill={BRAND}
          fillOpacity="0.1"
          stroke={BRAND}
          strokeOpacity="0.3"
          strokeDasharray="4 5"
        />
        <circle cx="200" cy="150" r="52" fill={BRAND} fillOpacity="0.18" stroke={BRAND} strokeOpacity="0.55" />
        <circle cx="200" cy="150" r="5" fill={BRAND} />

        <text
          x="200"
          y="137"
          textAnchor="middle"
          className="fill-ink font-semibold"
          style={{ fontSize: "13px" }}
        >
          Sídlo u Písku
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-[0.8125rem] text-ink-faint">
        Nevíte, jestli k vám dojedeme? Zavolejte, většinou ano.
      </figcaption>
    </figure>
  );
}
