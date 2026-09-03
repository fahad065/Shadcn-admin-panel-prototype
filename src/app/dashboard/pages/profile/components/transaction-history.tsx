import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type TransactionStatus = "Paid" | "Pending" | "Refunded";

type Transaction = {
  description: string;
  amount: string;
  date: string;
  status: TransactionStatus;
};

const statusStyles: Record<TransactionStatus, string> = {
  Paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-500",
  Refunded: "bg-muted text-muted-foreground",
};

const transactions: Transaction[] = [
  {
    description: "Creator Bundle — Notion template pack",
    amount: "$49.00",
    date: "Aug 28, 2026",
    status: "Paid",
  },
  {
    description: "Sponsored post — Northwind Coffee Co.",
    amount: "$650.00",
    date: "Aug 21, 2026",
    status: "Paid",
  },
  {
    description: "Studio Plan — cloud storage renewal",
    amount: "-$24.00",
    date: "Aug 15, 2026",
    status: "Paid",
  },
  {
    description: "Workshop payout — Pricing Your First Product",
    amount: "$180.00",
    date: "Aug 9, 2026",
    status: "Pending",
  },
  {
    description: "Meetup ticket refund — Austin chapter",
    amount: "-$35.00",
    date: "Jul 30, 2026",
    status: "Refunded",
  },
];

export function TransactionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marketplace activity</CardTitle>
        <CardDescription>Recent purchases and payouts across the Forge Collective marketplace</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.description}>
                <TableCell className="font-medium">{transaction.description}</TableCell>
                <TableCell className="font-mono text-sm tabular-nums">{transaction.amount}</TableCell>
                <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline" className={cn("border-transparent", statusStyles[transaction.status])}>
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
