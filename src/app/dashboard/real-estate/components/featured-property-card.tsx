import { Building2, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stats = [
  { label: "Sold", value: "175" },
  { label: "Rented", value: "125" },
  { label: "Views", value: "2K+" },
];

export function FeaturedPropertyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Property</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="relative flex h-32 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/25 via-primary/10 to-transparent">
          <Building2 className="size-10 text-primary/60" />
          <Badge className="absolute top-2 left-2" variant="secondary">
            Featured
          </Badge>
        </div>

        <div>
          <p className="font-medium">The Somerset House</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="size-3.5" />
            Recommended to 14 Leads
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-3 gap-2 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="text-lg font-semibold">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
