# OKelectric

Demo web pro OKelectric, elektrikáře a topenáře se sídlem u Písku. Next.js 14 (App Router), TypeScript,
Tailwind, animace čistě v CSS. Bez CMS, obsah je natvrdo v `src/content/` a je strukturovaný tak, aby se
dal později přenést do Sanity beze změny komponent.

## Spuštění

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # produkční build, všech 20 tras je statických
```

## Struktura obsahu

Veškerý text a data jsou oddělené od komponent:

- `src/content/site.ts` NAP, tým, kvalifikace, věty o sídle a dojezdu, obce pro strukturovaná data, značky partnerů
- `src/content/services.ts` osm služeb včetně vlastního textu, procesu, FAQ a případného
  výrobku s parametry (u tepelných čerpadel Hotjet ZETXe s odkazem na web výrobce)
- `src/content/projects.ts` 27 realizací s popisky fotografií

Přidání služby znamená přidat položku do `SERVICES` a založit `src/app/<slug>/page.tsx`, který jen
předá objekt do `ServicePageTemplate`. Sitemap se doplní sama.

## SEO

- `pageMetadata()` v `src/lib/seo.ts` řeší title, description, canonical a Open Graph pro každou trasu
- JSON-LD: `Electrician` / `HVACBusiness` / `LocalBusiness` na layoutu, `Service` a `FAQPage` na
  stránkách služeb, `BreadcrumbList` všude, `WebSite` na layoutu
- `app/sitemap.ts` a `app/robots.ts` generují sitemap i robots ze seznamu služeb.
  `lastModified` se bere z pole `updated` u každé služby, ne z času buildu, jinak by
  každý deploy tvrdil Googlu, že se změnily všechny stránky. Při editaci textu je
  potřeba datum ručně posunout.
- Náhledové obrázky pro sdílení má každá stránka vlastní, v `public/og`. Odvozují se
  automaticky z cesty, takže u nové trasy stačí přidat soubor se shodným názvem.

### Poznámka k měření výkonu

Lighthouse na mobilu kolísá mezi běhy o zhruba tři body (93 až 96) na naprosto
shodném buildu. Než něco kvůli výkonu předěláte, změřte stejný build třikrát,
ať neopravujete šum. Ověřeno: odebrání `priority` z hero obrázku i přepnutí fontů
na `display: optional` skončilo uvnitř tohoto rozptylu, takže obojí bylo zamítnuto.

Obrázkové audity (`modern-image-formats`, `uses-responsive-images`,
`uses-optimized-images`) i `critical-request-chains` procházejí na plný počet.
LCP prvek je text, ne fotka, takže optimalizace obrázků nemá na LCP vliv.

Dvě věci propadají a obě jsou mimo naši kontrolu: `render-blocking-resources`
(jediný 7kB CSS soubor, inline CSS umí až Next 15) a `legacy-javascript` (11 kB
polyfillů zabalených napevno v Nextu, `browserslist` na ně nemá vliv, ověřeno
shodným hashem chunku před změnou i po ní).

Lighthouse na produkčním buildu: SEO 100, přístupnost 100, best practices 100, výkon 100 (desktop)
a 93 (mobil, simulované 4G).

## Poptávkový formulář

Komponenta `PoptavkaForm` je hotová, ale **vypnutá**. Na stránce Kontakt se vykreslí
teprve ve chvíli, kdy je nastavená proměnná `NEXT_PUBLIC_FORM_ENDPOINT`. Bez ní by
na webu bylo tlačítko, které nikam neodesílá, což je horší než formulář žádný.

Zapnutí:

1. Založit formulář na Formspree a vzít URL `https://formspree.io/f/xxxxxxxx`
2. Ve Vercelu přidat `NEXT_PUBLIC_FORM_ENDPOINT` s touto hodnotou
3. Nasadit

Formulář posílá JSON s poli `jmeno`, `obec`, `telefon`, `email`, `sluzba`, `zprava`
a `souhlas`. Má skryté pole `web` jako past na roboty, validaci na straně klienta
s chybami navázanými přes `aria-describedby` a stav odesílání i chyby.

Text souhlasu se zpracováním údajů je zatím obecný. Před ostrým provozem by ho měl
projít někdo, kdo řeší GDPR, a měla by k němu vzniknout stránka se zásadami
zpracování.

## Co je potřeba doplnit před ostrým nasazením

- **IČO a DIČ.** Současný web je neuvádí, proto nejsou ani tady. Doplňte v
  `src/content/site.ts` (`NAP`) a promítne se do JSON-LD i do patičky.
- **Telefon v profilu na Googlu.** Adresa, souřadnice a otevírací doba na webu jsou převzaté
  z profilu firmy na Mapách Google. Profil ale uvádí telefon 776 229 279 (Lesák), zatímco
  web vede poptávky na 739 664 789 (Krejčí). Firma má v profilu telefon přepsat na
  739 664 789, aby se údaje shodovaly.
- **Fotografie týmu.** `TeamMemberCard` je zatím bez portrétů.
- **Kontaktní formulář.** Web záměrně tlačí na telefon, formulář v tomto průchodu není.
- **Texty klimatizace** jsou návrh. Potvrdit s firmou značky, se kterými pracují, a kdo obor vede
  (zatím Krejčí). U práce s chladivem uvést certifikaci pro F-plyny, pokud ji mají.

## Logo a favicon

**Logo klienta** je v `public/brand` ve všech podobách, které klient dodal:

- `okelectric-logo.pdf` tiskový vektor, zdroj pro SVG
- `okelectric-logo-vodorovne.png` a `okelectric-logo-ctverec.png` rastry ve vysokém rozlišení

Na webu se používá vodorovný lockup jako SVG převedené z PDF (`BrandLogo`). Barvy
v PDF jsou posunuté pro tisk, v SVG jsou proto nahrazené barvami z PNG, které přesně
odpovídají tokenům webu (`#60B23A`, `#005AA5`, `#0073C6`, `#E31E24`).

- `okelectric-logo-bez-sloganu.svg` do hlavičky. Slogan "jsme vaši elektrikáři" by v její
  výšce měl pod 6 px a slil by se.
- `okelectric-logo.svg` celý lockup se sloganem, do patičky.
- `logo.png` (512x512) čtvercový lockup na bílém poli pro JSON-LD. Google chce u loga
  čtvercový nebo blízký formát.

**Favicon a ikony** jsou dům z loga klienta, bez nápisu, listu, zástrčky a uzemnění:

- `public/brand/znak.svg` celý dům se solárními panely, sirénou a klimatizací. Z něj jsou
  `src/app/icon.png` (512 px) a `apple-icon.png` (180 px) a znak v rohu OG obrázků, vždy
  na bílém poli, protože vnitřek domu je průhledný.
- `public/brand/znak-maly.svg` jen obrys domu a panely, se zesíleným tahem. Z něj je 16px
  varianta ve `favicon.ico`, kde by siréna a klimatizace splynuly. 32 a 48 px jsou
  z obrysu a panelů v původní tloušťce.

## Mapa zakázek

Sekce "Odkud k vám jedeme" na homepage je tečková mapa Česka (`CoverageSection`). Tečky
se zelenají podle blízkosti zakázek z `projects.ts`, sídlo je z `NAP.geo` a místa dál než
zhruba 90 km od sídla se pojmenují. Všechno se počítá při buildu, do prohlížeče jde hotové
SVG bez JavaScriptu.

- Obrys je z Natural Earth 1:50m (`src/content/czechOutline.ts`).
- Souřadnice míst jsou v `PLACE_COORDS` v `projects.ts`. U nové reference v novém místě
  je potřeba doplnit souřadnice, jinak se na mapě nevykreslí. Doksy a Kozlov chybí,
  protože z podkladů nejde poznat, o kterou obec toho jména jde.
- Tečky každého odstínu jsou jedna cesta z čar nulové délky se zakulaceným koncem.
  Samostatné circle by homepage zvětšily zhruba o 80 kB.

## Značky partnerů

Loga v `public/partners` jsou stažená z webů výrobců (NIBE, Zehnder, Jablotron, Hotjet,
GoodWe, SolaX, Daikin, SolarEdge, Victron Energy, DEHN) a vedou na jejich weby. Vykreslují se jednobarevně přes
CSS filtr, protože SolaX a Victron mají na webu jen bílou variantu pro tmavou hlavičku.
U Hotjetu (PNG) a Zehnderu (SVG maska) je bílý text převedený na průhlednost, jinak by
z filtru vyšel plný černý obdélník.
Opticky rozdílné proporce vyrovnává `logoHeight` v `PARTNERS`.

## Sloučené a přejmenované obory

Podle revize obsahu (září 2026) se Výkresová dokumentace sloučila s revizemi do oboru
Revize a projektování a na její místo přišla Klimatizace a chlazení. Adresy služeb
zůstaly beze změny kvůli SEO (`/elektrorevize`, `/alarmy-zabezpeceni`,
`/kotelny-tepelna-cerpadla`), mění se jen názvy. Stará `/vykresova-dokumentace`
trvale přesměrovává na `/elektrorevize` (`next.config.mjs`).

## Působnost a místní SEO

Firma nechce působit celostátně, ale ani se uzavřít do jižních Čech. Viditelný text proto
říká, **odkud firma je** ("Sídlo máme u Písku"), ne kde působí, a dosah dokládá konkrétními
zakázkami (Uničov, dálnice D4). Věty jsou na jednom místě v `site.ts` (`BASE_LINE`,
`REACH_LINE`, `coverageLine`, `COVERAGE`). Okruhy na homepage jsou rozdělené podle druhu
práce, ne podle kilometrů.

Pro vyhledávače:

- **Titulky** mají tvar "Služba Písek | upřesnění | OKelectric". Jen Písek, ne výčet
  Protivín, Blatná, Šumava: malé obce mají zanedbatelné hledanosti, výčet ředí titulek
  a v náhledu výsledku působí jako region. Služba je v titulku vždy první.
- **Strukturovaná data** (`lib/seo.ts`) dál nesou adresu v Protivíně, souřadnice a
  `areaServed` s obcemi z `REGIONS_LOCAL`, u plánovaných služeb i celou ČR. Návštěvník
  je nevidí a Google podle nich firmu místně zařadí.
- **Homepage H1** ("Energie. Teplo. Jeden tým.") klíčová slova nenese, proto je nad ním
  viditelný řádek "Elektrikáři a topenáři od Písku".
- Názvy obcí zůstávají v textech tam, kde jsou dokladem, ne hranicí (realizace fotovoltaik,
  reference).
- Největší páka mimo web je **profil firmy na Googlu** (Google Business Profile) s adresou
  shodnou s `NAP`, fotkami realizací a recenzemi. Bez něj se v mapách a v místních
  výsledcích neobjeví žádný web.

## OG obrázky

Všech 12 náhledů v `public/og` je vygenerovaných jednotně z referenčních fotek: tmavý pás,
název, podtitul a řádek "Sídlo u Písku · okelectric.cz". Delší názvy mají menší písmo,
aby nenarážely do značky. Při nové stránce stačí přidat obrázek se shodným názvem jako trasa.

## Fotografie

Fotky v `public/reference/` pocházejí z původního webu, ale ne z těch verzí, které byly vidět na
stránce. WordPress tam servíroval ořezy 1024x800, originály jsou 4080x2296. Uložené jsou proto
znovu, ve 2048 px na šířku v poměru 5:4, což pokryje i náhled na retina displeji.

Dvě výjimky, kde víc neexistuje: rozvodna Billa v Uničově má originál 574x1020 a termokamerový
snímek z Číčenic 320x240, což je nativní rozlišení čipu termokamery, ne chyba stahování.

Popisky (`alt`) v `projects.ts` popisují, co je na snímku skutečně vidět, ne co říká název souboru.
Několik názvů je zavádějících, například `PCO.jpg` je ve skutečnosti výrobní hala v Českých
Budějovicích.

## Animace

Všechny animace jsou v `globals.css`, bez animační knihovny a bez JavaScriptu. Při
`prefers-reduced-motion` se vypnou. Nadpis ani fotka v hero se neanimují, jsou to LCP prvky.

- **Proud v mřížce** (`HeroCurrent`) světelné impulzy po čarách mřížky v pozadí hero.
- **Argumenty v hero** (`HeroProof`) se po načtení postupně vysunou, barevný proužek se nabije
  a projde jím odlesk. Zpoždění řídí proměnná `--proof-delay`.
- **Náběh při scrollu** třídy `.reveal` (jeden blok) a `.reveal-group` (každé dítě mřížky,
  sloupce se lehce zpozdí). Scroll-driven animace (`animation-timeline: view()`), prohlížeč
  bez podpory zobrazí obsah rovnou. Komponenta `Reveal` je jen obal s touto třídou.
- **Kreslení ikony** (`.icon-draw`) při najetí na kartu oboru. Tvary v `ServiceIcon` mají
  `pathLength={1}`, u nové ikony ho nezapomeňte doplnit.
- **Pulz sídla** v tečkové mapě (`.coverage-pulse`).

Tailwind z `@layer components` vyhodí třídy, které v kódu nenajde jako celý řetězec, proto
se názvy animačních tříd nesmí skládat přes šablonu (viz `CLASSES` v `HeroCurrent`).

## Blog

Trasa `/blog` zatím neexistuje, ale informační architektura s ní počítá. Přidáním
`src/app/blog/` se nic nerozbije, navigace i sitemap se doplní na jednom místě.
