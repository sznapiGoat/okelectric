import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getService("elektrorevize");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/elektrorevize",
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
