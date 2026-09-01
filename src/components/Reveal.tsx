"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Jemné odhalení sekce při scrollu. Typ elementu je vždy stejný, aby se
 * nerozbila hydratace, a při prefers-reduced-motion se počáteční stav
 * přeskočí úplně místo nulové délky animace.
 */
export function Reveal({ children, delay = 0, y = 16, className }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{
        duration: reduce ? 0.01 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
