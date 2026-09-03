import { DollarSign, Plus, TrendingUp, Users, Wallet } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { CongratulationsCard } from "./components/congratulations-card";
import { DeviceSalesCard } from "./components/device-sales-card";
import { SalesByCountryCard } from "./components/sales-by-country-card";
import { ReviewDistributionCard } from "./components/review-distribution-card";
import { StoreVisitsChart } from "./components/store-visits-chart";
import { RecentOrdersTable } from "./components/recent-orders-table";
import { BestSellingProductsTable } from "./components/best-selling-products-table";

export default function EcommerceDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="E-commerce"
        description="Track store performance, orders, and top-selling products."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm" className="gap-1.5">
              <Plus className="size-3.5" />
              Add Product
            </Button>
          </>
        }
      />

      <div className="grid gap-4 xl:grid-cols-3">
        <CongratulationsCard />
        <DeviceSalesCard />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="MRR"
          value="$48,290"
          icon={Wallet}
          delta={{ value: "+12.4%", positive: true }}
        />
        <StatCard
          label="Users"
          value="18,204"
          icon={Users}
          delta={{ value: "+6.1%", positive: true }}
        />
        <StatCard
          label="User Growth"
          value="+2,340"
          icon={TrendingUp}
          delta={{ value: "+3.8%", positive: true }}
        />
        <StatCard
          label="Revenue"
          value="$248,590"
          icon={DollarSign}
          delta={{ value: "+15.2%", positive: true }}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <SalesByCountryCard />
        <ReviewDistributionCard />
        <StoreVisitsChart />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <RecentOrdersTable />
        <BestSellingProductsTable />
      </div>
    </div>
  );
}
