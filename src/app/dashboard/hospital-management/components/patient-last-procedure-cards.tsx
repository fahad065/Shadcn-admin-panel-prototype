import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Patient = {
  name: string;
  procedure: string;
  date: string;
};

const patients: Patient[] = [
  { name: "Evelyn Brooks", procedure: "Cardiac catheterization", date: "Sep 1, 2026" },
  { name: "Marcus Chen", procedure: "MRI brain scan", date: "Aug 30, 2026" },
  { name: "Lila Anand", procedure: "Routine vaccination", date: "Aug 29, 2026" },
  { name: "Owen Fitzgerald", procedure: "Knee arthroscopy", date: "Aug 27, 2026" },
  { name: "Priya Natarajan", procedure: "Blood panel", date: "Aug 26, 2026" },
  { name: "Derek Osei", procedure: "Appendectomy", date: "Aug 24, 2026" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PatientLastProcedureCards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Patients</CardTitle>
        <CardDescription>Last procedure performed for each patient</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {patients.map((patient) => (
          <div key={patient.name} className="flex items-center gap-3 rounded-lg border p-3">
            <Avatar className="size-10 shrink-0">
              <AvatarFallback className="text-xs">{initials(patient.name)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{patient.name}</p>
              <p className="truncate text-xs text-muted-foreground">{patient.procedure}</p>
              <p className="text-xs text-muted-foreground">{patient.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
