"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-P3VJ2GXD5V";
const STORAGE_KEY = "ok-cookies";
/** Událost, kterou odkaz „Nastavení cookies“ v patičce znovu otevře lištu. */
export const OPEN_CONSENT_EVENT = "ok:open-cookies";

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Bez úložiště se lišta ukáže při další návštěvě znovu, nic horšího se nestane.
  }
}

/** Smaže cookies Google Analytics (_ga, _ga_XXXX) po odvolání souhlasu. */
function clearGaCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

/*
 * Google Analytics se načte až po souhlasu (§ 89 zákona o elektronických komunikacích).
 * Bez souhlasu se od Googlu nestahuje nic, takže nejde ani IP adresa.
 */
export function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setOpen(saved === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  function decide(next: Choice) {
    saveChoice(next);
    setOpen(false);
    if (next === choice) return;
    if (next === "denied" && choice === "granted") {
      clearGaCookies();
      // Už načtený gtag se zastaví až obnovením stránky.
      location.reload();
      return;
    }
    setChoice(next);
  }

  return (
    <>
      {choice === "granted" && (
        <>
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'granted',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Souhlas s cookies"
          className="fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-paper shadow-[0_-8px_24px_rgba(15,21,18,0.08)]"
        >
          <div className="shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-ink-soft">
              Rádi bychom měřili návštěvnost přes Google Analytics, abychom věděli, co na webu lidé
              hledají. Ukládá to do prohlížeče cookies. Reklamu podle toho necílíme.{" "}
              <Link
                href="/ochrana-osobnich-udaju#cookies"
                className="text-brand-deep underline underline-offset-4 hover:text-ink"
              >
                Více
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="inline-flex h-12 items-center border border-line-strong px-5 font-semibold text-ink transition-colors hover:border-ink"
              >
                Odmítnout
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="inline-flex h-12 items-center bg-brand px-5 font-semibold text-ink transition-colors hover:bg-brand-deep hover:text-paper"
              >
                Přijmout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Odkaz, který znovu otevře lištu, aby šel souhlas kdykoli změnit. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      Nastavení cookies
    </button>
  );
}
