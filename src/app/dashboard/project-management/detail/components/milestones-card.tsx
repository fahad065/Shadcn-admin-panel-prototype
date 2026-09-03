"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Phase = "Done" | "In Progress" | "Upcoming";

type Milestone = {
  id: string;
  title: string;
  description: string;
  due: string;
  phase: Phase;
  done: boolean;
};

const initialMilestones: Milestone[] = [
  {
    id: "1",
    title: "Discovery & requirements sign-off",
    description: "Stakeholder interviews and finalized scope document",
    due: "Jan 26, 2026",
    phase: "Done",
    done: true,
  },
  {
    id: "2",
    title: "Architecture & data model design",
    description: "Schema mapping and integration blueprint for the Atlas stack",
    due: "Feb 13, 2026",
    phase: "Done",
    done: true,
  },
  {
    id: "3",
    title: "Historical data migration scripts",
    description: "ETL pipelines validated against a staging snapshot",
    due: "Mar 06, 2026",
    phase: "Done",
    done: true,
  },
  {
    id: "4",
    title: "Core pipeline & reporting modules",
    description: "Rebuild deal pipeline, forecasting, and dashboard views",
    due: "Mar 27, 2026",
    phase: "In Progress",
    done: false,
  },
  {
    id: "5",
    title: "QA regression & user acceptance testing",
    description: "Full test pass with the sales team before rollout",
    due: "Apr 10, 2026",
    phase: "Upcoming",
    done: false,
  },
  {
    id: "6",
    title: "Production cutover & go-live",
    description: "Final sync, DNS switch, and legacy system sunset",
    due: "Apr 24, 2026",
    phase: "Upcoming",
    done: false,
  },
];

const phaseStyles: Record<Phase, string> = {
  Done: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  "In Progress": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Upcoming: "bg-muted text-muted-foreground",
};

export function MilestonesCard() {
  const [milestones, setMilestones] = React.useState(initialMilestones);

  function toggle(id: string) {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? { ...m, done: !m.done } : m))
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Milestones</CardTitle>
        <CardDescription>Key checkpoints from kickoff to go-live</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="flex items-start gap-3">
            <Checkbox
              checked={milestone.done}
              onCheckedChange={() => toggle(milestone.id)}
              className="mt-0.5"
              aria-label={`Mark "${milestone.title}" as ${milestone.done ? "not done" : "done"}`}
            />
            <div className="flex-1">
              <p
                className={cn(
                  "text-sm font-medium",
                  milestone.done && "text-muted-foreground line-through"
                )}
              >
                {milestone.title}
              </p>
              <p
                className={cn(
                  "text-xs text-muted-foreground",
                  milestone.done && "line-through"
                )}
              >
                {milestone.description}
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <Badge variant="secondary" className={cn("text-[11px]", phaseStyles[milestone.phase])}>
                  {milestone.phase}
                </Badge>
                <span className="text-xs text-muted-foreground">Due {milestone.due}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
