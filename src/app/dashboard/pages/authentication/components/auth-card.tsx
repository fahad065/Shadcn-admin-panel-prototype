"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ForgotPasswordForm } from "./forgot-password-form";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

export type AuthTab = "sign-in" | "sign-up" | "forgot-password";

const TAB_COPY: Record<AuthTab, { title: string; description: string }> = {
  "sign-in": {
    title: "Welcome back",
    description: "Sign in to your account to continue",
  },
  "sign-up": {
    title: "Create an account",
    description: "Enter your details below to get started",
  },
  "forgot-password": {
    title: "Reset your password",
    description: "We'll email you a link to reset it",
  },
};

export function AuthCard() {
  const [tab, setTab] = React.useState<AuthTab>("sign-in");

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">{TAB_COPY[tab].title}</CardTitle>
        <CardDescription>{TAB_COPY[tab].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          value={tab}
          onValueChange={(value) => setTab(value as AuthTab)}
          className="gap-6"
        >
          <TabsList className="w-full">
            <TabsTrigger value="sign-in" className="flex-1">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="sign-up" className="flex-1">
              Sign Up
            </TabsTrigger>
            <TabsTrigger value="forgot-password" className="flex-1">
              Forgot Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SignInForm onSwitchTab={setTab} />
          </TabsContent>
          <TabsContent value="sign-up">
            <SignUpForm onSwitchTab={setTab} />
          </TabsContent>
          <TabsContent value="forgot-password">
            <ForgotPasswordForm onSwitchTab={setTab} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
