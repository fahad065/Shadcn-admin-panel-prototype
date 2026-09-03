"use client";

import { Users, UtensilsCrossed } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { statusStyles, type FloorTable } from "./data";

interface TableCardProps {
  table: FloorTable;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function TableCard({ table, selected, onSelect }: TableCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(table.id)}
      aria-pressed={selected}
      className={cn(
        "flex flex-col items-center gap-2.5 rounded-xl border bg-card p-4 text-center transition-colors hover:bg-muted",
        selected && "border-primary bg-primary/5 ring-1 ring-primary hover:bg-primary/10"
      )}
    >
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-lg",
          statusStyles[table.status]
        )}
      >
        <UtensilsCrossed className="size-5" />
      </div>

      <div>
        <p className="text-sm font-medium">{table.name}</p>
        <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <Users className="size-3.5" />
          {table.seats} seats
        </p>
      </div>

      <Badge variant="secondary" className={statusStyles[table.status]}>
        {table.status}
      </Badge>
    </button>
  );
}
