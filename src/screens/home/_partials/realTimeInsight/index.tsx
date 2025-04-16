"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import ProfileIcon from "../../../../../public/svg-component/ProfileIcon";
import CargoIcon from "../../../../../public/svg-component/CargoIcon";
import ContainerIcon from "../../../../../public/svg-component/ContainerIcon";
import RevenueIcon from "../../../../../public/svg-component/RevenueIcon";
import WalletIcon from "../../../../../public/svg-component/WalletIcon";
import TruckIcon from "../../../../../public/svg-component/TruckIcon";
import WorldIconNew from "../../../../../public/svg-component/WorldIconNew";
import CloudDesign from "../../../../../public/svg-component/CloudDesign";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // adjust the delay between each child here
    },
  },
};

const RealTimeInsight = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="relative section-padding py-[100px] md:py-[120px] bg-white text-primary z-[1] overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto relative">
        <div className="w-full max-w-[988px] mx-auto">
          <div className="w-full max-w-[896px] mx-auto mb-[200px] md:mb-[240px]">
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
            >
              <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                Apapa at a Glance
              </p>
            </motion.div>
            <motion.h6
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl leading-[32px] md:text-[36px] md:leading-[52px] text-[#000000] text-center font-[FuturaLTBold] max-w-[564px] mx-auto mb-[40px]"
            >
              Real-Time Insights and Key Highlights
            </motion.h6>

            <div
              ref={ref}
              className="w-full mb-4 min-h-[468px] border border-[#D0D0D0] rounded-[32px] py-6 px-[22px] md:py-[40px] md:px-[28px] bg-white backdrop-blur-xl relative overflow-hidden"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url(/svgs/card-back-drop.svg)",
                  zIndex: -1,
                }}
              ></div>
              <div className="grid grid-cols-1 xxxs:grid-cols-2 lg:grid-cols-4 mb-5 lg:mb-[28px] gap-y-5 lg:gap-y-0">
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 xxxs:border-r xxxs:border-white xxxs:py-[34px] lg:py-[30px] pl-0 lg:pl-4 xxxs:pr-[28px] lg:pr-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <ProfileIcon />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    {inView ? (
                      <CountUp start={0} end={786700} duration={2} />
                    ) : (
                      0
                    )}
                    +
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">
                      Current Population
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 lg:border-r lg:border-white xxxs:py-[34px] lg:py-[30px] lg:px-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <CargoIcon />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    {inView ? <CountUp start={0} end={27} duration={2} /> : 0}
                    M+
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">
                      Tonnes of cargo
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 xxxs:border-r xxxs:border-white xxxs:py-[34px] xxxs:pr-[28px] lg:py-[30px] lg:px-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <ContainerIcon />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    {inView ? <CountUp start={0} end={2} duration={2} /> : 0}
                    M+
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">
                      Container Throughput
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 xxxs:py-[34px] lg:py-[30px] pr-0 lg:pr-4 xxxs:pl-[28px] lg:pl-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <RevenueIcon />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    ₦
                    {inView ? <CountUp start={0} end={18.9} duration={2} /> : 0}
                    B
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">
                      Revenue Generation
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 xxxs:grid-cols-2 lg:grid-cols-4 mb-[28px] gap-y-5 lg:gap-y-0">
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 xxxs:border-r xxxs:border-white xxxs:py-[34px] lg:py-[30px] pl-0 lg:pl-4 xxxs:pr-[28px] lg:pr-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <CargoIcon />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    {inView ? <CountUp start={0} end={5000} duration={2} /> : 0}
                    +
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">Ships Docked</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 lg:border-r lg:border-white xxxs:py-[34px] lg:py-[30px] lg:px-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <WalletIcon />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    ₦{inView ? <CountUp start={0} end={50} duration={2} /> : 0}+
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">Investment</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 xxxs:border-r xxxs:border-white xxxs:py-[34px] xxxs:pr-[28px] lg:py-[30px] lg:px-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <TruckIcon />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    {inView ? (
                      <CountUp start={0} end={10000} duration={2} />
                    ) : (
                      0
                    )}
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">Truck Traffic</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="py-4 xxxs:py-[34px] lg:py-[30px] pr-0 lg:pr-4 xxxs:pl-[28px] lg:pl-[36px] flex items-center justify-center flex-col gap-2"
                >
                  <div className="max-w-[48px] min-w-[48px] max-h-[48px] min-h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                    <WorldIconNew />
                  </div>
                  <h4 className="text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] font-[FuturaLTBold] m-0">
                    {inView ? <CountUp start={0} end={600} duration={2} /> : 0}%
                  </h4>
                  <div className="w-full lg:min-w-[148px] flex items-center justify-center">
                    <p className="text-base whitespace-nowrap">
                      Economic Contribution
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="w-full mb-4 min-h-[312px] border border-[#D0D0D0] rounded-[32px] py-6 px-[22px] md:py-[40px] md:px-[68px] bg-white backdrop-blur-xl relative overflow-hidden">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url(/svgs/card-back-drop.svg)",
                  zIndex: -1,
                }}
              ></div>
              <div className="w-fit min-h-[232px] flex flex-col justify-between">
                <div>
                  <motion.h4
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="font-[FuturaLTBold] text-[20px] leading-[28px] mb-2 md:text-[28px] md:leading-[40px]"
                  >
                    Apapa
                  </motion.h4>
                  <div className="flex items-center gap-1 md:gap-2">
                    <motion.p
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      className="text-base md:text-[20px] md:leading-[32px]"
                    >
                      Chance of rain
                    </motion.p>
                    <motion.span
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      className="text-accent text-base md:text-[20px] md:leading-[32px] py-1 px-2 rounded-[8px] bg-white"
                    >
                      0%
                    </motion.span>
                  </div>
                </div>
                <motion.h6
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="font-[FuturaLTBold] text-[28px] leading-[44px] md:text-[40px] md:leading-[60px] text-accent"
                >
                  {inView ? <CountUp start={0} end={31} duration={2} /> : 0}°
                </motion.h6>
              </div>
              <div className="absolute right-[20px] xs:right-[68px] top-[62px]">
                <CloudDesign />
              </div>
            </div>
          </div>

          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h6
                variants={textVariants}
                className="font-[FuturaLTBold] text-[20px] leading-[32px] md:text-[36px] md:leading-[52px] text-[#000000] text-left mb-5 md-[40px]"
              >
                Welcome to the official website of Apapa Local Government.{" "}
              </motion.h6>
              <motion.div
                variants={textVariants}
                className="p-3 w-full rounded-[32px] bg-white shadow-md mb-5 md:mb-[40px]"
              >
                <div
                  className="w-full h-full rounded-[24px] min-h-[348px] md:min-h-[600px] bg-slate-400 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/svgs/bg-img.svg')",
                  }}
                ></div>
              </motion.div>
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-base md:text-[20px] md:leading-[32px] text-[#000000] mb-6"
              >
                As the Excecutive Chairman of Apapa Local Government(The Port
                City Council), I am delighted to introduce you to our vibrant
                community. At Apapa Local Government, we are committed to
                transforming our community into a mega world-standard local
                government that provides excellent services and infrastructure
                to our residents. Our mission is to create a thriving and
                sustainable environment that supports the well-being and
                prosperity of all our citizens.
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-base md:text-[20px] md:leading-[32px] text-[#000000] mb-6"
              >
                On this website, you will find information about our ongoing
                projects, community events, and services. We invite you to
                explore our site, learn more about our initiatives, and get
                involved in our community development efforts. Thank you for
                visiting us, and we look forward to working together to build a
                brighter future for Apapa.
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-base md:text-[20px] md:leading-[32px] text-[#000000] mb-6"
              >
                Idowu Adejumoke Senbanjo{" "}
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-base md:text-[20px] md:leading-[32px] text-[#000000]"
              >
                Executive Chairman of Apapa Local Government
              </motion.p>
            </motion.div>
          </div>
        </div>
        <Image
          src="/svgs/boat-bg.svg"
          className="absolute top-[300px] z-[-1] max-w-[1800px] min-w-[1800px] max-h-[1100px] min-h-[1100px]"
          alt=""
          width={1800}
          height={1100}
        />
      </div>
    </div>
  );
};

export default RealTimeInsight;
