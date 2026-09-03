"use client";

import { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const paymentTypes = [
  { value: "card", label: "Card", icon: CreditCard },
  { value: "paypal", label: "Paypal", icon: Wallet },
] as const;

const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const years = ["2026", "2027", "2028", "2029", "2030"];

export function PaymentMethodCard() {
  const [type, setType] = useState<"card" | "paypal">("card");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>Add a new payment method to your account.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <RadioGroup
          value={type}
          onValueChange={(value) => setType(value as "card" | "paypal")}
          className="grid grid-cols-2 gap-3"
        >
          {paymentTypes.map((option) => {
            const Icon = option.icon;
            const selected = type === option.value;

            return (
              <Label
                key={option.value}
                htmlFor={`payment-type-${option.value}`}
                className={cn(
                  "flex cursor-pointer items-center justify-center gap-2 rounded-xl border p-3 font-normal transition-colors",
                  selected
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted/50"
                )}
              >
                <Icon className="size-4 text-muted-foreground" />
                {option.label}
                <RadioGroupItem
                  value={option.value}
                  id={`payment-type-${option.value}`}
                  className="sr-only"
                />
              </Label>
            );
          })}
        </RadioGroup>

        {type === "card" ? (
          <div className="flex flex-col gap-4">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="payment-name">Name</Label>
                <Input id="payment-name" placeholder="First Last" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment-city">City</Label>
                <Input id="payment-city" placeholder="San Francisco" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="payment-card-number">Card number</Label>
              <Input id="payment-card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="payment-month">Expires</Label>
                <Select defaultValue={months[0]}>
                  <SelectTrigger id="payment-month" className="w-full">
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment-year">Year</Label>
                <Select defaultValue={years[0]}>
                  <SelectTrigger id="payment-year" className="w-full">
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment-cvv">CVV</Label>
                <Input id="payment-cvv" placeholder="123" />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            You&apos;ll be redirected to Paypal to complete your payment setup.
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  );
}
