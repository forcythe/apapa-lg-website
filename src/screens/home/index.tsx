import React from "react";
import dynamic from "next/dynamic";

import { AppWrapper } from "@/components";
import Hero from "./_partials/hero";

const RealTimeInsight = dynamic(() => import("./_partials/realTimeInsight"), {
  loading: () => null,
});
const GetInvolvedAndStayConnected = dynamic(
  () => import("./_partials/getInvolvedAndStayConnected"),
  { loading: () => null }
);
const DiscoverAndBlogs = dynamic(
  () => import("./_partials/discoverAndBlogs"),
  { loading: () => null }
);

const HomePage = () => {
  return (
    <AppWrapper>
      <Hero />
      <RealTimeInsight />
      <GetInvolvedAndStayConnected />
      <DiscoverAndBlogs />
    </AppWrapper>
  );
};

export default HomePage;
