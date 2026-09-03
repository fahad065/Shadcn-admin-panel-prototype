import { WifiOff } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { EmptyState } from "../components/empty-state";

export default function EmptyStateConnectionErrorPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Empty State 04"
        description="The app lost its connection to the server"
      />

      <EmptyState
        icon={WifiOff}
        title="Connection error"
        description="We're having trouble reaching the server. Check your internet connection and try again."
        action={<Button variant="outline">Retry</Button>}
      />
    </div>
  );
}
