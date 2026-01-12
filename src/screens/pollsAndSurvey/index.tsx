"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
// import { polls } from "./pollsAndSurvey.data";
import { Poll } from "./pollsAndSurvey.types";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const Polls = dynamic(() => import("./Polls"), { loading: () => null });

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

const formatDateWithOrdinal = (isoDate: string) => {
  const date = new Date(isoDate);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month} ${year}`;
};

const PollsAndSurveyPage = () => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/polls-and-surveys?populate=*`
        );
        const json = await res.json();

        const mappedPolls: Poll[] = json.data.map((poll: any) => ({
          id: poll.documentId,
          question: poll.question,
          options: poll.options,
          ends: formatDateWithOrdinal(poll.endsAt),
          totalVotes: poll.totalVotes,
        }));

        setPolls(mappedPolls);
      } catch (error) {
        console.error("Failed to fetch polls:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolls();
  }, []);

  return (
    <>
      <AppWrapper>
        <div className="sticky top-0 z-[10]">
          <Header />
        </div>
        <Banner type="Polls and Surveys" />
        <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
          <div className="section-padding">
            <div className="w-full max-w-[1488px] mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-[700px] mx-auto mb-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
                >
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                    Active Polls
                  </p>
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center mb-6"
                >
                  Participate in ongoing community surveys and cast your vote on
                  key public issues that matter to you. Stay involved and make
                  your voice heard in shaping Apapa&apos;s future.
                </motion.p>
              </motion.div>

              <div className="flex flex-col gap-4">
                {loading && (
                  <div className="w-full text-center py-20">
                    <p className="text-base text-[#667085]">
                      Loading polls and surveys...
                    </p>
                  </div>
                )}
                {!loading &&
                  polls?.map((poll) => <Polls key={poll?.id} poll={poll} />)}
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
        </div>
      </AppWrapper>
    </>
  );
};

export default PollsAndSurveyPage;
