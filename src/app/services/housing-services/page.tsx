import dynamic from "next/dynamic";

const HousingServicesPage = dynamic(
  () => import("@/screens/housingServices"),
  { loading: () => null }
);

export default function HousingServices() {
  return <HousingServicesPage />;
}
