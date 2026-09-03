"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { CalendarX2, MoreHorizontal, Pencil, Eye } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { bookings, formatAmount, roomTypes, type BookingStatus, type RoomBooking } from "./data";

const statusStyles: Record<BookingStatus, string> = {
  Upcoming: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Checked In": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  "Checked Out": "bg-secondary text-secondary-foreground",
  Cancelled: "bg-destructive/10 text-destructive",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const columns: ColumnDef<RoomBooking>[] = [
  {
    accessorKey: "bookingId",
    header: "Booking ID",
    cell: ({ row }) => <span className="font-medium">{row.original.bookingId}</span>,
  },
  {
    accessorKey: "guest",
    header: "Guest",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="text-xs">{initials(row.original.guest)}</AvatarFallback>
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
    accessorKey: "checkIn",
    header: "Check-in",
  },
  {
    accessorKey: "checkOut",
    header: "Check-out",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span className="text-sm font-medium tabular-nums">
        {formatAmount(row.original.amount)}
      </span>
    ),
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
          <DropdownMenuItem>
            <Eye className="size-4" />
            View booking
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Pencil className="size-4" />
            Edit booking
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <CalendarX2 className="size-4" />
            Cancel booking
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function BookingsTable() {
  const [statusFilter, setStatusFilter] = useState<"all" | BookingStatus>("all");
  const [roomTypeFilter, setRoomTypeFilter] = useState<"all" | (typeof roomTypes)[number]>("all");

  const filteredData = useMemo(
    () =>
      bookings.filter(
        (booking) =>
          (statusFilter === "all" || booking.status === statusFilter) &&
          (roomTypeFilter === "all" || booking.roomType === roomTypeFilter)
      ),
    [statusFilter, roomTypeFilter]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Bookings</CardTitle>
        <CardAction className="flex flex-wrap items-center gap-2">
          <Tabs
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value as "all" | BookingStatus)}
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="Checked In">Checked In</TabsTrigger>
              <TabsTrigger value="Checked Out">Checked Out</TabsTrigger>
              <TabsTrigger value="Cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </Tabs>
          <Select
            value={roomTypeFilter}
            onValueChange={(value) =>
              setRoomTypeFilter(value as "all" | (typeof roomTypes)[number])
            }
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All room types</SelectItem>
              {roomTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={filteredData} pageSize={10} itemLabel="bookings" />
      </CardContent>
    </Card>
  );
}
