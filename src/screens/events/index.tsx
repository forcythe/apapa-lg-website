"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";
// import { cards } from "./events.data";
import CalenderIcon from "../../../public/svg-component/CalenderIcon";
import LocationIcon from "../../../public/svg-component/LocationIcon";
import TimeIcon from "../../../public/svg-component/TimeIcon";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?populate=*`
        );
        const json = await res.json();
        setEvents(json.data || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTimeRange = (start: string, end: string) => {
    const formatTime = (iso: string) =>
      new Date(iso)
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase();

    return `${formatTime(start)} - ${formatTime(end)}`;
  };

  const getEventImageUrl = (image: any) => {
    const imageUrl = image?.formats?.medium?.url ?? image?.url;

    if (!imageUrl) return "";

    if (imageUrl.startsWith("http")) return imageUrl;

    const baseUrl = (process.env.NEXT_PUBLIC_STRAPI_URL || "").replace(
      /\/$/,
      ""
    );
    const path = imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;

    return `${baseUrl}${path}`;
  };

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type="Apapa Events: Engage, Celebrate, and Connect" />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px]">
            <motion.div
              variants={containerVariants}
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-[30px] md:gap-y-[40px] items-center justify-center"
            >
              {loading && (
                <div className="w-full text-center py-20">
                  <p className="text-base text-[#667085]">Loading events...</p>
                </div>
              )}

              {!loading &&
                events.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    className="overflow-hidden relative w-full max-w-[476px] min-h-[528px] "
                  >
                    <div className="mb-6 rounded-[24px] md:rounded-[32px] min-h-[256px] bg-white border border-[#D0D0D0] p-2">
                      {(() => {
                        const eventImageUrl = getEventImageUrl(event.image);
                        return (
                      <div
                        className="w-full min-h-[240px] rounded-[16px] md:rounded-[24px] bg-cover bg-center"
                        style={{
                          backgroundImage: eventImageUrl
                            ? `url('${eventImageUrl}')`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                        );
                      })()}
                    </div>
                    <h6 className="text-base md:text-[20px] md:leading-[28px] text-[#101828] font-[FuturaLTBold] mb-2">
                      {event.title}
                    </h6>
                    <p className="text-base md:text-[20px] md:leading-[32px] text-[#667085] mb-5">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <CalenderIcon fill="#AA8B00" />
                      <p className="text-[14px] leading-[20px] md:text-base text-[#121212]">
                        {formatDate(event.startDate)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <TimeIcon fill="#AA8B00" />
                      <p className="text-[14px] leading-[20px] md:text-base text-[#121212]">
                        {formatTimeRange(event.startDate, event.endDate)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <LocationIcon fill="#AA8B00" />
                      <p className="text-[14px] leading-[20px] md:text-base text-[#121212]">
                        {event.address}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full absolute top-0 z-[-1] mx-auto">
          <Image
            src="/svgs/boat-bg.svg"
            alt=""
            width={1450}
            height={1300}
            className="w-full max-w-[1450px] mx-auto"
            loading="lazy"
            placeholder="blur"
            blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
          />
        </div>
      </div>
    </AppWrapper>
  );
};

export default Events;
