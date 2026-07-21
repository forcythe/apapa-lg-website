import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ProjectsPage = dynamic(() => import("@/screens/projects"), {
  loading: () => null,
});

export const metadata: Metadata = {
  title: "Projects & Achievements | Apapa Local Government",
  description:
    "See ongoing and completed projects by Apapa Local Government, including road rehabilitation, drainage works, boreholes, school support, and infrastructure renewal.",
  openGraph: {
    title: "Projects & Achievements | Apapa Local Government",
    description:
      "See ongoing and completed projects by Apapa Local Government, including road rehabilitation, drainage works, boreholes, school support, and infrastructure renewal.",
    images: [{ url: "/image/project-img-1.png", width: 1200, height: 630 }],
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
