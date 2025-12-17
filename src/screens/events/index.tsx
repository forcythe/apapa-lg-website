"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { cards } from "./events.data";
import CalenderIcon from "../../../public/svg-component/CalenderIcon";
import LocationIcon from "../../../public/svg-component/LocationIcon";
import TimeIcon from "../../../public/svg-component/TimeIcon";

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

const Events = () => {
  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="Apapa Events: Engage, Celebrate, and Connect" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 md:gap-x-[30px] md:gap-y-[40px] items-center justify-center"
            >
              {cards.map((card, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden relative w-full max-w-[476px] min-h-[528px] "
                >
                  <div className="mb-6 rounded-[24px] md:rounded-[32px] min-h-[256px] bg-white border border-[#D0D0D0] p-2">
                    <div
                      className="w-full min-h-[240px]  rounded-[16px] md:rounded-[24px] bg-contain bg-center"
                      style={{
                        backgroundImage: "url('/image/card-img.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#101828] font-[FuturaLTBold] mb-2">
                    {card.title}
                  </h6>
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085] mb-5">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <CalenderIcon fill="#AA8B00" />
                    <p className="text-[14px] leading-[20px] md:text-base text-[#121212]">
                      {card.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <TimeIcon fill="#AA8B00" />
                    <p className="text-[14px] leading-[20px] md:text-base text-[#121212]">
                      {card.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <LocationIcon fill="#AA8B00" />
                    <p className="text-[14px] leading-[20px] md:text-base text-[#121212]">
                      {card.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full absolute top-0 z-[-1] mx-auto">
          <Image
            src="/svgs/boat-bg.svg"
            alt=""
            width={1450}
            height={1300}
            className="w-full max-w-[1450px] mx-auto"
          />
        </div>
      </div>
    </AppWrapper>
  );
};

export default Events;
