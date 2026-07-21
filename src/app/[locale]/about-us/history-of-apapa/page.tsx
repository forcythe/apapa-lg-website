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
    images: [{ url: "/svgs/logoHead.svg", width: 84, height: 84 }],
  },
};

export default function History() {
  return <HistoryPage />;
}
