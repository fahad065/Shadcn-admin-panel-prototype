import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { TasksView } from "./components/tasks-view";

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Tasks"
        description="Track, assign, and prioritize work across your team."
        actions={
          <Button size="sm" className="gap-1.5">
            <Plus className="size-3.5" />
            New Task
          </Button>
        }
      />

      <TasksView />
    </div>
  );
}
