import { Star, Users } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { categoryStyles, formatPrice, type Course } from "./data";

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-3.5",
            index < rounded ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          )}
        />
      ))}
    </span>
  );
}

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;

  return (
    <Card className="flex flex-col">
      <CardContent className="flex flex-1 flex-col gap-4">
        <div
          className={cn(
            "relative flex h-28 w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/25 via-primary/10 to-transparent"
          )}
        >
          <Icon className="size-9 text-primary/60" />
          <Badge
            variant="secondary"
            className={cn("absolute top-2 left-2", categoryStyles[course.category])}
          >
            {course.category}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <p className="font-medium text-foreground">{course.title}</p>
          <p className="text-sm text-muted-foreground">{course.description}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{course.instructor}</span>
          <span className="flex items-center gap-1 font-medium tabular-nums">
            <StarRating rating={course.rating} />
            {course.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="size-3.5" />
            {course.students.toLocaleString("en-US")} students
          </span>
          <span>{course.lessons} lessons</span>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          {course.price === null ? (
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-500">
              Enrolled
            </Badge>
          ) : (
            <span className="text-lg font-semibold">{formatPrice(course.price)}</span>
          )}
          <Button
            size="sm"
            variant={course.price === null ? "outline" : "default"}
            render={<Link href="/dashboard/academy/courses/detail" />}
            nativeButton={false}
          >
            {course.price === null ? "Continue" : "View Course"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
