import type { Metadata } from "next";
import HomePage from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Jules Goy, junior software developer focused on web and gameplay programming.",
};

export default function Home() {
  return <HomePage />;
}
