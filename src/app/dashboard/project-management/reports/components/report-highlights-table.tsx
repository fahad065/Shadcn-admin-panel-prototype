import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Standing = "Ahead" | "On Track" | "At Risk";

type QuarterHighlight = {
  quarter: string;
  completed: number;
  planned: number;
  onTime: string;
  budgetVariance: string;
  standing: Standing;
};

const highlights: QuarterHighlight[] = [
  { quarter: "Q3 2025", completed: 18, planned: 22, onTime: "81%", budgetVariance: "-5.7%", standing: "On Track" },
  { quarter: "Q4 2025", completed: 24, planned: 26, onTime: "85%", budgetVariance: "+3.4%", standing: "At Risk" },
  { quarter: "Q1 2026", completed: 21, planned: 24, onTime: "84%", budgetVariance: "-5.4%", standing: "On Track" },
  { quarter: "Q2 2026", completed: 27, planned: 28, onTime: "89%", budgetVariance: "-3.5%", standing: "Ahead" },
  { quarter: "Q3 2026", completed: 25, planned: 27, onTime: "88%", budgetVariance: "-3.3%", standing: "On Track" },
];

const standingStyles: Record<Standing, string> = {
  Ahead: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
  "On Track": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "At Risk": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export function ReportHighlightsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Highlights</CardTitle>
        <CardDescription>Quarterly rollup of delivery and budget performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quarter</TableHead>
                <TableHead>Completed</TableHead>
                <TableHead>Planned</TableHead>
                <TableHead>On-Time Rate</TableHead>
                <TableHead>Budget Variance</TableHead>
                <TableHead>Standing</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {highlights.map((row) => (
                <TableRow key={row.quarter}>
                  <TableCell className="font-medium">{row.quarter}</TableCell>
                  <TableCell>{row.completed}</TableCell>
                  <TableCell>{row.planned}</TableCell>
                  <TableCell>{row.onTime}</TableCell>
                  <TableCell>{row.budgetVariance}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={standingStyles[row.standing]}>
                      {row.standing}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
