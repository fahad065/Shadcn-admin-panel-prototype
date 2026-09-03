import { CheckCircle2 } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { EmptyState } from "../components/empty-state";

export default function EmptyStateInboxZeroPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Empty State 02"
        description="Every item has been handled — nothing left in the queue"
      />

      <EmptyState
        icon={CheckCircle2}
        title="You're all caught up"
        description="Nice work — every message has been read and every task closed out. New activity will show up here as it arrives."
      />
    </div>
  );
}
