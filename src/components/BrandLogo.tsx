import { cn } from "@/lib/utils";

/** Poměr stran obou variant loga, z viewBoxu SVG. */
const RATIO = 570.95 / 202.74;

/**
 * Logo klienta, vodorovný lockup. SVG je převedené z tiskového PDF klienta,
 * barvy jsou srovnané s PNG verzí z webu (brand #60B23A, tech #005AA5).
 *
 *  compact - bez sloganu "jsme vaši elektrikáři", do hlavičky. V její výšce by
 *            byl slogan menší než 6 px a slil by se.
 *  full    - celý lockup se sloganem, do patičky a všude, kde je logo velké.
 *
 * Obyčejné img místo next/image: SVG se neoptimalizuje a inline by přidalo
 * desítky kB cest do HTML každé stránky. Rozměry v atributech drží místo,
 * aby se hlavička při načtení nepřeskládala.
 */
export function BrandLogo({
  className,
  variant = "compact",
  priority = false,
}: {
  className?: string;
  variant?: "compact" | "full";
  priority?: boolean;
}) {
  const height = 64;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={variant === "full" ? "/brand/okelectric-logo.svg" : "/brand/okelectric-logo-bez-sloganu.svg"}
      alt="OKelectric"
      width={Math.round(height * RATIO)}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={cn("w-auto", className)}
    />
  );
}
