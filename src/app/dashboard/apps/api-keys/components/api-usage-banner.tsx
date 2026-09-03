import { Card, CardContent } from "@/components/ui/card";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";

import { apiUsage } from "./data";

export function ApiUsageBanner() {
  const percentUsed = Math.round((apiUsage.used / apiUsage.limit) * 100);

  return (
    <Card size="sm">
      <CardContent>
        <Progress value={percentUsed} className="gap-2">
          <div className="flex items-center justify-between">
            <ProgressLabel>{apiUsage.plan}</ProgressLabel>
            <ProgressValue>
              {() =>
                `${apiUsage.used.toLocaleString()} of ${apiUsage.limit.toLocaleString()} calls used this month`
              }
            </ProgressValue>
          </div>
        </Progress>
      </CardContent>
    </Card>
  );
}
