import { PageHeader } from "@/components/page-header";
import { SettingsNav } from "./components/settings-nav";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Settings"
        description="Manage your account settings and set e-mail preferences."
      />
      <div className="grid min-w-0 gap-8 md:grid-cols-[200px_1fr]">
        <SettingsNav />
        <div className="min-w-0 max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
