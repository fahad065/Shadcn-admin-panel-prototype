import { PartyPopper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CongratulationsCard() {
  return (
    <Card className="justify-center bg-gradient-to-br from-primary/10 to-transparent xl:col-span-2">
      <CardContent className="flex items-center justify-between gap-6">
        <div>
          <h2 className="text-lg font-semibold">Congratulations Toby! 🎉</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Your store just crossed{" "}
            <span className="font-medium text-foreground">$50,000</span> in
            sales this month. You&apos;ve unlocked the Gold Seller badge —
            check it out on your profile.
          </p>
          <Button size="sm" className="mt-4">
            View Badge
          </Button>
        </div>
        <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary/10 max-sm:hidden">
          <PartyPopper className="size-9 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
