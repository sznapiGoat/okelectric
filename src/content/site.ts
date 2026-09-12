export const SITE_URL = "https://okelectric.cz";

export const NAP = {
  name: "OKelectric",
  legalName: "OKelectric",
  tagline: "Jsme vaši elektrikáři a topenáři",
  phone: "+420739664789",
  phoneDisplay: "+420 739 664 789",
  email: "krejci@okelectric.cz",
  /** Firma zatím veřejně neuvádí sídlo ani IČO. Doplnit před ostrým nasazením. */
  addressLocality: "Protivín",
  addressRegion: "Jihočeský kraj",
  postalCode: "398 11",
  addressCountry: "CZ",
  geo: { latitude: 49.2003, longitude: 14.2211 },
  facebook: "https://www.facebook.com/okelectriccz",
  instagram: "https://www.instagram.com/okelectric.cz/",
} as const;

/**
 * Působnost. Města se schválně nikde nevypisují jako seznam - zákazník z vesnice
 * vedle Písku by v něm svoji obec nenašel a odešel by. Na webu je proto mapka
 * s okruhy, jmenné výčty zůstávají jen ve strukturovaných datech pro vyhledávače.
 *
 *  core       - domovská oblast, jezdíme na cokoli včetně drobného servisu
 *  extended   - dojedeme běžně, dopravu řešíme podle rozsahu
 *  nationwide - plánované zakázky, kvůli kterým má smysl vyjet dál
 */
export const COVERAGE = {
  core: {
    label: "Do 30 minut od Písku",
    promise: "Jezdíme na cokoli včetně drobných oprav a servisu.",
    /** Kilometry od sídla. Vykresluje se jako vnitřní okruh v mapce. */
    radiusKm: 30,
  },
  extended: {
    label: "Jižní Čechy",
    promise: "Běžná část našeho týdne. U menších zakázek se domluvíme na dopravě.",
    radiusKm: 90,
  },
  nationwide: {
    label: "Dál po domluvě",
    promise:
      "Za kotelnou, fotovoltaikou nebo rekuperací vyjedeme i na druhý konec republiky. Řekněte, kde jste.",
    radiusKm: 220,
  },
} as const;

/**
 * Obce pro strukturovaná data a patičku. Ve viditelném obsahu se nepoužívají.
 * Jsou to místa s doloženou realizací, ne přání.
 */
export const REGIONS_LOCAL = [
  "Písek",
  "Protivín",
  "Blatná",
  "Vodňany",
  "Čimelice",
  "Mirovice",
  "Milevsko",
  "Strakonice",
  "Horažďovice",
  "České Budějovice",
  "Tábor",
  "Prachatice",
] as const;

export const REGIONS_EXTENDED = [
  ...REGIONS_LOCAL,
  "Praha",
  "Plzeň",
  "Brno",
  "Ostrava",
  "Uničov",
] as const;

/** Zkrácený výčet do titulků a meta popisků. */
export const REGIONS = ["Písek", "Protivín", "Blatná", "Strakonice"] as const;

/** Věty o působnosti. Žádná z nich netvrdí "celá ČR". */
export const REGION_LINE = "Písecko a jižní Čechy";
export const REGION_LINE_NATIONAL = "Písecko, jižní Čechy a po domluvě dál";

/** Věta o působnosti pro hlavičku služby, liší se podle dojezdu. */
export function coverageLine(reach: "local" | "national") {
  return reach === "national"
    ? "Písecko, jižní Čechy a po domluvě kamkoli"
    : "Písecko a jižní Čechy";
}

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  town: string;
  /** Služby, které má na starosti - pro prolinkování z detailu služby. */
  handles: string[];
};

export const TEAM: TeamMember[] = [
  {
    slug: "ondrej-krejci",
    name: "Ing. Ondřej Krejčí",
    role: "Poptávky, nabídky, konzultace a koordinace akcí, elektrikář",
    phone: "+420739664789",
    phoneDisplay: "+420 739 664 789",
    email: "krejci@okelectric.cz",
    town: "Protivín",
    handles: [
      "kotelny-tepelna-cerpadla",
      "fotovoltaika",
      "rekuperace",
      "elektroinstalace",
      "instalaterske-topenarske-prace",
    ],
  },
  {
    slug: "ondrej-lesak",
    name: "Ing. Ondřej Lesák",
    role: "Zabezpečení, alarmy, chytrá domácnost, dokumentace, elektrikář",
    phone: "+420776229279",
    phoneDisplay: "+420 776 229 279",
    email: "lesak@okelectric.cz",
    town: "Čimelice",
    handles: ["alarmy-zabezpeceni", "vykresova-dokumentace", "elektroinstalace"],
  },
  {
    slug: "martin-vones",
    name: "Bc. Martin Voneš",
    role: "Elektrikář, realizace akcí",
    phone: "+420739764282",
    phoneDisplay: "+420 739 764 282",
    email: "vones@okelectric.cz",
    town: "Blatná",
    handles: ["elektroinstalace", "elektrorevize"],
  },
  {
    slug: "milan-stecha",
    name: "Milan Štěcha",
    role: "Elektrikář",
    phone: "+420775338093",
    phoneDisplay: "+420 775 338 093",
    email: "milan.stecha@outlook.com",
    town: "Písek",
    handles: ["elektroinstalace"],
  },
];

export type Qualification = { label: string; detail: string };

export const QUALIFICATIONS: Qualification[] = [
  {
    label: "§6, §7 a §8 NV č. 194/2022",
    detail: "Platná oprávnění pro práci na elektrických zařízeních, obor 26-51-H.",
  },
  {
    label: "Profesní kvalifikace 26-014-H",
    detail: "Montáž fotovoltaických systémů.",
  },
  {
    label: "Profesní kvalifikace 26-074-M",
    detail: "Instalatér soustav s tepelnými čerpadly a mělkých geotermálních systémů.",
  },
  {
    label: "Revize vyhrazených elektrických zařízení",
    detail: "Výchozí i periodické revize elektroinstalací, hromosvodů a fotovoltaik.",
  },
  {
    label: "Koncesovaná živnost",
    detail: "Montáž, opravy a údržba zabezpečovací techniky.",
  },
];

/**
 * Značky, se kterými firma pracuje. Zatím prázdné - původní trojice
 * (NIBE, Zehnder, Jablotron) byla odebrána a finální seznam se teprve potvrzuje.
 * Až přijde, stačí doplnit sem; obě místa, kde se vykresluje, prázdný seznam
 * samy přeskočí. Pole `url` vede na web výrobce, `logo` na soubor v public/partners.
 */
export type Partner = { name: string; detail: string; url: string; logo?: string };

export const PARTNERS: Partner[] = [];
