"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const letterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const letterVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const Hero = () => {
  const segments = ["A", "pa", "pa"];
  return (
    <div className="w-full max-w-[2000px] min-h-[300px] xxxs:min-h-[400px] xxs:min-h-[400px] xs:min-h-[480px] sm:min-h-[580px] md:min-h-[700px] xl:min-h-[950px] mx-auto relative py-[26px] overflow-hidden">
      <div className="section-padding">
        <div className="w-full mx-auto max-w-[1488px]">
          <div className="w-fit mx-auto">
            <motion.h6
              className="inline-block text-[50px] leading-[20px] xxs:text-[100px] xxs:leading-[60px] md:text-[200px] md:leading-[152px] xl:text-[300px] xl:leading-[202px] font-[FuturaLTBold] text-[#CCEBDA] text-center tracking-[0%]"
              variants={letterContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {segments.map((chunk, i) => (
                <motion.span
                  key={i}
                  variants={letterVariant}
                  style={{
                    display: "inline-block",
                    marginRight: i < segments.length - 1 ? "0.01em" : 0,
                  }}
                >
                  {chunk}
                </motion.span>
              ))}
            </motion.h6>
          </div>
          <div className="absolute top-[80px] md:top-[120px] left-1/2 transform -translate-x-1/2 z-[1] w-fit">
            <motion.div
              style={{ transformOrigin: "50% 100%" }}
              animate={{ rotate: [-1, 1, -1] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Image
                src="/svgs/history-hero-bg.svg"
                alt=""
                width={1200}
                height={746}
                className="w-full mx-auto max-w-[280px] min-w-[280px] max-h-[180px] min-h-[180px] xxxs:max-w-[380px] xxxs:min-w-[380px] xxxs:max-h-[280px] xxxs:min-h-[280px] xxs:max-w-[420px] xxs:min-w-[420px] xxs:max-h-[300px] xxs:min-h-[300px] xs:max-w-[480px] xs:min-w-[480px] xs:max-h-[380px] xs:min-h-[380px] sm:max-w-[630px] sm:min-w-[630px] sm:max-h-[440px] sm:min-h-[440px] md:max-w-[900px] md:min-w-[900px] md:max-h-[500px] md:min-h-[500px] xl:max-w-[1200px] xl:min-w-[1200px] xl:max-h-[746px] xl:min-h-[746px]"
                loading="lazy"
                placeholder="blur"
                blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-0 z-[-1] mx-auto">
        <Image
          src="/svgs/boat-bg.svg"
          alt=""
          width={1450}
          height={1300}
          className="w-full max-w-[1450px] mx-auto"
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />
      </div>
      <div className="absolute right-0 left-0 w-full h-[80px] bottom-[10px] xxs:bottom-[10px] xs:bottom-[30px] sm:bottom-[40px] md:bottom-[60px] xl:bottom-[50px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
      <div className="absolute right-0 left-0 w-full h-[80px] bottom-[10px] xxs:bottom-[10px] xs:bottom-[30px] sm:bottom-[40px] md:bottom-[60px] xl:bottom-[50px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
      <div className="absolute right-0 left-0 w-full h-[80px] bottom-[10px] xxs:bottom-[10px] xs:bottom-[30px] sm:bottom-[40px] md:bottom-[60px] xl:bottom-[50px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
      <div className="absolute right-0 left-0 w-full h-[80px] bottom-[10px] xxs:bottom-[10px] xs:bottom-[30px] sm:bottom-[40px] md:bottom-[60px] xl:bottom-[50px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
      <div className="absolute right-0 left-0 w-full h-[80px] bottom-[10px] xxs:bottom-[10px] xs:bottom-[30px] sm:bottom-[40px] md:bottom-[60px] xl:bottom-[50px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
      <div className="absolute right-0 left-0 w-full h-[80px] bottom-[10px] xxs:bottom-[10px] xs:bottom-[30px] sm:bottom-[40px] md:bottom-[60px] xl:bottom-[50px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
      <div className="absolute right-0 left-0 w-full h-[80px] bottom-[10px] xxs:bottom-[10px] xs:bottom-[30px] sm:bottom-[40px] md:bottom-[60px] xl:bottom-[50px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
    </div>
  );
};

export default Hero;
