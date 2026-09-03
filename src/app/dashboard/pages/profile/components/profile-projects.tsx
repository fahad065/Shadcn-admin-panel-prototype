import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectStatus = "Active" | "In Production" | "Planning" | "Completed" | "Draft";

type Project = {
  title: string;
  description: string;
  status: ProjectStatus;
};

const statusStyles: Record<ProjectStatus, string> = {
  Active: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "In Production": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Planning: "bg-amber-500/10 text-amber-600 dark:text-amber-500",
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  Draft: "bg-muted text-muted-foreground",
};

const projects: Project[] = [
  {
    title: "Creator Starter Kit",
    description: "Free onboarding bundle handed to every new community member.",
    status: "Active",
  },
  {
    title: "Weekly Office Hours",
    description: "Live Q&A series for members shipping their first product.",
    status: "Active",
  },
  {
    title: "Forge Podcast Season 2",
    description: "Interview series with indie makers about their launches.",
    status: "In Production",
  },
  {
    title: "Community Playbook",
    description: "Internal guide covering norms, tools, and rituals for moderators.",
    status: "Draft",
  },
  {
    title: "Spring Meetup Tour",
    description: "Three-city pop-up events for local chapter members.",
    status: "Planning",
  },
  {
    title: "Newsletter Redesign",
    description: "Refreshed weekly digest template and content structure.",
    status: "Completed",
  },
];

export function ProfileProjects() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.title}>
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle>{project.title}</CardTitle>
              <Badge variant="outline" className={cn("shrink-0 border-transparent", statusStyles[project.status])}>
                {project.status}
              </Badge>
            </div>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
