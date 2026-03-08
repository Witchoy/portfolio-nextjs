import "@/app/ui/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jules Goy",
  description: "Junior Software Developper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
