import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileAbout } from "./profile-about";
import { ProfileActivity } from "./profile-activity";
import { ProfileConnections } from "./profile-connections";
import { ProfileProjects } from "./profile-projects";
import { ProfileTeams } from "./profile-teams";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="about">
      <div className="overflow-x-auto">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="activity">Activity Stream</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="about" className="mt-4">
        <ProfileAbout />
      </TabsContent>
      <TabsContent value="activity" className="mt-4">
        <ProfileActivity />
      </TabsContent>
      <TabsContent value="connections" className="mt-4">
        <ProfileConnections />
      </TabsContent>
      <TabsContent value="teams" className="mt-4">
        <ProfileTeams />
      </TabsContent>
      <TabsContent value="projects" className="mt-4">
        <ProfileProjects />
      </TabsContent>
    </Tabs>
  );
}
