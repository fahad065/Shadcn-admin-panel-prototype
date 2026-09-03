import { Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { EmptyState } from "../components/empty-state";

export default function EmptyStateNoTeamMembersPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Empty State 03"
        description="No one has been added to this workspace yet"
      />

      <EmptyState
        icon={Users}
        title="No team members yet"
        description="This workspace is still just you. Invite a few teammates to start assigning work and collaborating together."
        action={<Button>Invite Member</Button>}
      />
    </div>
  );
}
