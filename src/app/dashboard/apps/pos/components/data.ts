import {
  CakeSlice,
  Coffee,
  Cookie,
  Croissant,
  CupSoda,
  Donut,
  EggFried,
  Leaf,
  Package,
  Salad,
  Sandwich,
  Shirt,
  ShoppingBag,
  Soup,
  type LucideIcon,
} from "lucide-react";

export type CategoryId = "drinks" | "food" | "bakery" | "merch";

export interface Category {
  id: CategoryId;
  label: string;
}

export const categories: Category[] = [
  { id: "drinks", label: "Drinks" },
  { id: "food", label: "Food" },
  { id: "bakery", label: "Bakery" },
  { id: "merch", label: "Merch" },
];

export const categoryStyles: Record<CategoryId, string> = {
  drinks: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  food: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  bakery: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  merch: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  icon: LucideIcon;
}

export const products: Product[] = [
  { id: "espresso", name: "Espresso", category: "drinks", price: 3.25, icon: Coffee },
  { id: "latte", name: "Caffè Latte", category: "drinks", price: 4.5, icon: Coffee },
  { id: "cold-brew", name: "Cold Brew", category: "drinks", price: 4.75, icon: CupSoda },
  { id: "matcha-latte", name: "Matcha Latte", category: "drinks", price: 4.95, icon: Leaf },

  { id: "turkey-club", name: "Turkey Club", category: "food", price: 8.95, icon: Sandwich },
  { id: "tomato-soup", name: "Tomato Basil Soup", category: "food", price: 6.5, icon: Soup },
  { id: "garden-salad", name: "Garden Salad", category: "food", price: 7.25, icon: Salad },
  { id: "breakfast-wrap", name: "Breakfast Wrap", category: "food", price: 7.5, icon: EggFried },

  { id: "croissant", name: "Butter Croissant", category: "bakery", price: 3.95, icon: Croissant },
  { id: "cookie", name: "Choc Chip Cookie", category: "bakery", price: 2.75, icon: Cookie },
  { id: "muffin", name: "Blueberry Muffin", category: "bakery", price: 3.5, icon: CakeSlice },
  { id: "donut", name: "Glazed Donut", category: "bakery", price: 2.95, icon: Donut },

  { id: "mug", name: "Ceramic Mug", category: "merch", price: 14, icon: Package },
  { id: "tote", name: "Logo Tote Bag", category: "merch", price: 18, icon: ShoppingBag },
  { id: "tshirt", name: "Branded T-Shirt", category: "merch", price: 22, icon: Shirt },
  { id: "beans", name: "Coffee Beans 12oz", category: "merch", price: 16.5, icon: Package },
];

export interface CartLine {
  product: Product;
  quantity: number;
}

export const TAX_RATE = 0.0825;

export function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
