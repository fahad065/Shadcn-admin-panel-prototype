"use client";

import * as React from "react";

import { Card } from "@/components/ui/card";
import { StepComplete } from "./step-complete";
import { StepIndicator } from "./step-indicator";
import { StepInterests } from "./step-interests";
import { StepPreferences } from "./step-preferences";
import { StepProfile } from "./step-profile";

export type OnboardingData = {
  interests: string[];
  name: string;
  role: string;
  useCase: "personal" | "team" | "enterprise" | "";
  notifications: {
    productUpdates: boolean;
    weeklyDigest: boolean;
    securityAlerts: boolean;
  };
};

const TOTAL_STEPS = 4;

const INITIAL_DATA: OnboardingData = {
  interests: [],
  name: "",
  role: "",
  useCase: "",
  notifications: {
    productUpdates: true,
    weeklyDigest: false,
    securityAlerts: true,
  },
};

export function OnboardingWizard() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState<OnboardingData>(INITIAL_DATA);

  const updateData = React.useCallback((patch: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  }, []);

  const goNext = React.useCallback(
    () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS)),
    []
  );
  const goBack = React.useCallback(
    () => setStep((prev) => Math.max(prev - 1, 1)),
    []
  );

  return (
    <div className="flex flex-col gap-6">
      <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

      <Card>
        {step === 1 && (
          <StepInterests data={data} onChange={updateData} onNext={goNext} />
        )}
        {step === 2 && (
          <StepProfile
            data={data}
            onChange={updateData}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 3 && (
          <StepPreferences
            data={data}
            onChange={updateData}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 4 && <StepComplete name={data.name} />}
      </Card>
    </div>
  );
}
