"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ListingFilters = {
  type: string;
  status: string;
  search: string;
};

export function ListingToolbar({
  filters,
  onChange,
}: {
  filters: ListingFilters;
  onChange: (filters: ListingFilters) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={filters.search}
          onChange={(event) => onChange({ ...filters, search: event.target.value })}
          placeholder="Search by property, address, or city..."
          className="pl-8"
          aria-label="Search listings"
        />
      </div>

      <Select
        value={filters.type}
        onValueChange={(value) => onChange({ ...filters, type: String(value) })}
      >
        <SelectTrigger className="w-full sm:w-40" aria-label="Filter by type">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="House">House</SelectItem>
          <SelectItem value="Apartment">Apartment</SelectItem>
          <SelectItem value="Villa">Villa</SelectItem>
          <SelectItem value="Land">Land</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.status}
        onValueChange={(value) => onChange({ ...filters, status: String(value) })}
      >
        <SelectTrigger className="w-full sm:w-40" aria-label="Filter by status">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="Available">Available</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Sold">Sold</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
