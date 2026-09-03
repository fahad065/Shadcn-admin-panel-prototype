import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stages = [
  { name: "Lead", deals: 235, amount: "$420,500", percent: 38, color: "bg-chart-1" },
  { name: "Qualified", deals: 146, amount: "$267,800", percent: 24, color: "bg-chart-2" },
  { name: "Proposal", deals: 84, amount: "$192,400", percent: 18, color: "bg-chart-3" },
  { name: "Negotiation", deals: 52, amount: "$129,600", percent: 12, color: "bg-chart-4" },
  { name: "Closed Won", deals: 36, amount: "$87,200", percent: 8, color: "bg-chart-5" },
];

export function SalesPipelineCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Pipeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
          {stages.map((stage) => (
            <div
              key={stage.name}
              className={stage.color}
              style={{ width: `${stage.percent}%` }}
            />
          ))}
        </div>

        <div className="space-y-4">
          {stages.map((stage) => (
            <div key={stage.name} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${stage.color}`} />
                <div>
                  <p className="text-sm font-medium">{stage.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {stage.deals} deals · {stage.amount}
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {stage.percent}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
