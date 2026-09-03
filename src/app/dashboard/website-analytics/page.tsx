import { Percent, Repeat, Timer, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { EarningReportsCard } from "./components/earning-reports-card";
import { TicketsCard } from "./components/tickets-card";
import { TrafficBySourceChart } from "./components/traffic-by-source-chart";
import { SalesOverviewCard } from "./components/sales-overview-card";
import { SalesByCountriesTable } from "./components/sales-by-countries-table";
import { CampaignMetricsTable } from "./components/campaign-metrics-table";

export default function WebsiteAnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Website Analytics"
        description="Track how visitors find and use your site."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Daily Active Users"
          value="8,420"
          icon={Users}
          delta={{ value: "+5.4%", positive: true }}
        />
        <StatCard
          label="Weekly Sessions"
          value="54,180"
          icon={Repeat}
          delta={{ value: "+8.1%", positive: true }}
        />
        <StatCard
          label="Duration"
          value="4m 12s"
          icon={Timer}
          delta={{ value: "+3.2%", positive: true }}
        />
        <StatCard
          label="Conversion Rate"
          value="3.8%"
          icon={Percent}
          delta={{ value: "+0.6%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <EarningReportsCard />
        <TicketsCard />
        <TrafficBySourceChart />
      </div>

      <SalesOverviewCard />

      <div className="grid gap-4 xl:grid-cols-2">
        <SalesByCountriesTable />
        <CampaignMetricsTable />
      </div>
    </div>
  );
}
