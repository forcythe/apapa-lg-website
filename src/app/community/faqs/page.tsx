import dynamic from "next/dynamic";

const FaqsPage = dynamic(() => import("@/screens/faqs"), {
  loading: () => null,
});

export default function Faqs() {
  return <FaqsPage />;
}
