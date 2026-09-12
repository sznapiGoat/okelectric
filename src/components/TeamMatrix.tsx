import Link from "next/link";
import { Check } from "lucide-react";
import { SERVICES } from "@/content/services";
import { TEAM } from "@/content/site";

/**
 * Matice lidí a oborů. Řádek je obor, sloupec člověk, zatržítko znamená
 * "tohle dělá". U čtyřčlenné party je to čitelnější než štítky pod každým
 * jménem - na jeden pohled je vidět, kdo se překrývá a kdo je na obor sám.
 *
 * Příjmení místo celých jmen, jinak se hlavička na mobilu neuživí.
 */
function surname(name: string) {
  return name.replace(/^(Ing\.|Bc\.|Mgr\.)\s+/, "").split(" ").slice(-1)[0];
}

export function TeamMatrix() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <caption className="sr-only">
          Přehled toho, který člen týmu se věnuje kterému oboru
        </caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="py-3 pr-4 text-[0.8125rem] font-semibold text-ink-faint">
              Obor
            </th>
            {TEAM.map((m) => (
              <th
                key={m.slug}
                scope="col"
                className="px-2 py-3 text-center text-[0.8125rem] font-semibold text-ink"
              >
                {surname(m.name)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SERVICES.map((s) => (
            <tr key={s.slug} className="border-b border-line transition-colors hover:bg-mist">
              <th scope="row" className="py-3 pr-4 text-[0.9375rem] font-medium">
                <Link href={`/${s.slug}`} className="text-ink hover:text-brand-deep">
                  {s.navLabel}
                </Link>
              </th>
              {TEAM.map((m) => {
                const does = m.handles.includes(s.slug);
                return (
                  <td key={m.slug} className="px-2 py-3 text-center">
                    {does ? (
                      <>
                        <Check className="mx-auto h-[1.125rem] w-[1.125rem] text-brand" aria-hidden />
                        <span className="sr-only">
                          {surname(m.name)} dělá {s.navLabel}
                        </span>
                      </>
                    ) : (
                      <span className="text-line" aria-hidden>
                        &middot;
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
