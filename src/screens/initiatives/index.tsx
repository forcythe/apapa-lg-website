"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
// import { initiatives } from "./initiatives.data";
import { Project } from "../projects/_partials/projectDetails/projectDetails.types";
import { mapInitiativesAndProjects } from "@/libs/initiative.mapper";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import { useLocale, useTranslations } from "next-intl";

const ProjectDetails = dynamic(
  () => import("../projects/_partials/projectDetails"),
  { loading: () => null },
);

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const InitiativesPage = () => {
  const t = useTranslations("Community.initiatives");
  const locale = useLocale();
  const cmsLocale = locale === "pcm" ? "en" : locale;

  const [initiatives, setInitiatives] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const params = new URLSearchParams({
          populate: "*",
          locale: cmsLocale,
        });
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/initiatives?${params.toString()}`,
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.ok}`);
        }

        const json = await res.json();

        if (
          !json?.data ||
          !Array.isArray(json.data) ||
          json.data.length === 0
        ) {
          throw new Error("No Initiatives found");
        }

        setInitiatives(mapInitiativesAndProjects(json));
      } catch (error: any) {
        console.error("Failed to fetch initiatives", error);
        setError(
          error.message || "Failed to load initiatives. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInitiatives();
  }, [cmsLocale]);

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type={t("bannerTitle")} />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full max-w-[1488px] mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-[700px] mx-auto mb-[80px] md:mb-[120px]"
            >
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
              >
                <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                  {t("badgeTitle")}
                </p>
              </motion.div>
              <motion.p
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center"
              >
                {t("description")}
              </motion.p>
            </motion.div>
            <div className="w-full flex flex-col gap-[80px] md:gap-[120px]">
              {loading ? (
                <p className="text-center">{t("loadingInitiatives")}</p>
              ) : error ? (
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-base md:text-[18px] text-red-500 text-center">
                    {error}
                  </p>
                </div>
              ) : (
                initiatives.map((initiative) => (
                  <ProjectDetails key={initiative.id} p={initiative} />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="w-full absolute top-0 z-[-1] mx-auto">
          <Image
            src="/svgs/boat-bg.svg"
            alt=""
            width={1450}
            height={1300}
            className="w-full max-w-[1450px] mx-auto"
            loading="lazy"
            placeholder="blur"
            blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
            unoptimized
          />
        </div>
      </div>
    </AppWrapper>
  );
};

export default InitiativesPage;
