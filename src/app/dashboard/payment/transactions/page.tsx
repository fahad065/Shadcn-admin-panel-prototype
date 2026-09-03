import { CheckCircle2, Receipt, Wallet, XCircle } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";

import { TransactionsTable } from "./components/transactions-table";

export default function PaymentTransactionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Transactions"
        description="A detailed ledger of every transaction across your connected currencies."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Transactions"
          value="2,481"
          icon={Receipt}
          delta={{ value: "+6.2%", positive: true }}
        />
        <StatCard
          label="Total Volume"
          value="$482,930.00"
          icon={Wallet}
          delta={{ value: "+11.4%", positive: true }}
        />
        <StatCard
          label="Successful"
          value="2,318"
          icon={CheckCircle2}
          delta={{ value: "+4.8%", positive: true }}
        />
        <StatCard
          label="Failed"
          value="42"
          icon={XCircle}
          delta={{ value: "-1.9%", positive: false, caption: "from last month" }}
        />
      </div>

      <TransactionsTable />
    </div>
  );
}
