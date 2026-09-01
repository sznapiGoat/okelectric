import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Drobečková navigace" className="text-[0.8125rem]">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-faint">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />}
              {last ? (
                <span aria-current="page" className="text-ink-soft">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-ink">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
