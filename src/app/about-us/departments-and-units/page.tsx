import dynamic from "next/dynamic";

const DepartmentsAndUnitsPage = dynamic(
  () => import("@/screens/departmentsAndUnits"),
  { loading: () => null }
);

export default function DepartmentsAndUnits() {
  return <DepartmentsAndUnitsPage />;
}
