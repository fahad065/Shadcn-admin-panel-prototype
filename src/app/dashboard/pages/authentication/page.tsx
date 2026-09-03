import { PageHeader } from "@/components/page-header";
import { AuthCard } from "./components/auth-card";

export default function AuthenticationPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Authentication"
        description="Auth screen variants included in this kit"
      />
      <AuthCard />
    </div>
  );
}
