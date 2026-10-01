export type HeroSlide = {
  src: string;
  alt: string;
  /** Obor a krátký popis, ukazují se u přepínače fotek dole v hero. */
  tag: string;
  caption: string;
  /**
   * Kam má výřez mířit, když se fotka ořízne (hlavně na výšku na mobilu).
   * CSS object-position, tedy "x% y%".
   */
  focus: string;
};

/**
 * Fotky přes celé hero. Střídají se po pár sekundách a během zobrazení se
 * pomalu přibližují. Soubory v public/hero/full jsou zmenšené na 2400 px
 * a bez metadat (originály v public/images mají GPS).
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/hero/full/s1.jpg",
    alt: "Dva montéři na šikmé střeše chystají uchycení fotovoltaických panelů",
    tag: "Fotovoltaika",
    caption: "Montáž na střeše",
    focus: "68% 50%",
  },
  {
    src: "/hero/full/s2.jpg",
    alt: "Montér na hřebeni střechy natahuje vedení hromosvodu, pod ním vesnice a krajina",
    tag: "Hromosvody",
    caption: "Jímací vedení na hřebeni",
    focus: "45% 50%",
  },
  {
    src: "/hero/full/s3.jpg",
    alt: "Elektrikář zapojuje vodiče do řad svorek ve velkém rozvaděči",
    tag: "Elektroinstalace",
    caption: "Zapojení rozvaděče",
    focus: "25% 50%",
  },
  {
    src: "/hero/full/s4.jpg",
    alt: "Rodinný dům s fotovoltaikou na střeše a před ním dodávka OK electric",
    tag: "Fotovoltaika",
    caption: "Hotová elektrárna na rodinném domě",
    focus: "45% 55%",
  },
  {
    src: "/hero/full/s5.jpg",
    alt: "Dva technici na žebříku a lešení osazují venkovní jednotku klimatizace",
    tag: "Klimatizace",
    caption: "Osazení venkovní jednotky",
    focus: "45% 45%",
  },
  {
    src: "/hero/full/s6.jpg",
    alt: "Letecký pohled na rodinný dům s fotovoltaikou mezi stromy",
    tag: "Fotovoltaika",
    caption: "Zvíkovské Podhradí",
    focus: "50% 50%",
  },
];

export type ServiceHero = {
  src: string;
  alt: string;
  /** Kam míří výřez při oříznutí, CSS object-position. */
  focus: string;
};

/**
 * Fotka v hlavičce každé služby. Vybraná ručně, aby ukazovala opravdu ten obor
 * (šablona by jinak u alarmů vzala rozvaděč z elektroinstalací). Soubory
 * v public/hero/sluzby jsou zmenšené a bez metadat.
 */
export const SERVICE_HEROES: Record<string, ServiceHero> = {
  "kotelny-tepelna-cerpadla": {
    src: "/hero/sluzby/kotelny-tepelna-cerpadla.jpg",
    alt: "Venkovní jednotka tepelného čerpadla LG na betonových patkách u domu",
    focus: "62% 50%",
  },
  elektroinstalace: {
    src: "/hero/sluzby/elektroinstalace.jpg",
    alt: "Velký rozvaděč s řadami svorek a modrými a žlutými vodiči",
    focus: "50% 50%",
  },
  "alarmy-zabezpeceni": {
    src: "/hero/sluzby/alarmy-zabezpeceni.jpg",
    alt: "Bezpečnostní kamera namontovaná pod přesahem střechy",
    focus: "44% 40%",
  },
  fotovoltaika: {
    src: "/hero/sluzby/fotovoltaika.jpg",
    alt: "Rodinný dům s fotovoltaickými panely na tmavé střeše",
    focus: "50% 40%",
  },
  rekuperace: {
    src: "/hero/sluzby/rekuperace.jpg",
    alt: "Hadice rekuperace natažená přes zahradu k novostavbě",
    focus: "55% 50%",
  },
  elektrorevize: {
    src: "/hero/sluzby/elektrorevize.jpg",
    alt: "Otevřený domovní rozvaděč s jističi ve výklenku zdi",
    focus: "50% 50%",
  },
  "instalaterske-topenarske-prace": {
    src: "/hero/sluzby/instalaterske-topenarske-prace.jpg",
    alt: "Zaizolované potrubí s ventily, manometrem a směšovacím ventilem v kotelně",
    focus: "50% 50%",
  },
  klimatizace: {
    src: "/hero/sluzby/klimatizace.jpg",
    alt: "Technik zapojuje venkovní jednotku klimatizace na fasádě domu",
    focus: "35% 50%",
  },
};
