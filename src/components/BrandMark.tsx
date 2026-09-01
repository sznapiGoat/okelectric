type Props = {
  className?: string;
  /** Mřížka panelů zmizí pod zhruba 40 px, tam je čitelnější plná plocha. */
  withGrid?: boolean;
};

/**
 * Značka OKelectric: silueta domu s fotovoltaickým polem na střeše.
 * Zdrojová geometrie je shodná s public/brand/mark.svg, ze kterého se
 * generují favicony, takže obojí zůstává v zákrytu.
 */
export function BrandMark({ className, withGrid = true }: Props) {
  return (
    <svg viewBox="0 0 512 512" fill="none" className={className} aria-hidden focusable="false">
      <path d="M256 88 L420 252 L420 424 L92 424 L92 252 Z" fill="#60B23A" />
      <path d="M157 207 L242 122 L290 170 L205 255 Z" fill="#005AA5" />
      {withGrid && (
        <g stroke="#FFFFFF" strokeWidth={8}>
          <path d="M185 179 L233 227" />
          <path d="M214 150 L262 198" />
          <path d="M181 231 L266 146" />
        </g>
      )}
    </svg>
  );
}
