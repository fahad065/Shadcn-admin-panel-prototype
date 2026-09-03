import { ArrowLeft, ArrowRight, Building2, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import type { OnboardingData } from "./onboarding-wizard";

const useCaseOptions = [
  {
    value: "personal",
    label: "Personal",
    description: "Just for me",
    icon: User,
  },
  {
    value: "team",
    label: "Team",
    description: "A small group",
    icon: Users,
  },
  {
    value: "enterprise",
    label: "Enterprise",
    description: "A whole company",
    icon: Building2,
  },
] as const;

export function StepPreferences({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">Preferences</CardTitle>
        <CardDescription>What will you use this for?</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <RadioGroup
          value={data.useCase}
          onValueChange={(value) =>
            onChange({ useCase: value as OnboardingData["useCase"] })
          }
          className="grid grid-cols-3 gap-3"
        >
          {useCaseOptions.map((option) => {
            const Icon = option.icon;
            const selected = data.useCase === option.value;

            return (
              <Label
                key={option.value}
                htmlFor={`use-case-${option.value}`}
                className={cn(
                  "flex cursor-pointer flex-col items-center gap-2 rounded-xl border p-3 text-center font-normal transition-colors",
                  selected
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted/50"
                )}
              >
                <Icon className="size-5 text-muted-foreground" />
                <span className="text-xs font-medium text-foreground">
                  {option.label}
                </span>
                <RadioGroupItem
                  value={option.value}
                  id={`use-case-${option.value}`}
                  className="sr-only"
                />
              </Label>
            );
          })}
        </RadioGroup>

        <div className="flex flex-col gap-3 rounded-lg border p-3">
          <p className="text-sm font-medium">Notify me about</p>
          <Label htmlFor="pref-product-updates" className="font-normal">
            <Checkbox
              id="pref-product-updates"
              checked={data.notifications.productUpdates}
              onCheckedChange={(checked) =>
                onChange({
                  notifications: {
                    ...data.notifications,
                    productUpdates: checked === true,
                  },
                })
              }
            />
            Product updates
          </Label>
          <Label htmlFor="pref-weekly-digest" className="font-normal">
            <Checkbox
              id="pref-weekly-digest"
              checked={data.notifications.weeklyDigest}
              onCheckedChange={(checked) =>
                onChange({
                  notifications: {
                    ...data.notifications,
                    weeklyDigest: checked === true,
                  },
                })
              }
            />
            Weekly digest
          </Label>
          <Label htmlFor="pref-security-alerts" className="font-normal">
            <Checkbox
              id="pref-security-alerts"
              checked={data.notifications.securityAlerts}
              onCheckedChange={(checked) =>
                onChange({
                  notifications: {
                    ...data.notifications,
                    securityAlerts: checked === true,
                  },
                })
              }
            />
            Security alerts
          </Label>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft />
          Back
        </Button>
        <Button onClick={onNext}>
          Continue
          <ArrowRight />
        </Button>
      </CardFooter>
    </>
  );
}
