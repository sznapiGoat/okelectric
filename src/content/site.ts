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

/** Obce a oblasti, kde firma reálně působí. Používá se v metadatech i v textech. */
export const REGIONS = ["Písek", "Protivín", "Blatná", "Šumava", "Praha"] as const;
export const REGIONS_EXTENDED = [
  "Písek",
  "Protivín",
  "Blatná",
  "Vodňany",
  "Strakonice",
  "Čimelice",
  "Šumava",
  "Tábor",
  "Plzeň",
  "Praha",
] as const;

export const REGION_LINE = "Písek, Protivín, Blatná, Šumava a Praha";

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
    handles: ["kotelny-tepelna-cerpadla", "fotovoltaika", "rekuperace", "elektroinstalace"],
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
  {
    slug: "jiri-biedermann",
    name: "Jiří Biedermann",
    role: "Instalatér, topenář",
    phone: "+420603815149",
    phoneDisplay: "+420 603 815 149",
    email: "biedermann@okelectric.cz",
    town: "Písek",
    handles: ["instalaterske-topenarske-prace", "kotelny-tepelna-cerpadla"],
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

export const PARTNERS = [
  { name: "NIBE", detail: "Tepelná čerpadla" },
  { name: "Zehnder", detail: "Rekuperace" },
  { name: "Jablotron", detail: "Zabezpečení, certifikovaný montážní partner" },
] as const;
