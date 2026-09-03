import { ArrowLeftRight, Banknote, Coins, Wallet } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { BalanceSummary } from "./components/balance-summary";
import { DigitalWallets } from "./components/digital-wallets";
import { RecentActivitiesTable } from "./components/recent-activities-table";
import { TradingForm } from "./components/trading-form";

export default function CryptoDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Crypto Dashboard"
        description="Track your wallets, trade assets, and monitor recent activity"
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Transactions"
          value="2,847"
          icon={ArrowLeftRight}
          delta={{ value: "+8.2%", positive: true }}
        />
        <StatCard
          label="Wallets"
          value="6"
          icon={Wallet}
          delta={{ value: "+1", positive: true, caption: "new wallet added" }}
        />
        <StatCard
          label="Balance"
          value="$84,320.50"
          icon={Coins}
          delta={{ value: "+5.4%", positive: true }}
        />
        <StatCard
          label="USDT"
          value="$12,480.00"
          icon={Banknote}
          delta={{ value: "-2.1%", positive: false }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <DigitalWallets className="xl:col-span-2" />
        <TradingForm />
      </div>

      <BalanceSummary />

      <RecentActivitiesTable />
    </div>
  );
}
