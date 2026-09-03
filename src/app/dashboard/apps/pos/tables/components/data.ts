export type TableStatus = "Available" | "Occupied" | "Reserved" | "Needs Cleaning";

export interface FloorTable {
  id: string;
  name: string;
  seats: number;
  status: TableStatus;
}

export const statusStyles: Record<TableStatus, string> = {
  Available: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Occupied: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  Reserved: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Needs Cleaning": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

export const statusDotStyles: Record<TableStatus, string> = {
  Available: "bg-emerald-500",
  Occupied: "bg-rose-500",
  Reserved: "bg-amber-500",
  "Needs Cleaning": "bg-blue-500",
};

export const tables: FloorTable[] = [
  { id: "t1", name: "Table 1", seats: 2, status: "Available" },
  { id: "t2", name: "Table 2", seats: 2, status: "Occupied" },
  { id: "t3", name: "Table 3", seats: 4, status: "Available" },
  { id: "t4", name: "Table 4", seats: 4, status: "Reserved" },
  { id: "t5", name: "Table 5", seats: 4, status: "Occupied" },
  { id: "t6", name: "Table 6", seats: 6, status: "Needs Cleaning" },
  { id: "t7", name: "Table 7", seats: 2, status: "Available" },
  { id: "t8", name: "Table 8", seats: 6, status: "Occupied" },
  { id: "t9", name: "Table 9", seats: 4, status: "Available" },
  { id: "t10", name: "Table 10", seats: 8, status: "Reserved" },
  { id: "t11", name: "Table 11", seats: 2, status: "Needs Cleaning" },
  { id: "t12", name: "Patio 1", seats: 4, status: "Available" },
];
