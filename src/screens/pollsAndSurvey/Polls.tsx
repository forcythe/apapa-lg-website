"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { Button } from "@/components";
import { Poll } from "./pollsAndSurvey.types";

const NinModal = dynamic(() => import("@/modal_views/NinModal"), {
  loading: () => null,
});
const VotingModal = dynamic(() => import("@/modal_views/VotingModal"), {
  loading: () => null,
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Polls = ({ poll }: { poll: Poll }) => {
  const [isShowNinModal, setIsShowNinModal] = useState(false);
  const [isShowVotingModal, setIsShowVotingModal] = useState(false);
  return (
    <>
      <motion.div
        key={poll.id}
        variants={itemVariants}
        className="w-full max-w-[844px] mx-auto rounded-[24px] border border-[#E5E5EA] py-[28px] px-[44px] shadow-[0px_4px_24px_0px_#0000000A,4px_0px_20px_0px_#0000000A] bg-white"
      >
        <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#121212] font-[FuturaLTBold] mb-8">
          {poll.question}
        </h6>
        <div className="mb-8 flex flex-col gap-6">
          {poll.options.map((opt, i) => (
            <div
              key={i}
              className="relative w-full h-[76px] rounded-[12px] border-2 border-[#AA8B00] overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 h-full bg-[#FFF6CC]"
                style={{ width: `${opt.percentage}%` }}
              />
              <div className="relative z-[5] flex items-center justify-between w-full h-full px-4">
                <h6 className="text-base md:text-[20px] md:leading-[32px] text-[#AA8B00]">
                  {opt.label}
                </h6>
                <p className="text-base md:text-[20px] md:leading-[28px] font-[FuturaLTBold] text-[#AA8B00]">
                  {opt.percentage}%
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mb-8">
          <Button onClick={() => setIsShowNinModal(true)}>Vote</Button>
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm md:text-base md:leading-[28px] text-[#121212]">
            Poll ends: {poll.ends}
          </p>
          <div className="flex items-center py-2 px-3 border border-[#009A44] rounded-[32px]">
            <p className="text-sm md:text-base md:leading-[28px] text-[#009A44]">
              {poll.totalVotes} Votes
            </p>
          </div>
        </div>
      </motion.div>
      {isShowNinModal && (
        <NinModal
          isShowNinModal={isShowNinModal}
          onActionClick={() => {
            setIsShowVotingModal(true);
            setIsShowNinModal(false);
          }}
          onClickAwayNinModal={() => setIsShowNinModal(false)}
          onCloseNinModal={() => setIsShowNinModal(false)}
        />
      )}
      {isShowVotingModal && (
        <VotingModal
          poll={poll}
          isShowVotingModal={isShowVotingModal}
          onActionClick={() => {
            setIsShowVotingModal(false);
          }}
          onClickAwayVotingModal={() => setIsShowVotingModal(false)}
          onCloseVotingModal={() => setIsShowVotingModal(false)}
        />
      )}
    </>
  );
};

export default Polls;
