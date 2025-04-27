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

const EvolutionOfApapa = () => {
  return (
    <div className="pb-[80px] md:pb-[120px] section-padding">
      <div
        className={`relative w-full max-w-[1488px] mx-auto flex justify-center min-h-fit lg:min-h-[544px]`}
      >
        <div className="w-fit mx-auto max-w-[364px] hidden lg:flex absolute left-0 opacity-10 xxxl:opacity-100">
          <motion.div
            variants={rightItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/svgs/history-section-half.svg"
              alt=""
              width={364}
              height={544}
            />
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-[600px] mx-auto lg:mx-0"
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
              Colonial Transformation and Growth
            </p>
          </motion.div>

          <motion.h6
            className="text-xl leading-[32px] text-left sm:text-center md:text-[36px] font-[FuturaLTBold] text-[#000000] mb-3"
            variants={leftItem}
          >
            Evolution Of Apapa
          </motion.h6>

          <motion.p
            className="text-base md:text-[20px] leading-[30px] text-left sm:text-center text-[#000000]"
            variants={leftItem}
          >
            During the British colonial era, Apapa’s potential was quickly
            realized. The colonial administration established ports, warehouses,
            and railway infrastructure to support the growing shipping and trade
            industries. Apapa evolved rapidly into a crucial international
            shipping hub and soon became the commercial heartbeat of Lagos.
          </motion.p>
        </motion.div>

        <div className="w-fit mx-auto max-w-[364px] hidden lg:flex absolute right-0 opacity-10 xxxl:opacity-100">
          <motion.div
            variants={rightItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/svgs/history-section-half.svg"
              alt=""
              width={364}
              height={544}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionOfApapa;
