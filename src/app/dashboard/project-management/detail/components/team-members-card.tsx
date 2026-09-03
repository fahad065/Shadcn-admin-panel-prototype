import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

const teamMembers: TeamMember[] = [
  { name: "Priya Nair", role: "Project Lead", initials: "PN" },
  { name: "Owen Baptiste", role: "Product Designer", initials: "OB" },
  { name: "Layla Haddad", role: "Frontend Engineer", initials: "LH" },
  { name: "Kenji Watanabe", role: "Frontend Engineer", initials: "KW" },
  { name: "Grace Muthoni", role: "Backend Engineer", initials: "GM" },
  { name: "Diego Salcedo", role: "QA Engineer", initials: "DS" },
];

export function TeamMembersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>{teamMembers.length} people staffed on this project</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex items-center justify-between gap-3 rounded-lg px-2 py-2 hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{member.name}</span>
            </div>
            <Badge variant="outline">{member.role}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
