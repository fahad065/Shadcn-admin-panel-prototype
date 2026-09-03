import { CheckCircle2, PiggyBank, Timer, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { ReportsOverviewChart } from "./components/reports-overview-chart";
import { BudgetVarianceChart } from "./components/budget-variance-chart";
import { ReportHighlightsTable } from "./components/report-highlights-table";

export default function ProjectReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Reports"
        description="Analyze delivery performance, budget health, and team capacity across every project."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Export Report</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Projects Completed"
          value="146"
          icon={CheckCircle2}
          delta={{ value: "+12.5%", positive: true }}
        />
        <StatCard
          label="On-Time Delivery Rate"
          value="88.4%"
          icon={Timer}
          delta={{ value: "+2.1%", positive: true }}
        />
        <StatCard
          label="Avg. Budget Variance"
          value="-3.8%"
          icon={PiggyBank}
          delta={{ value: "-1.6%", positive: true, caption: "under budget vs. last quarter" }}
        />
        <StatCard
          label="Team Utilization"
          value="81%"
          icon={Users}
          delta={{ value: "-1.4%", positive: false }}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ReportsOverviewChart />
        <BudgetVarianceChart />
      </div>

      <ReportHighlightsTable />
    </div>
  );
}
