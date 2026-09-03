import { PageHeader } from "@/components/page-header";

import { GenerateCard } from "./components/generate-card";
import { RecentGenerations } from "./components/recent-generations";

export default function AiImageGeneratorPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="AI Image Generator"
        description="Turn a text prompt into original artwork in seconds."
      />

      <GenerateCard />

      <RecentGenerations />
    </div>
  );
}
