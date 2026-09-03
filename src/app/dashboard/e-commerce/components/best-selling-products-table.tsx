import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Product = {
  name: string;
  category: string;
  unitsSold: number;
  revenue: string;
};

const products: Product[] = [
  { name: "Aurora Wireless Earbuds", category: "Audio", unitsSold: 842, revenue: "$50,520" },
  { name: "Nimbus Standing Desk", category: "Furniture", unitsSold: 613, revenue: "$183,900" },
  { name: "Solace Weighted Blanket", category: "Home", unitsSold: 574, revenue: "$28,700" },
  { name: "Pulse Fitness Tracker", category: "Wearables", unitsSold: 498, revenue: "$44,820" },
  { name: "Drift Ceramic Mug Set", category: "Kitchen", unitsSold: 356, revenue: "$10,680" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function BestSellingProductsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Best Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Units Sold</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-medium">
                      {initials(product.name)}
                    </span>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">{product.unitsSold}</TableCell>
                <TableCell className="text-right">{product.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
