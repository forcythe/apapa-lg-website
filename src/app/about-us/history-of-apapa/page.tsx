import dynamic from "next/dynamic";

const HistoryPage = dynamic(() => import("@/screens/history"), {
  loading: () => null,
});

export default function History() {
  return <HistoryPage />;
}
