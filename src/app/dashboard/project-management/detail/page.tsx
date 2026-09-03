import { CalendarClock, DollarSign, Users, Wallet } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { ProjectHeaderCard } from "./components/project-header-card";
import { MilestonesCard } from "./components/milestones-card";
import { TeamMembersCard } from "./components/team-members-card";

export default function ProjectDetailPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Project Detail"
        description="A closer look at a single project — budget, milestones, and team."
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              render={<Link href="/dashboard/project-management/list" />}
              nativeButton={false}
            >
              Back to List
            </Button>
            <Button size="sm">Edit Project</Button>
          </>
        }
      />

      <ProjectHeaderCard />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Budget" value="$186,000" icon={Wallet} />
        <StatCard
          label="Spent"
          value="$121,400"
          icon={DollarSign}
          delta={{ value: "65%", positive: true, caption: "of budget used" }}
        />
        <StatCard label="Team Size" value="8" icon={Users} />
        <StatCard label="Days Remaining" value="23" icon={CalendarClock} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <MilestonesCard />
        <TeamMembersCard />
      </div>
    </div>
  );
}
