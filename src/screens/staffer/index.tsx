/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { act } from "react";
import Image from "next/image";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { StaffDetails } from "./_partials";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import { useTranslations } from "next-intl";

const StafferPage = ({ activeRole }: { activeRole: any }) => {

  const t = useTranslations("Government.rowData");

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type={t(activeRole?.bannerTitle)} />
      <div className="w-full max-w-[1800px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <StaffDetails activeRole={activeRole} />
        <Image
          src="/svgs/boat-bg.svg"
          className="absolute top-[0px] z-[-1] max-w-[1800px] min-w-[1800px] max-h-[1100px] min-h-[1100px] opacity-80"
          alt=""
          width={1800}
          height={1100}
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />
      </div>
    </AppWrapper>
  );
};

export default StafferPage;
