"use client";
import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

const PostHogPageView = dynamic(() => import("@/app/PostHogPageView"), {
  ssr: false,
});

export default function RootClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="light"
      disableTransitionOnChange
      enableColorScheme={false}
    >
      <PostHogPageView />
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        {children}
        <Toaster position="bottom-right" richColors />
        <Analytics />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}
