import { Building2, DollarSign, KeyRound, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { PerformanceChart } from "./components/performance-chart";
import { FeaturedPropertyCard } from "./components/featured-property-card";
import { DealsSummaryCard } from "./components/deals-summary-card";
import { RemindersCard } from "./components/reminders-card";
import { LeadsContactCard } from "./components/leads-contact-card";
import { SalesAnalyticsChart } from "./components/sales-analytics-chart";
import { PropertyOverviewCard } from "./components/property-overview-card";
import { ScheduleCalendarCard } from "./components/schedule-calendar-card";
import { ActiveListingsTable } from "./components/active-listings-table";

export default function RealEstateDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Real Estate"
        description="Track listings, sales performance, and agent activity across your portfolio."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Add Listing</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Active Leads"
          value="120"
          icon={Users}
          delta={{ value: "+12%", positive: true }}
        />
        <StatCard
          label="Total Revenue"
          value="$96.7M"
          icon={DollarSign}
          delta={{ value: "+12%", positive: true }}
        />
        <StatCard
          label="Active Listing"
          value="23"
          icon={Building2}
          delta={{ value: "-12%", positive: false }}
        />
        <StatCard
          label="Total Closed"
          value="42"
          icon={KeyRound}
          delta={{ value: "+12%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <PerformanceChart />
        <FeaturedPropertyCard />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <DealsSummaryCard />
        <RemindersCard />
        <LeadsContactCard />
      </div>

      <SalesAnalyticsChart />

      <div className="grid gap-4 xl:grid-cols-2">
        <PropertyOverviewCard />
        <ScheduleCalendarCard />
      </div>

      <ActiveListingsTable />
    </div>
  );
}
