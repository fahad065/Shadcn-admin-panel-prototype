import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionHistory } from "./transaction-history";

const bio =
  "Sasha Kim spends most days building The Forge Collective, a community of 4,500+ indie makers, streamers, and product builders. What started as a weekly Discord call in 2021 has grown into a paid membership with live workshops, a mentorship pool, and an annual meetup tour. Sasha still writes the weekly newsletter, hosts office hours, and reviews every project that gets featured in the community showcase.";

const skills = [
  "Community Building",
  "Content Strategy",
  "Livestream Production",
  "Newsletter Growth",
  "Video Editing",
  "Public Speaking",
  "Discord Moderation",
  "Brand Partnerships",
  "Copywriting",
  "Event Hosting",
];

export function ProfileOverview() {
  return (
    <div className="flex flex-col gap-4">
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

      <TransactionHistory />
    </div>
  );
}
