"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import FooterArrow from "../../../../../public/svg-component/FooterArrow";
import { quickLinks } from "./getInvolvedAndStayConnected.data";

import { useTranslations } from "next-intl";

const GetInvolvedAndStayConnected = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const t = useTranslations("Home.quickLinks");

  return (
    <div className="relative section-padding py-[100px] md:py-[120px] bg-white text-primary z-[1] overflow-hidden">
      <div className="w-full max-w-[1488px] mx-auto relative">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
        >
          <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
            {t("pill")}
          </p>
        </motion.div>
        <motion.h6
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl leading-[32px] md:text-[36px] md:leading-[52px] text-[#000000] text-center font-[FuturaLTBold] max-w-[564px] mx-auto mb-[40px]"
        >
          {t("title")}
        </motion.h6>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[40px] gap-x-6 md:auto-rows-[minmax(272px,1fr)]"
        >
          {quickLinks.map((link) => (
            <motion.div
              key={link.id}
              variants={itemVariants}
              className="w-full max-w-[354px] md:min-h-[272px]"
            >
              {/* <div className="bg-[#FFF6CC] rounded-[12px] p-2 mb-4 min-h-[56px] max-h-[56px] max-w-[56px] min-w-[56px] md:min-h-[72px] md:min-w-[72px] md:max-h-[72px] md:max-w-[72px] flex items-center justify-center">
                {
                  <link.icon className="max-w-[40px] min-w-[40px] min-h-[40px] max-h-[40px] md:max-w-[56px] md:min-w-[56px] md:max-h-[56px] md:min-h-[56px]" />
                }
              </div>
              <h6 className="font-[FuturaLTBold] text-[18px] leading-[28px] md:text-[20px] md:leading-[28px] md:mb-2">
                {link.title}
              </h6> */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#FFF6CC] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center">
                  <link.icon className="w-6 h-6" />
                </div>

                <h6 className="font-[FuturaLTBold] text-[18px] leading-[28px] md:text-[20px]">
                  {t(link.title)}
                </h6>
              </div>
              <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085] mb-5">
                {t(link.description)}
              </p>
              <div className="flex items-center gap-2">
                <a
                  className="text-base md:text-[20px] md:leading-[32px] text-accent"
                  href={link.href}
                  target="_blank"
                >
                  {t(link.btnTitle)}
                </a>
                <FooterArrow fill="#aa8b00" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Image
        src="/svgs/boat-bg.svg"
        className="absolute top-0 left-0 z-[-1] max-w-[1800px] min-w-[1800px] max-h-[1100px] min-h-[1100px] opacity-50"
        alt=""
        width={1800}
        height={1100}
        loading="lazy"
        placeholder="blur"
        blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
      />
    </div>
  );
};

export default GetInvolvedAndStayConnected;
