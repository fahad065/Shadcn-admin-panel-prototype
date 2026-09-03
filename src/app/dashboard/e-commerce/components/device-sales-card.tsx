import { Monitor, Smartphone, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type DeviceSales = {
  name: string;
  sales: string;
  percent: number;
  icon: LucideIcon;
};

const devices: DeviceSales[] = [
  { name: "Desktop", sales: "$84,320", percent: 68, icon: Monitor },
  { name: "Mobile", sales: "$39,680", percent: 32, icon: Smartphone },
];

export function DeviceSalesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Desktop vs Mobile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {devices.map((device) => (
          <div key={device.name} className="space-y-1.5">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <device.icon className="size-4 text-muted-foreground" />
                {device.name}
              </span>
              <span className="text-muted-foreground">{device.sales}</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={device.percent} className="flex-1" />
              <span className="w-9 shrink-0 text-right text-xs text-muted-foreground">
                {device.percent}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
