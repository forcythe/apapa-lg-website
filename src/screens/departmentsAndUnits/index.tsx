"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { cards } from "./departmentsAndUnitsPage.data";
import FooterArrow from "../../../public/svg-component/FooterArrow";

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

const DepartmentsAndUnitsPage = () => {
  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="Departments & Units" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 items-center justify-center"
            >
              {cards.map((card, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden relative w-full rounded-[16px] md:rounded-[32px] max-w-[480px] border border-[#D0D0D0] min-h-[368px] bg-[#F7F7F7] p-4 md:p-6"
                >
                  <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#101828] font-[FuturaLTBold] mb-2">
                    {card.title}
                  </h6>
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085] mb-5">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-base md:text-[20px] md:leading-[32px] text-accent">
                      Apply Now!
                    </p>
                    <FooterArrow fill="#aa8b00" />
                  </div>
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
        </div>
        <Image
          src="/svgs/boat-bg.svg"
          className="absolute top-[0px] z-[-1] max-w-[1450px] min-w-[1450px] max-h-[1100px] min-h-[1100px]"
          alt=""
          width={1450}
          height={1300}
        />
      </div>
    </AppWrapper>
  );
};

export default DepartmentsAndUnitsPage;
