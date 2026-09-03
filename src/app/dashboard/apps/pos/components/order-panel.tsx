"use client";

import { Minus, Plus, Receipt, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { formatCurrency, TAX_RATE, type CartLine } from "./data";

interface OrderPanelProps {
  cart: CartLine[];
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
  onCharge: () => void;
  className?: string;
}

export function OrderPanel({
  cart,
  onIncrement,
  onDecrement,
  onRemove,
  onClear,
  onCharge,
  className,
}: OrderPanelProps) {
  const subtotal = cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  const itemCount = cart.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <div
      className={cn(
        "w-[340px] shrink-0 flex-col border-l sm:w-[360px] lg:w-[380px]",
        className
      )}
    >
      <div className="flex shrink-0 items-center justify-between gap-2 border-b p-3">
        <div>
          <h2 className="text-sm font-semibold">Current Order</h2>
          <p className="text-xs text-muted-foreground">
            {itemCount === 0 ? "No items yet" : `${itemCount} item${itemCount === 1 ? "" : "s"}`}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={onClear} disabled={cart.length === 0}>
          Clear
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-3">
          {cart.map((line) => (
            <div
              key={line.product.id}
              className="flex items-start gap-2 rounded-lg border bg-card p-2.5"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{line.product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {formatCurrency(line.product.price)} each
                </p>

                <div className="mt-2 flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="icon-xs"
                    aria-label={`Decrease ${line.product.name} quantity`}
                    onClick={() => onDecrement(line.product.id)}
                  >
                    <Minus />
                  </Button>
                  <span className="w-5 text-center text-sm tabular-nums">{line.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon-xs"
                    aria-label={`Increase ${line.product.name} quantity`}
                    onClick={() => onIncrement(line.product.id)}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between gap-2 self-stretch">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={`Remove ${line.product.name}`}
                  onClick={() => onRemove(line.product.id)}
                >
                  <X />
                </Button>
                <span className="text-sm font-medium tabular-nums">
                  {formatCurrency(line.product.price * line.quantity)}
                </span>
              </div>
            </div>
          ))}

          {cart.length === 0 && (
            <div className="flex flex-col items-center gap-2 p-8 text-center text-sm text-muted-foreground">
              <Receipt className="size-8 text-muted-foreground/60" />
              <p>Cart is empty.</p>
              <p className="text-xs">Tap a product to add it to the order.</p>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="shrink-0 border-t p-3">
        <div className="flex flex-col gap-1.5 text-sm">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span className="tabular-nums">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Tax ({(TAX_RATE * 100).toFixed(2)}%)</span>
            <span className="tabular-nums">{formatCurrency(tax)}</span>
          </div>
        </div>

        <Separator className="my-3" />

        <div className="flex items-center justify-between text-base font-semibold">
          <span>Total</span>
          <span className="tabular-nums">{formatCurrency(total)}</span>
        </div>

        <Button
          size="lg"
          className="mt-3 h-11 w-full text-base"
          disabled={cart.length === 0}
          onClick={onCharge}
        >
          Charge {formatCurrency(total)}
        </Button>
      </div>
    </div>
  );
}
