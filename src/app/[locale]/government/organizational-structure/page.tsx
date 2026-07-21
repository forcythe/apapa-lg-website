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
    images: [{ url: "/image/logoHead.png", width: 1200, height: 630 }],
  },
};

export default function OrganizationalStructure() {
  return <OrganizationalStructurePage />;
}
