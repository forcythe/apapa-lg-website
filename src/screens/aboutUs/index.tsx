import React from "react";
import Image from "next/image";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { AboutUsReUseSection, CoreValues } from "./_partials";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import { useTranslations } from "next-intl";

const AboutUsPage = () => {

  const t = useTranslations("About");

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type={t("banner.title")} />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px] flex flex-col gap-[80px] md:gap-[120px]">
            <AboutUsReUseSection
              badge={t("mission.badge")}
              headTitle={t("mission.headTitle")}
              subTitle={t("mission.subTitle")}
              image="/svgs/Frame-1.svg"
            />
            <AboutUsReUseSection
              badge={t("vision.badge")}
              subTitle={t("vision.subTitle")}
              image="/svgs/Frame-2.svg"
            />

            <CoreValues />

            <AboutUsReUseSection
              badge={t("purpose.badge")}
              subTitle={t("purpose.subTitle")}
              image="/svgs/Frame-3.svg"
            />

            <AboutUsReUseSection
              badge={t("commitment.badge")}
              subTitle={t("commitment.subTitle")}
              image="/svgs/Frame-4.svg"
            />
          </div>
        </div>
        <Image
          src="/svgs/boat-bg.svg"
          className="absolute top-[0px] z-[-1] max-w-[1450px] min-w-[1450px] max-h-[1100px] min-h-[1100px]"
          alt=""
          width={1450}
          height={1300}
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />
      </div>
    </AppWrapper>
  );
};

export default AboutUsPage;
