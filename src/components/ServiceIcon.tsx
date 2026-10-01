type Props = { slug: string; className?: string };

/*
 * Značky oborů odvozené z firemního znaku (public/brand/znak.svg).
 *
 *  - Axonometrie jako ve znaku: svislice zůstávají svislé, levá rovina ubíhá
 *    ve sklonu 2:1, pravá 3:2. Ploché předměty (panel, jednotka, protokol)
 *    jsou zkosené do roviny stěny maticí matrix(1 -0.667 0 1 …).
 *  - Tah 1.75 a půltah 0.875 pro detaily (jímač, lamely, paprsky), stejný
 *    poměr 2:1 jako tah domu a jímacích tyčí ve znaku. Jímač má rovné konce.
 *  - Obrys se nikde nezavírá: aspoň jedna čára končí kulatým koncem kus před
 *    jinou, jako stěny domu pod střechou ve znaku.
 *  - Tah je zelený (barva značky), jedna plná "technika" modrá jako druhá barva
 *    ve znaku, maják u alarmů červený jako ve znaku.
 *
 * pathLength={1} u tahů umožňuje animaci kreslení (.icon-draw v globals.css).
 * Plné tvary tah nemají, při animaci zůstávají stát.
 */
export function ServiceIcon({ slug, className }: Props) {
  const fill = "fill-tech";

  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (slug) {
    // Venkovní jednotka z pravé stěny znaku: vrtule, lamely, obrys otevřený vpravo dole.
    case "kotelny-tepelna-cerpadla": {
      const wall = "matrix(1 -0.667 0 1 4.5 12.3)";
      const blade = "M0 0C-1.7-.5-1.9-2.6-.3-3.1C1-3.4 1.6-1.4 0 0Z";
      return (
        <svg {...common}>
          <path pathLength={1} transform={wall} d="M9.6 10H1.2Q0 10 0 8.8V1.2Q0 0 1.2 0H13.8Q15 0 15 1.2V6.4" />
          <circle pathLength={1} transform={wall} cx="5" cy="5" r="3.5" />
          <path pathLength={1} transform={wall} strokeWidth={0.875} d="M10.6 2.4H12.9M10.6 4.2H12.9M10.6 6H12.9M10.6 7.8H12.9" />
          <g transform={`${wall} translate(5 5)`} stroke="none" className={fill}>
            <path d={blade} />
            <path d={blade} transform="rotate(120)" />
            <path d={blade} transform="rotate(240)" />
          </g>
        </svg>
      );
    }

    // Dům ze znaku zmenšený na jeden štít: jímač na hřebeni, blesk na štítové stěně.
    case "elektroinstalace":
      return (
        <svg {...common}>
          <path pathLength={1} d="M5.54 12.82V18.02L12.7 21.6L18.52 17.72V12.52M12.7 21.6V16.4" />
          <path pathLength={1} d="M4.65 11.08L9.12 8.21L14.95 4.33L18.52 10.72L12.7 14.6L9.12 8.21" />
          <path pathLength={1} d="M14.95 4.33V3.03" strokeLinecap="butt" />
          <path pathLength={1} d="M14.95 3.03V.9" strokeWidth={0.875} strokeLinecap="butt" />
          <path d="M8.32 12.71L10.46 17.28L8.94 16.52L10.02 20.36L7.6 15.05L9.12 15.81L8.05 12.57Z" stroke="none" className={fill} />
        </svg>
      );

    // Maják ze znaku: kopule a podstava zkosené do levé roviny, paprsky půltahem.
    case "alarmy-zabezpeceni": {
      const wall = "matrix(1 .5 0 1 12 12)";
      return (
        <svg {...common}>
          <path pathLength={1} transform={wall} d="M-6.2 7.6H6.2" />
          <path pathLength={1} transform={wall} strokeWidth={0.875} d="M0-5.6V-8.6M-5.4-3.6L-7.6-5.6M5.4-3.6L7.6-5.6M-7.4 1.4H-9.6M7.4 1.4H9.6" />
          <path transform={wall} d="M-4.6 5.2V.4A4.6 4.6 0 0 1 4.6.4V5.2Z" stroke="none" className="fill-alert" />
        </svg>
      );
    }

    // Panel ze střechy znaku: rám pootočený o 33°, buňky 3×2, noha na zemi.
    case "fotovoltaika":
      return (
        <svg {...common}>
          <path pathLength={1} d="M2.01 12.17Q1.52 11.41 2.28 10.92L14.86 2.75Q15.61 2.26 16.1 3.02L20.79 10.23Q21.28 10.99 20.52 11.48L7.94 19.65Q7.19 20.14 6.7 19.38Z" />
          <path pathLength={1} d="M16.08 16.26V21.5M13.08 21.5h6" />
          <path
            d="M4.33 12.34Q4.08 11.96 4.46 11.71L6.89 10.13Q7.27 9.89 7.51 10.27L8.62 11.96Q8.86 12.34 8.48 12.59L6.05 14.17Q5.68 14.41 5.43 14.03ZM6.38 15.5Q6.14 15.12 6.52 14.88L8.95 13.3Q9.33 13.05 9.57 13.43L10.67 15.13Q10.92 15.51 10.54 15.75L8.11 17.33Q7.73 17.58 7.49 17.2ZM8.23 9.8Q7.98 9.43 8.36 9.18L10.79 7.6Q11.17 7.36 11.41 7.73L12.52 9.43Q12.76 9.81 12.38 10.05L9.95 11.63Q9.58 11.88 9.33 11.5ZM10.28 12.97Q10.04 12.59 10.42 12.35L12.85 10.77Q13.22 10.52 13.47 10.9L14.57 12.6Q14.82 12.97 14.44 13.22L12.01 14.8Q11.63 15.04 11.39 14.67ZM12.13 7.27Q11.88 6.89 12.26 6.65L14.69 5.07Q15.07 4.82 15.31 5.2L16.42 6.9Q16.66 7.28 16.28 7.52L13.85 9.1Q13.47 9.35 13.23 8.97ZM14.18 10.44Q13.94 10.06 14.32 9.81L16.75 8.23Q17.12 7.99 17.37 8.37L18.47 10.06Q18.72 10.44 18.34 10.69L15.91 12.27Q15.53 12.51 15.29 12.13Z"
            stroke="none"
            className={fill}
          />
        </svg>
      );

    // Jednotka v axonometrii se dvěma hrdly, jádro výměníku na pravé stěně.
    case "rekuperace":
      return (
        <svg {...common}>
          <path pathLength={1} d="M6.83 17.12V18.72L12.2 21.4L19.36 16.63V9.03L12.2 13.8L6.83 11.12L13.99 6.35L19.36 9.03M12.2 21.4V15.5" />
          <path pathLength={1} d="M12.22 11.28V8.28M15.21 9.29V6.29" />
          <path pathLength={1} d="M12.22 6.38V5.08M15.21 5.39V6.69" strokeWidth={0.875} />
          <path d="M15.55 13.06Q15.78 12.61 16.2 12.88L17.35 13.62Q17.77 13.88 17.55 14.33L16 17.37Q15.78 17.81 15.36 17.55L14.2 16.81Q13.78 16.55 14.01 16.1Z" stroke="none" className={fill} />
        </svg>
      );

    // Revizní protokol zkosený do pravé roviny, buňka panelu s fajfkou.
    case "elektrorevize": {
      const wall = "matrix(1 -.5 0 1 6.5 6)";
      return (
        <svg {...common}>
          <path pathLength={1} transform={wall} d="M0 12.5V1.2Q0 0 1.2 0H9.8Q11 0 11 1.2V14.8Q11 16 9.8 16H3.2" />
          <path pathLength={1} transform={wall} strokeWidth={0.875} d="M2.6 3.4H8.4M2.6 5.8H8.4M2.6 8.2H6" />
          <path
            d="M11.46 14.89Q11.11 14.17 11.82 13.81L16.11 11.66Q16.83 11.31 17.19 12.02L19.34 16.31Q19.69 17.03 18.98 17.39L14.69 19.54Q13.97 19.89 13.61 19.18ZM12.85 16.23L14.75 18.16L17.95 14.83L16.98 13.89L14.74 16.22L13.81 15.28Z"
            fillRule="evenodd"
            stroke="none"
            className={fill}
          />
        </svg>
      );
    }

    // Stoupačka s kolenem a ventilem v pravé rovině, z konce rozvodu kape voda.
    case "instalaterske-topenarske-prace": {
      const wall = "matrix(1 -.667 0 1 4.2 17.4)";
      return (
        <svg {...common}>
          <path pathLength={1} transform={wall} d="M0 6V-2.2Q0-4.6 2.4-4.6H12.4" />
          <path pathLength={1} transform={wall} d="M-1.7 3.4H1.7M9.8-6.3V-2.9M7.2-4.6V-9M4.9-9H9.5" />
          <path pathLength={1} transform={wall} strokeWidth={0.875} d="M14.6-5.6V-3.6" />
          <path d="M17.8 10.8S15.4 13.7 15.4 15.5A2.4 2.4 0 0 0 20.2 15.5C20.2 13.7 17.8 10.8 17.8 10.8Z" stroke="none" className={fill} />
        </svg>
      );
    }

    // Nástěnná jednotka v pravé rovině, plná klapka, proud vzduchu půltahem.
    case "klimatizace": {
      const wall = "matrix(1 -.667 0 1 3 12.4)";
      return (
        <svg {...common}>
          <path pathLength={1} transform={wall} d="M0 3.2V1.2Q0 0 1.2 0H16.8Q18 0 18 1.2V5.6Q18 6.8 16.8 6.8H1.2Q0 6.8 0 5.6" />
          <path pathLength={1} transform={wall} strokeWidth={0.875} d="M4 10.2c-.9 1.1-.9 2.3 0 3.4M8.5 10.2c-.9 1.1-.9 2.3 0 3.4M13 10.2c-.9 1.1-.9 2.3 0 3.4" />
          <path transform={wall} d="M2.6 4.3H15.4V5.3Q15.4 5.7 15 5.7H3Q2.6 5.7 2.6 5.3Z" stroke="none" className={fill} />
        </svg>
      );
    }

    default:
      return (
        <svg {...common}>
          <circle pathLength={1} cx="12" cy="12" r="8.5" />
        </svg>
      );
  }
}
