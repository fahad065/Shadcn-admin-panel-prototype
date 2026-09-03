import { Plus } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ProjectListTable } from "./components/project-list-table";

export default function ProjectListPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Project List"
        description="Browse, filter, and manage every project across your workspace."
        actions={
          <Button size="sm" className="gap-1.5">
            <Plus className="size-3.5" />
            New Project
          </Button>
        }
      />

      <ProjectListTable />
    </div>
  );
}
