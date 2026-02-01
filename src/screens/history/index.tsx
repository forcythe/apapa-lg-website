"use client";

import React from "react";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import {
  EvolutionOfApapa,
  Hero,
  HistorySection,
  LandmarkAndInfluence,
} from "./_partials";

import { useTranslations } from "next-intl";

const HistoryPage = () => {

  const t = useTranslations("About.history");

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type={t("banner.title")} />
      <Hero />
      <div className="">
        <HistorySection
          badge={t("history1.badge")}
          headTitle={t("history1.headTitle")}
          image="/svgs/history-1.svg"
          subTitle={t("history1.subTitle")}
        />
        <HistorySection
          badge={t("history2.badge")}
          headTitle={t("history2.headTitle")}
          image="/svgs/history-2.svg"
          subTitle={t("history2.subTitle")}
          reversed
        />
        <EvolutionOfApapa />
        <HistorySection
          badge={t("history3.badge")}
          headTitle={t("history3.headTitle")}
          image="/svgs/history-3.svg"
          subTitle={t("history3.subTitle")}
        />
        <HistorySection
          badge={t("history4.badge")}
          headTitle={t("history4.headTitle")}
          image="/svgs/history-4.svg"
          subTitle={t("history4.subTitle")}
          reversed
        />
        <HistorySection
          badge={t("history5.badge")}
          headTitle={t("history5.headTitle")}
          image="/svgs/history-5.svg"
          subTitle={t("history5.subTitle")}
        />
        <LandmarkAndInfluence />
        <HistorySection
          badge={t("history6.badge")}
          headTitle={t("history6.headTitle")}
          image="/svgs/history-6.svg"
          subTitle={t("history6.subTitle")}
          reversed
        />
        <HistorySection
          badge={t("history7.badge")}
          headTitle={t("history7.headTitle")}
          image="/svgs/history-7.svg"
          subTitle={t("history7.subTitle")}
        />
      </div>
    </AppWrapper>
  );
};

export default HistoryPage;
