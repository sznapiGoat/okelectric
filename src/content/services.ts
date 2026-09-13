import type { ProjectCategory } from "./projects";

export type FaqItem = { q: string; a: string };

export type Service = {
  slug: string;
  /** Krátký název do navigace a do dlaždic. */
  navLabel: string;
  /** H1 stránky. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Jedna věta pod H1. */
  lead: string;
  /** Krátký popisek do dlaždic a do menu, jeden řádek. */
  tagline: string;
  /** Datum poslední úpravy obsahu, ISO. Ručně bumpnout při editaci textu. */
  updated: string;
  /** Text tlačítka. */
  ctaLabel: string;
  /** Jedna věta pod tlačítkem: co se stane, když zavolám. Snižuje obavu z kliknutí. */
  ctaNote: string;
  /** Vlastní hlavní text služby, 300 až 500 slov. */
  body: { heading: string; paragraphs: string[] }[];
  /** Odrážkový výčet konkrétních prací. */
  scope: { heading: string; items: string[] };
  /** Jak spolupráce probíhá. */
  process: { title: string; text: string }[];
  faq: FaqItem[];
  /**
   * Konkrétní výrobek, který k službě montujeme, s parametry a odkazem na web výrobce.
   * Vykresluje se jen tam, kde je vyplněný.
   */
  product?: {
    name: string;
    maker: string;
    url: string;
    intro: string;
    specs: { label: string; value: string }[];
  };
  projectCategories: ProjectCategory[];
  /** Slug člena týmu, který službu vede. */
  owner: string;
  /**
   * Kam se s touhle službou jezdí.
   *  local    - drobný servis a výjezdy, dává smysl jen v dojezdu z Písku
   *  national - plánovaná zakázka na několik dní, vzdálenost neřešíme
   * Řídí areaServed ve schema.org i větu o působnosti na stránce služby.
   */
  reach: "local" | "national";
  accent: "green" | "blue";
};

export const SERVICES: Service[] = [
  {
    slug: "kotelny-tepelna-cerpadla",
    reach: "national",
    navLabel: "Tepelná čerpadla",
    title: "Tepelná čerpadla",
    metaTitle: "Tepelná čerpadla Písek | Montáž, kotelny a dotace | OKelectric",
    metaDescription:
      "Výměna starých kotlů na tuhá paliva za tepelné čerpadlo, peletový nebo zplynovací kotel. Řídicí systémy kotelen, ekvitermní regulace, dotace Nová zelená úsporám. Sídlo u Písku, kotelny stavíme i daleko.",
    lead: "Nahrazujeme staré nevyhovující kotle na tuhá paliva efektivním zdrojem a doděláme k němu i regulaci, která z něj skutečně dostane maximum.",
    tagline: "Tepelná čerpadla, peletové kotle a regulace, která z nich dostane maximum.",
    updated: "2026-09-13",
    ctaLabel: "Chci tepelné čerpadlo",
    ctaNote: "Přijedeme se podívat na dům, kotelnu a otopnou soustavu, pak pošleme nabídku.",
    body: [
      {
        heading: "Moderní vytápění bez kompromisů",
        paragraphs: [
          "Vytápění je největší položkou v provozu domu a zároveň místem, kde se nejvíc podepíše kvalita provedení. Instalujeme tepelná čerpadla, peletové kotle i zplynovací kotle na kusové dřevo a stavíme kolem nich kompletní kotelnu: akumulaci, oběhová čerpadla, směšovací ventily topných okruhů a řízení, které celek drží pohromadě.",
          "Většina zakázek jsou rodinné domy, kde se vyměňuje dosluhující kotel na tuhá paliva, děláme ale i složitější kotelny s více zdroji, kde se kombinuje tepelné čerpadlo s krbem nebo se záložním elektrokotlem.",
        ],
      },
      {
        heading: "Zdroj tepla je jen polovina práce",
        paragraphs: [
          "Samotné tepelné čerpadlo za vás neušetří. Rozdíl mezi dobrou a špatnou instalací dělá regulace. Nastavujeme ekvitermní řízení s čidly vnitřní i venkovní teploty, ladíme optimální řízení hoření u kotlů a krbů na tuhá paliva a v kombinovaných systémech srovnáváme teplotní spády radiátorů a podlahového vytápění, aby si okruhy navzájem nebraly výkon.",
          "Protože jsme zároveň elektrikáři, řešíme i to, co bývá u topenářských firem slabinou: úpravu rozvaděče, jištění, přepěťovou ochranu a záložní zdroje oběhových čerpadel pro případ výpadku elektřiny. Kotelna po nás zůstane zapojená podle norem a s revizí, ne s provizorním kabelem přes půlku sklepa.",
        ],
      },
      {
        heading: "Dotace Nová zelená úsporám Light",
        paragraphs: [
          "Pomůžeme vám s vyřízením dotace z programu Nová zelená úsporám Light, od podkladů po doložení realizace. Jedno omezení je dobré vědět dopředu: podpořit nelze opakovanou výměnu zdroje, pokud předchozí podpořená výměna proběhla po 1. lednu 2009.",
          "Držíme profesní kvalifikaci 26-074-M pro instalatéry soustav s tepelnými čerpadly a mělkých geotermálních systémů. Nejčastěji montujeme tepelná čerpadla českého výrobce Hotjet.",
        ],
      },
    ],
    scope: {
      heading: "Mimo dotační programy se zabýváme",
      items: [
        "Zapojení a zprovoznění elektrokotlů a tepelných čerpadel",
        "Instalace kompletních řídicích systémů kotelen",
        "Optimální řízení hoření kotlů a krbů na tuhá paliva",
        "Kombinované systémy s radiátory i podlahovým topením",
        "Akumulační nádrže a oběhová čerpadla",
        "Směšovací ventily topných okruhů",
        "Ekvitermní regulace s čidly vnitřní a venkovní teploty",
        "Ohřev teplé užitkové vody",
        "Řízení záložních zdrojů vytápění",
        "Záložní zdroje oběhových čerpadel pro případ výpadku elektřiny",
        "Zajištění projektové dokumentace a revizí",
      ],
    },
    process: [
      {
        title: "Prohlídka a konzultace",
        text: "Přijedeme se podívat na stávající kotelnu, otopnou soustavu a rozvaděč. Bez toho se seriózní nabídka udělat nedá.",
      },
      {
        title: "Návrh zdroje a regulace",
        text: "Navrhneme zdroj podle tepelné ztráty a způsobu, jakým dům opravdu užíváte, ne podle katalogového čísla.",
      },
      {
        title: "Realizace",
        text: "Topenářská i elektrikářská část v jedné firmě, takže se nedohadují dvě party nad jedním rozvaděčem.",
      },
      {
        title: "Zaregulování a předání",
        text: "Vyladíme ekvitermní křivku, předáme revizi a dokumentaci a ukážeme vám, jak systém ovládat.",
      },
    ],
    faq: [
      {
        q: "Vyplatí se tepelné čerpadlo do domu se starými radiátory?",
        a: "Často ano, ale záleží na teplotním spádu. Pokud soustava potřebuje 70 stupňů, čerpadlo bude pracovat neefektivně. Při prohlídce spočítáme, na jaké teplotě je dům schopen topit, a podle toho doporučíme buď čerpadlo, nebo peletový či zplynovací kotel. Někdy stačí vyměnit pár poddimenzovaných těles.",
      },
      {
        q: "Zvládnete i elektrickou část, nebo si mám shánět elektrikáře zvlášť?",
        a: "Zvládneme obojí. Jsme primárně elektrikáři, kteří dělají topení, takže úprava rozvaděče, jištění, přepěťová ochrana i výchozí revize jsou součástí dodávky.",
      },
      {
        q: "Pomůžete s dotací Nová zelená úsporám Light?",
        a: "Ano, s vyřízením dotace pomáháme. Upozorníme také na případy, kdy na ni nárok nevznikne, typicky při opakované výměně zdroje, pokud předchozí podpořená výměna proběhla po 1. lednu 2009.",
      },
      {
        q: "Co když vypadne elektřina uprostřed topné sezóny?",
        a: "Instalujeme záložní zdroje pro oběhová čerpadla, takže se teplo z akumulace i z krbu dál rozvádí do domu a soustava se nepřehřeje. U kotelen s tuhými palivy to není luxus, ale bezpečnostní prvek.",
      },
      {
        q: "Jaký typ tepelného čerpadla si vybrat?",
        a: "U rodinných domů je v naprosté většině případů nejrozumnější vzduch-voda. Nepotřebuje vrty ani zemní práce a instaluje se nejrychleji. Země-voda má stabilnější výkon i v mrazu a nižší provozní náklady, ale vrt nebo plošný kolektor investici výrazně navýší. Voda-voda je nejúčinnější, jenže potřebuje vydatnou studnu a povolení. Co dává smysl u vás, probereme při prohlídce.",
      },
      {
        q: "Jak velké čerpadlo potřebuju?",
        a: "Rozhoduje tepelná ztráta domu, ne jeho plocha. Pokud ji máte v projektové dokumentaci nebo v energetickém štítku, vycházíme z ní. Orientačně potřebuje zateplený dům kolem 50 až 70 W na metr čtvereční a starší nezateplený 100 až 150 W. Poddimenzované čerpadlo často spíná drahý elektrokotel, předimenzované zbytečně stojí víc peněz.",
      },
      {
        q: "Bude čerpadlo topit i v silných mrazech?",
        a: "Ano. Kvalitní čerpadla vzduch-voda pracují do minus 20 až minus 25 stupňů, jen s nižší účinností. Na několik nejmrazivějších dnů v roce pomáhá vestavěný elektrokotel nebo druhý zdroj, třeba stávající krb či kotel. Komfort se nezmění, jen se ty dny mírně zvednou náklady.",
      },
      {
        q: "Neobtěžuje venkovní jednotka hlukem sousedy?",
        a: "Při správném umístění ne. Moderní invertorová čerpadla jsou tichá, hluk ale výrazně ovlivní, kam jednotka přijde. Doporučujeme alespoň dva až tři metry od hranice pozemku a směrem od oken sousedů. Místo vybíráme už při prohlídce, ne až v den montáže.",
      },
      {
        q: "Umí tepelné čerpadlo v létě chladit?",
        a: "Většina čerpadel vzduch-voda umí aktivní chlazení obráceným chodem. Nejlépe funguje s podlahovým systémem nebo fancoily. Pokud chcete chladit jednotlivé místnosti rychle a výrazně, bývá lepší doplnit klimatizaci, kterou také montujeme.",
      },
      {
        q: "Vyplatí se kombinace s fotovoltaikou?",
        a: "Je to jedna z nejlepších kombinací. Přes den fotovoltaika pohání čerpadlo, které ohřeje teplou vodu a nabije akumulační nádrž, a teplo se využije večer. Protože děláme obojí, navrhneme řízení tak, aby spolu systémy opravdu komunikovaly.",
      },
      {
        q: "Jakou údržbu čerpadlo potřebuje?",
        a: "Minimální. Jednou za rok nebo dva kontrola tlaku, čidel a funkce, průběžně čištění výparníku venkovní jednotky od listí a prachu. Při správné údržbě vydrží čerpadlo 15 až 25 let.",
      },
      {
        q: "Potřebuji k tepelnému čerpadlu stavební povolení?",
        a: "U běžného čerpadla vzduch-voda k rodinnému domu většinou ne. Jiná situace je u vrtů pro země-voda nebo studní pro voda-voda, kde jsou potřeba průzkumy a povolení. Co přesně je nutné ve vašem případě, ověříme předem.",
      },
      {
        q: "Přijedete i k nám?",
        a: "Nejspíš ano. Sídlo máme u Písku, ale kotelna je práce na několik dní, takže vzdálenost u ní nerozhoduje. Řekněte, kde jste, a domluvíme se.",
      },
    ],
    product: {
      name: "Hotjet ZETXe",
      maker: "Hotjet",
      url: "https://www.hotjet.cz/tepelne-cerpadlo-zetxe/",
      intro:
        "Invertorové tepelné čerpadlo vzduch-voda českého výrobce, venkovní monoblok. S domem ho spojí dvě trubky a kabel, výkon reguluje plynule podle potřeby a v základu řídí až tři topné nebo chladicí okruhy, ohřev vody i spolupráci s fotovoltaikou.",
      specs: [
        { label: "Typ", value: "Vzduch-voda" },
        { label: "Instalace", value: "Venkovní monoblok" },
        { label: "Tepelná ztráta domu", value: "Do 20 kW" },
        { label: "Výkonové varianty", value: "7, 10 a 15 kW" },
        { label: "Regulace", value: "Plná, kompresor, ventilátor i oběhové čerpadlo" },
        { label: "Řízení", value: "Siemens, 3 okruhy topení a chlazení" },
        { label: "Kaskáda", value: "Ano" },
        { label: "Odmrazování", value: "Reverzním chodem" },
      ],
    },
    projectCategories: ["kotelny", "rekuperace"],
    owner: "ondrej-krejci",
    accent: "green",
  },

  {
    slug: "elektroinstalace",
    reach: "local",
    navLabel: "Elektroinstalace a hromosvody",
    title: "Elektroinstalace a hromosvody",
    metaTitle: "Elektrikář Písek | Elektroinstalace a hromosvody | OKelectric",
    metaDescription:
      "Kompletní elektroinstalace novostaveb i rekonstrukce, montáž hromosvodů, úpravy elektroměrových rozvaděčů, osvětlení a pohony vrat. Sídlo u Písku.",
    lead: "Elektroinstalace je nervovou soustavou domu. Rozhoduje o tom, jak pohodlně se v něm bude bydlet dalších třicet let, a předělává se hůř než cokoliv jiného.",
    tagline: "Novostavby, rekonstrukce, hromosvody i příprava na wallbox.",
    updated: "2026-09-13",
    ctaLabel: "Potřebuji elektrikáře",
    ctaNote: "Řekneme, co to obnáší, ideálně dřív, než se začne bourat.",
    body: [
      {
        heading: "Pár zásuvek natahá i soused. Dům ne",
        paragraphs: [
          "Opravit zásuvku možná zvládnete sami. U nového domu nebo u rekonstrukce bytu je to jiná disciplína. Elektroinstalace dnes není jen o zásuvkách a světlech, ale o tom, kudy povedou datové rozvody, kde bude wallbox, jestli se počítá s fotovoltaikou, s tepelným čerpadlem, s alarmem nebo s roletami, a jestli bude rozvaděč mít za pět let ještě volné pole.",
          "Čím dřív se o instalaci začne mluvit, tím víc možností zůstává otevřených a tím míň kompromisů se pak dělá. Normy známe. Trendy poznáváme na zakázkách, ne z katalogů.",
        ],
      },
      {
        heading: "Novostavby, rekonstrukce i průmysl",
        paragraphs: [
          "Děláme kompletní elektroinstalace rodinných domů a bytů včetně návrhu rozmístění a dokumentace. Stejně tak řešíme dílčí zásahy: rekonstrukci bytového rozvaděče, úpravu elektroměrového rozvaděče pro nový odběr, přípravu na nabíjecí stanici nebo dotažení okruhů, které v domě chybí.",
          "Kromě rezidenčních zakázek pracujeme i na větších celcích. Realizovali jsme rozvodnu distribučního centra Billa v Uničově, výměnu rozvaděčů v průmyslovém areálu ve Strakonicích, úpravu výrobní haly v Českých Budějovicích a instalaci osvětlení uvnitř mostní konstrukce dálnice D4.",
        ],
      },
      {
        heading: "Hromosvody",
        paragraphs: [
          "Hromosvod je jedna z mála věcí na domě, jejíž hodnotu poznáte jen tehdy, když ji nemáte. Montujeme jímací soustavy i svody na novostavbách a doplňujeme je na stávající domy, typicky při rekonstrukci střechy, kdy je práce nejlevnější. Součástí je i výchozí revize, kterou vystavíme sami.",
          "U domů s fotovoltaikou řešíme hromosvod a přepěťovou ochranu společně, protože panely na střeše mění celý koncept ochrany před bleskem. Konkrétní realizace najdete mezi referencemi ve Střelských Hošticích, Topělci a Bílsku.",
        ],
      },
    ],
    scope: {
      heading: "Co pro vás uděláme",
      items: [
        "Kompletní elektroinstalace novostaveb rodinných domů",
        "Rekonstrukce elektroinstalací bytů a starších domů",
        "Montáž hromosvodů a jímacích soustav",
        "Úpravy elektroměrových rozvaděčů",
        "Instalace vnitřního i venkovního osvětlení",
        "Instalace pohonů na vrata a brány",
        "Příprava a montáž nabíjecích stanic wallbox",
        "Přepěťové ochrany a doplnění proudových chráničů",
      ],
    },
    process: [
      {
        title: "Zavolejte co nejdřív",
        text: "Nejlevnější změna je ta, která se udělá ještě v projektu. U rekonstrukce ideálně dřív, než se začne bourat.",
      },
      {
        title: "Návrh a rozpočet",
        text: "Projdeme dům místnost po místnosti a navrhneme rozmístění podle toho, jak v něm budete žít.",
      },
      {
        title: "Montáž",
        text: "Sekání, tahání kabelů, rozvaděč a kompletace. Termíny domlouváme s ohledem na ostatní řemesla na stavbě.",
      },
      {
        title: "Revize a předání",
        text: "Výchozí revizi si děláme sami, takže na ni nečekáte a nedoplácíte za externího technika.",
      },
    ],
    faq: [
      {
        q: "Kdy nejpozději mám elektrikáře na novostavbu shánět?",
        a: "Ve chvíli, kdy máte projekt a víte, kde budou příčky. Rozmístění zásuvek, datových zásuvek a příprav pro fotovoltaiku nebo wallbox se řeší podstatně levněji na papíře než ve vyzděném domě.",
      },
      {
        q: "Dá se hromosvod doplnit na starší dům?",
        a: "Ano a nejvýhodnější je udělat to při rekonstrukci střechy, kdy je přístup k hřebeni i k okapům bez lešení navíc. Doplňujeme jímací soustavu, svody i uzemnění a vystavíme výchozí revizi.",
      },
      {
        q: "Kdo ke mně přijede?",
        a: "Podle lokality. Písek a okolí bere pan Krejčí, Čimelicko pan Lesák, Blatnou pan Voneš. Kontakty na všechny najdete na stránce O nás.",
      },
      {
        q: "Děláte i zakázky pro firmy a průmysl?",
        a: "Ano. Máme za sebou rozvodnu distribučního centra, výměny rozvaděčů v průmyslových areálech i osvětlení dálničního mostu. Rozsah posoudíme podle konkrétní poptávky.",
      },
      {
        q: "Jak daleko jezdíte?",
        a: "Sídlo máme u Písku. Na drobné opravy a servis jezdíme po okolí, za kompletní elektroinstalací nebo rozvaděči i daleko, například do Uničova nebo na dálnici D4.",
      },
    ],
    projectCategories: ["elektroinstalace", "hromosvody"],
    owner: "martin-vones",
    accent: "green",
  },

  {
    slug: "alarmy-zabezpeceni",
    reach: "local",
    navLabel: "Kamery a zabezpečení",
    title: "Kamery, alarmy a chytrá domácnost",
    metaTitle: "Kamerové systémy a alarmy Písek | Jablotron | OKelectric",
    metaDescription:
      "Certifikovaný montážní partner Jablotron. Alarmy, kamery, přístupové systémy a chytrá domácnost pro byty, domy i firmy. Montáž zpravidla za jeden den. Sídlo u Písku.",
    lead: "Ochráníme, co je pro vás cenné, na nejvyšší dostupné technické úrovni. Jsme certifikovaným montážním partnerem firmy Jablotron.",
    tagline: "Kamery a alarmy Jablotron na míru objektu, montáž zpravidla za jeden den.",
    updated: "2026-09-13",
    ctaLabel: "Chci zabezpečení",
    ctaNote: "Projdeme objekt a navrhneme sestavu podle rizika, ne podle ceníku.",
    body: [
      {
        heading: "Bezpečí na prvním místě",
        paragraphs: [
          "Zabezpečení má smysl tehdy, když je navržené na konkrétní objekt. Jinak se chrání byt v panelovém domě, jinak samostatně stojící dům na okraji obce a úplně jinak dílna nebo sklad. Navrhujeme a instalujeme systémy na míru, od alarmů přes kamerový dohled po přístupové systémy.",
          "Připojení na pult centralizované ochrany bezpečnostní agentury je jen otázkou vašeho přání. Doporučujeme tříměsíční dohled bezpečnostní služby zdarma, abyste si vyzkoušeli, jestli ho chcete provozovat trvale.",
        ],
      },
      {
        heading: "Bezdrátově znamená bez bourání",
        paragraphs: [
          "Nejčastější obava zní, že se kvůli alarmu bude sekat do hotových stěn. Systém JABLOTRON 100 umožňuje bezdrátovou instalaci, takže do obývaného bytu nebo do čerstvě zrekonstruovaného domu nainstalujeme kompletní zabezpečení bez jediné drážky. Klasické drátové provedení používáme tam, kde se instalace dělá souběžně s elektroinstalací.",
          "Většinu domácích instalací zvládneme nainstalovat a zprovoznit zpravidla za jeden den, včetně zaškolení a nastavení uživatelů.",
        ],
      },
      {
        heading: "Od alarmu k chytré domácnosti",
        paragraphs: [
          "Se systémem Jablotron získáváte základ, na kterém se dá stavět dál. Ke střežení se dá připojit ovládání spotřebičů, garážových vrat a bran, monitoring teploty i hlášení havárií. Rozšíření je možné kdykoliv později, systém se nemusí vyměňovat.",
          "Systém JABLOTRON 100 je certifikovaný dle EN 50131-4 do stupně zabezpečení 2. Jsme nositeli koncesované živnosti pro montáž zabezpečovací techniky, což je u této práce podmínka, ne bonus.",
        ],
      },
    ],
    scope: {
      heading: "Zabezpečíme",
      items: [
        "Jakýkoli objekt: byt, dům, firmu, dílnu i sklad",
        "Klasicky i bezdrátově bez nutnosti bourání",
        "Doplnění o kamery a fotoverifikační čidla",
        "Požární a kouřové detektory, záplavová čidla",
        "Detektory tříštění skla, mikrovlnné detektory a infračervené závory",
        "Osobní tísňová tlačítka například pro seniory",
        "Připojení na pult centralizované ochrany",
        "Ovládání spotřebičů, vrat a monitoring teploty",
      ],
    },
    process: [
      {
        title: "Prohlídka objektu",
        text: "Projdeme objekt a určíme, kudy by se do něj skutečně někdo dostal. Podle toho se rozmisťují čidla.",
      },
      {
        title: "Návrh a nabídka",
        text: "Navrhneme sestavu a stupeň zabezpečení podle rizika a podle toho, co po vás bude chtít pojišťovna.",
      },
      {
        title: "Montáž za jeden den",
        text: "Běžnou domácí instalaci nainstalujeme a zprovozníme zpravidla během jednoho dne.",
      },
      {
        title: "Zaškolení a dohled",
        text: "Nastavíme uživatele, vysvětlíme ovládání a zařídíme případné připojení na pult bezpečnostní agentury.",
      },
    ],
    faq: [
      {
        q: "Bude se kvůli alarmu sekat do zdí?",
        a: "Nemusí. Systém JABLOTRON 100 umí pracovat bezdrátově, takže do hotového bytu nebo domu nainstalujeme zabezpečení bez bourání. Drátové provedení volíme jen tam, kde se dělá souběžně elektroinstalace.",
      },
      {
        q: "Jak dlouho montáž trvá?",
        a: "Běžný byt nebo rodinný dům zpravidla zvládneme nainstalovat a zprovoznit za jeden den, včetně nastavení a zaškolení.",
      },
      {
        q: "Musím mít připojení na bezpečnostní agenturu?",
        a: "Nemusíte, systém funguje i samostatně s hlášením do telefonu. Připojení na pult centralizované ochrany nabízíme jako volitelné, s tříměsíčním dohledem zdarma na vyzkoušení.",
      },
      {
        q: "Splní systém požadavky pojišťovny?",
        a: "JABLOTRON 100 je certifikovaný dle EN 50131-4 do stupně zabezpečení 2, což pokrývá běžné požadavky pojistných smluv na byty, domy i menší provozovny. Konkrétní stupeň si předem ověříme u vaší pojistky.",
      },
      {
        q: "Dá se alarm později rozšířit o chytrou domácnost?",
        a: "Ano, a bez výměny ústředny. Postupně se dá doplnit ovládání spotřebičů, vrat, monitoring teploty i hlášení havárií, například zaplavení.",
      },
    ],
    projectCategories: ["elektroinstalace"],
    owner: "ondrej-lesak",
    accent: "blue",
  },

  {
    slug: "fotovoltaika",
    reach: "national",
    navLabel: "Fotovoltaika",
    title: "Fotovoltaické systémy",
    metaTitle: "Fotovoltaika Písek | Návrh a montáž FVE, ohřev vody | OKelectric",
    metaDescription:
      "Návrh a instalace fotovoltaických elektráren pro domácnosti i firmy, fotovoltaický ohřev vody a analýza starších elektráren termokamerou. Sídlo u Písku, elektrárny stavíme i daleko.",
    lead: "Proměňte sluneční paprsky v energii, která pohání váš dům nebo firmu. S energií slunce to umíme na jedničku.",
    tagline: "Elektrárny, ohřev vody i prověření starší instalace termokamerou.",
    updated: "2026-09-13",
    ctaLabel: "Chci fotovoltaiku",
    ctaNote: "Velikost elektrárny spočítáme z vaší roční spotřeby, ne z plochy střechy.",
    body: [
      {
        heading: "Elektrárna, která se počítá",
        paragraphs: [
          "Navrhujeme a instalujeme fotovoltaické elektrárny pro rodinné domy i firmy. Přebytky se dají ukládat do baterií, do elektromobilu nebo do akumulační nádrže s vodou, případně sdílet s blízkými. Právě způsob, jakým naložíte s přebytky, rozhoduje o návratnosti víc než samotný počet panelů na střeše.",
          "Držíme profesní kvalifikaci 26-014-H pro montáž fotovoltaických systémů. Elektrárnu vám tedy nejen namontujeme, ale i připojíme, zrevidujeme a vyřídíme podklady pro distributora. Mezi našimi realizacemi jsou třeba elektrárny ve Zvíkovském Podhradí, Smetanově Lhotě, Zadních Zborovicích, Kozlově, Dmýšticích, Doksech, Rakovicích nebo Mutěnicích.",
        ],
      },
      {
        heading: "Tři cesty, kterými se k fotovoltaice dá jít",
        paragraphs: [
          "Plnohodnotná fotovoltaika je celý systém: panely, střídač, baterie a řízení spotřeby. Dává smysl tam, kde dům spotřebovává elektřinu celoročně, typicky u tepelného čerpadla nebo elektromobilu.",
          "Fotovoltaický ohřev vody je levnější vstupní varianta. Panely pracují jen na ohřev bojleru a odpadá složitá elektronika. Pro dům, který jinak topí dřevem nebo plynem, to bývá rozumnější první krok než plná elektrárna.",
          "Starší elektrárnu umíme prověřit. Analýza termokamerou odhalí přehřáté články, špatné spoje a ztracený výkon dřív, než se z nich stane porucha. Snímek z takové analýzy v Číčenicích máme mezi referencemi, teplotní špička na poli tam vyšla na 65,3 stupně Celsia.",
        ],
      },
      {
        heading: "Elektrikáři, ne montážní parta",
        paragraphs: [
          "Fotovoltaika je z poloviny práce na střeše a z poloviny práce v rozvaděči. Protože děláme běžné elektroinstalace a hromosvody, řešíme rovnou i přepěťovou ochranu, koordinaci s jímací soustavou a přípravu na wallbox. Instalujeme mimo jiné střídače a baterie SolaX a umíme nastavit řízení přetoků do bojleru, jak jsme dělali v Čimelicích.",
          "Sídlo máme u Písku, ale fotovoltaika je plánovaná práce na několik dní, takže za ní jezdíme i daleko.",
        ],
      },
    ],
    scope: {
      heading: "Co dodáváme",
      items: [
        "Plnohodnotné fotovoltaické elektrárny pro domy i firmy",
        "Bateriová úložiště a řízení spotřeby domácnosti",
        "Fotovoltaický ohřev teplé vody",
        "Řízení přetoků do bojleru a akumulační nádrže",
        "Rozšíření a doplnění stávajících elektráren",
        "Nabíjecí stanice wallbox napojené na výrobu",
        "Analýza starší elektrárny termokamerou",
        "Revize fotovoltaických elektráren",
      ],
    },
    process: [
      {
        title: "Podklady a spotřeba",
        text: "Vycházíme z vaší reálné roční spotřeby a z toho, kdy elektřinu odebíráte, ne z plochy střechy.",
      },
      {
        title: "Návrh systému",
        text: "Navrhneme velikost pole, střídač a případnou akumulaci tak, aby se výroba spotřebovala doma.",
      },
      {
        title: "Montáž a připojení",
        text: "Panely, střídač, kabeláž, přepěťová ochrana a úprava rozvaděče. Vše v jedné firmě.",
      },
      {
        title: "Revize a papíry",
        text: "Vystavíme revizi a připravíme podklady pro distributora i pro případnou dotaci.",
      },
    ],
    faq: [
      {
        q: "Vyplatí se fotovoltaika bez baterií?",
        a: "Vyplatí, pokud dům spotřebuje výrobu ve chvíli, kdy vzniká. Typicky u firem s denním provozem. U rodinného domu, kde přes den nikdo není, bez akumulace nebo bez ohřevu vody většina výroby odteče do sítě za nízkou výkupní cenu.",
      },
      {
        q: "Jaký je rozdíl mezi fotovoltaikou a fotovoltaickým ohřevem vody?",
        a: "Ohřev vody je jednodušší systém, kde panely pracují pouze na bojler. Je levnější, nemá baterie ani složité řízení a je to rozumný první krok pro dům, který jinak topí dřevem nebo plynem. Plná elektrárna dodává do celého domu.",
      },
      {
        q: "Mám elektrárnu několik let a zdá se mi, že vyrábí míň. Co s tím?",
        a: "Uděláme analýzu termokamerou. Přehřáté články, vadné spoje a zastíněné řetězce jsou na termosnímku vidět okamžitě a bez rozebírání pole. Podle nálezu doporučíme opravu nebo výměnu konkrétních dílů.",
      },
      {
        q: "Musí se kvůli fotovoltaice měnit hromosvod?",
        a: "Často ano, alespoň v části. Panely na střeše mění koncepci ochrany před bleskem a je potřeba dodržet odstupové vzdálenosti a doplnit přepěťovou ochranu. Protože děláme i hromosvody, řešíme obojí najednou.",
      },
      {
        q: "Pomůžete s dotací?",
        a: "Ano, s dotačními podklady pomáháme, stejně jako u tepelných čerpadel. Podmínky programů se mění, aktuální stav proberme telefonicky.",
      },
    ],
    projectCategories: ["fotovoltaika", "revize"],
    owner: "ondrej-krejci",
    accent: "green",
  },

  {
    slug: "rekuperace",
    reach: "national",
    navLabel: "Rekuperace",
    title: "Rekuperace",
    metaTitle: "Rekuperace Písek | Zehnder ComfoAir a ComfoSpot | OKelectric",
    metaDescription:
      "Centrální i decentrální rekuperační jednotky Zehnder ComfoAir a ComfoSpot pro novostavby i starší domy. Bezplatný návrh, montáž, servis. Sídlo u Písku, rekuperace instalujeme i daleko.",
    lead: "Zbavíme vás vlhkosti a budete dýchat čistší vzduch díky rekuperačním systémům od švýcarského výrobce Zehnder.",
    tagline: "Zehnder ComfoAir do novostaveb, ComfoSpot do starších domů.",
    updated: "2026-09-13",
    ctaLabel: "Potřebuji větrat",
    ctaNote: "Návrh projektu i cenovou nabídku děláme bezplatně.",
    body: [
      {
        heading: "Větrat a přitom netopit ven",
        paragraphs: [
          "Rekuperace zajišťuje nepřetržitou výměnu vzduchu, aniž byste ztráceli teplo. Odcházející vzduch předá svou energii vzduchu přiváděnému, takže dům dýchá a přitom se nevytápí ulice. Vedle úspory to řeší i vlhkost a alergeny, tedy věci, které se v dobře utěsněné novostavbě dřív nebo později projeví.",
          "Moderní jednotky jsou tiché, nenápadné a účinné. Pracujeme se systémy švýcarského výrobce Zehnder, konkrétně s centrálními jednotkami ComfoAir a decentrálními ComfoSpot.",
        ],
      },
      {
        heading: "Centrální jednotky pro novostavby",
        paragraphs: [
          "Centrální rekuperace ComfoAir se plánuje během výstavby, protože potřebuje prostor pro vzduchotechnické rozvody. Za to nabízí nejvyšší energetickou účinnost a jednu jednotku pro celý dům. Rozvody vedeme v podhledech nebo v krovu, jak jsme dělali v novostavbě v Oldřichově u Písku.",
          "Pokud stavíte, je rekuperace jedna z věcí, které se musí rozhodnout brzy. Dodatečné vedení potrubí hotovým domem je vždycky kompromis.",
        ],
      },
      {
        heading: "Decentrální jednotky pro starší domy",
        paragraphs: [
          "U stávajících domů, kde rozvody vést nelze, nasazujeme decentrální jednotky ComfoSpot. Instalují se do obvodové stěny jednotlivých místností s minimálními stavebními zásahy a dají se přidávat postupně, místnost po místnosti. To je výhoda tam, kde se rekonstruuje po etapách.",
          "Návrh projektu a cenovou nabídku děláme bezplatně. Zajišťujeme kompletní servis i dodávky náhradních dílů, včetně filtrů, na které se u rekuperace nejčastěji zapomíná.",
        ],
      },
    ],
    scope: {
      heading: "Co pro vás uděláme",
      items: [
        "Bezplatný návrh projektu a cenová nabídka",
        "Centrální jednotky Zehnder ComfoAir pro novostavby",
        "Decentrální jednotky Zehnder ComfoSpot pro starší domy",
        "Návrh a montáž vzduchotechnických rozvodů",
        "Zaregulování průtoků v jednotlivých místnostech",
        "Kompletní servis a dodávky náhradních dílů",
        "Výměna filtrů a pravidelná údržba",
      ],
    },
    process: [
      {
        title: "Konzultace nad projektem",
        text: "U novostavby ideálně dřív, než se zafixují podhledy. U starších domů posoudíme, co je reálné.",
      },
      {
        title: "Bezplatný návrh",
        text: "Navrhneme jednotku a trasy rozvodů a připravíme cenovou nabídku bez poplatku.",
      },
      {
        title: "Montáž",
        text: "Rozvody, jednotka, koncové prvky a napojení na elektroinstalaci, kterou zvládneme sami.",
      },
      {
        title: "Zaregulování a servis",
        text: "Nastavíme průtoky v jednotlivých místnostech a domluvíme režim výměny filtrů.",
      },
    ],
    faq: [
      {
        q: "Dá se rekuperace udělat i v už postaveném domě?",
        a: "Ano, decentrálními jednotkami ComfoSpot, které se osazují do obvodové stěny jednotlivých místností. Stavební zásah je minimální a jednotky se dají přidávat postupně. Centrální systém s rozvody se do hotového domu dostává výrazně hůř.",
      },
      {
        q: "Je rekuperace hlučná?",
        a: "Moderní jednotky Zehnder pracují na úrovni, která se v obytné místnosti běžně nevnímá. Hluk vzniká spíš špatně navrženými rozvody a poddimenzovaným potrubím než jednotkou samotnou, proto na návrhu tras záleží.",
      },
      {
        q: "Jak často se mění filtry?",
        a: "Podle prostředí zpravidla dvakrát ročně. Zanesený filtr je nejčastější důvod, proč rekuperace přestane fungovat, jak má. Filtry dodáváme a výměnu můžeme zajistit v rámci servisu.",
      },
      {
        q: "Vyřeší rekuperace vlhkost a plíseň?",
        a: "Ve většině případů ano, protože trvale odvádí vlhkost vzniklou vařením, sprchováním a dýcháním. Pokud je ale příčinou vzlínající vlhkost ze zdiva, musí se řešit stavebně, rekuperace ji sama nespraví.",
      },
      {
        q: "Kolik stojí návrh?",
        a: "Nic. Návrh projektu i cenovou nabídku děláme bezplatně.",
      },
    ],
    projectCategories: ["rekuperace", "klimatizace"],
    owner: "ondrej-krejci",
    accent: "blue",
  },

  {
    slug: "elektrorevize",
    reach: "local",
    navLabel: "Revize a projektování",
    title: "Revize a projektování",
    metaTitle: "Elektrorevize Písek | Revize hromosvodů, FVE a projekty | OKelectric",
    metaDescription:
      "Výchozí i periodické revize elektroinstalací, hromosvodů a fotovoltaik, revize přípojek pro ČEZ a EG.D. Projekty hromosvodů a elektroinstalací, zaměření skutečného stavu, 2D i 3D. Sídlo u Písku.",
    lead: "Ujistěte se o bezpečnosti a spolehlivosti vaší elektroinstalace. Revizní technik je součástí našeho týmu.",
    tagline: "Revize elektroinstalací, hromosvodů a fotovoltaik, projekty a výkresy.",
    updated: "2026-09-13",
    ctaLabel: "Chci revizi nebo projekt",
    ctaNote: "Řekněte, co a proč potřebujete zrevidovat nebo nakreslit. Rozsah i cenu odhadneme rovnou.",
    body: [
      {
        heading: "Revize není razítko, ale kontrola",
        paragraphs: [
          "Revizní zpráva má smysl jen tehdy, když za ní stojí skutečné měření a prohlídka. Provádíme revize vyhrazených elektrických zařízení na základě platného oprávnění a měříme moderními přístroji, ne odhadem podle stáří instalace.",
          "Většina zakázek jsou výchozí revize po naší vlastní montáži, děláme ale i revize po jiných firmách a periodické kontroly stávajících objektů.",
        ],
      },
      {
        heading: "Co revidujeme",
        paragraphs: [
          "Výchozí revize elektroinstalací v domech, bytech i komerčních objektech, tedy jistota od samého začátku. Revize elektrických přípojek pro ČEZ a EG.D, kde jde o splnění požadavků distributora bez zbytečného dohadování. Výchozí a periodické revize hromosvodů, které chrání majetek před rozmary počasí.",
          "Zvlášť stojí revize fotovoltaických elektráren. U nich nejde jen o bezpečnost, ale i o výkon. Kromě standardní revize umíme elektrárnu prověřit termokamerou a najít přehřáté články nebo vadné spoje, které tichou cestou ubírají výrobu.",
          "Děláme i dílčí revize elektroinstalací, například pro tepelná čerpadla, bazény a další zařízení, kde se doplňuje samostatný okruh do existující instalace.",
        ],
      },
      {
        heading: "Projekty a výkresová dokumentace",
        paragraphs: [
          "K revizím patří i papíry, ze kterých se dá pracovat. Kreslíme projekty hromosvodů a elektroinstalací pro domy a provozovny, ve 2D i ve 3D, k vlastním realizacím i samostatně jako službu. Výkres má sloužit tomu, kdo podle něj bude pracovat, proto kreslíme čitelně a s popisem, který dává smysl i za pět let.",
          "Velká část starších objektů použitelnou dokumentaci nemá, nebo neodpovídá tomu, co je ve zdi. Zaměříme skutečný stav a překreslíme ho, ať už kvůli rekonstrukci, revizi, nebo prodeji. Bez schématu se každý další zásah do elektroinstalace dělá metodou pokus a omyl. Navrhujeme a kreslíme také strojní díly a přípravky včetně 3D modelů pro výrobu.",
        ],
      },
      {
        heading: "Držená oprávnění",
        paragraphs: [
          "Jsme držiteli platných oprávnění pro práci na elektrických zařízeních ve smyslu §6, §7 a §8 nařízení vlády č. 194/2022, obor 26-51-H, a oprávnění k provádění revizí vyhrazených elektrických zařízení. Spolehněte se na moderní diagnostické metody.",
        ],
      },
    ],
    scope: {
      heading: "Revize a projekty",
      items: [
        "Výchozí revize elektroinstalací v domech, bytech i komerčních objektech",
        "Periodické revize elektroinstalací",
        "Revize elektrických přípojek pro ČEZ a EG.D",
        "Výchozí a periodické revize hromosvodů",
        "Revize fotovoltaických elektráren",
        "Dílčí revize pro tepelná čerpadla, bazény a další zařízení",
        "Analýza fotovoltaických polí termokamerou",
        "Projekty hromosvodů a elektroinstalací",
        "Zaměření a překreslení skutečného stavu",
        "2D výkresy a 3D modely, i strojní díly a přípravky",
      ],
    },
    process: [
      {
        title: "Domluva termínu",
        text: "Zavolejte s tím, co potřebujete zrevidovat a proč. Podle toho odhadneme rozsah i cenu.",
      },
      {
        title: "Prohlídka a měření",
        text: "Vizuální prohlídka a měření podle příslušných norem, u fotovoltaiky doplněné o termokameru.",
      },
      {
        title: "Revizní zpráva",
        text: "Zpracujeme zprávu s jasným výrokem a se seznamem zjištěných závad.",
      },
      {
        title: "Odstranění závad",
        text: "Pokud se najdou závady, umíme je hned opravit. Nemusíte shánět další firmu.",
      },
    ],
    faq: [
      {
        q: "Jak často se dělá periodická revize?",
        a: "Interval závisí na druhu objektu a vnějších vlivech, u běžných rodinných domů se pohybuje v řádu let, u prostor s vyšším rizikem je kratší. Konkrétní lhůtu pro váš objekt určíme podle protokolu o vnějších vlivech.",
      },
      {
        q: "Potřebuji revizi pro připojení k ČEZ nebo EG.D?",
        a: "Ano, distributor revizní zprávu k připojení nového odběru vyžaduje. Tyto revize běžně děláme a víme, co která společnost ve zprávě očekává.",
      },
      {
        q: "Zrevidujete i instalaci, kterou dělal někdo jiný?",
        a: "Ano. Revidujeme i po jiných firmách. Pokud se najdou závady, uvedeme je ve zprávě a můžeme je rovnou opravit.",
      },
      {
        q: "Proč revidovat fotovoltaiku termokamerou?",
        a: "Protože běžné měření neodhalí přehřáté články ani zhoršené spoje uvnitř pole. Ty se projeví teplotou, ne poruchou, a ubírají výrobu roky, než si jich někdo všimne.",
      },
      {
        q: "Uděláte projekt nebo výkresy, i když realizaci objednám jinde?",
        a: "Ano, dokumentaci děláme i samostatně jako službu. Není podmínkou, aby u nás zakázka pokračovala montáží.",
      },
      {
        q: "Nemám k domu žádné výkresy. Dá se to řešit?",
        a: "Dá. Zaměříme skutečný stav na místě a překreslíme ho do použitelné dokumentace. U starších objektů je to nejčastější zadání.",
      },
      {
        q: "Co když revize dopadne špatně?",
        a: "Zpráva popíše konkrétní závady a jejich závažnost. Většinu z nich umíme odstranit na místě nebo v krátkém termínu, protože elektroinstalace je naše hlavní činnost.",
      },
    ],
    projectCategories: ["revize", "hromosvody"],
    owner: "martin-vones",
    accent: "blue",
  },

  {
    slug: "instalaterske-topenarske-prace",
    reach: "local",
    navLabel: "Instalatérské a topenářské práce",
    title: "Instalatérské a topenářské práce",
    metaTitle: "Instalatér a topenář Písek | Rozvody vody a topení | OKelectric",
    metaDescription:
      "Rozvody vody a topení, podlahové vytápění, výměny radiátorů, oběhová čerpadla a izolace. Domácnosti, rodinné domy i menší firmy. Sídlo u Písku.",
    lead: "Kompletní služby v oblasti vodoinstalací a topenářských prací na jednom místě. Postaráme se o domácnosti, rodinné domy i menší firmy.",
    tagline: "Rozvody vody a topení, podlahové vytápění i havárie.",
    updated: "2026-09-13",
    ctaLabel: "Potřebuji instalatéra",
    ctaNote: "U havárie voláme zpět, jakmile to jde, i o víkendu.",
    body: [
      {
        heading: "Voda a topení bez shánění dalších firem",
        paragraphs: [
          "Běžné rozvody vody, topení a podlahového vytápění jsou u nás samozřejmostí. Montujeme plastové, měděné i ocelové rozvody podle toho, co dává v konkrétním objektu smysl, a děláme to jak v rodinných domech, tak v průmyslových provozech.",
          "Výhoda spolupráce s námi je v tom, že instalatér a elektrikář jsou jedna firma. U tepelných čerpadel, elektrokotlů a řízených soustav se voda a elektřina protínají v každém druhém kroku a právě na tom rozhraní vzniká většina problémů, když se na stavbě potkají dvě nezávislé party.",
        ],
      },
      {
        heading: "Podlahové vytápění a otopná tělesa",
        paragraphs: [
          "Pokládáme podlahové vytápění do novostaveb i do rekonstrukcí a kombinujeme ho s radiátory tam, kde má smysl mít oboje. Součástí je návrh okruhů, rozdělovač, regulační ventily a zaregulování, bez kterého podlahovka nikdy netopí rovnoměrně.",
          "Vyměňujeme dosluhující otopná tělesa, montujeme a servisujeme oběhová čerpadla a doplňujeme tepelné izolace rozvodů, což je jedna z nejlevnějších úspor, kterou v domě lze udělat.",
        ],
      },
      {
        heading: "Havárie",
        paragraphs: [
          "Urgentní situace a havarijní stavy řešíme podle svých možností i o víkendech. Nejsme nonstop pohotovost a neslibujeme to, ale pokud teče, zavolejte, ozveme se.",
        ],
      },
    ],
    scope: {
      heading: "Nabízíme",
      items: [
        "Montáž plastových, měděných i ocelových rozvodů",
        "Montáže a servis oběhových čerpadel",
        "Montáž regulačních ventilů",
        "Montáž a výměny otopných těles",
        "Instalace tepelných izolací",
        "Pokládka podlahového vytápění",
        "Instalace tepelných čerpadel, elektrokotlů i kotlů na tuhá paliva",
        "Řešení havarijních stavů podle aktuálních možností",
      ],
    },
    process: [
      {
        title: "Zavolejte co nejdřív",
        text: "Popíšete, co potřebujete. U havárie voláme zpět co nejdřív, jak to jde.",
      },
      {
        title: "Zaměření",
        text: "U větších prací přijedeme zaměřit a probrat trasy rozvodů a napojení na zdroj.",
      },
      {
        title: "Montáž",
        text: "Rozvody, tělesa, podlahovka i izolace. Elektrickou část si zajistíme sami.",
      },
      {
        title: "Zkouška a zaregulování",
        text: "Tlaková zkouška, napuštění a zaregulování okruhů, aby soustava topila rovnoměrně.",
      },
    ],
    faq: [
      {
        q: "Přijedete i k havárii o víkendu?",
        a: "Urgentní situace a havarijní stavy řešíme podle svých možností i o víkendech. Nejsme nonstop pohotovost, ale pokud teče, zavolejte na 603 815 149 a domluvíme se.",
      },
      {
        q: "Uděláte podlahové vytápění i do rekonstrukce?",
        a: "Ano. Záleží na výšce skladby podlahy, kterou máte k dispozici, a na tom, jestli se dá dům temperovat na nižší teplotu. Posoudíme to při zaměření.",
      },
      {
        q: "Musím na elektriku k tepelnému čerpadlu shánět jinou firmu?",
        a: "Ne. Instalatérskou i elektrikářskou část děláme my, včetně úpravy rozvaděče, jištění a výchozí revize.",
      },
      {
        q: "Děláte i průmyslové objekty?",
        a: "Ano, kromě domácností a rodinných domů pracujeme i v průmyslových provozech, například na chladicích jednotkách a rozvodech v areálech na Horažďovicku a Strakonicku.",
      },
      {
        q: "Jaké rozvody používáte?",
        a: "Plastové, měděné i ocelové. Volba se řídí typem objektu, provozní teplotou a tím, co se v domě už používá, ne tím, co má firma zrovna na skladě.",
      },
    ],
    projectCategories: ["kotelny", "klimatizace"],
    owner: "ondrej-krejci",
    accent: "green",
  },

  {
    slug: "klimatizace",
    reach: "local",
    navLabel: "Klimatizace a chlazení",
    title: "Klimatizace a chlazení",
    metaTitle: "Klimatizace Písek | Montáž a servis klimatizací | OKelectric",
    metaDescription:
      "Montáž klimatizací do bytů, domů i kanceláří, multisplit pro více místností, chlazení pro menší firmy a provozy. Návrh, montáž, elektrická přípojka i servis. Sídlo u Písku.",
    lead: "Příjemný chlad v létě a levné přitápění na jaře i na podzim. Navrhneme, namontujeme a zapojíme klimatizaci včetně elektrické části.",
    tagline: "Klimatizace do bytů, domů i kanceláří, multisplit a chlazení pro provozy.",
    updated: "2026-09-13",
    ctaLabel: "Chci klimatizaci",
    ctaNote: "Podíváme se, kam jednotky umístit a kudy povede potrubí, pak pošleme nabídku.",
    body: [
      {
        heading: "Chlad tam, kde ho potřebujete",
        paragraphs: [
          "Montujeme klimatizace do bytů, rodinných domů, kanceláří i menších provozoven. Nejčastěji jde o dělené systémy split, kde venkovní jednotka stojí na fasádě nebo na zemi a uvnitř je tichá nástěnná jednotka. Pro více místností navrhujeme multisplit, tedy jednu venkovní jednotku pro několik vnitřních, jak jsme dělali například v Blatné.",
          "Pracujeme mimo jiné s jednotkami Daikin. Značku a výkon ale volíme podle místnosti, orientace oken a toho, jak se prostor používá, ne podle toho, co je zrovna v akci.",
        ],
      },
      {
        heading: "Montáž, kterou není vidět ani slyšet",
        paragraphs: [
          "O tom, jestli vás klimatizace bude těšit, rozhoduje hlavně montáž. Vnitřní jednotku umisťujeme tak, aby nefoukala přímo na postel ani na pracovní stůl, potrubí a odvod kondenzátu vedeme co nejkratší a nejčistší cestou a venkovní jednotku stavíme tam, kde nebude rušit vás ani sousedy.",
          "Protože jsme elektrikáři, uděláme i samostatný jištěný okruh a napojení do rozvaděče. Nemusíte kvůli klimatizaci shánět další firmu a nevznikne provizorní kabel přes půl domu.",
        ],
      },
      {
        heading: "Topí levněji, než si myslíte",
        paragraphs: [
          "Moderní klimatizace je vlastně malé tepelné čerpadlo vzduch-vzduch. V přechodném období, kdy se ještě nevyplatí zatápět v kotli, vytopí místnost za zlomek ceny přímotopu. V domě s fotovoltaikou může přes den běžet prakticky z vlastní výroby.",
          "Kromě domácností řešíme i chlazení pro menší firmy a provozy, například chladicí jednotky v průmyslovém areálu na Horažďovicku.",
        ],
      },
    ],
    scope: {
      heading: "Co pro vás uděláme",
      items: [
        "Návrh výkonu a umístění jednotek",
        "Klimatizace split do bytů, domů a kanceláří",
        "Multisplit pro více místností s jednou venkovní jednotkou",
        "Konzole na fasádu, na zem i na plochou střechu",
        "Vedení potrubí a odvodu kondenzátu",
        "Samostatný elektrický okruh a napojení do rozvaděče",
        "Chlazení pro menší firmy a provozy",
        "Pravidelný servis a čištění jednotek",
      ],
    },
    process: [
      {
        title: "Prohlídka",
        text: "Projdeme místnosti, vybereme místo pro vnitřní i venkovní jednotky a trasu potrubí.",
      },
      {
        title: "Návrh a nabídka",
        text: "Spočítáme výkon podle velikosti a orientace místností a pošleme nabídku s konkrétními jednotkami.",
      },
      {
        title: "Montáž",
        text: "Jednotky, potrubí, odvod kondenzátu i elektrická přípojka. Běžnou montáž zvládneme za den.",
      },
      {
        title: "Zprovoznění a servis",
        text: "Uvedeme do provozu, ukážeme ovládání a domluvíme pravidelné čištění.",
      },
    ],
    faq: [
      {
        q: "Jak velkou klimatizaci potřebuju?",
        a: "Záleží na velikosti místnosti, orientaci oken, zateplení a počtu lidí nebo spotřebičů v ní. Podkrovní ložnice na jih potřebuje víc než stejně velký pokoj na sever. Výkon proto navrhujeme až po prohlídce.",
      },
      {
        q: "Dá se klimatizací i topit?",
        a: "Ano. Klimatizace pracuje jako tepelné čerpadlo vzduch-vzduch a v přechodném období vytopí místnost výrazně levněji než přímotop. Jako hlavní zdroj tepla pro celý dům ji ale nedoporučujeme, na to je lepší tepelné čerpadlo do topné vody.",
      },
      {
        q: "Kolik místností zvládne jedna venkovní jednotka?",
        a: "Systém multisplit připojí k jedné venkovní jednotce obvykle dvě až pět vnitřních. Na fasádě tak visí jedna jednotka místo několika, což ocení hlavně bytové domy a řadovky.",
      },
      {
        q: "Bude klimatizace hlučná?",
        a: "Vnitřní jednotky jsou v tichém režimu slyšet sotva víc než šum ledničky. U venkovní jednotky rozhoduje umístění, proto ho vybíráme s ohledem na vaše okna i na sousedy.",
      },
      {
        q: "Jak často se klimatizace čistí?",
        a: "Filtry vnitřní jednotky je dobré propláchnout jednou za pár týdnů provozu, zvládnete to sami. Důkladné čištění výměníku a kontrolu jednotky doporučujeme jednou ročně, ideálně před sezónou.",
      },
    ],
    projectCategories: ["klimatizace"],
    owner: "ondrej-krejci",
    accent: "blue",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service {
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) throw new Error(`Neznámá služba: ${slug}`);
  return svc;
}
