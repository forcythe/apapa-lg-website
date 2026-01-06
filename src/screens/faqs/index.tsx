"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { faqsNavigation } from "./faqs.data";
import QuestionsAndAnswers from "./questionsAndAnswers";
import { FaqItem, TabId } from "./faq.type";

const Faqs = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(
    faqsNavigation.tabs[0].id as TabId
  );

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/faqs`
        );
        const json = await res.json();
        setFaqs(json.data || []);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // const activeFaq = faqsNavigation?.faqs[activeTab];
  const activeFaqs = faqs.filter((faq) => faq.category === activeTab);

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="Frequently Asked Questions: Your Guide to Community Engagement and Services" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px]">
            <div className="mb-6 flex  gap-2 w-full max-w-[400px] md:max-w-[488px] mx-auto overflow-x-auto scrollbar-hide">
              {faqsNavigation.tabs.map((tab) => (
                <motion.div
                  key={tab.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`py-[10px] px-[14px] w-fit rounded-[44px] cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#FFF6CC] text-[#AA8B00] font-[FuturaLTBold]"
                      : "text-[#667085]"
                  }`}
                  onClick={() => setActiveTab(tab.id as TabId)}
                >
                  <p className="text-[14px] leading-[24px] md:text-[20px] md:leading-[32px]">
                    {tab.label}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="max-w-[900px] mx-auto flex flex-col gap-6 w-full">
              {/* {activeFaq && activeFaq.length > 0 ? (
                activeFaq.map((faq) => (
                  <QuestionsAndAnswers
                    key={`${activeTab}-${faq.id}`}
                    faq={faq}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500 w-full">
                  No results found for &quot;{activeTab}&quot;.
                </p>
              )} */}
              {!loading && activeFaqs.length > 0 ? (
                activeFaqs.map((faq) => (
                  <QuestionsAndAnswers key={faq.documentId} faq={faq} />
                ))
              ) : !loading ? (
                <p className="text-center text-gray-500 w-full">
                  No results found for &quot;{activeTab}&quot;.
                </p>
              ) : (
                <p className="text-center text-gray-400 w-full">
                  Loading FAQs…
                </p>
              )}
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
          />
        </div>
      </div>
    </AppWrapper>
  );
};

export default Faqs;
