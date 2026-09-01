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
  /** Text tlačítka, přebírá se ze současného webu. */
  ctaLabel: string;
  /** Vlastní hlavní text služby, 300 až 500 slov. */
  body: { heading: string; paragraphs: string[] }[];
  /** Odrážkový výčet konkrétních prací. */
  scope: { heading: string; items: string[] };
  /** Jak spolupráce probíhá. */
  process: { title: string; text: string }[];
  faq: FaqItem[];
  related: string[];
  projectCategories: ProjectCategory[];
  /** Slug člena týmu, který službu vede. */
  owner: string;
  accent: "green" | "blue";
};

export const SERVICES: Service[] = [
  {
    slug: "kotelny-tepelna-cerpadla",
    navLabel: "Kotelny a tepelná čerpadla",
    title: "Kotelny a tepelná čerpadla",
    metaTitle: "Kotelny a tepelná čerpadla Písek, Protivín, Blatná | OKelectric",
    metaDescription:
      "Výměna starých kotlů na tuhá paliva za tepelné čerpadlo, peletový nebo zplynovací kotel. Řídicí systémy kotelen, ekvitermní regulace, dotace Nová zelená úsporám. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Nahrazujeme staré nevyhovující kotle na tuhá paliva efektivním zdrojem a doděláme k němu i regulaci, která z něj skutečně dostane, co umí.",
    tagline: "Tepelná čerpadla, peletové kotle a regulace, která z nich dostane maximum.",
    updated: "2026-09-01",
    ctaLabel: "Chci moderní kotelnu",
    body: [
      {
        heading: "Moderní vytápění bez kompromisů",
        paragraphs: [
          "Vytápění je největší položkou v provozu domu a zároveň místem, kde se nejvíc podepíše kvalita provedení. Instalujeme tepelná čerpadla, peletové kotle i zplynovací kotle na kusové dřevo a stavíme kolem nich kompletní kotelnu: akumulaci, oběhová čerpadla, směšovací ventily topných okruhů a řízení, které celek drží pohromadě.",
          "Pracujeme v Písku, Protivíně, Blatné, v podhůří Šumavy i v Praze. Většina zakázek jsou rodinné domy, kde se vyměňuje dosluhující kotel na tuhá paliva, děláme ale i složitější kotelny s více zdroji, kde se kombinuje tepelné čerpadlo s krbem nebo se záložním elektrokotlem.",
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
          "Držíme profesní kvalifikaci 26-074-M pro instalatéry soustav s tepelnými čerpadly a mělkých geotermálních systémů a jsme autorizovaným partnerem pro tepelná čerpadla NIBE.",
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
        q: "V jakém okolí kotelny stavíte?",
        a: "Běžně jezdíme po Písku, Protivíně, Blatné, Vodňanech a Strakonicích, dále na Šumavu a do Prahy. Vzdálenější zakázku posoudíme podle rozsahu.",
      },
    ],
    related: ["instalaterske-topenarske-prace", "fotovoltaika", "rekuperace"],
    projectCategories: ["kotelny", "rekuperace"],
    owner: "ondrej-krejci",
    accent: "green",
  },

  {
    slug: "elektroinstalace",
    navLabel: "Elektroinstalace a hromosvody",
    title: "Elektroinstalace a hromosvody",
    metaTitle: "Elektrikář Písek, Protivín, Blatná | Elektroinstalace a hromosvody | OKelectric",
    metaDescription:
      "Kompletní elektroinstalace novostaveb i rekonstrukce, montáž hromosvodů, úpravy elektroměrových rozvaděčů, osvětlení a pohony vrat. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Elektroinstalace je nervovou soustavou domu. Rozhoduje o tom, jak pohodlně se v něm bude bydlet dalších třicet let, a předělává se hůř než cokoliv jiného.",
    tagline: "Novostavby, rekonstrukce, hromosvody i příprava na wallbox.",
    updated: "2026-09-01",
    ctaLabel: "Potřebuji elektrikáře",
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
          "Děláme kompletní elektroinstalace rodinných domů a bytů v Písku, Protivíně, Blatné, na Šumavě i v Praze, včetně návrhu rozmístění a dokumentace. Stejně tak řešíme dílčí zásahy: rekonstrukci bytového rozvaděče, úpravu elektroměrového rozvaděče pro nový odběr, přípravu na nabíjecí stanici nebo dotažení okruhů, které v domě chybí.",
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
        a: "Základní působiště je Písek, Protivín a Blatná. Běžně jezdíme na Šumavu, do Prahy, Plzně a Tábora.",
      },
    ],
    related: ["elektrorevize", "alarmy-zabezpeceni", "fotovoltaika"],
    projectCategories: ["elektroinstalace", "hromosvody"],
    owner: "martin-vones",
    accent: "green",
  },

  {
    slug: "alarmy-zabezpeceni",
    navLabel: "Alarmy a zabezpečení",
    title: "Zabezpečení majetku, vozidel a chytrá domácnost",
    metaTitle: "Alarmy a zabezpečení Písek, Protivín, Blatná | Jablotron | OKelectric",
    metaDescription:
      "Certifikovaný montážní partner Jablotron. Alarmy, kamery, přístupové systémy a chytrá domácnost pro byty, domy i firmy. Montáž zpravidla za jeden den. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Ochráníme, co je pro vás cenné, na nejvyšší dostupné technické úrovni. Jsme certifikovaným montážním partnerem firmy Jablotron.",
    tagline: "Jablotron na míru objektu, montáž zpravidla za jeden den.",
    updated: "2026-09-01",
    ctaLabel: "Chci alarm",
    body: [
      {
        heading: "Bezpečí na prvním místě",
        paragraphs: [
          "Zabezpečení má smysl tehdy, když je navržené na konkrétní objekt. Jinak se chrání byt v panelovém domě, jinak samostatně stojící dům na okraji obce a úplně jinak dílna nebo sklad. Navrhujeme a instalujeme systémy na míru, od alarmů přes kamerový dohled po přístupové systémy, a to v Písku, Protivíně, Blatné, na Šumavě i v Praze.",
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
    related: ["elektroinstalace", "vykresova-dokumentace", "elektrorevize"],
    projectCategories: ["elektroinstalace"],
    owner: "ondrej-lesak",
    accent: "blue",
  },

  {
    slug: "fotovoltaika",
    navLabel: "Fotovoltaika",
    title: "Fotovoltaické systémy",
    metaTitle: "Fotovoltaika Písek, Protivín, Blatná | FVE, ohřev vody, dotace | OKelectric",
    metaDescription:
      "Návrh a instalace fotovoltaických elektráren pro domácnosti i firmy, fotovoltaický ohřev vody a analýza starších elektráren termokamerou. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Proměňte sluneční paprsky v energii, která pohání váš dům nebo firmu. S energií slunce to umíme na jedničku.",
    tagline: "Elektrárny, ohřev vody i prověření starší instalace termokamerou.",
    updated: "2026-09-01",
    ctaLabel: "Chci svou energii",
    body: [
      {
        heading: "Elektrárna, která se počítá",
        paragraphs: [
          "Navrhujeme a instalujeme fotovoltaické elektrárny pro rodinné domy i firmy. Přebytky se dají ukládat do baterií, do elektromobilu nebo do akumulační nádrže s vodou, případně sdílet s blízkými. Právě způsob, jakým naložíte s přebytky, rozhoduje o návratnosti víc než samotný počet panelů na střeše.",
          "Držíme profesní kvalifikaci 26-014-H pro montáž fotovoltaických systémů. Elektrárnu vám tedy nejen namontujeme, ale i připojíme, zrevidujeme a vyřídíme podklady pro distributora. Realizace najdete po celém Písecku a Strakonicku: Zvíkovské Podhradí, Smetanova Lhota, Zadní Zborovice, Kozlov, Dmýštice, Doksy, Rakovice, Mutěnice.",
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
          "Působíme v Písku, Protivíně, Blatné, na Šumavě a v Praze, jednotlivé zakázky ale máme i dál po republice.",
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
    related: ["elektroinstalace", "kotelny-tepelna-cerpadla", "elektrorevize"],
    projectCategories: ["fotovoltaika", "revize"],
    owner: "ondrej-krejci",
    accent: "green",
  },

  {
    slug: "rekuperace",
    navLabel: "Rekuperace",
    title: "Rekuperace",
    metaTitle: "Rekuperace Písek, Protivín, Blatná | Zehnder ComfoAir | OKelectric",
    metaDescription:
      "Centrální i decentrální rekuperační jednotky Zehnder ComfoAir a ComfoSpot pro novostavby i starší domy. Bezplatný návrh, montáž, servis. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Zbavíme vás vlhkosti a budete dýchat čistší vzduch díky rekuperačním systémům od švýcarského výrobce Zehnder.",
    tagline: "Zehnder ComfoAir do novostaveb, ComfoSpot do starších domů.",
    updated: "2026-09-01",
    ctaLabel: "Potřebuji větrat",
    body: [
      {
        heading: "Větrat a přitom netopit ven",
        paragraphs: [
          "Rekuperace zajišťuje nepřetržitou výměnu vzduchu, aniž byste ztráceli teplo. Odcházející vzduch předá svou energii vzduchu přiváděnému, takže dům dýchá a přitom se nevytápí ulice. Vedle úspory to řeší i vlhkost a alergeny, tedy věci, které se v dobře utěsněné novostavbě dřív nebo později projeví.",
          "Moderní jednotky jsou tiché, nenápadné a účinné. Pracujeme se systémy švýcarského výrobce Zehnder, konkrétně s centrálními jednotkami ComfoAir a decentrálními ComfoSpot. Instalujeme je v Písku, Protivíně, Blatné, na Šumavě i v Praze.",
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
    related: ["kotelny-tepelna-cerpadla", "instalaterske-topenarske-prace", "elektroinstalace"],
    projectCategories: ["rekuperace", "klimatizace"],
    owner: "ondrej-krejci",
    accent: "blue",
  },

  {
    slug: "elektrorevize",
    navLabel: "Elektrorevize",
    title: "Revize elektrických zařízení",
    metaTitle: "Elektrorevize Písek, Protivín, Blatná | Revize hromosvodů a FVE | OKelectric",
    metaDescription:
      "Výchozí i periodické revize elektroinstalací, hromosvodů a fotovoltaických elektráren. Revize přípojek pro ČEZ a EG.D. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Ujistěte se o bezpečnosti a spolehlivosti své instalace. Revizi si děláme sami, takže na ni nečekáte.",
    tagline: "Výchozí i periodické revize elektroinstalací, hromosvodů a fotovoltaik.",
    updated: "2026-09-01",
    ctaLabel: "Chci revizi",
    body: [
      {
        heading: "Revize není razítko, ale kontrola",
        paragraphs: [
          "Revizní zpráva má smysl jen tehdy, když za ní stojí skutečné měření a prohlídka. Provádíme revize vyhrazených elektrických zařízení na základě platného oprávnění a měříme moderními přístroji, ne odhadem podle stáří instalace.",
          "Revidujeme v Písku, Protivíně, Blatné, na Šumavě i v Praze. Většina zakázek jsou výchozí revize po naší vlastní montáži, děláme ale i revize po jiných firmách a periodické kontroly stávajících objektů.",
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
        heading: "Držená oprávnění",
        paragraphs: [
          "Jsme držiteli platných oprávnění pro práci na elektrických zařízeních ve smyslu §6, §7 a §8 nařízení vlády č. 194/2022, obor 26-51-H, a oprávnění k provádění revizí vyhrazených elektrických zařízení. Spolehněte se na moderní diagnostické metody.",
        ],
      },
    ],
    scope: {
      heading: "Druhy revizí",
      items: [
        "Výchozí revize elektroinstalací v domech, bytech i komerčních objektech",
        "Periodické revize elektroinstalací",
        "Revize elektrických přípojek pro ČEZ a EG.D",
        "Výchozí a periodické revize hromosvodů",
        "Revize fotovoltaických elektráren",
        "Dílčí revize pro tepelná čerpadla, bazény a další zařízení",
        "Analýza fotovoltaických polí termokamerou",
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
        q: "Co když revize dopadne špatně?",
        a: "Zpráva popíše konkrétní závady a jejich závažnost. Většinu z nich umíme odstranit na místě nebo v krátkém termínu, protože elektroinstalace je naše hlavní činnost.",
      },
    ],
    related: ["elektroinstalace", "fotovoltaika", "alarmy-zabezpeceni"],
    projectCategories: ["revize", "hromosvody"],
    owner: "martin-vones",
    accent: "blue",
  },

  {
    slug: "instalaterske-topenarske-prace",
    navLabel: "Instalatérské a topenářské práce",
    title: "Instalatérské a topenářské práce",
    metaTitle: "Instalatér a topenář Písek, Protivín, Blatná | OKelectric",
    metaDescription:
      "Rozvody vody a topení, podlahové vytápění, výměny radiátorů, oběhová čerpadla a izolace. Domácnosti, rodinné domy i průmyslové objekty. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Kompletní služby v oblasti vodoinstalací a topenářských prací na jednom místě. Postaráme se o domácnosti, rodinné domy i průmyslové objekty.",
    tagline: "Rozvody vody a topení, podlahové vytápění i havárie.",
    updated: "2026-09-01",
    ctaLabel: "Instalatér (téměř) ihned",
    body: [
      {
        heading: "Voda a topení bez shánění dalších firem",
        paragraphs: [
          "Běžné rozvody vody, topení a podlahového vytápění jsou u nás samozřejmostí. Montujeme plastové, měděné i ocelové rozvody podle toho, co dává v konkrétním objektu smysl, a děláme to jak v rodinných domech, tak v průmyslových provozech na Písecku, Protivínsku a Blatensku, na Šumavě i v Praze.",
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
          "Instalatérskou a topenářskou část u nás vede pan Biedermann z Písku, telefon 603 815 149.",
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
        title: "Zavolejte panu Biedermannovi",
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
    related: ["kotelny-tepelna-cerpadla", "rekuperace", "elektroinstalace"],
    projectCategories: ["kotelny", "klimatizace"],
    owner: "jiri-biedermann",
    accent: "green",
  },

  {
    slug: "vykresova-dokumentace",
    navLabel: "Výkresová dokumentace",
    title: "Výkresová dokumentace",
    metaTitle: "Výkresová dokumentace 2D a 3D, projekty hromosvodů | OKelectric Písek",
    metaDescription:
      "Profesionální výkresová dokumentace ve 2D i 3D. Projekty hromosvodů, zaměření skutečného stavu, návrhy strojních dílů a přípravků. Písek, Protivín, Blatná, Šumava, Praha.",
    lead: "Nakreslíme všechno, co je potřeba, od projektů hromosvodů po výkresy, které by obstály i před profesorem technického kreslení.",
    tagline: "Projekty hromosvodů, zaměření skutečného stavu, 2D i 3D.",
    updated: "2026-09-01",
    ctaLabel: "Potřebuji nakreslit",
    body: [
      {
        heading: "Dokumentace, která se dá číst",
        paragraphs: [
          "Vytváříme profesionální dokumentaci ve 2D formátech i ve 3D, přesně podle vašich požadavků. Vycházíme z toho, že výkres má sloužit tomu, kdo podle něj bude pracovat, ne archivu. Proto kreslíme čitelně, s popisem, který dává smysl i za pět let, až se k dokumentaci někdo vrátí kvůli rekonstrukci.",
          "Nejčastěji jde o projekty hromosvodů a elektroinstalací pro domy a provozovny v Písku, Protivíně, Blatné, na Šumavě i v Praze. Dokumentaci děláme jak k vlastním realizacím, tak samostatně jako službu.",
        ],
      },
      {
        heading: "Zaměření skutečného stavu",
        paragraphs: [
          "Velká část starších objektů žádnou použitelnou dokumentaci nemá, nebo ta stávající neodpovídá tomu, co je ve zdi. Zaměříme skutečný stav a překreslíme ho do podoby, se kterou se dá dál pracovat, ať už kvůli plánované rekonstrukci, kvůli revizi, nebo kvůli prodeji objektu.",
          "U elektroinstalací je to obzvlášť užitečné. Bez schématu se každý další zásah dělá metodou pokus a omyl a platí se to hodinami práce navíc.",
        ],
      },
      {
        heading: "Nejen elektro",
        paragraphs: [
          "Naše práce nekončí u elektrotechnických výkresů. Navrhujeme a kreslíme také strojní díly a přípravky, včetně 3D modelů pro výrobu. Pokud potřebujete nakreslit součástku, přípravek nebo úpravu stávajícího zařízení, ozvěte se, obvykle to jde.",
          "Dokumentaci u nás vede pan Lesák z Čimelic, telefon 776 229 279.",
        ],
      },
    ],
    scope: {
      heading: "Co kreslíme",
      items: [
        "Projekty hromosvodů a jímacích soustav",
        "Projekty elektroinstalací domů a provozoven",
        "Zaměření a překreslení skutečného stavu",
        "Dokumentace skutečného provedení stavby",
        "2D výkresová dokumentace",
        "3D modely pro výrobu",
        "Návrhy strojních dílů a přípravků",
      ],
    },
    process: [
      {
        title: "Zadání",
        text: "Popíšete, co potřebujete a k čemu to bude sloužit. Podle účelu se liší podrobnost výkresu.",
      },
      {
        title: "Podklady nebo zaměření",
        text: "Pracujeme z vašich podkladů, nebo přijedeme zaměřit skutečný stav na místě.",
      },
      {
        title: "Zpracování",
        text: "Zpracujeme dokumentaci ve 2D nebo ve 3D podle domluvy a pošleme k připomínkám.",
      },
      {
        title: "Předání",
        text: "Předáme finální výkresy v požadovaných formátech, včetně tiskových podkladů.",
      },
    ],
    faq: [
      {
        q: "Uděláte dokumentaci, i když u vás nebudu objednávat realizaci?",
        a: "Ano, dokumentaci děláme i samostatně jako službu. Není podmínkou, aby u nás zakázka pokračovala montáží.",
      },
      {
        q: "Nemám k domu žádné výkresy. Dá se to řešit?",
        a: "Dá. Zaměříme skutečný stav na místě a překreslíme ho do použitelné dokumentace. U starších objektů je to nejčastější zadání, se kterým se setkáváme.",
      },
      {
        q: "V jakých formátech dokumentaci dodáváte?",
        a: "Standardně ve 2D formátech k tisku i pro další zpracování, podle potřeby doplněné o 3D model. Konkrétní formáty domluvíme podle toho, kdo s výkresem bude dál pracovat.",
      },
      {
        q: "Kreslíte i něco jiného než elektro?",
        a: "Ano. Navrhujeme a kreslíme také strojní díly a přípravky včetně 3D modelů pro výrobu.",
      },
      {
        q: "Na koho se mám obrátit?",
        a: "Na pana Lesáka z Čimelic, telefon 776 229 279, e-mail lesak@okelectric.cz.",
      },
    ],
    related: ["elektroinstalace", "alarmy-zabezpeceni", "elektrorevize"],
    projectCategories: ["elektroinstalace", "hromosvody"],
    owner: "ondrej-lesak",
    accent: "blue",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service {
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) throw new Error(`Neznámá služba: ${slug}`);
  return svc;
}
