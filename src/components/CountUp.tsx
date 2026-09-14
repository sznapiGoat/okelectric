import type { CSSProperties } from "react";

/**
 * Číslo, které se po načtení napočítá od nuly. Animace je celá v CSS
 * (.count-up v globals.css), komponenta jen nastaví cíl. Viditelné číslice
 * kreslí ::after, čtečky dostanou skutečné číslo ve skrytém textu.
 */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <span className="tabular-nums">
      <span
        className="count-up"
        style={{ "--count-target": value } as CSSProperties}
        aria-hidden
      />
      <span aria-hidden>{suffix}</span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}
