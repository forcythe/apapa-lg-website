"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import { coreValues } from "./landmarkAndInfluence.data";

import IdeaIcon from "../../../../../public/svg-component/IdeaIcon";

import { useTranslations } from "next-intl";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const LandmarkAndInfluence = () => {

  const t = useTranslations("About.history");

  return (
    <div className="pb-[80px] md:pb-[120px] section-padding">
      <div className={`w-full max-w-[1488px] mx-auto`}>
        <motion.div
          className="mb-[60px] mx-auto w-full max-w-[600px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
          >
            <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
              {t("landmarkAndInfluence.badge")}
            </p>
          </motion.div>

          <motion.h6
            className="text-xl leading-[32px] md:text-[36px] text-center font-[FuturaLTBold] text-[#000000] mb-3"
            variants={itemVariants}
          >
            {t("landmarkAndInfluence.headTitle")}
          </motion.h6>

          <motion.p
            className="text-base md:text-[20px] leading-[30px] text-center text-[#000000]"
            variants={itemVariants}
          >
            {t("landmarkAndInfluence.subTitle")}
          </motion.p>
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
              className="overflow-hidden relative w-full max-w-[360px] min-h-[344px]"
            >
              <div className="mb-6 max-w-[64px] min-w-[64px] max-h-[64px] min-h-[64px] bg-[#FFF6CC] flex items-center justify-center rounded-[100px]">
                <IdeaIcon />
              </div>
              <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#000000] font-[FuturaLTBold] mb-2">
                {t(_.title)}
              </h6>
              <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085]">
                {t(_.description)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Kabiyesi's Palace — featured landmark in the same image shape as the page */}
        <div className="w-full max-w-[1488px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 mb-[120px]">
          <motion.div
            className="w-full max-w-[600px] mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="w-fit bg-accent3 rounded-[8px] p-3 mb-3 mx-0 sm:mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <p className="text-base md:text-[20px] leading-[32px] text-[#000000]">
                {t("landmarkAndInfluence.palace.badge")}
              </p>
            </motion.div>

            <motion.h6
              className="text-xl leading-[32px] md:text-[36px] text-left sm:text-center lg:text-left font-[FuturaLTBold] text-[#000000] mb-3"
              variants={itemVariants}
            >
              {t("landmarkAndInfluence.palace.headTitle")}
            </motion.h6>

            <motion.p
              className="text-base md:text-[20px] leading-[30px] text-left sm:text-center lg:text-left text-[#000000]"
              variants={itemVariants}
            >
              {t("landmarkAndInfluence.palace.description")}
            </motion.p>
          </motion.div>

          <motion.div
            className="w-fit mx-auto max-w-[808px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/svgs/kabiyesi-palace.svg"
              alt={t("landmarkAndInfluence.palace.headTitle")}
              width={808}
              height={544}
              loading="lazy"
              placeholder="blur"
              blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandmarkAndInfluence;
