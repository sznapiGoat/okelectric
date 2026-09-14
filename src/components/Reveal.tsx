import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Náběh bloku při scrollu: obal s třídou .reveal, scroll-driven animace v CSS
 * (globals.css). Žádný JavaScript v prohlížeči, obsah se bez podpory
 * animation-timeline zobrazí rovnou.
 */
export function Reveal({ children, className, style }: Props) {
  return (
    <div className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
