import { Check } from "lucide-react";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

export function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full items-center">
        {steps.map((step, index) => {
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <Fragment key={step}>
              <div
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-colors",
                  isCompleted && "border-primary bg-primary text-primary-foreground",
                  isCurrent && "border-primary text-primary",
                  !isCompleted && !isCurrent && "border-border text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="size-4" /> : step}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-px flex-1",
                    step < currentStep ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </Fragment>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
