import { SITE_URL, type TeamMember } from "@/content/site";

/** Akademické tituly před jménem, které do vCard patří do prefixu, ne do křestního jména. */
const PREFIX_TITLES = /^((?:Ing|Bc|Mgr|Ph\.D|Dr)\.\s+)+/;

function escape(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

/** Rozloží adresu ve tvaru „ulice, PSČ obec“ na části pro pole ADR. */
function splitAddress(address: string) {
  const [street = "", rest = ""] = address.split(/,\s*/);
  const match = rest.match(/^(\d{3}\s?\d{2})\s+(.+)$/);
  return { street, postal: match?.[1] ?? "", city: match?.[2] ?? rest };
}

/** Kontakt člena týmu jako vCard 3.0, kterou si telefon uloží do adresáře. */
export function memberVCard(member: TeamMember) {
  const prefix = member.name.match(PREFIX_TITLES)?.[0].trim() ?? "";
  const plain = member.name.replace(PREFIX_TITLES, "");
  const parts = plain.split(" ");
  const last = parts.pop() ?? "";
  const first = parts.join(" ");
  const adr = splitAddress(member.address);

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escape(last)};${escape(first)};;${escape(prefix)};`,
    `FN:${escape(member.name)}`,
    "ORG:OKelectric",
    `TITLE:${escape(member.role)}`,
    `TEL;TYPE=CELL,VOICE:${member.phone}`,
    `EMAIL;TYPE=INTERNET:${member.email}`,
    `URL:${SITE_URL}/vizitka/${member.slug}`,
    `ADR;TYPE=WORK:;;${escape(adr.street)};${escape(adr.city)};;${escape(adr.postal)};Česko`,
    "END:VCARD",
    "",
  ].join("\r\n");
}
