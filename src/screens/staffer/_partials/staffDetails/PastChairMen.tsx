import React from "react";
import { motion } from "framer-motion";

import useIsMobile from "@/utils/helpers/useMobile";

import { timelineData } from "./staffDetails.data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PastChairMen = () => {
  const isMobile = useIsMobile(1280);
  const oddIndexes = timelineData
    .map((item, i) => (!item.isEven ? i : null))
    .filter((i) => i !== null);

  const firstOddIndex = oddIndexes[0];
  const lastIndex = timelineData.length - 1;

  return (
    <div className="xl:px-[2.5rem] xxxl:px-[7.5rem]">
      <div className="max-w-[1360px] w-full mx-auto">
        <div className="section-padding">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
          >
            <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
              Past Chairmen
            </p>
          </motion.div>
          <motion.h6
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center w-full max-w-[649px] mx-auto mb-[40px] md:mb-[60px]"
          >
            Over the years, Apapa Local Government has been guided by visionary
            leaders whose contributions have shaped its development and legacy.
            Each administration brought unique initiatives and policies that
            have impacted the lives of residents, strengthened governance, and
            advanced the area’s economic and infrastructural growth. From
            pioneering community projects to steering the LGA through critical
            challenges, these past chairmen have laid a solid foundation upon
            which today’s progress is built. This section honors their service,
            dedication, and leadership in moving Apapa forward.
          </motion.h6>
        </div>

        <div className="relative xl:py-16">
          <div
            className="
              absolute inset-y-0        
              left-1/2 transform -translate-x-1/2
              w-[4px]                    
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(" +
                "to bottom, " +
                "#070707 0px, " +
                "#070707 16px, " +
                "transparent 16px, " +
                "transparent 32px" +
                ")",
            }}
          />
          <div className="hidden xl:flex absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#070707] rotate-45" />
          <div className="hidden xl:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#070707] rotate-45" />

          <div className="space-y-16">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative grid grid-cols-1 xl:grid-cols-3 items-center gap-y-8"
                variants={slideVariants}
                custom={item.isEven}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {item.isEven ? (
                  <>
                    <div
                      className="absolute hidden xl:flex right-0 top-1/2 transform -translate-y-1/2 h-[4px] w-[600px]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(" +
                          "to right, " +
                          "#070707 0px, " +
                          "#070707 16px, " +
                          "transparent 16px, " +
                          "transparent 32px" +
                          ")",
                      }}
                    />
                    <div className="order-2 xl:order-1 relative xl:col-start-2 flex justify-center">
                      <div className="relative shadow-[0px_4px_24px_0px_#0000000A,4px_0px_20px_0px_#0000000A] bg-[#FFD100] w-full max-w-[132px] xl:max-w-[368px] min-h-[72px] xl:min-h-[132px] rounded-[12px] p-6 xl:p-[40px] flex items-center justify-center">
                        <div className="absolute top-[-17px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#070707] z-[9] xl:hidden" />
                        <h6 className="text-white text-base xl:text-[36px] xl:leading-[52px] font-[FuturaLTBold] whitespace-nowrap">
                          {item.date}
                        </h6>
                        {(idx !== lastIndex || !isMobile) && (
                          <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#070707] z-[9] xl:bottom-auto xl:left-auto xl:w-5 xl:h-5 xl:right-[-30px] xl:top-1/2 xl:-translate-x-full xl:-translate-y-1/2" />
                        )}
                      </div>
                    </div>
                    <div className="order-1 xl:order-2 mb-[120px] xl:mb-0 col-start-1 xl:col-start-3 xl:justify-self-end">
                      <div className="relative w-full xl:min-w-[344px] max-w-[344px] mx-auto min-h-[260px] xl:min-h-[400px] bg-white rounded-[32px] border border-gray-200 p-2">
                        <div className="absolute top-[-17px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#070707] z-[9] xl:hidden" />
                        <div className="absolute bottom-[-94px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#070707] z-[9] xl:bottom-auto xl:top-1/2 xl:right-auto xl:left-[7px] xl:-translate-x-full xl:-translate-y-1/2" />
                        <div className="relative overflow-hidden bg-white w-full rounded-[24px] min-h-[244px] xl:min-h-[384px]">
                          <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${item.image})`,
                            }}
                          />
                        </div>
                        <div className="shadow-[0px_4px_24px_rgba(0,0,0,0.04),_4px_0px_20px_rgba(0,0,0,0.04)] w-full max-w-[296px] min-h-[136px] xl:min-h-[152px] py-5 px-[26px] bg-white absolute z-4 bottom-[-90px] xl:bottom-[-65px] left-1/2 transform -translate-x-1/2">
                          <h6 className="text-center text-base md:text-[20px] md:leading-[28px] text-[#101828] font-[FuturaLTBold] mb-2">
                            {item.name}
                          </h6>
                          <div className="mx-auto max-w-[192px] bg-[#FFF6CC] py-2 xl:h-[48px] px-3 text-center text-base xl:text-[20px] xl:leading-[32px] text-[#AA8B00] rounded-[12px]">
                            {item.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="absolute hidden xl:flex inset-x-0 top-1/2 transform -translate-y-1/2 h-[4px] w-[600px]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(" +
                          "to right, " +
                          "#070707 0px, " +
                          "#070707 16px, " +
                          "transparent 16px, " +
                          "transparent 32px" +
                          ")",
                      }}
                    />
                    <div className="col-start-1 xl:col-start-1 xl:justify-self-start mb-[120px] xl:mb-0">
                      <div className="relative w-full xl:min-w-[344px] max-w-[344px] mx-auto min-h-[260px] xl:min-h-[400px] bg-white rounded-[32px] border border-gray-200 p-2">
                        {idx !== firstOddIndex && (
                          <div className="absolute top-[-17px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#070707] z-[9] xl:hidden" />
                        )}
                        <div className="absolute bottom-[-94px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#070707] z-[9] xl:bottom-auto xl:top-1/2 xl:left-auto xl:right-[-33px] xl:-translate-x-full xl:-translate-y-1/2" />
                        <div className="relative overflow-hidden bg-white w-full rounded-[24px] min-h-[244px] xl:min-h-[384px]">
                          <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${item.image})`,
                            }}
                          />
                        </div>
                        <div className="shadow-[0px_4px_24px_rgba(0,0,0,0.04),_4px_0px_20px_rgba(0,0,0,0.04)] w-full max-w-[296px] min-h-[136px] xl:min-h-[152px] py-5 px-[26px] bg-white absolute z-4 bottom-[-90px] xl:bottom-[-65px] left-1/2 transform -translate-x-1/2">
                          <h6 className="text-center text-base md:text-[20px] md:leading-[28px] text-[#101828] font-[FuturaLTBold] mb-2">
                            {item.name}
                          </h6>
                          <div className="mx-auto max-w-[192px] bg-[#FFF6CC] py-2 xl:h-[48px] px-3 text-center text-base xl:text-[20px] xl:leading-[32px] text-[#AA8B00] rounded-[12px]">
                            {item.role}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative xl:col-start-2 flex justify-center">
                      <div className="relative shadow-[0px_4px_24px_0px_#0000000A,4px_0px_20px_0px_#0000000A] bg-[#FFD100] w-full max-w-[132px] xl:max-w-[368px] min-h-[72px] xl:min-h-[132px] rounded-[12px] p-6 xl:p-[40px] flex items-center justify-center">
                        <div className="absolute top-[-17px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#070707] z-[9] xl:hidden" />
                        <h6 className="text-white text-base xl:text-[36px] xl:leading-[52px] font-[FuturaLTBold] whitespace-nowrap">
                          {item.date}
                        </h6>
                        {(idx !== lastIndex || !isMobile) && (
                          <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#070707] z-[9] xl:bottom-auto xl:right-auto xl:w-5 xl:h-5 xl:left-[11px] xl:top-1/2 xl:-translate-x-full xl:-translate-y-1/2" />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastChairMen;
