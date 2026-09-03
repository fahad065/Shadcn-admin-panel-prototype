import { Badge } from "@/components/ui/badge";

import { courseDetail } from "./data";

export function CourseHero() {
  const Icon = courseDetail.icon;

  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent md:h-64">
      <Icon className="size-16 text-primary/60" />
      <Badge className="absolute top-3 left-3" variant="secondary">
        Bestseller
      </Badge>
    </div>
  );
}
