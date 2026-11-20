import { TEAM } from "@/content/site";
import { memberVCard } from "@/lib/vcard";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const member = TEAM.find((m) => m.slug === params.slug);
  if (!member) return new Response("Nenalezeno", { status: 404 });

  return new Response(memberVCard(member), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${member.slug}.vcf"`,
    },
  });
}
