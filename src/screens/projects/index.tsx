"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { projects } from "./_partials/projectDetails/projectDetails.data";
import { mapInitiativesAndProjects } from "@/libs/initiative.mapper";
import { Project } from "./_partials/projectDetails/projectDetails.types";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const ProjectDashboard = dynamic(() => import("./_partials/projectDashboard"), {
  loading: () => null,
});
const ProjectDetails = dynamic(() => import("./_partials/projectDetails"), {
  loading: () => null,
});

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`
        );
        const json = await res.json();
        setProjects(mapInitiativesAndProjects(json));
      } catch (error) {
        console.error("Failed to fetch initiatives", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="Projects" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px]">
            <ProjectDashboard />
            <div className="w-full flex flex-col gap-[80px] md:gap-[120px]">
              {loading && (
                <div className="w-full text-center py-20">
                  <p className="text-base text-[#667085]">
                    Loading projects...
                  </p>
                </div>
              )}

              {!loading &&
                projects.map((p) => <ProjectDetails key={p.id} p={p} />)}
            </div>
          </div>
        </div>
        <Image
          src="/svgs/boat-bg.svg"
          className="absolute top-[0px] z-[-1] max-w-[1450px] min-w-[1450px] max-h-[1100px] min-h-[1100px]"
          alt=""
          width={1450}
          height={1300}
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />
      </div>
    </AppWrapper>
  );
};

export default ProjectsPage;
