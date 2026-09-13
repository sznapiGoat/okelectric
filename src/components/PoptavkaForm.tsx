"use client";

import { useId, useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { SERVICES } from "@/content/services";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "w-full border border-line bg-paper px-3.5 py-3 text-[0.9375rem] text-ink transition-colors placeholder:text-ink-faint focus:border-ink focus:outline-none";

/**
 * Poptávkový formulář. Odesílá na endpoint z NEXT_PUBLIC_FORM_ENDPOINT
 * (počítá se s Formspree, ale postačí cokoliv, co přijme POST s JSON).
 * Bez nastavené proměnné se formulář vůbec nevykreslí, viz stránka Kontakt.
 */
export function PoptavkaForm({ endpoint }: { endpoint: string }) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Past na roboty: skryté pole musí zůstat prázdné.
    if (data.get("web")) return;

    const next: Record<string, string> = {};
    const jmeno = String(data.get("jmeno") ?? "").trim();
    const telefon = String(data.get("telefon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const zprava = String(data.get("zprava") ?? "").trim();

    if (jmeno.length < 2) next.jmeno = "Doplňte prosím jméno.";
    if (!telefon && !email) next.telefon = "Nechte na sebe telefon nebo e-mail.";
    if (telefon && telefon.replace(/\D/g, "").length < 9) next.telefon = "Telefon vypadá neúplně.";
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Zkontrolujte e-mail.";
    if (zprava.length < 10) next.zprava = "Napište prosím pár slov o zakázce.";
    if (!data.get("souhlas")) next.souhlas = "Bez souhlasu vás nemůžeme kontaktovat.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>(`[data-invalid="true"]`);
      first?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-mist p-8" role="status">
        <Check className="h-8 w-8 text-brand" aria-hidden />
        <h3 className="mt-4 font-display text-display-sm">Poptávka odešla.</h3>
        <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
          Ozveme se co nejdřív, obvykle do druhého pracovního dne. Pokud to spěchá, zavolejte rovnou
          na{" "}
          <a href={`tel:${NAP.phone}`} className="font-semibold text-ink hover:text-brand-deep">
            {NAP.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  const field = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-err` : undefined,
    "data-invalid": errors[name] ? "true" : undefined,
    className: cn(FIELD, errors[name] && "border-alert"),
  });

  const errorFor = (name: string) =>
    errors[name] ? (
      <p id={`${id}-${name}-err`} className="mt-1.5 text-[0.8125rem] text-alert">
        {errors[name]}
      </p>
    ) : null;

  // Chyba u pole zmizí, jakmile ho člověk začne opravovat, ne až při dalším odeslání.
  function clearError(e: React.FormEvent<HTMLFormElement>) {
    // FormEvent má target typovaný jako EventTarget, proto je potřeba zúžení.
    const name = (e.target as HTMLInputElement).name;
    if (!name || !errors[name]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  return (
    <form onSubmit={onSubmit} onChange={clearError} noValidate className="grid gap-5 sm:grid-cols-2">
      <p aria-hidden className="hidden">
        <label>
          Nevyplňujte
          <input type="text" name="web" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor={`${id}-jmeno`} className="mb-1.5 block text-[0.875rem] font-medium">
          Jméno <span className="text-alert">*</span>
        </label>
        <input id={`${id}-jmeno`} name="jmeno" autoComplete="name" {...field("jmeno")} />
        {errorFor("jmeno")}
      </div>

      <div>
        <label htmlFor={`${id}-obec`} className="mb-1.5 block text-[0.875rem] font-medium">
          Obec
        </label>
        <input
          id={`${id}-obec`}
          name="obec"
          placeholder="Kde je zakázka"
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor={`${id}-telefon`} className="mb-1.5 block text-[0.875rem] font-medium">
          Telefon
        </label>
        <input
          id={`${id}-telefon`}
          name="telefon"
          type="tel"
          autoComplete="tel"
          {...field("telefon")}
        />
        {errorFor("telefon")}
      </div>

      <div>
        <label htmlFor={`${id}-email`} className="mb-1.5 block text-[0.875rem] font-medium">
          E-mail
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          {...field("email")}
        />
        {errorFor("email")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${id}-sluzba`} className="mb-1.5 block text-[0.875rem] font-medium">
          Čeho se poptávka týká
        </label>
        <select id={`${id}-sluzba`} name="sluzba" className={FIELD} defaultValue="">
          <option value="">Nevím přesně, poradíme se</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.navLabel}>
              {s.navLabel}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${id}-zprava`} className="mb-1.5 block text-[0.875rem] font-medium">
          Co potřebujete <span className="text-alert">*</span>
        </label>
        <textarea
          id={`${id}-zprava`}
          name="zprava"
          rows={5}
          placeholder="Stačí pár vět. Čím konkrétnější popis, tím přesnější nabídku pošleme."
          {...field("zprava")}
        />
        {errorFor("zprava")}
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-[0.875rem] leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            name="souhlas"
            value="ano"
            className="mt-1 h-4 w-4 shrink-0 accent-[#60B23A]"
            {...(errors.souhlas ? { "data-invalid": "true" } : {})}
          />
          <span>
            Souhlasím, aby OKelectric zpracoval uvedené údaje za účelem vyřízení této poptávky.
          </span>
        </label>
        {errorFor("souhlas")}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-14 items-center gap-2 bg-brand px-7 font-semibold text-ink transition-colors hover:bg-brand-deep hover:text-paper disabled:opacity-60"
        >
          {status === "sending" ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          ) : (
            <Send className="h-5 w-5" aria-hidden />
          )}
          {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
        </button>

        {status === "error" && (
          <p role="alert" className="mt-4 text-[0.9375rem] text-alert">
            Odeslání se nepovedlo. Zavolejte prosím na{" "}
            <a href={`tel:${NAP.phone}`} className="font-semibold underline">
              {NAP.phoneDisplay}
            </a>
            , ozveme se hned.
          </p>
        )}
      </div>
    </form>
  );
}
