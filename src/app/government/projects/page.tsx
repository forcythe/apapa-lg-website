import dynamic from "next/dynamic";

const ProjectsPage = dynamic(() => import("@/screens/projects"), {
  loading: () => null,
});

export default function Projects() {
  return <ProjectsPage />;
}
