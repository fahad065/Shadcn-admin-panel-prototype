import { PageHeader } from "@/components/page-header";

import { PricingFaq } from "./components/pricing-faq";
import { PricingPlans } from "./components/pricing-plans";

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Pricing"
        description="Choose the plan that's right for your team."
      />

      <PricingPlans />

      <PricingFaq />
    </div>
  );
}
