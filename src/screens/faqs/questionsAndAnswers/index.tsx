"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MinusIcon from "../../../../public/svg-component/MinusIcon";
import PlusIcon from "../../../../public/svg-component/PlusIcon";
import ChatIcon from "../../../../public/svg-component/ChatIcon";

const QuestionsAndAnswers = ({
  faq,
}: {
  faq: { id: number; question: string; answer: string };
}) => {
  const [isFaqAnswerOpen, setIsFaqAnswerOpen] = useState(false);

  return (
    <div
      className="bg-white shadow-sm py-4 md:py-[28px] px-6 md:px-[44px] flex items-start gap-4 justify-between"
      onClick={() => setIsFaqAnswerOpen((prev) => !prev)}
    >
      <div
        className={`flex flex-col xxs:flex-row gap-6 ${
          isFaqAnswerOpen ? "items-start" : "items-start md:items-center"
        }`}
      >
        <div className="rounded-full max-w-[40px] min-w-[40px] max-h-[40px] min-h-[40px] md:max-w-[56px] md:min-w-[56px] md:max-h-[56px] md:min-h-[56px] bg-[#AA8B00] flex items-center justify-center">
          <ChatIcon />
        </div>
        <div>
          <h6
            className={`w-full font-bold font-[FuturaLTBold] text-[#121212] text-base md:text-[20px] md:leading-[28px] mb-2`}
          >
            {faq.question}
          </h6>
          <AnimatePresence>
            {isFaqAnswerOpen && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p
                  className={`w-full text-base md:text-[20px] md:leading-[32px] animate-popIn`}
                >
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>
        <motion.span
          animate={{ rotate: isFaqAnswerOpen ? 180 : 0 }}
          className="text-accent font-bold text-xl"
        >
          {isFaqAnswerOpen ? <MinusIcon /> : <PlusIcon />}
        </motion.span>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
