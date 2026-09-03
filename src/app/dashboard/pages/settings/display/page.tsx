import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DisplayForm } from "./components/display-form";

export default function SettingsDisplayPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Display</CardTitle>
        <CardDescription>
          Turn items on or off to control what&apos;s displayed in the app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DisplayForm />
      </CardContent>
    </Card>
  );
}
