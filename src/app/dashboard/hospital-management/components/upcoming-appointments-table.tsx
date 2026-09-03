"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, SlidersHorizontal } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type AppointmentStatus = "Scheduled" | "Confirmed" | "Completed" | "Cancelled";

type Appointment = {
  patient: string;
  patientNote: string;
  doctor: string;
  department: string;
  status: AppointmentStatus;
  time: string;
  date: string;
};

const appointments: Appointment[] = [
  { patient: "Evelyn Brooks", patientNote: "Follow-up visit", doctor: "Dr. Amara Kofi", department: "Cardiology", status: "Confirmed", time: "9:00 AM", date: "Sep 4, 2026" },
  { patient: "Marcus Chen", patientNote: "New patient", doctor: "Dr. Ravi Malhotra", department: "Neurology", status: "Scheduled", time: "9:30 AM", date: "Sep 4, 2026" },
  { patient: "Lila Anand", patientNote: "Routine checkup", doctor: "Dr. Sofia Marín", department: "Pediatrics", status: "Confirmed", time: "8:15 AM", date: "Sep 5, 2026" },
  { patient: "Owen Fitzgerald", patientNote: "Post-surgery review", doctor: "Dr. Liam O'Connor", department: "Orthopedics", status: "Scheduled", time: "10:15 AM", date: "Sep 5, 2026" },
  { patient: "Priya Natarajan", patientNote: "Lab results", doctor: "Dr. Amara Kofi", department: "Cardiology", status: "Cancelled", time: "11:00 AM", date: "Sep 6, 2026" },
  { patient: "Derek Osei", patientNote: "Consultation", doctor: "Dr. Hana Tanaka", department: "General", status: "Scheduled", time: "11:45 AM", date: "Sep 6, 2026" },
  { patient: "Grace Kowalski", patientNote: "Physical therapy", doctor: "Dr. Liam O'Connor", department: "Orthopedics", status: "Confirmed", time: "1:30 PM", date: "Sep 8, 2026" },
  { patient: "Noah Bergström", patientNote: "MRI review", doctor: "Dr. Ravi Malhotra", department: "Neurology", status: "Scheduled", time: "2:00 PM", date: "Sep 9, 2026" },
];

const statusStyles: Record<AppointmentStatus, string> = {
  Scheduled: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Confirmed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Completed: "bg-neutral-500/10 text-neutral-700 dark:text-neutral-300",
  Cancelled: "bg-destructive/10 text-destructive",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">
            {initials(row.original.patient)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{row.original.patient}</p>
          <p className="text-xs text-muted-foreground">{row.original.patientNote}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "doctor",
    header: "Doctor",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="secondary" className={statusStyles[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <MoreHorizontal className="size-4" />
            </Button>
          }
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View appointment</DropdownMenuItem>
          <DropdownMenuItem>Reschedule</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Cancel appointment</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function UpcomingAppointmentsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={appointments} pageSize={8} itemLabel="appointments" />
      </CardContent>
    </Card>
  );
}
