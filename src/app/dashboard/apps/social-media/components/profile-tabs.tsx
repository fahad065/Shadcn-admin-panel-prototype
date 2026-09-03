import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Feed } from "./feed";
import { PromoBanner } from "./promo-banner";
import { SuggestedForYou } from "./suggested-for-you";
import { TrendingCreators } from "./trending-creators";

type NavTab = {
  value: string;
  label: string;
  count?: number;
  placeholder?: string;
};

const NAV_TABS: NavTab[] = [
  { value: "home", label: "Home" },
  {
    value: "tasks",
    label: "Tasks",
    count: 6,
    placeholder: "Your task board will show up here once you connect a project.",
  },
  {
    value: "users",
    label: "Users",
    count: 214,
    placeholder: "Manage teammates and their roles from this tab.",
  },
  {
    value: "apis",
    label: "APIs",
    placeholder: "Generate and manage API keys for this workspace.",
  },
  {
    value: "subscription",
    label: "Subscription",
    placeholder: "Review your plan, billing history, and upgrade options.",
  },
  {
    value: "settings",
    label: "Settings",
    placeholder: "Update your profile, notifications, and workspace preferences.",
  },
  {
    value: "help",
    label: "Help & Support",
    placeholder: "Browse guides or reach out to support if you get stuck.",
  },
];

export function ProfileTabs() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback className="bg-primary text-base font-semibold text-primary-foreground">
            TB
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Toby Belhome</h1>
          <p className="text-sm text-muted-foreground">@toby</p>
        </div>
      </div>

      <PromoBanner />

      <Tabs defaultValue="home">
        <div className="overflow-x-auto">
          <TabsList variant="line">
            {NAV_TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
                {tab.count ? (
                  <Badge variant="secondary" className="text-[11px]">
                    {tab.count}
                  </Badge>
                ) : null}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="home" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Feed />
            </div>
            <div className="flex flex-col gap-6">
              <SuggestedForYou />
              <TrendingCreators />
            </div>
          </div>
        </TabsContent>

        {NAV_TABS.filter((tab) => tab.value !== "home").map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-6">
            <Card>
              <CardContent className="py-10 text-center text-sm text-muted-foreground">
                {tab.placeholder}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
