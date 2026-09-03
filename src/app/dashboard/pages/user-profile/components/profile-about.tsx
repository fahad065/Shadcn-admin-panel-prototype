import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bio =
  "Product designer with 8+ years of experience building design systems and data-heavy interfaces for fintech and B2B SaaS teams. I care most about the gap between a polished mockup and a component that survives real production data — currently leading the design system practice at Lumen Studio, where I split my time between systems work and hands-on product design.";

const skills = [
  "Design Systems",
  "Figma",
  "UX Research",
  "Prototyping",
  "Design Tokens",
  "Accessibility",
  "Frontend (React)",
  "Design Ops",
  "Workshop Facilitation",
  "Motion Design",
];

export function ProfileAbout() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <p className="leading-relaxed text-muted-foreground">{bio}</p>
        <div>
          <h3 className="mb-2 text-sm font-medium">Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
