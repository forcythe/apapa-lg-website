"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import { useTranslations } from "next-intl";

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

const EvolutionOfApapa = () => {

  const t = useTranslations("About.history");

  return (
    <div className="pb-[80px] md:pb-[120px] section-padding">
      <div
        className={`relative w-full max-w-[1488px] mx-auto flex justify-center min-h-fit lg:min-h-[544px]`}
      >
        <div className="w-fit mx-auto max-w-[364px] hidden lg:flex absolute left-0">
          <motion.div
            variants={rightItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/svgs/history-l.svg"
              alt=""
              width={364}
              height={544}
              loading="lazy"
              placeholder="blur"
              blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
              className="rotate-180"
            />
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-[600px] mx-auto lg:mx-0 px-4 lg:px-10"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={leftItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-fit sm:mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
          >
            <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
              {t("evolutionOfApapa.badge")}
            </p>
          </motion.div>

          <motion.h6
            className="text-lg leading-[28px] text-left sm:text-center md:text-[30px] font-[FuturaLTBold] text-[#000000] mb-3"
            variants={leftItem}
          >
            {t("evolutionOfApapa.headTitle")}
          </motion.h6>

          <motion.p
            className="text-sm md:text-[18px] leading-[28px] text-left sm:text-center text-[#000000]"
            variants={leftItem}
          >
            {t("evolutionOfApapa.subTitle")}
          </motion.p>
        </motion.div>

        <div className="w-fit mx-auto max-w-[364px] hidden lg:flex absolute right-0">
          <motion.div
            variants={rightItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/svgs/history-r.svg"
              alt=""
              width={364}
              height={544}
              loading="lazy"
              placeholder="blur"
              blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
              className="rotate-180"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionOfApapa;
