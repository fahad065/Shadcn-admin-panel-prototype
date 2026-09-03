import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const segments = [
  { label: "Listed", value: 823, percent: 65, color: "bg-chart-1" },
  { label: "Sold", value: 409, percent: 35, color: "bg-chart-2" },
];

export function PropertyOverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <p className="text-2xl font-semibold">1,323</p>
          <p className="text-xs text-muted-foreground">Total Properties</p>
        </div>

        <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
          {segments.map((segment) => (
            <div
              key={segment.label}
              className={segment.color}
              style={{ width: `${segment.percent}%` }}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {segments.map((segment) => (
            <div key={segment.label} className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={`size-2 rounded-full ${segment.color}`} />
                {segment.label}
              </span>
              <span className="text-sm font-medium">
                {segment.value.toLocaleString()}{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  ({segment.percent}%)
                </span>
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
