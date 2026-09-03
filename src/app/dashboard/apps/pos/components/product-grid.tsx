"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { categories, categoryStyles, formatCurrency, type CategoryId, type Product } from "./data";

interface ProductGridProps {
  products: Product[];
  search: string;
  onSearchChange: (value: string) => void;
  category: CategoryId | "all";
  onCategoryChange: (category: CategoryId | "all") => void;
  onSelectProduct: (product: Product) => void;
}

export function ProductGrid({
  products,
  search,
  onSearchChange,
  category,
  onCategoryChange,
  onSelectProduct,
}: ProductGridProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex shrink-0 flex-col gap-3 border-b p-3">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products..."
            className="pl-8"
            aria-label="Search products"
          />
        </div>

        <Tabs
          value={category}
          onValueChange={(value) => onCategoryChange(value as CategoryId | "all")}
        >
          <TabsList className="w-full sm:w-fit">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((item) => (
              <TabsTrigger key={item.id} value={item.id}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => onSelectProduct(product)}
                className="flex flex-col items-start gap-2.5 rounded-xl border bg-card p-3 text-left transition-colors hover:bg-muted"
              >
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg",
                    categoryStyles[product.category]
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{formatCurrency(product.price)}</p>
                </div>
              </button>
            );
          })}

          {products.length === 0 && (
            <p className="col-span-full p-8 text-center text-sm text-muted-foreground">
              No products found.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
