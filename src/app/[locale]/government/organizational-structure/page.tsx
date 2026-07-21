import type { Metadata } from "next";
import dynamic from "next/dynamic";

const OrganizationalStructurePage = dynamic(
  () => import("@/screens/organizationalStructure"),
  { loading: () => null }
);

export const metadata: Metadata = {
  title: "Organizational Structure | Apapa Local Government",
  description:
    "View the organizational structure of Apapa Local Government, including the Executive Chairman, Council Manager, Supervisors, and department heads.",
  openGraph: {
    title: "Organizational Structure | Apapa Local Government",
    description:
      "View the organizational structure of Apapa Local Government, including the Executive Chairman, Council Manager, Supervisors, and department heads.",
    images: [{ url: "/svgs/logoHead.svg", width: 84, height: 84 }],
  },
};

export default function OrganizationalStructure() {
  return <OrganizationalStructurePage />;
}
