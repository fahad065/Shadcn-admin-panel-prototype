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

type BookingStatus = "Confirmed" | "Checked In" | "Checked Out" | "Cancelled";

type Booking = {
  bookingId: string;
  guest: string;
  email: string;
  roomType: string;
  roomNumber: string;
  duration: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
};

const bookings: Booking[] = [
  { bookingId: "BK-30841", guest: "Priya Anand", email: "priya.anand@meridianmail.com", roomType: "Suite", roomNumber: "402", duration: "4 nights", checkIn: "Sep 02, 2026", checkOut: "Sep 06, 2026", status: "Confirmed" },
  { bookingId: "BK-30842", guest: "Marcus Bellweather", email: "m.bellweather@harborline.com", roomType: "Double Queen", roomNumber: "118", duration: "2 nights", checkIn: "Sep 02, 2026", checkOut: "Sep 04, 2026", status: "Checked In" },
  { bookingId: "BK-30843", guest: "Elena Kowalski", email: "elena.kowalski@brightfield.io", roomType: "Deluxe King", roomNumber: "305", duration: "7 nights", checkIn: "Sep 02, 2026", checkOut: "Sep 09, 2026", status: "Checked In" },
  { bookingId: "BK-30844", guest: "Tomás Herrera", email: "tomas.herrera@calderonco.com", roomType: "Single", roomNumber: "210", duration: "2 nights", checkIn: "Sep 03, 2026", checkOut: "Sep 05, 2026", status: "Confirmed" },
  { bookingId: "BK-30845", guest: "Sofia Lindqvist", email: "sofia.lindqvist@nordicgrove.se", roomType: "Executive Suite", roomNumber: "601", duration: "3 nights", checkIn: "Aug 29, 2026", checkOut: "Sep 01, 2026", status: "Checked Out" },
  { bookingId: "BK-30846", guest: "Damian Okoye", email: "damian.okoye@westfieldpartners.com", roomType: "Double Queen", roomNumber: "224", duration: "3 nights", checkIn: "Aug 28, 2026", checkOut: "Aug 31, 2026", status: "Checked Out" },
  { bookingId: "BK-30847", guest: "Harriet Vance", email: "harriet.vance@brookstonellp.com", roomType: "Single", roomNumber: "112", duration: "2 nights", checkIn: "Sep 05, 2026", checkOut: "Sep 07, 2026", status: "Cancelled" },
  { bookingId: "BK-30848", guest: "Kenji Watanabe", email: "kenji.watanabe@orionlabs.jp", roomType: "Deluxe King", roomNumber: "310", duration: "6 nights", checkIn: "Sep 04, 2026", checkOut: "Sep 10, 2026", status: "Confirmed" },
  { bookingId: "BK-30849", guest: "Amara Osei", email: "amara.osei@brightfield.io", roomType: "Suite", roomNumber: "409", duration: "5 nights", checkIn: "Sep 01, 2026", checkOut: "Sep 06, 2026", status: "Checked In" },
  { bookingId: "BK-30850", guest: "Lucas Ferreira", email: "lucas.ferreira@westfieldpartners.com", roomType: "Single", roomNumber: "205", duration: "1 night", checkIn: "Aug 30, 2026", checkOut: "Aug 31, 2026", status: "Checked Out" },
];

const statusStyles: Record<BookingStatus, string> = {
  Confirmed: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Checked In": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  "Checked Out": "bg-secondary text-secondary-foreground",
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

const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "bookingId",
    header: "Booking ID",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.bookingId}</span>
    ),
  },
  {
    accessorKey: "guest",
    header: "Guest",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">
            {initials(row.original.guest)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{row.original.guest}</p>
          <p className="text-xs text-muted-foreground">{row.original.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "roomType",
    header: "Room Type",
  },
  {
    accessorKey: "roomNumber",
    header: "Room Number",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "checkIn",
    header: "Check-in",
  },
  {
    accessorKey: "checkOut",
    header: "Check-out",
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
          <DropdownMenuItem>View booking</DropdownMenuItem>
          <DropdownMenuItem>Edit booking</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Cancel booking</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function BookingListTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking List</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-1.5">
            <SlidersHorizontal className="size-3.5" />
            Filters
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={bookings} pageSize={8} itemLabel="bookings" />
      </CardContent>
    </Card>
  );
}
