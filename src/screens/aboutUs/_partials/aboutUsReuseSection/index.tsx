"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

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

const AboutUsReUseSection = ({
  badge,
  headTitle,
  subTitle,
  image,
}: {
  badge: string;
  headTitle?: string;
  subTitle: string;
  image: string;
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
      >
        <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
          {badge}
        </p>
      </motion.div>
      {headTitle && (
        <motion.h6
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-xl leading-[32px] md:text-[36px] font-[FuturaLTBold] md:leading-[52px] text-[#000000] text-center max-w-[600px] mx-auto mb-3"
        >
          {headTitle}
        </motion.h6>
      )}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center max-w-[600px] mx-auto mb-[60px] md:mb-[80px]"
      >
        {subTitle}
      </motion.p>
      <motion.div variants={itemVariants}>
        <Image
          src={image}
          alt=""
          width={1488}
          height={544}
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutUsReUseSection;
