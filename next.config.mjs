/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next ve výchozím stavu servíruje jen WebP. AVIF je u fotografií
    // podstatně menší, prohlížeč si vybere podle Accept hlavičky a starším
    // zůstane WebP.
    formats: ["image/avif", "image/webp"],
  },
  // Adresy ze starého WordPressu (seznam z Wayback Machine, 15. 10. 2026), aby
  // odkazy z Googlu a odjinud nekončily na 404. Lomítko na konci řeší Next sám.
  async redirects() {
    const moved = [
      // Výkresová dokumentace se sloučila s revizemi do jednoho oboru.
      ["/vykresova-dokumentace", "/elektrorevize"],
      ["/revize", "/elektrorevize"],
      ["/kotelny-a-tepelna-cerpadla", "/kotelny-tepelna-cerpadla"],
      ["/instalaterske-a-topenarske-prace", "/instalaterske-topenarske-prace"],
      ["/kontakt-elektroinstalace-protivin-pisek-blatna", "/kontakt"],
      ["/alarmy-2", "/alarmy-zabezpeceni"],
      ["/elektroinstalace/nabijeci-stanice-pro-elektromobily", "/elektroinstalace"],
      ["/nova-elektricka-pripojka", "/elektroinstalace"],
      ["/fotovoltaicke-elektrarny-dotace-ohrev-vody-analyza-termokamerou/:path*", "/fotovoltaika"],
      ["/fotovoltaicke-elektrarny/:path*", "/fotovoltaika"],
      ["/fotovoltaicke-systemy", "/fotovoltaika"],
      ["/fotovoltaicky-ohrev-vody", "/fotovoltaika"],
      ["/zasady-cookies-eu", "/ochrana-osobnich-udaju"],
      // Štítky a stránkování galerie NextGEN.
      ["/ngg_tag/:path*", "/reference"],
      ["/elektroinstalace/nggallery/:path*", "/elektroinstalace"],
      // Sitemapy Yoastu, které mohou být uložené v Search Console.
      ["/sitemap.html", "/sitemap.xml"],
      ["/sitemap_index.xml", "/sitemap.xml"],
      ["/page-sitemap.xml", "/sitemap.xml"],
      ["/wp-sitemap.xml", "/sitemap.xml"],
    ];
    return moved.map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
};

export default nextConfig;
