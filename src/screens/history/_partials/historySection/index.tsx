"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const leftContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const leftItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
};

const rightItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const HistorySection = ({
  badge,
  headTitle,
  subTitle,
  image,
  reversed,
}: {
  badge: string;
  headTitle?: string;
  subTitle: string;
  image?: string;
  reversed?: boolean;
}) => (
  <div className="section-padding pb-[80px] md:pb-[120px]">
    <div
      className={`w-full max-w-[1488px] mx-auto flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-start justify-between gap-8`}
    >
      <motion.div
        className="w-full max-w-[600px] mx-auto lg:mx-0"
        variants={leftContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-fit bg-accent3 rounded-[8px] p-3 mb-3 mx-0 sm:mx-auto lg:mx-0"
          variants={leftItem}
        >
          <p className="text-base md:text-[20px] leading-[32px] text-[#000000]">
            {badge}
          </p>
        </motion.div>

        <motion.h6
          className="text-xl leading-[32px] md:text-[36px] text-left sm:text-center lg:text-left font-[FuturaLTBold] text-[#000000] mb-3"
          variants={leftItem}
        >
          {headTitle}
        </motion.h6>

        <motion.p
          className="text-base md:text-[20px] leading-[30px] text-left sm:text-center lg:text-left text-[#000000]"
          variants={leftItem}
        >
          {subTitle}
        </motion.p>
      </motion.div>
      <motion.div
        className="w-fit mx-auto max-w-[808px]"
        variants={rightItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image src={image as string} alt="" width={808} height={544} />
      </motion.div>
    </div>
  </div>
);

export default HistorySection;
