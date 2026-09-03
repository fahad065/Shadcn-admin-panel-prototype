import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StepComplete({ name }: { name: string }) {
  const firstName = name.trim().split(/\s+/)[0];

  return (
    <>
      <CardHeader className="items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10">
          <CheckCircle2 className="size-8 text-emerald-600 dark:text-emerald-500" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-1.5 text-center">
        <CardTitle className="text-xl">
          {firstName ? `You're all set, ${firstName}!` : "You're all set!"}
        </CardTitle>
        <CardDescription className="text-balance">
          Your workspace is ready to go. You can always update these
          preferences later from settings.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          className="w-full"
          nativeButton={false}
          render={<Link href="/dashboard/default" />}
        >
          Go to Dashboard
        </Button>
      </CardFooter>
    </>
  );
}
