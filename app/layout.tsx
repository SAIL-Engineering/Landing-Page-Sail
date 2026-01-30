import "./css/style.css";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { IBM_Plex_Serif, JetBrains_Mono, Nunito_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sailgtx.com"),
  icons: {
    icon: "/favicon.svg",
  },
};

const RootClient = dynamic(() => import("@/components/root-client"), {
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
  display: "swap",
  adjustFontFallback: false, // Disable automatic font fallback adjustments
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
      <body className={`bg-background font-sans tracking-tight antialiased`}>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
