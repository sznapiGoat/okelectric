import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getService("alarmy-zabezpeceni");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/alarmy-zabezpeceni",
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
