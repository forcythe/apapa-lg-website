import React from "react";
import { motion } from "framer-motion";

import CheckMarkIcon from "../../../../../public/svg-component/CheckMarkIcon";
import { manifestoSections } from "./staffDetails.data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Manifesto = () => {
  return (
    <div>
      <div className="section-padding">
        <div className="max-w-[1488px] w-full mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="text-[20px] leading-[30px] md:text-[36px] md:leading-[52px] text-[#000000] text-center mb-6 font-[FuturaLTBold]"
          >
            S.H.E.E
          </motion.h6>
          <motion.h6
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
        <div key={index} className="mb-[60px] lg:mb-[120px]">
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
                  viewport={{ once: true }}
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
  );
};

export default Manifesto;
