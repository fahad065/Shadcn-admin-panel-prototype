import { CalendarDays, Flag, UserRound } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";

export function ProjectHeaderCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold tracking-tight">Atlas CRM Platform Migration</h2>
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 dark:text-blue-400">
              In Progress
            </Badge>
          </div>
          <Badge variant="outline" className="w-fit border-amber-500/30 text-amber-600 dark:text-amber-400">
            <Flag className="size-3" />
            High Priority
          </Badge>
        </div>

        <p className="max-w-3xl text-sm text-muted-foreground">
          Replatform the legacy customer relationship system onto the Atlas stack, migrating historical
          account data, rebuilding the pipeline and reporting modules, and training the sales team on the
          new workflows ahead of the Q2 cutover.
        </p>

        <Progress value={64} className="gap-2">
          <div className="flex items-center justify-between">
            <ProgressLabel>Overall Progress</ProgressLabel>
            <ProgressValue />
          </div>
        </Progress>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t pt-4 text-sm">
          <div className="flex items-center gap-2">
            <Avatar className="size-7">
              <AvatarFallback className="text-xs">RS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs text-muted-foreground">Client</p>
              <p className="font-medium">Renata Souza</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-muted">
              <UserRound className="size-3.5 text-muted-foreground" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Project Lead</p>
              <p className="font-medium">Priya Nair</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-muted">
              <CalendarDays className="size-3.5 text-muted-foreground" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Start Date</p>
              <p className="font-medium">Jan 12, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-muted">
              <CalendarDays className="size-3.5 text-muted-foreground" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Deadline</p>
              <p className="font-medium">Apr 24, 2026</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
