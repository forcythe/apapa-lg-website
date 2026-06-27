"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";

import { rowData } from "@/screens/organizationalStructure/_partials/rowByRoleOrgChart/rowByRoleOrgChart.data";

const StafferPage = dynamic(() => import("@/screens/staffer"), {
  loading: () => null,
});

const LegislativeArmOrgChartPage = dynamic(
  () => import("@/screens/legislativeArmOrgChart"),
  { loading: () => null }
);

export default function Staffer() {
  const { slug } = useParams();
  const router = useRouter();
  const activeRole = rowData
    .flatMap((row) => row.roles)
    .find((role) => role.id === slug);

  useEffect(() => {
    if (!activeRole) {
      router.push("/government/organizational-structure");
    }
  }, [activeRole, router]);

  if (!activeRole) {
    return null;
  }

  if (slug === "legislative-arm") {
    return <LegislativeArmOrgChartPage />;
  }

  return <StafferPage activeRole={activeRole} />;
}
