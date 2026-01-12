import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const RowByRoleOrgChart = dynamic(
  () => import("./_partials/rowByRoleOrgChart"),
  { loading: () => null }
);

const OrganizationalStructure = () => {
  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="Apapa Local Government Organizational Structure" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="w-full mx-auto">
          <div className="w-full pt-[40px] overflow-x-auto pl-4">
            <RowByRoleOrgChart />
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

export default OrganizationalStructure;
