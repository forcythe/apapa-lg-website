"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { Project } from "./projectDetails.types";

import HourGlassIcon from "../../../../../public/svg-component/HourGlassIcon";
import ResultIcon from "../../../../../public/svg-component/ResultIcon";
import CheckMarkIcon from "../../../../../public/svg-component/CheckMarkIcon";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectDetails = ({ p }: { p: Project }) => {
  return (
    <motion.div
      key={p.id}
      className="flex flex-col xl:flex-row items-center justify-between gap-6 md:gap-8 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-[644px] flex flex-col gap-5 md:gap-[40px]">
        <motion.h6
          className="text-[#000] font-[FuturaLTBold] text-xl leading-[32px] md:text-[36px] md:leading-[52px] mb-0"
          variants={itemVariants}
        >
          {p.title}
        </motion.h6>

        <motion.div
          className="w-full border border-[#D0D0D0] rounded-[32px] p-5 md:p-[40px] bg-[#F7F7F7]"
          variants={itemVariants}
        >
          <p className="text-base text-primary md:text-[20px] md:leading-[32px] mb-2">
            Project Progress
          </p>
          <h5 className="text-[20px] leading-[30px] font-[FuturaLTBold] text-primary md:text-[24px] md:leading-[32px] mb-6">
            {p.progress}% Completed
          </h5>
          <div className="w-full bg-[#CCEBDA] rounded-full h-3 mb-6 overflow-hidden">
            <motion.div
              className="bg-[#009A44] h-full rounded-full transition-all duration-500"
              style={{ width: `${p.progress}%` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${p.progress}%` }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-valuenow={p.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <HourGlassIcon />
            </motion.div>
            <p className="text-[#616161] text-sm md:text-base">
              {p.expectedCompletion}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="w-fit bg-accent3 rounded-[8px] p-3 mb-5">
            <p className="text-base md:text-[20px] md:leading-[32px] text-[#000] text-center">
              Objectives
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            {Array.isArray(p.objectives) ? (
              p.objectives.map((obj, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <CheckMarkIcon className="max-w-6 min-w-6 max-h-6 min-h-6 md:max-w-[32px] md:min-w-[32px] md:max-h-[32px] md:min-h-[32px]" />
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#000]">
                    {obj}
                  </p>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="text-base md:text-[20px] md:leading-[32px] text-[#000]"
                variants={itemVariants}
              >
                {p.objectives}
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="w-fit bg-accent3 rounded-[8px] p-3 mb-5">
            <p className="text-base md:text-[20px] md:leading-[32px] text-[#000] text-center">
              Expected Result
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            {p.results.map((res, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <ResultIcon className="max-w-6 min-w-6 max-h-6 min-h-6 md:max-w-[32px] md:min-w-[32px] md:max-h-[32px] md:min-h-[32px]" />
                <p className="text-base md:text-[20px] md:leading-[32px] text-[#000]">
                  {res}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Image src={p.imageSrc} alt={p.title} width={812} height={740} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
