import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AppearanceForm } from "./components/appearance-form";

export default function SettingsAppearancePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the dashboard.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AppearanceForm />
      </CardContent>
    </Card>
  );
}
