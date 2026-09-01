import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getService("kotelny-tepelna-cerpadla");

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/kotelny-tepelna-cerpadla",
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
