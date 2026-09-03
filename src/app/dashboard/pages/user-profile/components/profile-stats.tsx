import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Teams", value: "7" },
  { label: "Projects", value: "8" },
  { label: "Connections", value: "156" },
];

const profileCompletion = 82;

function CompletionRing({ value }: { value: number }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;

  return (
    <svg
      viewBox="0 0 40 40"
      className="size-11 -rotate-90"
      role="img"
      aria-label={`Profile completion ${value}%`}
    >
      <circle cx="20" cy="20" r={radius} className="fill-none stroke-muted" strokeWidth="4" />
      <circle
        cx="20"
        cy="20"
        r={radius}
        className="fill-none stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
      />
    </svg>
  );
}

export function ProfileStats() {
  return (
    <Card>
      <CardContent className="flex flex-wrap gap-x-10 gap-y-4">
        <div className="flex items-center gap-3">
          <CompletionRing value={profileCompletion} />
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-semibold">{profileCompletion}%</span>
            <span className="text-sm text-muted-foreground">Profile Completion</span>
          </div>
        </div>
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
