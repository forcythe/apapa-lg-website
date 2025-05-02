"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";

import {
  AppWrapper,
  Button,
  FileInputField,
  Header,
  InputField,
  SelectOption,
} from "@/components";
import { Banner } from "../_partials";
import { FormValues } from "./singleHousingServices.types";
import { shareSchema } from "./singleHousingServices.validations";
import { feedbackCategories } from "./singleHousingServices.data";
import InputLocationIcon from "../../../public/svg-component/InputLocationIcon";
import { SuccessModal } from "@/modal_views";

const SingleHousingServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScrollToTop = () => {
    containerRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik<FormValues>({
    validationSchema: shareSchema,
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      feedback: "",
      governmentID: null,
      residentialAddress: "",
      familySize: "",
      proofOfIncome: null,
      serviceType: "",
      reason: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      console.log(values);
      setTimeout(() => {
        setIsShowSuccessModal(true);
        formik.resetForm();
        setIsLoading(false);
      }, 4000);
    },
  });
  return (
    <div ref={containerRef}>
      <AppWrapper>
        <div className="sticky top-0 z-[10]">
          <Header />
        </div>
        <Banner type="Service Application" />
        <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
          <div className="section-padding">
            <div className="w-full max-w-[1488px] mx-auto flex flex-col xl:flex-row items-start justify-between gap-6">
              <div className="w-fit mx-auto">
                <Image
                  src="/svgs/service-app.svg"
                  alt=""
                  className="xl:max-w-[462px] xl:min-w-[462px] xxl:max-w-[562px] xxl:min-w-[562px] xxxl:max-w-[662px] xxxl:min-w-[662px]"
                  width={662}
                  height={544}
                />
              </div>
              <div className="w-full shadow-lg xl:max-w-[736px] rounded-[16px] md:rounded-[32px] py-[30px] md:py-[60px] px-6 md:px-[44px] bg-white">
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex flex-col gap-4 md:gap-6">
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
                    <FileInputField
                      name="governmentID"
                      placeholder="Government ID"
                      selectedFile={formik.values.governmentID}
                      setSelectedFile={(file) =>
                        formik.setFieldValue("governmentID", file)
                      }
                      error={
                        formik.touched.governmentID &&
                        formik.errors.governmentID
                          ? formik.errors.governmentID
                          : undefined
                      }
                      onBlur={formik.handleBlur}
                      infoText="E.g. NIN, Passport"
                    />
                    <InputField
                      type="text"
                      placeholder="Residential address"
                      name="residentialAddress"
                      value={formik.values.residentialAddress}
                      onChange={formik.handleChange}
                      error={
                        formik.submitCount > 0 &&
                        typeof formik.errors.residentialAddress === "string"
                          ? formik.errors.residentialAddress
                          : undefined
                      }
                      LeftIcon={<InputLocationIcon />}
                    />
                    <SelectOption
                      name="familySize"
                      label="Family size"
                      value={formik.values.familySize}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.submitCount > 0 &&
                        typeof formik.errors.familySize === "string"
                          ? formik.errors.familySize
                          : undefined
                      }
                      options={feedbackCategories}
                    />
                    <FileInputField
                      name="proofOfIncome"
                      placeholder="Proof of income"
                      selectedFile={formik.values.proofOfIncome}
                      setSelectedFile={(file) =>
                        formik.setFieldValue("proofOfIncome", file)
                      }
                      error={
                        formik.touched.proofOfIncome &&
                        formik.errors.proofOfIncome
                          ? formik.errors.proofOfIncome
                          : undefined
                      }
                      onBlur={formik.handleBlur}
                      infoText="E.g. payment slip"
                    />
                    <SelectOption
                      name="serviceType"
                      label="Service type"
                      value={formik.values.serviceType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.submitCount > 0 &&
                        typeof formik.errors.serviceType === "string"
                          ? formik.errors.serviceType
                          : undefined
                      }
                      options={feedbackCategories}
                    />
                    <InputField
                      type="text"
                      placeholder="Reason for application"
                      name="reason"
                      value={formik.values.reason}
                      onChange={formik.handleChange}
                      error={
                        formik.submitCount > 0 &&
                        typeof formik.errors.reason === "string"
                          ? formik.errors.reason
                          : undefined
                      }
                    />
                  </div>

                  <div className="mt-6 md:mt-[52px]">
                    <Button
                      type="submit"
                      isLoading={isLoading}
                      disabled={isLoading}
                    >
                      Apply
                    </Button>
                  </div>
                </form>
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
      {isShowSuccessModal && (
        <SuccessModal
          headText="Application Received"
          subText="Thank you for submitting your application. We have successfully received your request and our team is currently reviewing it. You will receive a callback soon with details on the next steps. We appreciate your patience and look forward to assisting you!"
          isShowSuccessModal={isShowSuccessModal}
          onClickAwaySuccessModal={() => {
            setIsShowSuccessModal(false);
            handleScrollToTop();
          }}
          onCloseSuccessModal={() => {
            setIsShowSuccessModal(false);
            handleScrollToTop();
          }}
        />
      )}
    </div>
  );
};

export default SingleHousingServicesPage;
