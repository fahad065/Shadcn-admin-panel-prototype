import { CheckCircle2, Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export function DealsSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deals</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-emerald-500/10">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-500" />
          </span>
          <div>
            <p className="text-2xl font-semibold">42</p>
            <p className="text-xs text-muted-foreground">Closed Deals</p>
          </div>
        </div>

        <Separator />

        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-amber-500/10">
            <Clock className="size-4 text-amber-600 dark:text-amber-500" />
          </span>
          <div>
            <p className="text-2xl font-semibold">132</p>
            <p className="text-xs text-muted-foreground">On Progress Deals</p>
          </div>
        </div>

        <Progress value={24} />
        <p className="-mt-2 text-xs text-muted-foreground">24% of pipeline in progress</p>
      </CardContent>
    </Card>
  );
}
