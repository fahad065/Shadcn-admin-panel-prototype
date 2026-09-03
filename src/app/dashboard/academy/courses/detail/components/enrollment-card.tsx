import { BookOpen, Check, Clock, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { courseDetail, formatPrice, included } from "./data";

export function EnrollmentCard() {
  return (
    <Card className="lg:sticky lg:top-6">
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-foreground">
            {formatPrice(courseDetail.price)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(courseDetail.originalPrice)}
          </span>
        </div>

        <Button className="w-full">Enroll Now</Button>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="size-3.5" />
            {courseDetail.duration} total
          </span>
          <span className="flex items-center gap-2">
            <BookOpen className="size-3.5" />
            {courseDetail.lessons} lessons
          </span>
          <span className="flex items-center gap-2">
            <Globe className="size-3.5" />
            {courseDetail.language}
          </span>
        </div>

        <Separator />

        <div>
          <p className="mb-2.5 text-sm font-medium text-foreground">This course includes</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
