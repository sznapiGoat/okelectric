import type { SVGProps } from "react";

/*
 * Drobné ikony k textu (odrážky, kontakty) ve stejném systému jako ServiceIcon:
 * tah 1.75, kulaté konce, obrys nechaný otevřený, jeden plný prvek. Plný prvek
 * je buňka FV panelu ze znaku (zaoblený čtverec pootočený o 33°). Barvu berou
 * z currentColor, sedí vedle textu v jedné barvě. Nahrazují Check, Phone,
 * Mail a MapPin z lucide-react, proto mají stejné rozhraní (className, aria).
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Buňka panelu s vyříznutou fajfkou, místo odrážky. */
export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M1.8 11.35Q.66 9.59 2.42 8.45L12.65 1.8Q14.41.66 15.55 2.42L22.2 12.65Q23.34 14.41 21.58 15.55L11.35 22.2Q9.59 23.34 8.45 21.58ZM5.78 13.3L10.34 17.93L18.23 9.72L16.36 7.92L10.32 14.21L7.63 11.48Z"
        fillRule="evenodd"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/** Plné sluchátko ve sklonu 33° a jedna vlna signálu. Bez drobných detailů, drží i v 16 px. */
export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M-9-1.2Q-9-4-6.2-4H6.2Q9-4 9-1.2V3.2Q9 4.2 8 4.2H4.6Q3.6 4.2 3.6 3.2V-.4H-3.6V3.2Q-3.6 4.2-4.6 4.2H-8Q-9 4.2-9 3.2Z"
        transform="translate(10.6 13.4) rotate(-33)"
        fill="currentColor"
        stroke="none"
      />
      <path d="M15.2 2.8A7 7 0 0 1 21.4 8.6" />
    </svg>
  );
}

/** Obálka, pravý horní roh nahrazuje buňka jako známka. */
export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15.2 5H4.2Q2.5 5 2.5 6.7V17.3Q2.5 19 4.2 19H19.8Q21.5 19 21.5 17.3V11.2" />
      <path d="M2.9 6.9L12 13.2L14.7 11.3" />
      <path
        d="M16.4 6.31Q16.02 5.72 16.61 5.34L19.29 3.6Q19.88 3.22 20.26 3.81L22 6.49Q22.38 7.08 21.79 7.46L19.11 9.2Q18.52 9.58 18.14 8.99Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/** Špendlík otevřený u hrotu, uvnitř buňka místo kolečka. */
export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.6S4.8 15 4.8 9.6A7.2 7.2 0 0 1 19.2 9.6C19.2 12.3 17.4 15.1 15.6 17.3" />
      <path
        d="M9.06 9.48Q8.68 8.89 9.27 8.51L12.12 6.66Q12.71 6.28 13.09 6.87L14.94 9.72Q15.32 10.31 14.73 10.69L11.88 12.54Q11.29 12.92 10.91 12.33Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
