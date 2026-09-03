import { ProfileHero } from "./components/profile-hero";
import { ProfileStats } from "./components/profile-stats";
import { ProfileTabs } from "./components/profile-tabs";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <ProfileHero />
      <ProfileStats />
      <ProfileTabs />
    </div>
  );
}
