import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getService("rekuperace");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/rekuperace",
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
