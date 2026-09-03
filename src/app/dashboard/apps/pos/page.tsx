"use client";

import { useMemo, useState } from "react";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { OrderPanel } from "./components/order-panel";
import { ProductGrid } from "./components/product-grid";
import {
  formatCurrency,
  products,
  TAX_RATE,
  type CartLine,
  type CategoryId,
  type Product,
} from "./components/data";

export default function PosPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [cartOpen, setCartOpen] = useState(false);

  const cartItemCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const cartSubtotal = cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const cartTotal = cartSubtotal * (1 + TAX_RATE);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch = !query || product.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  function handleSelectProduct(product: Product) {
    setCart((previous) => {
      const existing = previous.find((line) => line.product.id === product.id);
      if (existing) {
        return previous.map((line) =>
          line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line
        );
      }
      return [...previous, { product, quantity: 1 }];
    });
  }

  function handleIncrement(productId: string) {
    setCart((previous) =>
      previous.map((line) =>
        line.product.id === productId ? { ...line, quantity: line.quantity + 1 } : line
      )
    );
  }

  function handleDecrement(productId: string) {
    setCart((previous) =>
      previous
        .map((line) =>
          line.product.id === productId ? { ...line, quantity: line.quantity - 1 } : line
        )
        .filter((line) => line.quantity > 0)
    );
  }

  function handleRemove(productId: string) {
    setCart((previous) => previous.filter((line) => line.product.id !== productId));
  }

  function handleClear() {
    setCart([]);
  }

  function handleCharge() {
    setCart([]);
    setCartOpen(false);
  }

  return (
    <div className="h-[calc(100vh-5.5rem)] overflow-hidden md:h-[calc(100vh-6.5rem)]">
      <div className="relative flex h-full overflow-hidden rounded-xl border bg-background">
        <ProductGrid
          products={filteredProducts}
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          onSelectProduct={handleSelectProduct}
        />
        <OrderPanel
          cart={cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onRemove={handleRemove}
          onClear={handleClear}
          onCharge={handleCharge}
          className="hidden md:flex"
        />

        {cart.length > 0 && (
          <div className="absolute inset-x-3 bottom-3 md:hidden">
            <Button
              size="lg"
              className="h-12 w-full justify-between px-4 text-base shadow-lg"
              onClick={() => setCartOpen(true)}
            >
              <span className="flex items-center gap-2">
                <ShoppingCart className="size-4" />
                {cartItemCount} item{cartItemCount === 1 ? "" : "s"}
              </span>
              <span>{formatCurrency(cartTotal)}</span>
            </Button>
          </div>
        )}
      </div>

      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent side="right" showCloseButton={false} className="w-full gap-0 p-0 sm:max-w-sm">
          <SheetTitle className="sr-only">Current Order</SheetTitle>
          <OrderPanel
            cart={cart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
            onClear={handleClear}
            onCharge={handleCharge}
            className="flex h-full w-full border-l-0"
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
