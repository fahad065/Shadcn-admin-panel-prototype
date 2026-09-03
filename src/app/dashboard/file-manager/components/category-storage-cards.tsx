import { FileText, ImageIcon, Layers, Video, type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Category = {
  name: string;
  size: string;
  files: string;
  percent: number;
  icon: LucideIcon;
  iconClassName: string;
};

const categories: Category[] = [
  {
    name: "Documents",
    size: "128.4 GB",
    files: "8,214 files",
    percent: 64,
    icon: FileText,
    iconClassName: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Images",
    size: "96.7 GB",
    files: "12,506 files",
    percent: 48,
    icon: ImageIcon,
    iconClassName: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    name: "Videos",
    size: "84.2 GB",
    files: "1,932 files",
    percent: 42,
    icon: Video,
    iconClassName: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    name: "Others",
    size: "33.3 GB",
    files: "1,666 files",
    percent: 17,
    icon: Layers,
    iconClassName: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  },
];

export function CategoryStorageCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => (
        <Card key={category.name}>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div
                className={cn(
                  "flex size-9 items-center justify-center rounded-md",
                  category.iconClassName
                )}
              >
                <category.icon className="size-4.5" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {category.percent}%
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{category.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{category.files}</p>
            </div>
            <div className="space-y-1.5">
              <Progress value={category.percent} />
              <p className="text-xs text-muted-foreground">{category.size} used</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
