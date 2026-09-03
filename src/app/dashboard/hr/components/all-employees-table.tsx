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

type EmploymentStatus = "Full-time" | "Part-time" | "Freelance";

type Employee = {
  name: string;
  email: string;
  department: string;
  role: string;
  status: EmploymentStatus;
  startDate: string;
};

const employees: Employee[] = [
  { name: "Nadia Alvarez", email: "nadia.alvarez@northwind.com", department: "Engineering", role: "Senior Frontend Engineer", status: "Full-time", startDate: "Mar 14, 2022" },
  { name: "Owen Beckett", email: "owen.beckett@northwind.com", department: "Sales", role: "Account Executive", status: "Full-time", startDate: "Jun 2, 2023" },
  { name: "Priya Chandran", email: "priya.chandran@northwind.com", department: "Marketing", role: "Content Strategist", status: "Part-time", startDate: "Jan 9, 2021" },
  { name: "Marcus Ferreira", email: "marcus.ferreira@northwind.com", department: "Engineering", role: "Backend Engineer", status: "Full-time", startDate: "Jul 21, 2026" },
  { name: "Elin Kowalski", email: "elin.kowalski@northwind.com", department: "Support", role: "Support Team Lead", status: "Full-time", startDate: "Nov 4, 2020" },
  { name: "Tariq Osei", email: "tariq.osei@northwind.com", department: "Finance", role: "Finance Manager", status: "Full-time", startDate: "Sep 30, 2019" },
  { name: "Camille Dubois", email: "camille.dubois@northwind.com", department: "Sales", role: "Sales Development Rep", status: "Freelance", startDate: "Aug 11, 2026" },
  { name: "Hiroshi Tanaka", email: "hiroshi.tanaka@northwind.com", department: "Engineering", role: "DevOps Engineer", status: "Full-time", startDate: "Apr 18, 2022" },
  { name: "Sofia Marchetti", email: "sofia.marchetti@northwind.com", department: "Design", role: "Product Designer", status: "Freelance", startDate: "Feb 27, 2024" },
  { name: "Declan Murphy", email: "declan.murphy@northwind.com", department: "Design", role: "UX Researcher", status: "Part-time", startDate: "May 15, 2023" },
];

const statusStyles: Record<EmploymentStatus, string> = {
  "Full-time": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  "Part-time": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Freelance: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Employee",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">
            {initials(row.original.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{row.original.name}</p>
          <p className="text-xs text-muted-foreground">{row.original.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "role",
    header: "Role",
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
    accessorKey: "startDate",
    header: "Start Date",
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
          <DropdownMenuItem>View employee</DropdownMenuItem>
          <DropdownMenuItem>Edit employee</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Remove employee</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function AllEmployeesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Employees</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={employees} pageSize={7} itemLabel="employees" />
      </CardContent>
    </Card>
  );
}
