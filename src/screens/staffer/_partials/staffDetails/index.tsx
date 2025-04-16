/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import CheckMarkIcon from "../../../../../public/svg-component/CheckMarkIcon";
import { manifestoSections, visionMissionItems } from "./staffDetails.data";

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

const StaffDetails = ({ activeRole }: { activeRole: any }) => {
  return (
    <div>
      {/* Overview Section */}
      <div className="section-padding">
        <div className="max-w-[1488px] w-full mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
          >
            <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
              Overview
            </p>
          </motion.div>
          <motion.h6
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center max-w-[700px] mx-auto mb-[40px] md:mb-[120px]"
          >
            {activeRole?.overview}
          </motion.h6>
        </div>
      </div>

      {/* Role Details Section */}
      {activeRole?.name && (
        <div className="w-fit section-padding lg:w-full lg:max-w-[1320px] mx-auto min-h-[616px] flex flex-col lg:flex-row gap-[40px] justify-between mb-[80px] md:mb-[120px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-[600px]"
          >
            {activeRole?.badgeTitle && (
              <motion.div
                variants={itemVariants}
                className="w-fit bg-accent3 rounded-[8px] p-3 mb-3 mx-0 sm:mx-auto lg:mx-0"
              >
                <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                  {activeRole.badgeTitle}
                </p>
              </motion.div>
            )}
            {activeRole?.name && (
              <motion.h6
                variants={itemVariants}
                className="font-[FuturaLTBold] text-left sm:text-center lg:text-left text-xl leading-[32px] md:text-[36px] md:leading-[52px] mb-3 text-[#000000]"
              >
                {activeRole.name}
              </motion.h6>
            )}
            {activeRole?.introduction && (
              <motion.p
                variants={itemVariants}
                className="text-base text-left sm:text-center lg:text-left md:tex-[20px] md:leading-[32px] text-[#000000]"
              >
                {activeRole.introduction}
              </motion.p>
            )}
          </motion.div>
          <div className="w-full max-w-[600px] min-h-[300px] md:min-h-[616px] bg-white p-2 rounded-[32px] shadow-lg z-[1]">
            <div className="relative group overflow-hidden w-full rounded-[24px] min-h-[600px]">
              <div
                className="absolute inset-0 z-[-1] transition-transform duration-500 ease-in-out group-hover:scale-105 w-full"
                style={{
                  backgroundImage: "url('/svgs/HEAD_OF_HR.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Key Functions Section */}
      <div className="section-padding">
        {activeRole?.keyFunctions?.length > 0 && (
          <div className="max-w-[1488px] w-full mx-auto">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
            >
              <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                Key Functions
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-4 items-center justify-center"
            >
              {activeRole.keyFunctions.map((card: any, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden relative w-full rounded-[16px] md:rounded-[32px] max-w-[360px] border border-[#D0D0D0] min-h-[368px] bg-[#F7F7F7] p-4 md:p-6"
                >
                  <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#101828] font-[FuturaLTBold] mb-2">
                    {card.title}
                  </h6>
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085]">
                    {card.desc}
                  </p>
                  <Image
                    src="/svgs/boat-bg-design.svg"
                    className="absolute bottom-0 -right-[36px] max-w-[200px] min-w-[200px] max-h-[200px] min-h-[200px] opacity-80"
                    alt=""
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* Executive Chairman Additional Sections */}
      {activeRole?.id === "executive-chairman" && (
        <div>
          {/* Vision & Mission Section with Added Hover Animations */}
          <div className="section-padding">
            <div className="max-w-[1488px] w-full mx-auto">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
              >
                <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                  Vision & Mission
                </p>
              </motion.div>
              <motion.h6
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center max-w-[700px] mx-auto mb-[40px] md:mb-[60px]"
              >
                Hon. Senbanjo is dedicated to transforming Apapa into a modern
                port city that provides effective grassroots governance and
                development. Her administration focuses on:
              </motion.h6>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-4 items-center justify-center mb-[40px] md:mb-[120px]"
              >
                {visionMissionItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="overflow-hidden relative w-full max-w-[360px] min-h-[220px]"
                  >
                    <div className="mb-6 max-w-[64px] min-w-[64px] max-h-[64px] min-h-[64px] bg-[#FFF6CC] rounded-[100px] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#000000] font-[FuturaLTBold] mb-2">
                      {item.title}
                    </h6>
                    <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085]">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Our Manifesto Section with Added Hover Animations */}
          <div>
            <div className="section-padding">
              <div className="max-w-[1488px] w-full mx-auto">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
                >
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                    Our Manifesto
                  </p>
                </motion.div>
                <motion.h6
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-[20px] leading-[30px] md:text-[36px] md:leading-[52px] text-[#000000] text-center mb-6 font-[FuturaLTBold]"
                >
                  S.H.E.E
                </motion.h6>
                <motion.h6
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center max-w-[700px] mx-auto mb-[40px] md:mb-[60px]"
                >
                  Our manifesto was anchored on four focus areas which includes
                  security - traffic and transport, health, environment -
                  infrastructure, education - skill acquisition and information
                  technology (S.H.E.E)
                </motion.h6>
              </div>
            </div>

            {manifestoSections.map((section, index) => (
              <div key={index} className="mb-[60px]">
                <div
                  className="min-h-[444px] w-full bg-slate-400 section-padding xl:px-[220px] py-[36px] bg-cover bg-top"
                  style={{
                    backgroundImage: `url('${section.backgroundImage}')`,
                  }}
                >
                  <h6 className="text-[#FFF6CC] font-[FuturaLTBold] text-[58px] leading-[70px] md:text-[68px] md:leading-[80px] xl:text-[88px] xl:leading-[100px]">
                    {section.number}
                  </h6>
                </div>
                <div className="section-padding mt-[-100px]">
                  {/* Wrap the manifesto content with an extra motion.div for hover effect */}
                  <motion.div
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <div className="w-full max-w-[844px] py-[40px] px-[20px] md:py-[80px] md:px-[100px] min-h-[976px] bg-[#F7F7F7]">
                      <div className="mb-[40px]">
                        <h6 className="text-xl leading-[32px] md:text-[36px] md:leading-[52px] text-[#000000] text-left font-[FuturaLTBold] mb-2">
                          {section.title}
                        </h6>
                        {section.tagLabel && (
                          <div className="bg-[#FFF6CC] py-1 px-4 rounded-[4px] w-fit">
                            <p className="text-[#AA8B00] text-base md:text-[20px] md:leading-[32px]">
                              {section.tagLabel}
                            </p>
                          </div>
                        )}
                      </div>
                      <p className="w-full max-w-[600px] text-[#000000] text-base md:text-[20px] md:leading-[32px] mb-[40px]">
                        {section.content}
                      </p>
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-fit bg-accent3 rounded-[8px] p-3 mb-5"
                      >
                        <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                          Activities
                        </p>
                      </motion.div>
                      <div className="flex flex-col gap-4">
                        {section.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span>
                              <CheckMarkIcon />
                            </span>
                            <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000]">
                              {activity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetails;
