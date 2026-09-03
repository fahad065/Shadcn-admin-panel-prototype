import { Ban, CalendarClock, CalendarCheck2, LogIn } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";

import { BookingsTable } from "./components/bookings-table";

export default function HotelBookingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Bookings"
        description="A complete list of reservations across every room type."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Bookings"
          value="386"
          icon={CalendarCheck2}
          delta={{ value: "+9.3%", positive: true }}
        />
        <StatCard
          label="Checked In"
          value="142"
          icon={LogIn}
          delta={{ value: "+5.1%", positive: true }}
        />
        <StatCard
          label="Upcoming"
          value="97"
          icon={CalendarClock}
          delta={{ value: "+2.7%", positive: true }}
        />
        <StatCard
          label="Cancelled"
          value="18"
          icon={Ban}
          delta={{ value: "-1.2%", positive: false, caption: "from last month" }}
        />
      </div>

      <BookingsTable />
    </div>
  );
}
