import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { OnboardingData } from "./onboarding-wizard";

const roleOptions = [
  "Founder / Executive",
  "Product Manager",
  "Engineer",
  "Designer",
  "Marketing",
  "Other",
];

export function StepProfile({
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
  const canContinue = data.name.trim().length > 0;

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">Tell us about yourself</CardTitle>
        <CardDescription>
          This helps us tailor your dashboard to how you work.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="onboarding-name">Full name</Label>
          <Input
            id="onboarding-name"
            placeholder="Jane Cooper"
            value={data.name}
            onChange={(event) => onChange({ name: event.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="onboarding-role">Role</Label>
          <Select
            value={data.role}
            onValueChange={(value) => onChange({ role: value ?? "" })}
          >
            <SelectTrigger id="onboarding-role" className="w-full">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {roleOptions.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft />
          Back
        </Button>
        <Button onClick={onNext} disabled={!canContinue}>
          Continue
          <ArrowRight />
        </Button>
      </CardFooter>
    </>
  );
}
