"use client";

import React from "react";
import { motion } from "framer-motion";

import { coreValues } from "./coreValues.data";

import IdeaIcon from "../../../../../public/svg-component/IdeaIcon";

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

const CoreValues = () => {
  return (
    <div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-[30px] md:mb-[60px]"
      >
        <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
          Core Values
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 items-center justify-center"
      >
        {coreValues?.map((_, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="overflow-hidden relative w-full max-w-[360px] min-h-[220px]"
          >
            <div className="mb-6 max-w-[64px] min-w-[64px] max-h-[64px] min-h-[64px] bg-[#FFF6CC] flex items-center justify-center rounded-[100px]">
              <IdeaIcon />
            </div>
            <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#000000] font-[FuturaLTBold] mb-2">
              {_.title}
            </h6>
            <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085]">
              {_.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoreValues;
