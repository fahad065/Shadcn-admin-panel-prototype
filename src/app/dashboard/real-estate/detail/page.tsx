import { Bath, BedDouble, Building2, CalendarDays, MapPin, Ruler } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { AgentCard } from "./components/agent-card";
import { featuredProperty } from "./components/data";

const stats = [
  { label: "Beds", value: featuredProperty.beds, icon: BedDouble },
  { label: "Baths", value: featuredProperty.baths, icon: Bath },
  { label: "Sqft", value: featuredProperty.sqft.toLocaleString(), icon: Ruler },
  { label: "Year Built", value: featuredProperty.yearBuilt, icon: CalendarDays },
];

export default function RealEstateDetailPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Detail Page" description="Full listing details for a single property." />

      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent sm:h-80">
        <Building2 className="size-16 text-foreground/20" />
        <Badge className="absolute top-4 left-4" variant="secondary">
          {featuredProperty.status}
        </Badge>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{featuredProperty.title}</h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" />
            {featuredProperty.address}
          </p>
        </div>
        <p className="text-2xl font-semibold whitespace-nowrap">{featuredProperty.price}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} size="sm">
            <CardContent className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <stat.icon className="size-4 text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="flex flex-col gap-6 xl:col-span-2">
          <Card>
            <CardContent className="flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-medium">Description</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {featuredProperty.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium">Amenities</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {featuredProperty.amenities.map((amenity) => (
                    <Badge key={amenity} variant="outline">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <AgentCard />
      </div>
    </div>
  );
}
