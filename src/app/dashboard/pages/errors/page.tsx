import { RotateCw, ShieldAlert, Wrench } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorScreen } from "./components/error-screen";

export default function ErrorPagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Error Pages"
        description="Error and status screens included in this kit"
      />

      <Tabs defaultValue="404">
        <TabsList className="w-fit">
          <TabsTrigger value="404">404</TabsTrigger>
          <TabsTrigger value="500">500</TabsTrigger>
          <TabsTrigger value="403">403</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="404" className="mt-4">
          <Card>
            <CardContent>
              <ErrorScreen
                code="404"
                glowClassName="bg-primary/10"
                title="Page not found"
                description="The page you're looking for doesn't exist or may have been moved."
                actions={
                  <Button
                    render={<Link href="/dashboard/default" />}
                    nativeButton={false}
                  >
                    Back to Dashboard
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="500" className="mt-4">
          <Card>
            <CardContent>
              <ErrorScreen
                code="500"
                glowClassName="bg-destructive/10"
                title="Something went wrong on our end"
                description="We're working on fixing the problem. Please try again in a few moments."
                actions={
                  <>
                    <Button variant="outline" className="gap-1.5">
                      <RotateCw className="size-3.5" />
                      Try Again
                    </Button>
                    <Button
                      render={<Link href="/dashboard/default" />}
                      nativeButton={false}
                      variant="secondary"
                    >
                      Back to Dashboard
                    </Button>
                  </>
                }
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="403" className="mt-4">
          <Card>
            <CardContent>
              <ErrorScreen
                icon={ShieldAlert}
                iconWrapperClassName="bg-amber-500/10"
                iconClassName="text-amber-500"
                glowClassName="bg-amber-500/20"
                title="Access forbidden"
                description="You don't have permission to view this page. Contact your administrator if you think this is a mistake."
                actions={
                  <Button
                    render={<Link href="/dashboard/default" />}
                    nativeButton={false}
                  >
                    Back to Dashboard
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="mt-4">
          <Card>
            <CardContent>
              <ErrorScreen
                icon={Wrench}
                iconWrapperClassName="bg-blue-500/10"
                iconClassName="text-blue-500"
                glowClassName="bg-blue-500/20"
                title="We'll be back soon"
                description="This page is undergoing scheduled maintenance. We expect to be back online shortly."
                actions={
                  <Button variant="outline" disabled>
                    Check status
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
