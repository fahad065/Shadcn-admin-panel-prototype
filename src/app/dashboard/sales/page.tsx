import { ReceiptText, TrendingDown, TrendingUp, Wallet } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { RevenueChart } from "./components/revenue-chart";
import { OrderStatusCard } from "./components/order-status-card";
import { BestSellingProductCard } from "./components/best-selling-product-card";
import { OrdersTable } from "./components/orders-table";

export default function SalesDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Sales"
        description="Track revenue, orders, and sales performance across your store."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm">Download</Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Balance"
          value="$103,045"
          icon={Wallet}
          delta={{ value: "+3.6%", positive: true }}
        />
        <StatCard
          label="Total Income"
          value="$78,000"
          icon={TrendingUp}
          delta={{ value: "+2.5%", positive: true }}
        />
        <StatCard
          label="Total Expense"
          value="$15,010"
          icon={TrendingDown}
          delta={{ value: "+6.0%", positive: true }}
        />
        <StatCard
          label="Total Sales Tax"
          value="$9,090"
          icon={ReceiptText}
          delta={{ value: "+5.0%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <RevenueChart />
        <OrderStatusCard />
      </div>

      <BestSellingProductCard />

      <OrdersTable />
    </div>
  );
}
