import { CalendarCheck, CalendarOff, Gauge, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { EmployeeBreakdownCard } from "./components/employee-breakdown-card";
import { DeviceUsageCard } from "./components/device-usage-card";
import { AttendanceOverviewCard } from "./components/attendance-overview-card";
import { DepartmentPerformanceCard } from "./components/department-performance-card";
import { WorkCalendarCard } from "./components/work-calendar-card";
import { AttendanceReportChart } from "./components/attendance-report-chart";
import { AllEmployeesTable } from "./components/all-employees-table";

export default function HrDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="HR Dashboard"
        description="Track headcount, attendance, and workforce performance."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Employees"
          value="1,204"
          icon={Users}
          delta={{ value: "+2.8%", positive: true }}
        />
        <StatCard
          label="Attendance"
          value="91.4%"
          icon={CalendarCheck}
          delta={{ value: "+1.6%", positive: true }}
        />
        <StatCard
          label="Leave"
          value="46"
          icon={CalendarOff}
          delta={{ value: "-3.2%", positive: false }}
        />
        <StatCard
          label="Average KPI"
          value="8.6/10"
          icon={Gauge}
          delta={{ value: "+0.4%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <EmployeeBreakdownCard />
        <DeviceUsageCard />
        <AttendanceOverviewCard />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <DepartmentPerformanceCard className="xl:col-span-2" />
        <WorkCalendarCard />
      </div>

      <AttendanceReportChart />

      <AllEmployeesTable />
    </div>
  );
}
