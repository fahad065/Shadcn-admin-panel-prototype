import { Receipt, TrendingDown, TrendingUp, Wallet } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { IncomeSourcesCard } from "./components/income-sources-card";
import { MonthlyExpensesChart } from "./components/monthly-expenses-chart";
import { MyWallet } from "./components/my-wallet";
import { SavingGoalCard } from "./components/saving-goal-card";
import { TransactionsTable } from "./components/transactions-table";

export default function FinanceDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Finance Dashboard"
        description="Track your income, spending, and overall financial health."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Balance"
          value="$48,920.75"
          icon={Wallet}
          delta={{ value: "+8.4%", positive: true }}
        />
        <StatCard
          label="Net Profit"
          value="$18,430.20"
          icon={TrendingUp}
          delta={{ value: "+11.2%", positive: true }}
        />
        <StatCard
          label="Expenses"
          value="$12,860.40"
          icon={TrendingDown}
          delta={{ value: "-3.8%", positive: false }}
        />
        <StatCard
          label="Pending Invoices"
          value="$4,320.00"
          icon={Receipt}
          delta={{ value: "-2", positive: true, caption: "invoices from last month" }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <IncomeSourcesCard />
        <MonthlyExpensesChart />
      </div>

      <MyWallet />

      <SavingGoalCard />

      <TransactionsTable />
    </div>
  );
}
