import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Posts", value: "184" },
  { label: "Projects", value: "32" },
  { label: "Members", value: "4.5K" },
];

export function ProfileStats() {
  return (
    <Card>
      <CardContent className="flex flex-wrap gap-x-10 gap-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-0.5">
            <span className="text-2xl font-semibold">{stat.value}</span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
