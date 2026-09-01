"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { SERVICES } from "@/content/services";
import { NAP, REGION_LINE } from "@/content/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { cn } from "@/lib/utils";

const SECONDARY = [
  { href: "/reference", label: "Reference" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="shell flex h-16 items-center gap-4 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/brand/mark.png"
            alt=""
            width={340}
            height={234}
            priority
            className="h-9 w-auto lg:h-10"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] font-bold tracking-tight text-tech">
              OK<span className="text-brand-deep">electric</span>
            </span>
            <span className="mt-0.5 hidden text-[0.66rem] font-medium uppercase tracking-[0.13em] text-ink-faint sm:block">
              Elektrikáři a topenáři
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Hlavní navigace">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex h-10 items-center gap-1.5 px-3 text-[0.9375rem] font-medium transition-colors",
                servicesOpen ? "text-brand-deep" : "text-ink-soft hover:text-ink"
              )}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Služby
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")}
                aria-hidden
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[42rem] -translate-x-1/2 pt-2">
                <div className="grid grid-cols-2 border border-line bg-paper">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="group flex items-start gap-3 border-b border-r border-line p-4 transition-colors last:border-b-0 hover:bg-mist [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
                    >
                      <ServiceIcon
                        slug={s.slug}
                        className={cn(
                          "mt-0.5 h-6 w-6 shrink-0",
                          s.accent === "green" ? "text-brand" : "text-tech"
                        )}
                      />
                      <span>
                        <span className="block text-[0.9375rem] font-semibold text-ink">{s.navLabel}</span>
                        <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-faint">
                          {s.lead.split(".")[0]}.
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {SECONDARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-10 items-center px-3 text-[0.9375rem] font-medium transition-colors",
                pathname === item.href ? "text-brand-deep" : "text-ink-soft hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <a
            href={`tel:${NAP.phone}`}
            className="inline-flex h-11 items-center gap-2 bg-brand px-4 font-semibold text-ink transition-colors hover:bg-brand-deep hover:text-paper"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden text-[0.9375rem] sm:inline">{NAP.phoneDisplay}</span>
            <span className="sr-only sm:hidden">Zavolat {NAP.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-line lg:hidden"
            aria-label="Otevřít menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
            <span className="font-display text-lg font-bold text-tech">
              OK<span className="text-brand-deep">electric</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center border border-line"
              aria-label="Zavřít menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto" aria-label="Mobilní navigace">
            <p className="eyebrow px-5 pb-2 pt-6">Služby</p>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="flex items-center gap-3 border-t border-line px-5 py-4 text-[1.0625rem] font-medium"
              >
                <ServiceIcon
                  slug={s.slug}
                  className={cn("h-6 w-6 shrink-0", s.accent === "green" ? "text-brand" : "text-tech")}
                />
                {s.navLabel}
              </Link>
            ))}
            <p className="eyebrow px-5 pb-2 pt-8">Firma</p>
            {SECONDARY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-t border-line px-5 py-4 text-[1.0625rem] font-medium"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-5 py-8 text-sm text-ink-faint">{REGION_LINE}</p>
          </nav>
        </div>
      )}
    </>
  );
}
