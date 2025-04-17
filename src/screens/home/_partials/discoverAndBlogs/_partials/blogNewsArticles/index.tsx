import React from "react";
import { motion } from "framer-motion";

import { tabId } from "./blogNewsArticles.types";
import { blogsNavigation } from "./blogNewsArticles.data";

import FooterArrow from "../../../../../../../public/svg-component/FooterArrow";

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

const BlogNewsArticles = () => {
  const [activeTab, setActiveTab] = React.useState(
    blogsNavigation.tabs[0].id as tabId
  );
  return (
    <div className="pt-[100px] md:pt-[120px] max-w-[1488px] mx-auto">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
      >
        <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
          Blogs, News and Articles
        </p>
      </motion.div>
      <motion.h6
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="text-xl leading-[32px] md:text-[36px] md:leading-[52px] text-[#000000] text-center font-[FuturaLTBold] max-w-[564px] mx-auto mb-[20px]"
      >
        Stay Informed With the Latest Updates
      </motion.h6>

      <div className="w-full max-w-[564px] mx-auto flex flex-col xxs:flex-row gap-2 mb-[40px] min-h-[56px]">
        <input
          type="text"
          className="min-h-[56px] w-full max-w-[400px] mx-auto border border-[#D0D0D0] bg-[#FFFFFF] rounded-[100px] placeholder:text-[#B0B0B0] text-base md:text-[20px] md:leading-[32px] pl-6 outline-none"
          placeholder="Enter your email"
        />
        <div className="xxs:min-w-[156px] min-h-[56px]">
          <button className="text-base md:text-[20px] md:leading-[32px] bg-accent rounded-[44px] text-white p-4 w-full">
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-full max-w-[268px] mx-auto flex gap-2 mb-6 overflow-auto scrollbar-hide">
        {blogsNavigation.tabs.map((tab) => (
          <motion.div
            key={tab.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full py-[10px] px-[14px] rounded-[44px] cursor-pointer ${
              activeTab === tab.id ? "bg-accent2 " : "bg-none"
            }`}
            onClick={() => setActiveTab(tab.id as tabId)}
          >
            <h6
              className={`text-[18px] leading-[28px] md:text-[20px] md:leading-[32px] ${
                activeTab === tab.id
                  ? "text-accent font-[FuturaLTBold]"
                  : "text-[#667085]"
              }`}
            >
              {tab.label}
            </h6>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        key={activeTab}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] sm:gap-y-6 gap-x-[30px] md:auto-rows-[minmax(524px,1fr)] place-items-center"
      >
        {blogsNavigation.items[activeTab].map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="w-full max-w-[476px] sm:min-h-[524px]"
          >
            <div className="w-full p-2 min-h-[256px] rounded-[32px] bg-white shadow-md mb-6">
              <div
                className="w-full min-h-[240px] rounded-[24px] bg-red-200 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${item.img}')`,
                }}
              ></div>
            </div>
            <p className="text-[14px] leading-[24px] md:text-base text-[#B0B0B0] mb-3">
              {item.createdAt}
            </p>
            <h6 className="mb-2 font-[FuturaLTBold] text-base md:text-[20px] md:leading-[28px]">
              {item.title}
            </h6>
            <p className="text-[#667085] text-base md:text-[20px] md:leading-[32px] mb-3">
              {item.desc}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-base md:text-[20px] md:leading-[32px] text-accent">
                Read more
              </p>
              <FooterArrow fill="#aa8b00" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogNewsArticles;
