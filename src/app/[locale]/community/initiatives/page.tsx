import type { Metadata } from "next";
import dynamic from "next/dynamic";

const InitiativesPage = dynamic(() => import("@/screens/initiatives"), {
  loading: () => null,
});

export const metadata: Metadata = {
  title: "Community Initiatives | Apapa Local Government",
  description:
    "Explore community initiatives by Apapa Local Government spanning education, health, infrastructure, and innovation for residents across Apapa.",
  openGraph: {
    title: "Community Initiatives | Apapa Local Government",
    description:
      "Explore community initiatives by Apapa Local Government spanning education, health, infrastructure, and innovation for residents across Apapa.",
    images: [{ url: "/image/initiative-1.png", width: 1200, height: 630 }],
  },
};

export default function Initiatives() {
  return <InitiativesPage />;
}
