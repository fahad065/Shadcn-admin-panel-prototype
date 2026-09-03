import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type RatingBreakdown = {
  stars: number;
  count: number;
  percent: number;
};

const distribution: RatingBreakdown[] = [
  { stars: 5, count: 1284, percent: 68 },
  { stars: 4, count: 412, percent: 22 },
  { stars: 3, count: 134, percent: 7 },
  { stars: 2, count: 38, percent: 2 },
  { stars: 1, count: 19, percent: 1 },
];

const totalReviews = distribution.reduce((sum, row) => sum + row.count, 0);

export function ReviewDistributionCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-semibold">4.6</span>
          <div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {totalReviews.toLocaleString()} reviews
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {distribution.map((row) => (
            <div key={row.stars} className="flex items-center gap-3 text-sm">
              <span className="flex w-9 shrink-0 items-center gap-1 text-muted-foreground">
                {row.stars}
                <Star className="size-3 fill-amber-400 text-amber-400" />
              </span>
              <Progress value={row.percent} className="flex-1" />
              <span className="w-9 shrink-0 text-right text-xs text-muted-foreground">
                {row.percent}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
