import { Bath, BedDouble, Ruler } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { statusStyles, typeIcons, type Property } from "./data";

export function PropertyCard({ property }: { property: Property }) {
  const TypeIcon = typeIcons[property.type];

  return (
    <Card className="overflow-hidden py-0">
      <div
        className={cn(
          "relative flex h-36 w-full items-center justify-center bg-gradient-to-br",
          property.gradient
        )}
      >
        <TypeIcon className="size-10 text-foreground/25" />
        <Badge
          variant="secondary"
          className={cn("absolute top-2.5 right-2.5", statusStyles[property.status])}
        >
          {property.status}
        </Badge>
        <Badge variant="outline" className="absolute top-2.5 left-2.5 bg-background/80">
          {property.type}
        </Badge>
      </div>

      <CardContent className="flex flex-col gap-3 py-4">
        <div>
          <p className="text-lg font-semibold">{property.price}</p>
          <p className="mt-0.5 text-sm font-medium">{property.title}</p>
          <p className="text-xs text-muted-foreground">
            {property.address}, {property.city}
          </p>
        </div>

        <div className="flex items-center gap-4 border-t pt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <BedDouble className="size-3.5" />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="size-3.5" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Ruler className="size-3.5" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
