import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getService("instalaterske-topenarske-prace");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/instalaterske-topenarske-prace",
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
