import dynamic from "next/dynamic";

const VolunteerOpportunitiesPage = dynamic(
  () => import("@/screens/volunteerOpportunities"),
  { loading: () => null }
);

export default function VolunteerOpportunities() {
  return <VolunteerOpportunitiesPage />;
}
