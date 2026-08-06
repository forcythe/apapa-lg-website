import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { AppWrapper, Header } from "@/components";
import { Banner } from "@/screens/_partials";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const RowByRoleOrgChart = dynamic(
  () => import("./_partials/rowByRoleOrgChart"),
  { loading: () => null }
);

const LegislativeArmOrgChart = () => {
  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type={"Legislative Arm Organizational Structure"} />
      <div className="w-full max-w-[2000px] mx-auto relative pb-[40px] md:pb-[60px] overflow-hidden">
        <Link
          href="/government/organizational-structure"
          className="w-fit flex items-center gap-2 bg-white border-2 border-[#FFD100] rounded-[32px] px-6 py-3 text-sm font-[FuturaLTBold] text-black shadow-md hover:bg-[#FFFDE6] transition-colors duration-200 ml-4 md:ml-8 mt-[20px] md:mt-[40px] mb-4"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
        <div className="w-full mx-auto">
          <div className="w-full overflow-x-auto scrollbar-hide px-4">
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

export default LegislativeArmOrgChart;
