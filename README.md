# OKelectric

Demo web pro OKelectric, elektrikáře a topenáře z Písecka. Next.js 14 (App Router), TypeScript,
Tailwind, framer-motion. Bez CMS, obsah je natvrdo v `src/content/` a je strukturovaný tak, aby se
dal později přenést do Sanity beze změny komponent.

## Spuštění

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # produkční build, všech 20 tras je statických
```

## Struktura obsahu

Veškerý text a data jsou oddělené od komponent:

- `src/content/site.ts` NAP, tým, kvalifikace, obsluhované obce
- `src/content/services.ts` osm služeb včetně vlastního textu, procesu a FAQ
- `src/content/projects.ts` 27 realizací s popisky fotografií

Přidání služby znamená přidat položku do `SERVICES` a založit `src/app/<slug>/page.tsx`, který jen
předá objekt do `ServicePageTemplate`. Sitemap se doplní sama.

## SEO

- `pageMetadata()` v `src/lib/seo.ts` řeší title, description, canonical a Open Graph pro každou trasu
- JSON-LD: `Electrician` / `HVACBusiness` / `LocalBusiness` na layoutu, `Service` a `FAQPage` na
  stránkách služeb, `BreadcrumbList` všude, `WebSite` na layoutu
- `app/sitemap.ts` a `app/robots.ts` generují sitemap i robots ze seznamu služeb

Lighthouse na produkčním buildu: SEO 100, přístupnost 100, best practices 100, výkon 100 (desktop)
a 93 (mobil, simulované 4G).

## Co je potřeba doplnit před ostrým nasazením

- **IČO, DIČ a sídlo firmy.** Současný web je neuvádí, proto nejsou ani tady. Doplňte v
  `src/content/site.ts` (`NAP`) a promítne se do JSON-LD i do patičky.
- **Zeměpisné souřadnice.** V `NAP.geo` je zatím střed Protivína, ne skutečná provozovna.
- **Otevírací doba**, pokud ji firma chce uvádět. Doplnit do `localBusinessSchema()` jako
  `openingHoursSpecification`.
- **Fotografie týmu.** `TeamMemberCard` je zatím bez portrétů.
- **Kontaktní formulář.** Web záměrně tlačí na telefon, formulář v tomto průchodu není.

## Fotografie

Fotky v `public/reference/` pocházejí z původního webu, ale ne z těch verzí, které byly vidět na
stránce. WordPress tam servíroval ořezy 1024x800, originály jsou 4080x2296. Uložené jsou proto
znovu, ve 2048 px na šířku v poměru 5:4, což pokryje i náhled na retina displeji.

Dvě výjimky, kde víc neexistuje: rozvodna Billa v Uničově má originál 574x1020 a termokamerový
snímek z Číčenic 320x240, což je nativní rozlišení čipu termokamery, ne chyba stahování.

Popisky (`alt`) v `projects.ts` popisují, co je na snímku skutečně vidět, ne co říká název souboru.
Několik názvů je zavádějících, například `PCO.jpg` je ve skutečnosti výrobní hala v Českých
Budějovicích.

## Blog

Trasa `/blog` zatím neexistuje, ale informační architektura s ní počítá. Přidáním
`src/app/blog/` se nic nerozbije, navigace i sitemap se doplní na jednom místě.
