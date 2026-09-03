import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileActivities } from "./profile-activities";
import { ProfileMembers } from "./profile-members";
import { ProfileOverview } from "./profile-overview";
import { ProfileProjects } from "./profile-projects";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="overview">
      <div className="overflow-x-auto">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="overview" className="mt-4">
        <ProfileOverview />
      </TabsContent>
      <TabsContent value="projects" className="mt-4">
        <ProfileProjects />
      </TabsContent>
      <TabsContent value="activities" className="mt-4">
        <ProfileActivities />
      </TabsContent>
      <TabsContent value="members" className="mt-4">
        <ProfileMembers />
      </TabsContent>
    </Tabs>
  );
}
