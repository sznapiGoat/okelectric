import type { CSSProperties } from "react";

/**
 * "Proud v mřížce": krátké světelné impulzy, které občas proběhnou po čarách
 * technické mřížky v pozadí hero, zeleně a modře jako firemní barvy.
 *
 * Mřížka (.schematic) má krok 96 px od levého horního rohu sekce, impulzy proto
 * jezdí přesně po jejích čarách (násobky 96 px). Časy a zpoždění jsou záměrně
 * nesoudělné, aby se vzor neopakoval viditelně po pár sekundách.
 *
 * Čisté CSS bez JavaScriptu. Nadpis ani fotka se neanimují, takže animace
 * neposouvá LCP. Při prefers-reduced-motion se impulzy nevykreslí vůbec.
 */
type Pulse = {
  axis: "x" | "y";
  /** Pořadí čáry mřížky, na které impulz jede. */
  line: number;
  duration: number;
  delay: number;
  color: "brand" | "tech";
};

const PULSES: Pulse[] = [
  { axis: "x", line: 1, duration: 6.1, delay: 0.3, color: "brand" },
  { axis: "x", line: 2, duration: 8.3, delay: 4.2, color: "tech" },
  { axis: "x", line: 4, duration: 7.4, delay: 2.1, color: "tech" },
  { axis: "x", line: 6, duration: 9.2, delay: 5.6, color: "brand" },
  { axis: "y", line: 1, duration: 7.7, delay: 1.2, color: "brand" },
  { axis: "y", line: 4, duration: 6.9, delay: 3.4, color: "tech" },
  { axis: "y", line: 7, duration: 8.8, delay: 0.8, color: "brand" },
  { axis: "y", line: 11, duration: 9.6, delay: 6.1, color: "tech" },
];

/**
 * Plné názvy tříd. Tailwind z @layer components vyhodí všechno, co v kódu nenajde
 * jako celý řetězec, takže třídy se nesmí skládat přes šablonu.
 */
const CLASSES = {
  "x-brand": "hero-current__pulse hero-current__pulse--x hero-current__pulse--brand",
  "x-tech": "hero-current__pulse hero-current__pulse--x hero-current__pulse--tech",
  "y-brand": "hero-current__pulse hero-current__pulse--y hero-current__pulse--brand",
  "y-tech": "hero-current__pulse hero-current__pulse--y hero-current__pulse--tech",
} as const;

export function HeroCurrent() {
  return (
    <div
      className="hero-current pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(150%_120%_at_25%_20%,black_35%,transparent)]"
      aria-hidden
    >
      {PULSES.map((p, i) => (
        <span
          key={i}
          className={CLASSES[`${p.axis}-${p.color}`]}
          style={
            {
              [p.axis === "x" ? "top" : "left"]: `${p.line * 96}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
