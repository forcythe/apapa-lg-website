import React from "react";

import { AppWrapper } from "@/components";
import {
  GetInvolvedAndStayConnected,
  Hero,
  RealTimeInsight,
} from "./_partials";

const HomePage = () => {
  return (
    <AppWrapper>
      <Hero />
      <RealTimeInsight />
      <GetInvolvedAndStayConnected />
    </AppWrapper>
  );
};

export default HomePage;
