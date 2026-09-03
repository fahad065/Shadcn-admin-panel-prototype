import { Check, CheckCircle2, Lock, PlayCircle, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { courseDetail, curriculum, reviews, type CurriculumModule } from "./data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const statusIcon: Record<CurriculumModule["status"], typeof CheckCircle2> = {
  completed: CheckCircle2,
  "in-progress": PlayCircle,
  locked: Lock,
};

const statusStyles: Record<CurriculumModule["status"], string> = {
  completed: "text-emerald-600 dark:text-emerald-500",
  "in-progress": "text-primary",
  locked: "text-muted-foreground",
};

export function CourseTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="w-fit">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4">
        <Card>
          <CardContent className="flex flex-col gap-6">
            <div>
              <h2 className="mb-2 font-medium">About this course</h2>
              <p className="text-sm text-muted-foreground">{courseDetail.description}</p>
            </div>

            <Separator />

            <div>
              <h2 className="mb-3 font-medium">What you&apos;ll learn</h2>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {courseDetail.learningPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="curriculum" className="mt-4">
        <Card>
          <CardContent className="flex flex-col divide-y">
            {curriculum.map((module, index) => {
              const Icon = statusIcon[module.status];
              return (
                <div
                  key={module.title}
                  className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <Icon className={cn("size-4.5 shrink-0", statusStyles[module.status])} />
                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="truncate text-sm font-medium">{module.title}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                    {module.duration}
                  </span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews" className="mt-4">
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <Card key={review.name}>
              <CardContent className="flex gap-3">
                <Avatar>
                  <AvatarFallback>{getInitials(review.name)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium">{review.name}</p>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={cn(
                          "size-3.5",
                          index < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-muted text-muted"
                        )}
                      />
                    ))}
                  </span>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
