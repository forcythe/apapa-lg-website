import dynamic from "next/dynamic";

const PollsAndSurveyPage = dynamic(() => import("@/screens/pollsAndSurvey"), {
  loading: () => null,
});

export default function PollsAndSurvey() {
  return <PollsAndSurveyPage />;
}
