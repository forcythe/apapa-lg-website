import dynamic from "next/dynamic";

const EventsPage = dynamic(() => import("@/screens/events"), {
  loading: () => null,
});

export default function Events() {
  return <EventsPage />;
}
