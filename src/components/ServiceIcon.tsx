type Props = { slug: string; className?: string };

/**
 * Vlastní tenkolinkové značky ke každé službě. Kresleny tak, aby zůstaly
 * čitelné i ve 36 px, tedy málo tahů a velké tvary.
 */
export function ServiceIcon({ slug, className }: Props) {
  const common = {
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (slug) {
    // Venkovní jednotka tepelného čerpadla s vrtulí a stoupajícím teplem.
    case "kotelny-tepelna-cerpadla":
      return (
        <svg {...common}>
          <path d="M6 10c0-1.7 1.3-3 3-3h5M26 7h5c1.7 0 3 1.3 3 3M34 12v3M6 12v3" />
          <rect x="6" y="15" width="28" height="19" rx="2.5" />
          <circle cx="20" cy="24.5" r="6.5" />
          <path d="M20 18v13M14.4 21.2l11.2 6.6M14.4 27.8l11.2-6.6" />
          <path d="M17 12c0-2 3-2 3-4M23 12c0-2 3-2 3-4" />
        </svg>
      );

    // Jímací tyč hromosvodu nad štítem střechy, blesk a svod.
    case "elektroinstalace":
      return (
        <svg {...common}>
          <path d="M4 22 20 9l16 13" />
          <path d="M8.5 21.5V34h23V21.5" />
          <path d="M20 9V2.5" />
          <circle cx="20" cy="2.5" r="1.4" fill="currentColor" stroke="none" />
          <path d="M31.5 22v12" />
          <path d="M20.5 22 17 28.5h4.5L18.5 34" />
        </svg>
      );

    // Siréna zabezpečovacího systému, tvar převzatý z firemní značky.
    case "alarmy-zabezpeceni":
      return (
        <svg {...common}>
          <path d="M12 30v-8a8 8 0 0 1 16 0v8" />
          <rect x="9" y="30" width="22" height="4.5" rx="1.5" />
          <path d="M20 14v-4" />
          <path d="M9.5 15.5 6.5 12.5M30.5 15.5l3-3M5 24H1M39 24h-4" />
        </svg>
      );

    // Fotovoltaický panel s paprsky.
    case "fotovoltaika":
      return (
        <svg {...common}>
          <path d="M11.5 19h17l4.5 15H7l4.5-15z" />
          <path d="M13.2 26.5h13.6M20 19v15M16 19l-2.7 15M24 19l2.7 15" />
          <path d="M20 3v5.5M9.5 7.5l3 3M30.5 7.5l-3 3M3 15h4M33 15h4" />
        </svg>
      );

    // Výměník rekuperace s protiproudým vedením vzduchu.
    case "rekuperace":
      return (
        <svg {...common}>
          <rect x="8" y="11" width="24" height="18" rx="2" />
          <path d="M12.5 16.5h15M12.5 23.5h15" />
          <path d="M24 13.5l3.5 3-3.5 3M16 27l-3.5-3.5L16 20" />
          <path d="M2 20h6M32 20h6" />
        </svg>
      );

    // Měřicí přístroj s ručičkou a dvěma hroty.
    case "elektrorevize":
      return (
        <svg {...common}>
          <rect x="6" y="5" width="28" height="21" rx="2" />
          <path d="M12.5 20.5a7.5 7.5 0 0 1 15 0" />
          <path d="M20 20.5 25.5 14" />
          <circle cx="20" cy="20.5" r="1.4" fill="currentColor" stroke="none" />
          <path d="M13 26v9M27 26v9" />
        </svg>
      );

    // Potrubí s uzavíracím ventilem a ručním kolem.
    case "instalaterske-topenarske-prace":
      return (
        <svg {...common}>
          <path d="M3 17h13M24 17h13M3 25h13M24 25h13" />
          <rect x="16" y="14" width="8" height="14" rx="1" />
          <path d="M20 14V8" />
          <path d="M14.5 8h11" />
          <path d="M17 5.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5" />
        </svg>
      );

    // Výkres s ohnutým rohem, kótou a narýsovaným tvarem.
    case "vykresova-dokumentace":
      return (
        <svg {...common}>
          <path d="M8 4h16l8 8v24H8z" />
          <path d="M24 4v8h8" />
          <path d="M13 17.5l5.5 6 4-4.5 4.5 5" />
          <path d="M13 31h14M13 28.5v5M27 28.5v5" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="14" />
        </svg>
      );
  }
}
