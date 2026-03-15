import "@/app/global.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jules Goy",
    default: "Jules Goy",
  },
  description:
    "Portfolio of Jules Goy, junior software developer focused on web and gameplay programming.",
  metadataBase: new URL("https://julesgoy.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_UK",
    siteName: "Jules Goy",
    title: "Jules' Portfolio",
    url: new URL("https://julesgoy.dev"),
    description:
      "Portfolio of Jules Goy, junior software developer focused on web and gameplay programming.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("light", "font-sans", font.variable)}>
      <body className="bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-stone-900 focus:shadow-md"
        >
          Skip to main content
        </a>
        <TooltipProvider>{children}</TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
