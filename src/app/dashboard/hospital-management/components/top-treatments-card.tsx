import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Treatment = {
  name: string;
  count: number;
};

const treatments: Treatment[] = [
  { name: "Physical Therapy", count: 428 },
  { name: "Cardiac Consultation", count: 356 },
  { name: "MRI Scan", count: 312 },
  { name: "Minor Surgery", count: 245 },
  { name: "Dental Checkup", count: 198 },
];

const maxCount = Math.max(...treatments.map((t) => t.count));

export function TopTreatmentsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Treatments</CardTitle>
        <CardDescription>Most-performed procedures this month</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {treatments.map((treatment, index) => (
          <div key={treatment.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-medium">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">
                  {index + 1}
                </span>
                {treatment.name}
              </span>
              <span className="text-muted-foreground">{treatment.count}</span>
            </div>
            <Progress value={(treatment.count / maxCount) * 100} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
