import dynamic from "next/dynamic";

const FeedbackPortalPage = dynamic(() => import("@/screens/feedbackPortal"), {
  loading: () => null,
});

export default function FeedbackPortal() {
  return <FeedbackPortalPage />;
}
