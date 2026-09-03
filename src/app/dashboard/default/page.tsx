import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { TeamMembersCard } from "./components/team-members-card";
import { ChatWidgetCard } from "./components/chat-widget-card";
import { ExerciseMinutesCard } from "./components/exercise-minutes-card";
import { PaymentMethodCard } from "./components/payment-method-card";
import { LatestPaymentsTable } from "./components/latest-payments-table";

export default function ClassicDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Classic Dashboard"
        description="Overview of your business performance and recent activity."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          delta={{ value: "+20.1%", positive: true }}
        />
        <StatCard
          label="Subscriptions"
          value="+2,350"
          icon={Users}
          delta={{ value: "+18.0%", positive: true }}
        />
        <StatCard
          label="Sales"
          value="+12,234"
          icon={CreditCard}
          delta={{ value: "+19.5%", positive: true }}
        />
        <StatCard
          label="Active Now"
          value="+573"
          icon={Activity}
          delta={{ value: "+2.1%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <TeamMembersCard />
        <ChatWidgetCard />
        <ExerciseMinutesCard />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <PaymentMethodCard />
        <div className="xl:col-span-2">
          <LatestPaymentsTable />
        </div>
      </div>
    </div>
  );
}
