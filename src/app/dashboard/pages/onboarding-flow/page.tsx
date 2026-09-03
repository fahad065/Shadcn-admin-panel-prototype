import { OnboardingWizard } from "./components/onboarding-wizard";

export default function OnboardingFlowPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-lg">
        <OnboardingWizard />
      </div>
    </div>
  );
}
