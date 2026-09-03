import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Reminder = {
  date: string;
  month: string;
  title: string;
};

const reminders: Reminder[] = [
  { date: "08", month: "Oct", title: "Client walkthrough at Somerset House" },
  { date: "12", month: "Oct", title: "Submit listing renewal paperwork" },
  { date: "17", month: "Oct", title: "Follow up with Ridgeline Group lead" },
];

export function RemindersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {reminders.map((reminder) => (
          <div key={reminder.title} className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 flex-col items-center justify-center rounded-md bg-muted leading-none">
              <span className="text-sm font-semibold">{reminder.date}</span>
              <span className="text-[10px] text-muted-foreground uppercase">{reminder.month}</span>
            </div>
            <p className="text-sm">{reminder.title}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
