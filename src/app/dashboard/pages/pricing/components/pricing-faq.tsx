import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time from your billing settings. Changes take effect immediately, and we prorate any difference in cost.",
  },
  {
    question: "What happens if I go over my plan's limits?",
    answer:
      "We'll notify you as you approach your plan's limits. You can upgrade at any time to increase your limits, and existing data or projects are never deleted for going over.",
  },
  {
    question: "Do you offer a free trial for the Pro plan?",
    answer:
      "Every new workspace gets a 14-day free trial of the Pro plan, no credit card required. You can downgrade to Starter at any time before the trial ends.",
  },
  {
    question: "How does billing work for Enterprise?",
    answer:
      "Enterprise plans are custom-priced based on your team size and requirements. Reach out to our sales team and we'll put together a quote and a tailored onboarding plan.",
  },
];

export function PricingFaq() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-foreground">
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <Card key={faq.question}>
            <CardHeader>
              <CardTitle className="text-sm">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
