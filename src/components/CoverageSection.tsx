import { COVERAGE, NAP } from "@/content/site";
import { PLACE_COORDS, PROJECTS } from "@/content/projects";
import { CZECH_OUTLINE } from "@/content/czechOutline";

const TIERS = [COVERAGE.core, COVERAGE.extended, COVERAGE.nationwide] as const;

/**
 * Odkud firma jezdí: text s úrovněmi dojezdu podle druhu práce a vedle něj
 * tečková mapa Česka, na které se zelenají místa skutečných zakázek z referencí.
 *
 * Mapa nekreslí žádný okruh ani region. Dosah ukazují jen doložené zakázky,
 * takže web netvrdí "celá ČR" a zároveň se neuzavírá do jižních Čech.
 */
export function CoverageSection() {
  return (
    <section className="border-t border-line bg-mist py-16 sm:py-24" aria-labelledby="pusobnost">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
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
                  <dt className="font-display text-[1.05rem] font-semibold text-ink">{tier.label}</dt>
                  <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{tier.promise}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal lg:col-span-7">
          <ProjectDotMap />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------- */
/* Tečková mapa. Všechno se počítá při buildu, do prohlížeče jde hotové SVG. */

const W = 800;
/** Pixely na stupeň zeměpisné šířky. Délka se zkracuje kosinem střední šířky. */
const K = 176;
const LON0 = 12.0;
const LAT0 = 51.12;
const COS = Math.cos((49.8 * Math.PI) / 180);
const H = Math.round((LAT0 - 48.5) * K);

/** Rozestup teček mřížky v jednotkách viewBoxu. */
const STEP = 14;
/** Dosah "tepla" jedné zakázky, zhruba 25 km. */
const SIGMA = 42;

const BRAND = "#60B23A";

function project(lat: number, lon: number): [number, number] {
  return [(lon - LON0) * COS * K, (LAT0 - lat) * K];
}

const OUTLINE = CZECH_OUTLINE.map(([lon, lat]) => project(lat, lon));

function insideOutline(x: number, y: number) {
  let inside = false;
  for (let i = 0, j = OUTLINE.length - 1; i < OUTLINE.length; j = i++) {
    const [xi, yi] = OUTLINE[i];
    const [xj, yj] = OUTLINE[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Každá zakázka z referencí, která má známé místo, jako bod v mapě. */
const JOBS = PROJECTS.flatMap((p) => {
  const c = PLACE_COORDS[p.place];
  return c ? [{ place: p.place, title: p.title, xy: project(c[0], c[1]) }] : [];
});

const BASE = project(NAP.geo.latitude, NAP.geo.longitude);

/** Zakázky daleko od sídla se v mapě pojmenují, jsou to doklady dosahu. */
const FAR_PLACES = Array.from(
  new Map(
    JOBS.filter((j) => Math.hypot(j.xy[0] - BASE[0], j.xy[1] - BASE[1]) > 150).map((j) => [j.place, j])
  ).values()
);

const ORIENTATION = [
  { name: "Praha", lat: 50.0755, lon: 14.4378 },
  { name: "Plzeň", lat: 49.7384, lon: 13.3736 },
  { name: "Brno", lat: 49.1951, lon: 16.6068 },
  { name: "Ostrava", lat: 49.8209, lon: 18.2625 },
];

type Dot = { x: number; y: number; level: number };

function buildDots(): Dot[] {
  const dots: Dot[] = [];
  let row = 0;
  for (let y = STEP / 2; y < H; y += STEP, row++) {
    // Každý druhý řádek posunutý o půl kroku, mřížka pak působí jako plástev.
    const offset = row % 2 ? STEP / 2 : 0;
    for (let x = STEP / 2 + offset; x < W; x += STEP) {
      if (!insideOutline(x, y)) continue;
      let heat = 0;
      for (const j of JOBS) {
        const d2 = (x - j.xy[0]) ** 2 + (y - j.xy[1]) ** 2;
        heat += Math.exp(-d2 / (SIGMA * SIGMA));
      }
      // Pět stupňů místo spojité škály: tečky se sdruží do skupin a SVG je menší.
      const level = heat < 0.12 ? 0 : Math.min(5, Math.ceil(heat * 1.6));
      dots.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, level });
    }
  }
  return dots;
}

const DOTS = buildDots();

/**
 * Všechny tečky jednoho stupně jako jediná cesta. Každá tečka je čára nulové
 * délky ("M x y h0") se zakulaceným koncem, tloušťka čáry dělá průměr. Je to
 * nejkratší zápis kolečka v SVG: stovky samostatných circle by se v HTML objevily
 * dvakrát (i v datech pro React) a homepage by nabobtnala o desítky kB.
 */
function dotsPath(level: number) {
  return DOTS.filter((d) => d.level === level)
    .map((d) => `M${d.x} ${d.y}h0`)
    .join("");
}

const PLACES_COUNT = new Set(JOBS.map((j) => j.place)).size;

const LEVEL_STYLE = [
  { r: 2.1, fill: "#C9D1C9", opacity: 1 },
  { r: 2.6, fill: BRAND, opacity: 0.35 },
  { r: 2.9, fill: BRAND, opacity: 0.5 },
  { r: 3.2, fill: BRAND, opacity: 0.68 },
  { r: 3.5, fill: BRAND, opacity: 0.84 },
  { r: 3.8, fill: BRAND, opacity: 1 },
];

function ProjectDotMap() {
  const [bx, by] = BASE;
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-xl border border-line bg-paper p-3 sm:p-5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Tečková mapa Česka: sídlo u Písku a ${PLACES_COUNT} míst našich zakázek, nejvíc v okolí sídla, nejdál ${FAR_PLACES.map((f) => f.place).join(", ")}.`}
        >
          {LEVEL_STYLE.map((style, level) => (
            <path
              key={level}
              d={dotsPath(level)}
              fill="none"
              stroke={style.fill}
              strokeOpacity={style.opacity}
              strokeWidth={style.r * 2}
              strokeLinecap="round"
            />
          ))}

          {ORIENTATION.map((c) => {
            const [x, y] = project(c.lat, c.lon);
            return (
              <g key={c.name}>
                <circle cx={x} cy={y} r={5} fill="#FFFFFF" stroke="#626D68" strokeWidth={2} />
                <text x={x + 11} y={y + 6.5} fill="#626D68" stroke="#FFFFFF" strokeWidth={5} paintOrder="stroke" style={{ fontSize: "19px", fontWeight: 500 }}>
                  {c.name}
                </text>
              </g>
            );
          })}

          {FAR_PLACES.map((f) => (
            <g key={f.place}>
              <title>{f.title}</title>
              <circle cx={f.xy[0]} cy={f.xy[1]} r={7} fill="#3D7A22" stroke="#FFFFFF" strokeWidth={2.5} />
              <text x={f.xy[0] + 13} y={f.xy[1] - 10} fill="#0F1512" stroke="#FFFFFF" strokeWidth={5} paintOrder="stroke" style={{ fontSize: "19px", fontWeight: 600 }}>
                {f.place}
              </text>
            </g>
          ))}

          {/* Sídlo: tečka s pomalu se rozpínajícím kruhem. */}
          <circle
            cx={bx}
            cy={by}
            r={11}
            fill="none"
            stroke="#3D7A22"
            strokeWidth={2}
            className="coverage-pulse"
          />
          <circle cx={bx} cy={by} r={9} fill="#3D7A22" stroke="#FFFFFF" strokeWidth={3} />
          <g transform={`translate(${Math.round(bx - 84)} ${Math.round(by + 20)})`}>
            <rect width={168} height={36} rx={18} fill="#0F1512" />
            <text x={84} y={24.5} textAnchor="middle" fill="#FFFFFF" style={{ fontSize: "19px", fontWeight: 600 }}>
              Sídlo u Písku
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[0.8125rem] text-ink-faint">
        <span className="flex items-center gap-2">
          <span className="flex items-center gap-1" aria-hidden>
            {[0.35, 0.6, 1].map((o) => (
              <span key={o} className="h-2 w-2 rounded-full bg-brand" style={{ opacity: o }} />
            ))}
          </span>
          {PLACES_COUNT} míst, kde máme nafocené zakázky
        </span>
        <span>Nevíte, jestli k vám dojedeme? Zavolejte, většinou ano.</span>
      </figcaption>
    </figure>
  );
}
