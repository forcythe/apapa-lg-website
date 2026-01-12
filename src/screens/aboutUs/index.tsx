import React from "react";
import Image from "next/image";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { AboutUsReUseSection, CoreValues } from "./_partials";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const AboutUsPage = () => {
  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="About Us" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px] flex flex-col gap-[80px] md:gap-[120px]">
            <AboutUsReUseSection
              badge="Our Mission"
              headTitle="Sailing Ahead With Impactful Governance & Development"
              subTitle="To foster sustainable development, promote efficient governance, and
                        enhance the quality of life for all residents through innovative public
                        service delivery, infrastructural renewal, and inclusive economic growth
                        — leveraging Apapa's status as Nigeria’s foremost port city."
              image="/svgs/Frame-1.svg"
            />
            <AboutUsReUseSection
              badge="Our Vision"
              subTitle="To be a model maritime and urban local government — clean, connected, prosperous, and resilient — where people thrive and commerce flows seamlessly."
              image="/svgs/Frame-2.svg"
            />

            <CoreValues />

            <AboutUsReUseSection
              badge="Our Purpose"
              subTitle="To govern effectively and equitably — harnessing Apapa’s port economy, rich heritage, and human capital to deliver meaningful development, preserve cultural identity, and create opportunities for present and future generations."
              image="/svgs/Frame-3.svg"
            />

            <AboutUsReUseSection
              badge="Our Commitment"
              subTitle="Apapa Local Government is committed to improving infrastructure such as roads, drainage systems, and public spaces to support both residents and port operations; promoting economic empowerment through business-friendly policies and support for local enterprises; enhancing social welfare by expanding access to healthcare, education, housing, and essential services; ensuring environmental sustainability by tackling flooding, waste, and pollution through proactive, community-driven solutions; and fostering civic engagement by listening to citizens, encouraging participatory governance, and maintaining transparent communication."
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
