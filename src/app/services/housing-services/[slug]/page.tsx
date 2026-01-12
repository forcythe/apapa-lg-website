import dynamic from "next/dynamic";

const SingleHousingServicesPage = dynamic(
  () => import("@/screens/singleHousingServices"),
  { loading: () => null }
);

export default function SingleHousingServices() {
  return <SingleHousingServicesPage />;
}
