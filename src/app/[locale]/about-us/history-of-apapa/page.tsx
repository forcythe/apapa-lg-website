import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HistoryPage = dynamic(() => import("@/screens/history"), {
  loading: () => null,
});

export const metadata: Metadata = {
  title: "History of Apapa | Apapa Local Government",
  description:
    "Discover Apapa's journey from a fishing village to Nigeria's leading maritime and port hub, and its formation as a Local Government Area in 1977.",
  openGraph: {
    title: "History of Apapa | Apapa Local Government",
    description:
      "Discover Apapa's journey from a fishing village to Nigeria's leading maritime and port hub, and its formation as a Local Government Area in 1977.",
    images: [{ url: "/image/logoHead.png", width: 1200, height: 630 }],
  },
};

export default function History() {
  return <HistoryPage />;
}
