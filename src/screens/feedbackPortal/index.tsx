"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useFormik } from "formik";

import {
  AppWrapper,
  Button,
  Header,
  InputField,
  SelectOption,
} from "@/components";
import { Banner } from "../_partials";
import { feedbackCategories, navigation } from "./feedbackPortal.data";
import { FormValues, TabId } from "./feedbackPortal.type";
import { shareSchema, trackSchema } from "./feedbackPortal.validation";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import { useTranslations } from "next-intl";

const SuccessModal = dynamic(() => import("@/modal_views/SuccessModal"), {
  loading: () => null,
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeedbackPortalPage = () => {

  const t = useTranslations("Community")

  const containerRef = useRef<HTMLDivElement>(null);
  const handleScrollToTop = () => {
    containerRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowTrackSuccessModal, setIsShowTrackSuccessModal] = useState(false);
  const [activeTab, setActiveTab] = useState(navigation.tabs[0].id as TabId);

  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik<FormValues>({
    validationSchema:
      activeTab === "track-feedback" ? trackSchema : shareSchema,
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      feedback: "",
      feedbackCategory: "",
      trackingId: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      if (activeTab === "share-feedback") {
        handleShareFeedbackAction({ ...values });
      } else if (activeTab === "track-feedback") {
        handleTrackFeedbackAction({ ...values });
      }
    },
  });

  const handleShareFeedbackAction = async (values: {
    fullName?: string;
    email?: string;
    phone?: string;
    feedback?: string;
    feedbackCategory?: string;
  }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "feedback",
          data: values,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsShowSuccessModal(true);
      formik.resetForm();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTrackFeedbackAction = (values: { trackingId?: string }) => {
    setTimeout(() => {
      console.log(values);
      setIsShowTrackSuccessModal(true);
      formik.resetForm();
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div ref={containerRef}>
      <AppWrapper>
        <div className="sticky top-0 z-[10]">
          <Header />
        </div>
        <Banner type={t("feedback.bannerTitle")} />
        <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
          <div className="section-padding">
            <div className="w-full mx-auto max-w-[1488px]">
              <div className="mb-6 flex justify-center gap-2 w-full max-w-[275px] md:max-w-[361px] mx-auto overflow-x-auto scrollbar-hide">
                {navigation.tabs.map((tab) => (
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
                    <p className="text-[14px] leading-[24px] md:text-[20px] md:leading-[32px] whitespace-nowrap">
                      {t(tab.label)}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-[736px] mx-auto min-h-[748px] bg-white py-[45px] md:py-[60px] px-4 md:px-[44px] rounded-[32px] shadow-[0px_4px_24px_0px_#0000000A,4px_0px_20px_0px_#0000000A]"
              >
                <h6 className="text-center font-[FuturaLTBold] text-[24px] leading-[30px] md:text-[36px] md:leading-[52px] text-[#101828] mb-[52px]">
                  {activeTab === "share-feedback"
                    ? t("feedback.activeTab")
                    : t("feedback.activeTab2")}
                </h6>

                <form onSubmit={formik.handleSubmit}>
                  {activeTab === "share-feedback" ? (
                    <div className="flex flex-col gap-4 md:gap-6">
                      <InputField
                        type="text"
                        name="fullName"
                        placeholder={t("feedback.fullname")}
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        error={
                          formik.submitCount > 0 &&
                          typeof formik.errors.fullName === "string"
                            ? formik.errors.fullName
                            : undefined
                        }
                        onBlur={formik.handleBlur}
                      />
                      <InputField
                        type="text"
                        placeholder={t("feedback.phoneNumber")}
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={
                          formik.submitCount > 0 &&
                          typeof formik.errors.phone === "string"
                            ? formik.errors.phone
                            : undefined
                        }
                        onBlur={formik.handleBlur}
                      />
                      <InputField
                        type="text"
                        placeholder={t("feedback.emailAddress")}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.submitCount > 0 &&
                          typeof formik.errors.email === "string"
                            ? formik.errors.email
                            : undefined
                        }
                      />
                      <SelectOption
                        name="feedbackCategory"
                        label={t("feedback.feedbackCategory")}
                        value={formik.values.feedbackCategory}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.submitCount > 0 &&
                          typeof formik.errors.feedbackCategory === "string"
                            ? formik.errors.feedbackCategory
                            : undefined
                        }
                        options={feedbackCategories}
                        t={(key: string) => t(`feedback.${key}`)}
                      />
                      <InputField
                        type="text"
                        placeholder={t("feedback.feedbackMessage")}
                        name="feedback"
                        value={formik.values.feedback}
                        onChange={formik.handleChange}
                        error={
                          formik.submitCount > 0 &&
                          typeof formik.errors.feedback === "string"
                            ? formik.errors.feedback
                            : undefined
                        }
                      />
                    </div>
                  ) : (
                    <InputField
                      type="text"
                      placeholder="Tracking ID"
                      name="trackingId"
                      value={formik.values.trackingId}
                      onChange={formik.handleChange}
                      error={
                        formik.submitCount > 0 &&
                        typeof formik.errors.trackingId === "string"
                          ? formik.errors.trackingId
                          : undefined
                      }
                    />
                  )}

                  <div className="mt-6 md:mt-[52px]">
                    <Button
                      type="submit"
                      isLoading={isLoading}
                      disabled={isLoading}
                    >
                      {activeTab === "share-feedback"
                        ? t("feedback.btn1")
                        : t("feedback.btn2")}
                    </Button>
                  </div>
                </form>
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
              loading="lazy"
              placeholder="blur"
              blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
            />
          </div>
        </div>
      </AppWrapper>
      {isShowSuccessModal && (
        <SuccessModal
          headText={t("feedback.successMessage.headText")}
          copyText="APAPA-20250115-12345"
          // subText="You can use this ID to track the status of your submission on our Track Feedback page. If you have any questions, please contact us at feedback@apapalga.ng or call our support line at +234 800 123 4567. We value your input and are committed to addressing your concerns promptly."
          subText={t("feedback.successMessage.subText")}
          isShowSuccessModal={isShowSuccessModal}
          onClickAwaySuccessModal={() => {
            setIsShowSuccessModal(false);
            handleScrollToTop();
          }}
          onCloseSuccessModal={() => {
            setIsShowSuccessModal(false);
            handleScrollToTop();
          }}
          actionBtnTitle="Track Feedback"
          showOutlineBtn
          onActionClick={() => {
            setActiveTab("track-feedback");
            setIsShowSuccessModal(false);
            handleScrollToTop();
          }}
        />
      )}
      {isShowTrackSuccessModal && (
        <SuccessModal
          headText="Pending Further Information"
          copyText="APAPA-20250115-12345"
          subText="Your feedback is pending further information. If you have any questions, please contact us at feedback@apapalga.ng or call our support line at +234 800 123 4567. We value your input and are committed to addressing your concerns promptly."
          isShowSuccessModal={isShowTrackSuccessModal}
          onClickAwaySuccessModal={() => {
            setIsShowTrackSuccessModal(false);
            handleScrollToTop();
          }}
          onCloseSuccessModal={() => {
            setIsShowTrackSuccessModal(false);
            handleScrollToTop();
          }}
        />
      )}
    </div>
  );
};

export default FeedbackPortalPage;
