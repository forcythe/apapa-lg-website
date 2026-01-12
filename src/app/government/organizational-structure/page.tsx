import dynamic from "next/dynamic";

const OrganizationalStructurePage = dynamic(
  () => import("@/screens/organizationalStructure"),
  { loading: () => null }
);

export default function OrganizationalStructure() {
  return <OrganizationalStructurePage />;
}
