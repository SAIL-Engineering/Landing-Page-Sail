import "./css/style.css";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { IBM_Plex_Serif, JetBrains_Mono, Nunito_Sans } from "next/font/google";
import { PHProvider } from "./providers";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plex-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
  display: "swap", // Fix font override warning + better performance
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${plexSerif.variable} ${jetbrainsMono.variable} ${nunitoSans.variable}`}
    >
      <PHProvider>
        <body className={`bg-background font-sans tracking-tight antialiased`}>
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
          <Analytics />
        </body>
      </PHProvider>
    </html>
  );
}
