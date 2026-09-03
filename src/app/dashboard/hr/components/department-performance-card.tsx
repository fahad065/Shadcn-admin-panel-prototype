import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Department = {
  name: string;
  score: number;
};

const departments: Department[] = [
  { name: "Engineering", score: 94 },
  { name: "Sales", score: 88 },
  { name: "Design", score: 85 },
  { name: "Marketing", score: 79 },
  { name: "Finance", score: 76 },
  { name: "Support", score: 71 },
].sort((a, b) => b.score - a.score);

export function DepartmentPerformanceCard({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Department Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {departments.map((dept, index) => (
          <div key={dept.name} className="flex items-center gap-3">
            <span className="w-5 shrink-0 text-sm font-medium text-muted-foreground">
              {index + 1}
            </span>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-medium">{dept.name}</span>
                <span className="text-muted-foreground">{dept.score}%</span>
              </div>
              <Progress value={dept.score} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
