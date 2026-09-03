import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CountrySales = {
  country: string;
  flag: string;
  sales: string;
  orders: number;
  share: number;
};

const salesByCountry: CountrySales[] = [
  { country: "Canada", flag: "🇨🇦", sales: "$42,180", orders: 612, share: 28 },
  { country: "Greenland", flag: "🇬🇱", sales: "$31,940", orders: 448, share: 21 },
  { country: "Russia", flag: "🇷🇺", sales: "$26,705", orders: 389, share: 18 },
  { country: "Australia", flag: "🇦🇺", sales: "$19,860", orders: 301, share: 13 },
  { country: "Germany", flag: "🇩🇪", sales: "$15,230", orders: 244, share: 10 },
  { country: "Brazil", flag: "🇧🇷", sales: "$12,075", orders: 198, share: 8 },
];

export function SalesByCountryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Country</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Country</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead className="text-right">Share</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesByCountry.map((row) => (
              <TableRow key={row.country}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{row.flag}</span>
                    <div>
                      <p className="font-medium">{row.country}</p>
                      <p className="text-xs text-muted-foreground">
                        {row.orders} orders
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{row.sales}</TableCell>
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
