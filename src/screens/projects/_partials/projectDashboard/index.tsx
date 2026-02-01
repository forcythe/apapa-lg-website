"use client";

import React from "react";
import { motion } from "framer-motion";

import { stats } from "./projectDashboard.data";

import PieIcon from "../../../../../public/svg-component/PieIcon";

import { useTranslations } from "next-intl";

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

const ProjectDashboard = () => {
  const t = useTranslations("Government.projects.projectsStats");

  return (
    <div className="mb-[80px] md:mb-[120px]">
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 md:auto-rows-[minmax(360px,1fr)]"
      >
        {" "}
        {stats.map((stat) => (
          <motion.div
            key={t(stat.label)}
            variants={itemVariants}
            className="p-2 md:p-8 relative overflow-hidden bg-white backdrop-blur-xl w-full max-w-[360px] min-h-[360px] rounded-[32px] border border-[#D0D0D0] flex flex-col items-center justify-center"
          >
            <div className="mb-2 w-[56px] h-[56px] bg-white rounded-[12px] flex items-center justify-center">
              <PieIcon />
            </div>
            <h3 className="text-primary text-center font-[FuturaLTBold] text-[28px] leading-[44px] md:text-[40px] md:leading-[60px] mb-2">
              {stat.value}
            </h3>
            <p className="text-base text-center md:text-[20px] md:leading-[32px] text-primary">
              {t(stat.label)}
            </p>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url(/svgs/card-back-drop.svg)",
                zIndex: -1,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectDashboard;
