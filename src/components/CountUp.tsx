"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Phase = "static" | "armed" | "run";

/**
 * Číslo, které se napočítá od nuly, když doscrolluje do okna.
 *
 * Samotné počítání je v CSS (.count-up v globals.css, registrovaná vlastnost
 * --count a counter()), komponenta jen hlídá, kdy prvek vjede do okna:
 *  static - výchozí stav ze serveru i bez JavaScriptu, ukazuje cílové číslo
 *  armed  - prvek je zatím mimo okno, čeká na nule, takže nic neproblikne
 *  run    - prvek je v okně, číslo se napočítá
 * Při prefers-reduced-motion zůstává static.
 *
 * Viditelné číslice kreslí ::after, čtečky dostanou skutečné číslo ve skrytém textu.
 */
export function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let first = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("run");
          io.disconnect();
        } else if (first) {
          setPhase("armed");
        }
        first = false;
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // Bez cn(): tailwind-merge považuje vlastní velikost text-display-* za barvu
    // a smazal by ji, kdyby vedle ní stála třeba text-ink.
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      <span
        className={cn(
          "count-up inline-block text-right",
          phase === "armed" && "count-up--armed",
          phase === "run" && "count-up--run"
        )}
        // Místo na všechny číslice cílového čísla. Číslo tak při počítání roste
        // doleva uvnitř rezervovaného prostoru a text vedle se neposouvá (CLS).
        // Jednotka ch odpovídá šířce nuly, s tabular-nums mají všechny číslice stejnou.
        style={{ "--count-target": value, minWidth: `${String(value).length}ch` } as CSSProperties}
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
