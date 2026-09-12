import { COVERAGE } from "@/content/site";

/** brand.DEFAULT z tailwind.config. V SVG se hodnota opakuje, proto konstanta. */
const BRAND = "#60B23A";

const TIERS = [COVERAGE.core, COVERAGE.extended, COVERAGE.nationwide] as const;

/**
 * Působnost jako okruhy kolem Písecka, ne jako výčet obcí.
 *
 * Seznam měst tady byl původně a byl to problém: kdo v něm nenajde svoji ves,
 * usoudí, že se na něj nejezdí. Okruhy tenhle pocit nevyvolají a vnější z nich
 * schválně mizí za okrajem rámu, takže působnost nikde nekončí ostrou hranicí,
 * aniž bychom museli napsat "celá ČR".
 */
export function CoverageSection() {
  return (
    <section className="border-t border-line bg-mist py-16 sm:py-24" aria-labelledby="pusobnost">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="pusobnost" className="scroll-mt-24 font-display text-display-lg text-balance">
            Kam jezdíme
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Základnu máme na Písecku. Čím blíž jste, tím drobnější věc se vyplatí řešit
            &ndash; a čím větší zakázka, tím dál za ní vyrazíme.
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
 * Okruhy. Poloměry v SVG neodpovídají kilometrům lineárně - reálný poměr 30:90:220
 * by z vnitřního okruhu udělal tečku. Jde o čitelnost, ne o kartografii, proto je
 * měřítko stlačené a mapka nemá měřítko ani severku, aby se nevydávala za mapu.
 */
function CoverageRings() {
  return (
    <figure className="relative mx-auto max-w-lg">
      <svg
        viewBox="0 0 400 300"
        className="h-auto w-full overflow-hidden rounded-xl border border-line bg-paper"
        role="img"
        aria-label="Schéma dojezdu: nejhustší kolem Písecka, směrem ven řidnoucí a bez ostré hranice."
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
          Písecko
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-[0.8125rem] text-ink-faint">
        Nevidíte se v okruhu? Zavolejte a domluvíme se.
      </figcaption>
    </figure>
  );
}
