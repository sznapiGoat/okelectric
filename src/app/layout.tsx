import type { Metadata, Viewport } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";
import { SITE_URL } from "@/content/site";

const display = Wix_Madefor_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const text = Wix_Madefor_Text({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OKelectric | Elektrikáři a topenáři od Písku",
    template: "%s | OKelectric",
  },
  description:
    "Elektroinstalace a hromosvody, tepelná čerpadla, fotovoltaika, rekuperace, klimatizace, kamery a revize pod jednou firmou. Sídlo u Písku, za prací jezdíme i daleko.",
  applicationName: "OKelectric",
  authors: [{ name: "OKelectric" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#60B23A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${display.variable} ${text.variable}`}>
      <body>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Přeskočit na obsah
        </a>
        <Header />
        <main id="obsah">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
