import { DollarSign, LogIn, LogOut, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { ReservationStatusCard } from "./components/reservation-status-card";
import { CampaignOverviewCard } from "./components/campaign-overview-card";
import { RecentActivitiesCard } from "./components/recent-activities-card";
import { BookingsChart } from "./components/bookings-chart";
import { BookingListTable } from "./components/booking-list-table";

export default function HotelDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Hotel Dashboard"
        description="Track bookings, occupancy, and revenue across your property."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">New Booking</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Check-in"
          value="74"
          icon={LogIn}
          delta={{ value: "+8.2%", positive: true, caption: "from yesterday" }}
        />
        <StatCard
          label="Check-out"
          value="39"
          icon={LogOut}
          delta={{ value: "-3.4%", positive: false, caption: "from yesterday" }}
        />
        <StatCard
          label="Guests"
          value="212"
          icon={Users}
          delta={{ value: "+12.1%", positive: true, caption: "from yesterday" }}
        />
        <StatCard
          label="Amount"
          value="$18,460"
          icon={DollarSign}
          delta={{ value: "+9.6%", positive: true, caption: "from yesterday" }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <ReservationStatusCard />
        <CampaignOverviewCard />
        <RecentActivitiesCard />
      </div>

      <BookingsChart />

      <BookingListTable />
    </div>
  );
}
