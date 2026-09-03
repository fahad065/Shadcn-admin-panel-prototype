import { Activity, DollarSign, Gauge, Layers } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { DailyTokenConsumptionChart } from "./components/daily-token-consumption-chart";
import { RequestsByGeographyCard } from "./components/requests-by-geography-card";
import { CostBreakdownChart } from "./components/cost-breakdown-chart";
import { MemberUsageTable } from "./components/member-usage-table";

export default function AiAnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="AI Analytics"
        description="Monitor API usage, token consumption, and model costs."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Volume"
          value="48.2M"
          icon={Layers}
          delta={{ value: "+18.6%", positive: true }}
        />
        <StatCard
          label="Activity"
          value="128,942"
          icon={Activity}
          delta={{ value: "+12.4%", positive: true }}
        />
        <StatCard
          label="Cost"
          value="$18,432.50"
          icon={DollarSign}
          delta={{ value: "+9.7%", positive: true }}
        />
        <StatCard
          label="Efficiency"
          value="$0.382 / 1K tokens"
          icon={Gauge}
          delta={{ value: "-5.3%", positive: false }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <DailyTokenConsumptionChart />
        <RequestsByGeographyCard />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <CostBreakdownChart />
        <MemberUsageTable />
      </div>
    </div>
  );
}
