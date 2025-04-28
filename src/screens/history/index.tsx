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

const HistoryPage = () => {
  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="History of Apapa" />
      <Hero />
      <div className="">
        <HistorySection
          badge="The Rich Heritage and Legacy of Apapa"
          headTitle="A Historic Maritime Gateway of Nigeria"
          subTitle="Apapa Local Government Area (LGA) stands as one of the most historically and economically significant regions in Lagos State, Nigeria. From its modest beginnings as a fishing village to becoming Nigeria’s foremost maritime and commercial hub, Apapa has played a central role in the evolution of Lagos as a global city."
        />
        <HistorySection
          badge="Early Beginnings"
          headTitle="A Waterfront Settlement"
          subTitle="Long before urban development, Apapa was a quiet settlement inhabited by fishermen and traders who relied on its strategic waterfront location for sustenance and commerce. Its proximity to the Atlantic Ocean and Lagos Lagoon naturally made it a center for local trade, drawing merchants and settlers even in pre-colonial times."
          reversed
        />
        <EvolutionOfApapa />
        <HistorySection
          badge="The Economic Engine of Apapa"
          headTitle="Birth of a Port Powerhouse"
          subTitle="The early 20th century marked a significant milestone with the construction of the Apapa Port, laying the foundation for what would become Nigeria’s most vital maritime zone. This development was further expanded with the addition of Tin Can Island Port, positioning Apapa as home to two of Nigeria’s busiest seaports, handling an estimated 75% of the nation’s total import and export volume. Today, these ports serve as lifelines for the Nigerian economy, processing billions of naira worth of goods annually. In just the first quarter of 2023, the Apapa Customs Command generated over ₦212 billion in revenue, underscoring the area's financial significance."
        />
        <HistorySection
          badge="A Legacy of Governance"
          headTitle="Formation of Apapa LGA"
          subTitle="In 1977, Apapa was officially established as a Local Government Area by the Lagos State Government to decentralize administration and bring governance closer to its residents. As part of its evolution, areas like Apapa Iganmu were later carved out to create additional local development councils."
          reversed
        />
        <HistorySection
          badge="Driving National Prosperity"
          headTitle="Lagos’s Economic Jewel"
          subTitle="Situated in Lagos State, one of Africa’s largest economies with a GDP of approximately $259.75 billion (PPP) in 2023, Apapa is at the core of this economic power. Its contributions to trade, logistics, and revenue generation are unmatched, and its historical journey continues to inspire progress, innovation, and community development."
        />
        <LandmarkAndInfluence />
        <HistorySection
          badge="A Thriving Cultural Mosaic at the Heart of Nigeria’s Port City"
          headTitle="Cultural and Community Strength"
          subTitle="Apapa is not just a port city; it’s a diverse community filled with resilience and cultural richness. Residents from various ethnic backgrounds live and work together, making Apapa a true microcosm of Nigeria’s unity in diversity."
          reversed
        />
        <HistorySection
          badge="Overcoming Challenges to Restore Apapa’s Economic Vitality"
          headTitle="Challenges and Ongoing Renewal"
          subTitle="Despite its prominence, Apapa faces modern challenges such as infrastructure decay, flooding, and traffic gridlock—particularly from port-bound trucks. These issues are not just local inconveniences but national economic threats, with gridlock alone estimated to cost Nigeria up to ₦18 trillion annually. However, efforts from both the government and private sector are underway to revitalize the area, improve infrastructure, and restore Apapa’s glory as Nigeria’s economic engine."
        />
      </div>
    </AppWrapper>
  );
};

export default HistoryPage;
