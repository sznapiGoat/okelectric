# Rozpracováno: hero s fotkami přes celou plochu

Stav k 1. 10. 2026. Nic z toho zatím není commitnuté.

## Zadání

Klient chtěl v hero „více interaktivní animaci“. Nejdřív vznikla interaktivní
mozaika (viz níže), pak jsme se dohodli na jiném směru: **fotka přes celé
hero, která se pomalu hýbe a po chvíli se prolne do další.**

## Co je hotové

- **`src/components/HeroSlideshow.tsx`**: fotky přes celou plochu hero.
  - Každá se 7 s zobrazuje a pomalu přibližuje a posouvá (Ken Burns). Sudé
    a liché fotky jedou opačně: jedna zoom in, druhá zoom out.
  - Prolnutí do další trvá 1,5 s.
  - Dole je přepínač: proužek u každé fotky se plní a ukazuje, kdy přijde
    další. Je u něj obor a popis. Kliknutím se skočí na vybranou fotku.
  - Tlačítko Pozastavit (WCAG 2.2.2). Na skryté záložce se fotky nepřepínají.
    Při reduced-motion se nehýbou ani nestřídají samy.
  - Ztmavení pod textem jde zleva na desktopu a zespodu na mobilu.
- **`src/content/hero.ts`**: `HERO_SLIDES`, tedy šest fotek se zdrojem, alt
  textem, oborem, popisem a `focus` (kam míří výřez při oříznutí).
- **`public/hero/full/s1–s6.jpg`**: fotky vybrané z `public/images`, zmenšené
  na 2400 px a **bez metadat** (originály mají GPS).
- **`src/app/page.tsx`**: hero má bílý text na fotce a tlačítko varianty
  `outlineLight` (nová v `Button.tsx`). Tři argumenty (`HeroProof`) jsou
  v bílém pruhu hned pod fotkou, v hero by ho natáhly pod okraj obrazovky.
- **`src/app/globals.css`**: `.hero-slide--a/--b`, `.hero-progress`.
- **Opravená chyba na mobilu:** pás fotek staré mozaiky roztahoval grid hero
  na 9696 px. S novým hero ta konstrukce zmizela úplně.

- **Načítání fotek:** v DOM je jen aktuální a následující fotka, ostatní
  přibývají s přepínáním. Při načtení stránky se stahují jen s1 a s2.

## Ověřeno (Playwright, Chrome)

- Fotky se po 7 s samy přepnou, klik na přepínač skočí na vybranou fotku.
- Žádné chyby v konzoli, `tsc` prochází.
- Na 390 px (iPhone 13) nic nepřetéká.

## Zbývá

- [ ] Projet naživo a posoudit tempo: `SLIDE_MS` (7 s), síla zoomu
      v `@keyframes hero-kenburns-*`, rychlost prolnutí.
- [ ] Výběr a pořadí fotek s klientem. Na první místo patří nejsilnější
      fotka, ta se ukáže všem.
- [ ] Mobil: hero je na výšku, fotky jsou na šířku, takže z nich je vidět
      jen střed. Doladit `focus` u jednotlivých fotek, případně pro mobil
      použít jiné (výškové) fotky.
- [ ] **Smazat starou mozaiku, až klient nový směr potvrdí.** Nic ji nepoužívá:
      `HeroMosaic.tsx`, `HeroSpotlight.tsx`, `HERO_COLUMNS` v `hero.ts`,
      `public/hero/h01–h24.jpg` a CSS `.mosaic-*` a `.schematic-live`
      v `globals.css`.
- [ ] Commit všech změn (včetně dřívějších, rozepsaných v `git status`).

# Revize zbytku webu (1. 10. 2026)

Screenshoty všech stránek (desktop i mobil) jsou v
`C:\Users\sznap\okelectric-screenshoty\`. Mobilní celostránkové
screenshoty mají chybu ve skládání: hero se v nich opakuje.

## Hotovo

- **Podstránky služeb mají fotku oboru přes celou šířku** (`ServicePageTemplate`).
  Fotka se jednou pomalu přiblíží (`.photo-drift`, při reduced-motion stojí).
  „Co dodáváme“ je v šedém pruhu hned pod fotkou. Fotky jsou vybrané ručně
  v `SERVICE_HEROES` (`src/content/hero.ts`), soubory v `public/hero/sluzby/`
  jsou bez metadat.
- **Barvy:** zelená je barva všeho klikacího. Odkazy a proužky u karet služeb,
  CTA na stránkách služeb (dřív u „modrých“ služeb modré), štítky oborů u týmu
  (místo plných modrých bloků světle zelené), odkazy na Kontaktu, proužek
  v HeroProof. Ikony mají vždy zelený tah a modrý detail, maják alarmů zůstal
  červený. Pole `accent` u služeb zrušeno.
- **Texty:** „Vaše spokojenost je naším cílem a závazkem“ nahrazeno.
  CTA na úvodu: „Začneme prohlídkou, ne ceníkem.“ Na O nás odstavec
  o prohlídce před nabídkou.
- **Mobil:** karty služeb na úvodu jsou pod šířkou sm jen řádek (ikona,
  název, šipka).
- **Zehnder:** místo čtverce jen nápis z loga (`public/partners/zehnder-napis.svg`).
- **O nás:** „Doložených realizací 100+“ změněno na `REALIZATIONS_COUNT` (350+,
  potvrzeno klientem 14. 9.).
- `tsc` a `next lint` procházejí. Vizuálně zkontrolováno 1. 10. na desktopu
  i mobilu (úvod, O nás, Kontakt, Reference, služby FVE, elektro, alarmy,
  rekuperace, revize).

## Na klienta

- „Obcí a měst 100+“ na O nás: sedí to? Mapa ukazuje 22 míst s fotkou.
- Slogan „Vaše spokojenost je naším cílem a závazkem“ jsme nahradili.
  Pokud ho má klient z původního webu a lpí na něm, vrátíme ho.
- Fotky týmu (portréty nebo aspoň fotky z práce, na kterých je poznat, kdo je kdo).
- Průhledný header přes fotku: potřebuje světlou verzi loga. Buď ji dodá
  grafik, nebo souhlas, že ji připravíme (bílý nápis, zbytek beze změny).
- Výběr a pořadí fotek v hero na úvodu a u služeb, hlavně první fotka.
- Fotky pro rekuperaci a revize: na šířku a ve vyšší kvalitě máme málo.
  U revizí je teď v hlavičce starý neuklizený rozvaděč (to, co se reviduje).
  Může působit, jako by to byla jejich práce, lepší by byla fotka z měření.
- Fotky z alarmů a kamer: žádnou realizaci z tohoto oboru nemáme, takže
  na stránce alarmů jsou v „Takhle to u nás vypadá hotové“ rozvaděče.

# Audit skillem redesign-existing-projects (1. 10. 2026)

Hotovo, vizuálně zkontrolováno:

- **Perexy služeb** bez frází (FVE, alarmy, elektro, rekuperace, revize,
  instalatérské práce). Fakta převzatá z textů na stránkách služeb.
- **Fotka v textu služby** pod prvním blokem: z hlavního oboru služby a jiná
  než tři v mřížce níž. Obory s málo fotkami (TČ, rekuperace, klimatizace,
  instalatérské, revize) zatím žádnou nemají.
- **Alarmy** mají `projectCategories: []`: sekce s rozvaděči z elektra zmizela.
  Vrátit, až budou fotky alarmů a kamer.
- **Reference:** každá 7. dlaždice je velká (2×2 na desktopu, přes 2 sloupce
  na tabletu), mřížka `grid-flow-row-dense`. Jen na stránce Reference.
- **Tlačítka** se při stisku posunou o 1 px (`active:translate-y-px`).
- **Tmavý blok s výzvou** má v pozadí ztmavenou fotku (dům s dodávkou, s4).
- Poznámka: když se CSS v dev serveru nenačte (404 na layout.css), je
  poškozená cache. Pomůže smazat `.next` a server pustit znovu.

Čeká na klienta: **IČO** do patičky (§ 435 OZ), před spuštěním formuláře
stránka o zpracování osobních údajů.
