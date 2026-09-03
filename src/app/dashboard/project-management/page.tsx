import { Award, Briefcase, Clock, DollarSign } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { ProjectsOverviewChart } from "./components/projects-overview-chart";
import { HighlightsCard } from "./components/highlights-card";
import { RemindersCard } from "./components/reminders-card";
import { AchievementByYearChart } from "./components/achievement-by-year-chart";
import { RecentProjectsTable } from "./components/recent-projects-table";

export default function ProjectManagementPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Project Dashboard"
        description="Track projects, team workload, and delivery performance across your workspace."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">New Project</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Revenue"
          value="$58,420.00"
          icon={DollarSign}
          delta={{ value: "+18.4%", positive: true }}
        />
        <StatCard
          label="Active Projects"
          value="1,286"
          icon={Briefcase}
          delta={{ value: "+6.4%", positive: true }}
        />
        <StatCard
          label="New Leads"
          value="3,842"
          icon={Award}
          delta={{ value: "-4.1%", positive: false }}
        />
        <StatCard
          label="Time Spent"
          value="182h 20m"
          icon={Clock}
          delta={{ value: "-2.6%", positive: false }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        <ProjectsOverviewChart />
        <HighlightsCard />
        <RemindersCard />
      </div>

      <AchievementByYearChart />

      <RecentProjectsTable />
    </div>
  );
}
