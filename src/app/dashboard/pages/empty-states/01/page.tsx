import { Search } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { EmptyState } from "../components/empty-state";

export default function EmptyStateNoResultsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Empty State 01"
        description="No results found for the current search or filter set"
      />

      <EmptyState
        icon={Search}
        title="No results found"
        description="We couldn't find anything matching your search. Try different keywords or remove a filter to widen the results."
        action={<Button>Clear filters</Button>}
      />
    </div>
  );
}
