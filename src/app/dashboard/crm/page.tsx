import { Contact, DollarSign, Handshake } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { TargetWidget } from "./components/target-widget";
import { LeadsBySourceChart } from "./components/leads-by-source-chart";
import { TasksCard } from "./components/tasks-card";
import { SalesPipelineCard } from "./components/sales-pipeline-card";
import { LeadsTable } from "./components/leads-table";

export default function CrmDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="CRM Dashboard"
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <TargetWidget />
        <StatCard
          label="Total Customers"
          value="1,890"
          icon={Contact}
          delta={{ value: "+10.4%", positive: true }}
        />
        <StatCard
          label="Total Deals"
          value="1,300"
          icon={Handshake}
          delta={{ value: "-0.8%", positive: false }}
        />
        <StatCard
          label="Total Revenue"
          value="$435,578"
          icon={DollarSign}
          delta={{ value: "+20.1%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <LeadsBySourceChart />
        <TasksCard />
        <SalesPipelineCard />
      </div>

      <LeadsTable />
    </div>
  );
}
