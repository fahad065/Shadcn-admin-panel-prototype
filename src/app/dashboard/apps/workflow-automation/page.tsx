import { PageHeader } from "@/components/page-header";

import { WorkflowCanvas } from "./components/workflow-canvas";

export default function WorkflowAutomationPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Workflow Automation"
        description="Design automations visually by connecting triggers, conditions, and actions on the canvas."
      />

      <WorkflowCanvas />
    </div>
  );
}
