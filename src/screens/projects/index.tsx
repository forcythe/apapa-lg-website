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

import { useLocale, useTranslations } from "next-intl";

const ProjectDashboard = dynamic(() => import("./_partials/projectDashboard"), {
  loading: () => null,
});
const ProjectDetails = dynamic(() => import("./_partials/projectDetails"), {
  loading: () => null,
});

const ProjectsPage = () => {
  const t = useTranslations("Government.projects");
  const locale = useLocale();
  const cmsLocale = locale === "pcm" ? "en" : locale;

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const params = new URLSearchParams({
          populate: "*",
          locale: cmsLocale,
        });
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?${params.toString()}`,
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();

        // Check if json.data exists and is an array
        if (
          !json?.data ||
          !Array.isArray(json.data) ||
          json.data.length === 0
        ) {
          throw new Error("No projects found.");
        }

        setProjects(mapInitiativesAndProjects(json));
      } catch (error: any) {
        console.error("Failed to fetch initiatives", error);
        setError(error.message || "Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [cmsLocale]);

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type={t("bannerTitle")} />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px]">
            <ProjectDashboard />
            <div className="w-full flex flex-col gap-[80px] md:gap-[120px]">
              {loading ? (
                <div className="w-full text-center py-20">
                  <p className="text-base text-[#667085]">
                    {t("projectsLoading")}...
                  </p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-base md:text-[18px] text-red-500 text-center">
                    {error}
                  </p>
                </div>
              ) : (
                projects.map((p) => <ProjectDetails key={p.id} p={p} />)
              )}
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
