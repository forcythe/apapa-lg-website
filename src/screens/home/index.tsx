import React from "react";

import { AppWrapper } from "@/components";
import {
  GetInvolvedAndStayConnected,
  Hero,
  RealTimeInsight,
  DiscoverAndBlogs,
} from "./_partials";

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
