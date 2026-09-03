import { ArrowLeft, Star, Users } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { courseDetail } from "./data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function CourseHeader() {
  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="ghost"
        size="sm"
        className="w-fit gap-1.5 text-muted-foreground"
        render={<Link href="/dashboard/academy/courses" />}
        nativeButton={false}
      >
        <ArrowLeft className="size-3.5" />
        Back to Course List
      </Button>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 dark:text-blue-400">
              {courseDetail.category}
            </Badge>
            <Badge variant="outline">{courseDetail.level}</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">{courseDetail.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Avatar size="sm">
                <AvatarFallback>{getInitials(courseDetail.instructor)}</AvatarFallback>
              </Avatar>
              {courseDetail.instructor}
            </span>
            <span className="flex items-center gap-1 font-medium text-foreground">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              {courseDetail.rating.toFixed(1)}
              <span className="font-normal text-muted-foreground">
                ({courseDetail.reviewCount} reviews)
              </span>
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-3.5" />
              {courseDetail.students.toLocaleString("en-US")} students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
