import { PageHeader } from "@/components/page-header";

import { BalancesCard } from "./components/balances-card";
import { ExchangeRatesCard } from "./components/exchange-rates-card";
import { TransactionsCard } from "./components/transactions-card";
import { VerificationAlert } from "./components/verification-alert";

export default function PaymentDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Payment Dashboard"
        description="Manage your multi-currency balances, transactions, and exchange rates."
      />

      <VerificationAlert />

      <BalancesCard />

      <div className="grid gap-4 xl:grid-cols-2">
        <TransactionsCard />
        <ExchangeRatesCard />
      </div>
    </div>
  );
}
