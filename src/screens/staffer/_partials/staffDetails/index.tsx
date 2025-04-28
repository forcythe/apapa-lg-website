/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import PastChairMen from "./PastChairMen";

import Manifesto from "./Manifesto";
import VisionMission from "./VissionMission";

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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
          <VisionMission />
          <Manifesto />
          <PastChairMen />
        </div>
      )}
    </div>
  );
};

export default StaffDetails;
