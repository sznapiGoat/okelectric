import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Původní logo klienta. Je to hotový lockup - značka i název v jednom obrázku,
 * takže se vedle něj už nesází psaný název, jinak by tam byl dvakrát.
 *
 * Zdroj je rastr 170x152, což na výšku 48 px stačí i na retinu. Až klient dodá
 * vektor, stačí vyměnit soubor a nechat stejné rozměry.
 */
export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/logo-original.png"
      alt="OKelectric"
      width={170}
      height={152}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  );
}
