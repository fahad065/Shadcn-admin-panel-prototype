import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Plan } from "./plans-data";

export function PlanCard({
  plan,
  isYearly,
}: {
  plan: Plan;
  isYearly: boolean;
}) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const isCustomPricing = price === null;

  return (
    <Card
      className={cn(
        "flex flex-col",
        plan.featured &&
          "border-primary shadow-lg shadow-primary/10 md:-translate-y-2 md:scale-105"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{plan.name}</CardTitle>
          {plan.featured ? <Badge>Most Popular</Badge> : null}
        </div>
        <CardDescription>{plan.tagline}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-6">
        <div className="flex items-baseline gap-1">
          {isCustomPricing ? (
            <span className="text-4xl font-semibold text-foreground">
              Contact Us
            </span>
          ) : (
            <>
              <span className="text-4xl font-semibold text-foreground">
                ${price}
              </span>
              {plan.priceSuffix ? (
                <span className="text-sm text-muted-foreground">
                  {plan.priceSuffix}
                </span>
              ) : null}
            </>
          )}
        </div>

        <Button
          variant={plan.featured ? "default" : "outline"}
          className="w-full"
        >
          {plan.cta}
        </Button>

        <Separator />

        <ul className="flex flex-1 flex-col gap-3 text-sm">
          {plan.featuresLeadIn ? (
            <li className="font-medium text-foreground">
              {plan.featuresLeadIn}
            </li>
          ) : null}
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
