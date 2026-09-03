"use client";

import { useState } from "react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { statusDotStyles, tables, type TableStatus } from "./components/data";
import { TableCard } from "./components/table-card";

const legend: TableStatus[] = ["Available", "Occupied", "Reserved", "Needs Cleaning"];

export default function TablesPage() {
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

  const selectedTable = tables.find((table) => table.id === selectedTableId) ?? null;

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Tables"
        description="Select a table to start or manage its order."
      />

      <div className="flex flex-wrap items-center gap-4">
        {legend.map((status) => (
          <span key={status} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={cn("size-2 rounded-full", statusDotStyles[status])} />
            {status}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {tables.map((table) => (
          <TableCard
            key={table.id}
            table={table}
            selected={table.id === selectedTableId}
            onSelect={(id) => setSelectedTableId((current) => (current === id ? null : id))}
          />
        ))}
      </div>

      {selectedTable ? (
        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">{selectedTable.name} selected</p>
            <p className="text-xs text-muted-foreground">
              {selectedTable.seats} seats &middot; {selectedTable.status}
            </p>
          </div>
          <Button size="sm">Start Order</Button>
        </div>
      ) : null}
    </div>
  );
}
