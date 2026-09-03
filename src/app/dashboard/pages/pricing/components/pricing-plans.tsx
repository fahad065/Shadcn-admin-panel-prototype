"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import { PlanCard } from "./plan-card";
import { plans } from "./plans-data";

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center gap-3">
        <Label
          htmlFor="billing-cycle"
          className={cn(!isYearly && "text-foreground")}
        >
          Monthly
        </Label>
        <Switch
          id="billing-cycle"
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <Label
          htmlFor="billing-cycle"
          className={cn(isYearly && "text-foreground")}
        >
          Yearly
        </Label>
        <Badge variant="secondary">Save 20%</Badge>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} isYearly={isYearly} />
        ))}
      </div>
    </div>
  );
}
