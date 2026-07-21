import type { Metadata } from "next";
import dynamic from "next/dynamic";

const EventsPage = dynamic(() => import("@/screens/events"), {
  loading: () => null,
});

export const metadata: Metadata = {
  title: "Events | Apapa Local Government",
  description:
    "Stay updated on upcoming and past community events hosted by Apapa Local Government — engage, celebrate, and connect with your community.",
  openGraph: {
    title: "Events | Apapa Local Government",
    description:
      "Stay updated on upcoming and past community events hosted by Apapa Local Government — engage, celebrate, and connect with your community.",
    images: [{ url: "/svgs/logoHead.svg", width: 84, height: 84 }],
  },
};

export default function Events() {
  return <EventsPage />;
}
