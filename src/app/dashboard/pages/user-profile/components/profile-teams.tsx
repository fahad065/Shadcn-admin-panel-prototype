import {
  Accessibility,
  Component,
  PenTool,
  Rocket,
  Search,
  Settings2,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Team = {
  name: string;
  description: string;
  members: number;
  icon: LucideIcon;
};

const teams: Team[] = [
  {
    name: "Design Systems Guild",
    description: "Owns the shared component library, tokens, and design documentation.",
    members: 9,
    icon: Component,
  },
  {
    name: "Product Design",
    description: "Core product design team for Lumen Studio's flagship dashboard.",
    members: 14,
    icon: PenTool,
  },
  {
    name: "Accessibility Council",
    description: "Cross-functional group auditing WCAG compliance across products.",
    members: 6,
    icon: Accessibility,
  },
  {
    name: "Design Ops",
    description: "Rituals, tooling, and process that keep design delivery on track.",
    members: 5,
    icon: Settings2,
  },
  {
    name: "Research Circle",
    description: "Plans and shares generative and evaluative research across teams.",
    members: 8,
    icon: Search,
  },
  {
    name: "Onboarding Task Force",
    description: "Temporary team reshaping the first-run experience for new users.",
    members: 7,
    icon: Rocket,
  },
];

export function ProfileTeams() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {teams.map((team) => (
        <Card key={team.name}>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <team.icon className="size-5" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="size-3.5" />
                {team.members} members
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{team.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{team.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
