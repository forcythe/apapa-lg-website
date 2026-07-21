import type { Metadata } from "next";
import StafferContent from "./staffer-content";

import { rowData } from "@/screens/organizationalStructure/_partials/rowByRoleOrgChart/rowByRoleOrgChart.data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const role = rowData.flatMap((row) => row.roles).find((r) => r.id === slug);

  if (!role) {
    return {
      title: "Organizational Structure | Apapa Local Government",
    };
  }

  const roleName =
    role.role?.replace(/\./g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
    slug;

  if (slug === "council-manager") {
    return {
      title: "Council Manager | Apapa Local Government",
      description:
        "Meet the Council Manager of Apapa Local Government, responsible for daily administration, policy implementation, budget oversight, and staff management.",
      openGraph: {
        title: "Council Manager | Apapa Local Government",
        description:
          "Meet the Council Manager of Apapa Local Government, responsible for daily administration, policy implementation, budget oversight, and staff management.",
        images: [
          {
            url: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20003.png",
            width: 400,
            height: 400,
          },
        ],
      },
    };
  }

  if (slug === "executive-chairman") {
    return {
      title: "Executive Chairman | Apapa Local Government",
      description:
        "Meet Hon. Idowu Adejumoke Senbanjo, Executive Chairman of Apapa Local Government, and her S.H.E.E. agenda for security, health, environment, and education.",
      openGraph: {
        title: "Executive Chairman | Apapa Local Government",
        description:
          "Meet Hon. Idowu Adejumoke Senbanjo, Executive Chairman of Apapa Local Government, and her S.H.E.E. agenda for security, health, environment, and education.",
        images: [
          {
            url: "/image/photo_2026-04-08_13-36-14.jpg",
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }

  if (slug === "legislative-arm") {
    return {
      title: "Legislative Arm | Apapa Local Government",
      description:
        "The Legislative Arm of Apapa Local Government is responsible for lawmaking, oversight, and representation of the people.",
      openGraph: {
        title: "Legislative Arm | Apapa Local Government",
        description:
          "The Legislative Arm of Apapa Local Government is responsible for lawmaking, oversight, and representation of the people.",
        images: [
          {
            url: "/image/logoHead.png",
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }

  return {
    title: `${roleName} | Apapa Local Government`,
    description: `Learn about the ${roleName} of Apapa Local Government and their role in governance and service delivery.`,
    openGraph: {
      title: `${roleName} | Apapa Local Government`,
      description: `Learn about the ${roleName} of Apapa Local Government and their role in governance and service delivery.`,
      images: [{ url: "/image/logoHead.png", width: 1200, height: 630 }],
    },
  };
}

export default function Staffer() {
  return <StafferContent />;
}
