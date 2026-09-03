import { Upload } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { CategoryStorageCards } from "./components/category-storage-cards";
import { OverallStorageWidget } from "./components/overall-storage-widget";
import { MonthlyTransferChart } from "./components/monthly-transfer-chart";
import { UploadActivityChart } from "./components/upload-activity-chart";
import { RecentlyUploadedTable } from "./components/recently-uploaded-table";

export default function FileManagerPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="File Manager"
        description="Monitor storage usage and manage files across your workspace."
        actions={
          <>
            <DateRangePicker />
            <Button size="sm" className="gap-1.5">
              <Upload className="size-3.5" />
              Upload
            </Button>
          </>
        }
      />

      <CategoryStorageCards />

      <OverallStorageWidget />

      <div className="grid gap-4 xl:grid-cols-2">
        <MonthlyTransferChart />
        <UploadActivityChart />
      </div>

      <RecentlyUploadedTable />
    </div>
  );
}
