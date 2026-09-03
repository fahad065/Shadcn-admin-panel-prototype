import {
  Footprints,
  Layers,
  Shirt,
  ShoppingBag,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Product = {
  name: string;
  sold: number;
  icon: LucideIcon;
  iconClassName: string;
};

const products: Product[] = [
  {
    name: "Sports Shoes",
    sold: 316,
    icon: Footprints,
    iconClassName: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Black T-Shirt",
    sold: 274,
    icon: Shirt,
    iconClassName: "bg-neutral-500/10 text-neutral-700 dark:text-neutral-300",
  },
  {
    name: "Jeans",
    sold: 195,
    icon: Layers,
    iconClassName: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    name: "Red Sneakers",
    sold: 402,
    icon: Footprints,
    iconClassName: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    name: "Red Scarf",
    sold: 280,
    icon: ShoppingBag,
    iconClassName: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    name: "Kitchen Accessory",
    sold: 150,
    icon: UtensilsCrossed,
    iconClassName: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

export function BestSellingProductCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Best Selling Product</CardTitle>
        <CardDescription>Top-Selling Products at a Glance</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.name} className="flex items-center gap-3 rounded-lg border p-3">
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-md",
                product.iconClassName
              )}
            >
              <product.icon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.sold} sold</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
