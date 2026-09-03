import { Activity, CalendarCheck, DollarSign, UserPlus } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { PatientVisitsChart } from "./components/patient-visits-chart";
import { PatientsByDepartmentChart } from "./components/patients-by-department-chart";
import { HospitalCalendarCard } from "./components/hospital-calendar-card";
import { TopTreatmentsCard } from "./components/top-treatments-card";
import { PatientLastProcedureCards } from "./components/patient-last-procedure-cards";
import { UpcomingAppointmentsTable } from "./components/upcoming-appointments-table";

export default function HospitalManagementPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Hospital Management"
        description="Monitor appointments, patients, and department activity at a glance."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Appointments"
          value="186"
          icon={CalendarCheck}
          delta={{ value: "+5.4%", positive: true }}
        />
        <StatCard
          label="New Patients"
          value="74"
          icon={UserPlus}
          delta={{ value: "+9.1%", positive: true }}
        />
        <StatCard
          label="Operations"
          value="32"
          icon={Activity}
          delta={{ value: "-2.3%", positive: false }}
        />
        <StatCard
          label="Revenue"
          value="$184,320"
          icon={DollarSign}
          delta={{ value: "+6.8%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <PatientVisitsChart />
        <PatientsByDepartmentChart />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <HospitalCalendarCard />
        <TopTreatmentsCard />
      </div>

      <PatientLastProcedureCards />

      <UpcomingAppointmentsTable />
    </div>
  );
}
