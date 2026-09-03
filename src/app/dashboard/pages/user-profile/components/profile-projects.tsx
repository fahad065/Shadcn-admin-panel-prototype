import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "Atlas Design System",
    description: "A unified component library and token pipeline used across 6 product teams.",
    stack: ["Figma", "React", "Style Dictionary"],
  },
  {
    title: "Fintech Dashboard Revamp",
    description: "Reimagined analytics dashboard, cutting task completion time by 35%.",
    stack: ["UX Research", "Figma", "Prototyping"],
  },
  {
    title: "Onboarding Flow 2.0",
    description: "Simplified account setup from 9 steps down to 4.",
    stack: ["UX Writing", "Figma", "A/B Testing"],
  },
  {
    title: "Accessibility Audit Toolkit",
    description: "An internal toolkit for auditing WCAG 2.2 compliance across products.",
    stack: ["Accessibility", "Notion", "Figma"],
  },
  {
    title: "Mobile Wallet App",
    description: "End-to-end design for a peer-to-peer payments app.",
    stack: ["iOS", "Figma", "Motion"],
  },
  {
    title: "Design Ops Playbook",
    description: "Documentation and rituals that scaled the design team from 4 to 14.",
    stack: ["Design Ops", "Notion", "Workshops"],
  },
];

export function ProfileProjects() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.title}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
