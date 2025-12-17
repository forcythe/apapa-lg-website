import React from "react";

import { motion } from "framer-motion";

import { visionMissionItems } from "./staffDetails.data";

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

const VisionMission = () => {
  return (
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
          viewport={{ once: true }}
          className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center max-w-[700px] mx-auto mb-[40px] md:mb-[60px]"
        >
          Hon. Senbanjo is dedicated to transforming Apapa into a modern port
          city that provides effective grassroots governance and development.
          Her administration focuses on:
        </motion.h6>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
  );
};

export default VisionMission;
