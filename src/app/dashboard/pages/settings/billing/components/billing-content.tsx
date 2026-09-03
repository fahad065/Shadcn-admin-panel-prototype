import { CreditCard, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const paymentMethods = [
  { name: "Carolyn Perkins", last4: "0392", expires: "Dec 2025", primary: true },
  { name: "Carolyn Perkins", last4: "8461", expires: "Jun 2025", primary: false },
];

const invoices = [
  { reference: "#36223", product: "Pro Plan — Monthly", status: "Paid", date: "12/02/2025", amount: "$59.90" },
  { reference: "#35190", product: "Pro Plan — Monthly", status: "Paid", date: "11/02/2025", amount: "$59.90" },
  { reference: "#34283", product: "Add-on — Extra seats", status: "Paid", date: "10/14/2025", amount: "$39.90" },
  { reference: "#33871", product: "Pro Plan — Monthly", status: "Paid", date: "10/02/2025", amount: "$59.90" },
  { reference: "#32940", product: "Annual upgrade", status: "Paid", date: "09/02/2025", amount: "$299.90" },
  { reference: "#31502", product: "Pro Plan — Monthly", status: "Failed", date: "08/02/2025", amount: "$59.90" },
  { reference: "#30877", product: "Pro Plan — Monthly", status: "Pending", date: "07/02/2025", amount: "$59.90" },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Failed: "bg-destructive/10 text-destructive",
};

export function BillingContent() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
          <CardDescription>
            Billing monthly &middot; Next payment on 02/09/2025 for $59.90
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline">Change plan</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment methods</CardTitle>
          <CardDescription>Manage the cards on file for your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.last4}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">
                    {method.name} &bull;&bull;&bull;&bull; {method.last4}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Expires {method.expires}
                  </p>
                </div>
              </div>
              {method.primary ? <Badge variant="secondary">Primary</Badge> : null}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="gap-1.5">
            <Plus className="size-3.5" />
            Add payment method
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction history</CardTitle>
          <CardDescription>Your recent invoices and receipts.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.reference}>
                    <TableCell className="font-mono text-xs">{invoice.reference}</TableCell>
                    <TableCell>{invoice.product}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusStyles[invoice.status]}>
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
