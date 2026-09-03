import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CountryRequests = {
  country: string;
  flag: string;
  requests: string;
  share: number;
};

const requestsByGeography: CountryRequests[] = [
  { country: "United States", flag: "🇺🇸", requests: "48,210", share: 37 },
  { country: "United Kingdom", flag: "🇬🇧", requests: "21,640", share: 17 },
  { country: "Germany", flag: "🇩🇪", requests: "16,380", share: 13 },
  { country: "India", flag: "🇮🇳", requests: "14,905", share: 12 },
  { country: "Canada", flag: "🇨🇦", requests: "11,230", share: 9 },
  { country: "Australia", flag: "🇦🇺", requests: "8,120", share: 6 },
];

export function RequestsByGeographyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Requests by Geography</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Country</TableHead>
              <TableHead>Requests</TableHead>
              <TableHead className="text-right">Share</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requestsByGeography.map((row) => (
              <TableRow key={row.country}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{row.flag}</span>
                    <span className="font-medium">{row.country}</span>
                  </div>
                </TableCell>
                <TableCell>{row.requests}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {row.share}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
