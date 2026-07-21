import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

const HomePage = dynamic(() => import("@/screens/home"), {
  loading: () => null,
});

export const metadata: Metadata = {
  title: "Apapa Local Government Area | Official Website",
  description:
    "Official website of Apapa Local Government Area, Lagos State. Access LG news, services, opportunities, community programs, and updates.",
  openGraph: {
    title: "Apapa Local Government Area | Official Website",
    description:
      "Official website of Apapa Local Government Area, Lagos State. Access LG news, services, opportunities, community programs, and updates.",
    url: "https://apapa.lg.gov.ng",
    images: [{ url: "/image/logoHead.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <HomePage />;
}
