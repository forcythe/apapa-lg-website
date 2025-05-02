"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { services } from "./housingServices.data";
import { slugify } from "@/utils/helpers/slugify";

import FooterArrow from "../../../public/svg-component/FooterArrow";
// import { ProjectDetails } from "../projects/_partials";

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

const HousingServicesPage = () => {
  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="Housing Services: Building Homes, Building Communities" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full max-w-[1488px] mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-[700px] mx-auto mb-[80px]"
            >
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
              >
                <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                  Housing Services in Apapa
                </p>
              </motion.div>
              <motion.p
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center"
              >
                Apapa Local Government is committed to improving the quality of
                life for residents by providing access to affordable and quality
                housing programs. The Housing Services department ensures that
                all citizens, regardless of income level, can find suitable
                housing opportunities and benefit from housing-related
                assistance.
              </motion.p>
            </motion.div>
            <div className="mb-[80px] md:mb-[120px]">
              <Image
                src="/svgs/service-bg.svg"
                width={1488}
                height={544}
                alt="services-bg"
              />
            </div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-[60px]"
            >
              <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                Available Housing Programs
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[40px] gap-x-6 md:auto-rows-[minmax(272px,1fr)]"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="w-full max-w-[354px] md:min-h-[272px]"
                >
                  <div className="bg-[#FFF6CC] rounded-[12px] p-2 mb-4 min-h-[56px] max-h-[56px] max-w-[56px] min-w-[56px] md:min-h-[72px] md:min-w-[72px] md:max-h-[72px] md:max-w-[72px] flex items-center justify-center">
                    {
                      <service.icon className="max-w-[40px] min-w-[40px] min-h-[40px] max-h-[40px] md:max-w-[56px] md:min-w-[56px] md:max-h-[56px] md:min-h-[56px]" />
                    }
                  </div>
                  <h6 className="font-[FuturaLTBold] text-[18px] leading-[28px] md:text-[20px] md:leading-[28px] md:mb-2">
                    {service.title}
                  </h6>
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085] mb-5">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/housing-services/${slugify(
                      service.title
                    )}`}
                    className="flex items-center gap-2"
                  >
                    <p className="text-base md:text-[20px] md:leading-[32px] text-accent">
                      Apply Now!
                    </p>
                    <FooterArrow fill="#aa8b00" />
                  </Link>
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

export default HousingServicesPage;
