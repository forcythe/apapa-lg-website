"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useFormik } from "formik";

import { AppWrapper, Button, Header, InputField } from "@/components";
import { Banner } from "../_partials";
// import {
//   basePattern,
//   data,
//   feedbackCategories,
// } from "./volunteerOpportunities.data";
import { validationSchema } from "./volunteerOpportunities.validation";
import { FormValues } from "./volunteerOpportunities.types";
import SelectOption from "@/components/selectOption";
import { SuccessModal } from "@/modal_views";
import { p } from "framer-motion/m";
import { div } from "framer-motion/client";

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

const VolunteerOpportunitiesPage = () => {
  //fetch Volunteers
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/volunteer-opportunities?populate=*`
        );
        const json = await res.json();
        setVolunteers(json.data || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  const getImageUrl = (image: any) => {
    if (!image) return ""; // fallback
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.formats?.medium?.url || image.url}`;
  };

  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  // const groups = volunteers.length ? Math.ceil(volunteers.length / 4) : 0;
  // const rowsPerGroup = 3;
  // const rowHeightsPerGroup = ["472px", "308px", "160px"];
  // // const gridTemplateRows = Array.from({ length: groups * rowsPerGroup })
  // //   .map((_, i) => rowHeightsPerGroup[i % rowsPerGroup])
  // //   .join(" ");
  // const gridTemplateRows = useMemo(() => {
  //   if (!volunteers.length) return "";
  //   return Array.from({ length: groups * rowsPerGroup })
  //     .map((_, i) => rowHeightsPerGroup[i % rowsPerGroup])
  //     .join(" ");
  // }, [volunteers.length]);

  const [isLoading, setIsLoading] = useState(false);
  const roleOptions = useMemo(
    () =>
      volunteers.map((card) => ({
        id: card.documentId ?? card.id ?? card.title,
        title: card.title,
      })),
    [volunteers]
  );
  const formik = useFormik<FormValues>({
    validationSchema: validationSchema,
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      feedback: "",
      feedbackCategory: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      setTimeout(() => {
        console.log(values);
        setIsShowSuccessModal(true);
        resetForm();
        setIsLoading(false);
      }, 4000);
    },
  });

  return (
    <>
      <AppWrapper>
        <div className="sticky top-0 z-[10]">
          <Header />
        </div>
        <Banner type="Volunteer Opportunities in Apapa: Join Hands, Make a Difference" />
        <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
          <div className="section-padding">
            <div className="w-full max-w-[1488px] mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-[700px] mx-auto mb-[80px] md:mb-[120px]"
              >
                <motion.div
                  variants={itemVariants}
                  className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-6"
                >
                  <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
                    Community Service Programs
                  </p>
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-[20px] md:leading-[30px] text-[#000000] text-center mb-6"
                >
                  Explore a variety of active volunteer initiatives aimed at
                  improving Apapa&apos;s community. From environmental cleanup
                  drives to educational support programs, there’s a project for
                  everyone who wants to make a difference.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Button
                    onClick={() => {
                      formRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    Become a Volunteer
                  </Button>
                </motion.div>
              </motion.div>

              {loading && (
                <div>
                  <p className="text-center m-auto">Loading...</p>
                </div>
              )}

              {!loading && volunteers.length > 0 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  // className="w-full max-w-[1488px] mb-[80px] md:mb-[120px] hidden lg:grid grid-cols-3 gap-[36px]"
                  // style={{ gridTemplateRows }}
                  className="w-full max-w-[1488px] mb-[80px] md:mb-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {volunteers.map((card, index) => {
                    // const group = Math.floor(index / 6);
                    // const patternIndex = index % 6;
                    // const computedRowStart =
                    //   basePattern[patternIndex].rowStart + group * rowsPerGroup;
                    // const rowSpanClass =
                    //   basePattern[patternIndex].rowSpan === 2
                    //     ? "row-span-2"
                    //     : "";
                    // const dynamicClass = `row-start-${computedRowStart} ${rowSpanClass}`;

                    return (
                      <motion.div
                        key={card.documentId}
                        variants={itemVariants}
                        // className={`shadow-[0px_12px_24px_0px_rgba(0,0,0,0.1)] bg-white relative overflow-hidden w-full rounded-[32px] p-2 flex flex-col justify-end ${dynamicClass}`}
                        className="shadow-[0px_12px_24px_0px_rgba(0,0,0,0.1)] bg-white relative overflow-hidden w-full rounded-[32px] p-2 flex flex-col justify-end min-h-[360px] md:min-h-[420px] lg:min-h-[460px]"
                      >
                        <div className="w-full h-full rounded-[24px] p-[28px] relative flex flex-col justify-end group overflow-hidden">
                          <div
                            className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
                            style={{
                              backgroundImage: `
                              linear-gradient(
                                180deg,
                                rgba(0, 0, 0, 0) 0%,
                                rgba(0, 0, 0, 0.08) 14.58%,
                                rgba(0, 0, 0, 0.78) 50%,
                                #000 70.83%,
                                #000 83.33%,
                                #000 100%
                              ),
                              url(${getImageUrl(card.image)})
                            `,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              willChange: "transform",
                            }}
                          />

                          <div className="relative z-10">
                            <h1 className="text-[20px] leading-[28px] font-[FuturaLTBold] text-white mb-2">
                              {card.title}
                            </h1>
                            <p className="text-base md:text-[20px] md:leading-[32px] font-medium text-white">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {/* Mobile Grid (optional animation) */}
              {!loading && volunteers.length > 0 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4"
                >
                  {volunteers.map((card) => (
                    <motion.div
                      key={card.documentId}
                      variants={itemVariants}
                      className="shadow-[0px_12px_24px_0px_rgba(0,0,0,0.1)] bg-white relative overflow-hidden w-full rounded-[32px] p-2 flex flex-col justify-end min-h-[600px]"
                    >
                      <div className="w-full h-full rounded-[24px] p-[28px] relative flex flex-col justify-end group overflow-hidden">
                        <div
                          className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105"
                          style={{
                            backgroundImage: `
                            linear-gradient(
                              180deg,
                              rgba(0, 0, 0, 0) 0%,
                              rgba(0, 0, 0, 0.08) 14.58%,
                              rgba(0, 0, 0, 0.78) 50%,
                              #000 70.83%,
                              #000 83.33%,
                              #000 100%
                            ),
                            url(${getImageUrl(card.image)})
                          `,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="relative z-10">
                          <h1 className="text-[20px] leading-[28px] font-[FuturaLTBold] text-white mb-2">
                            {card.title}
                          </h1>
                          <p className="text-base md:text-[20px] md:leading-[32px] font-medium text-white">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-[736px] mx-auto min-h-[748px] bg-white py-[45px] md:py-[60px] px-4 md:px-[44px] rounded-[32px] shadow-[0px_4px_24px_0px_#0000000A,4px_0px_20px_0px_#0000000A]"
                ref={formRef}
              >
                <h6 className="text-center font-[FuturaLTBold] text-[24px] leading-[30px] md:text-[36px] md:leading-[52px] text-[#101828] mb-[52px]">
                  Become a Volunteer
                </h6>

                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col gap-4 md:gap-6"
                >
                  <InputField
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
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
                    placeholder="Phone number"
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
                    placeholder="Email address"
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
                    label="Volunteer role"
                    value={formik.values.feedbackCategory}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.submitCount > 0 &&
                      typeof formik.errors.feedbackCategory === "string"
                        ? formik.errors.feedbackCategory
                        : undefined
                    }
                    options={roleOptions}
                  />
                  <InputField
                    type="text"
                    placeholder="Why do you want to volunteer?"
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
                  <div className="mt-6 md:mt-[52px]">
                    <Button
                      type="submit"
                      isLoading={isLoading}
                      disabled={isLoading}
                    >
                      Volunteer
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
            />
          </div>
        </div>
      </AppWrapper>

      {isShowSuccessModal && (
        <SuccessModal
          headText="Volunteer Application"
          subText="We have received your volunteer application and truly appreciate your
          willingness to contribute to the community. Our team is currently
          reviewing your submission, and we will reach out to you soon with the
          next steps. We look forward to working with you to make a positive
          impact!"
          isShowSuccessModal={isShowSuccessModal}
          onClickAwaySuccessModal={() => {
            setIsShowSuccessModal(false);
          }}
          onCloseSuccessModal={() => {
            setIsShowSuccessModal(false);
          }}
        />
      )}
    </>
  );
};

export default VolunteerOpportunitiesPage;
