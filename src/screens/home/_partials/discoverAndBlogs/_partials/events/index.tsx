"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { useLocale, useTranslations } from "next-intl";

// import { slidesData } from "./events.data";
import useIsMobile from "@/utils/helpers/useMobile";

import ArrowLeftIcon from "../../../../../../../public/svg-component/ArrowLeftIcon";
import CalenderIcon from "../../../../../../../public/svg-component/CalenderIcon";
import TimeIcon from "../../../../../../../public/svg-component/TimeIcon";
import LocationIcon from "../../../../../../../public/svg-component/LocationIcon";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Events() {
  const t = useTranslations("Home.events");
  const locale = useLocale();
  const cmsLocale = locale === "pcm" ? "en" : locale;

  const [currentIndex, setCurrentIndex] = React.useState(2);
  const isMobile = useIsMobile(768);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length,
    );
  };

  const [slidesData, setSlidesData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const params = new URLSearchParams({
  //         populate: "*",
  //         locale: cmsLocale,
  //       });
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?${params.toString()}`,
  //       );
  //       const json = await res.json();

  //       const normalized = json.data.map((item: any) => {
  //         const dateObj = new Date(item.startDate);

  //         return {
  //           title: item.title,
  //           date: dateObj.toLocaleDateString("en-GB", {
  //             weekday: "short",
  //             day: "numeric",
  //             month: "short",
  //             year: "numeric",
  //           }),
  //           time: dateObj.toLocaleTimeString("en-US", {
  //             hour: "numeric",
  //             minute: "2-digit",
  //           }),
  //           location: item.address,
  //           image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`,
  //         };
  //       });

  //       setSlidesData(normalized);
  //     } catch (err) {
  //       console.error("Failed to fetch events", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEvents();
  // }, [cmsLocale]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null); // reset error
      try {
        const params = new URLSearchParams({
          populate: "*",
          locale: cmsLocale,
        });
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?${params.toString()}`,
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();

        // Check if json.data exists and is an array
        if (
          !json?.data ||
          !Array.isArray(json.data) ||
          json.data.length === 0
        ) {
          throw new Error("No events found.");
        }

        const normalized = json.data.map((item: any) => {
          const dateObj = new Date(item.startDate);
          return {
            title: item.title ?? "No Title",
            date: dateObj.toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
            time: dateObj.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            }),
            location: item.address ?? "No location",
            image: item.image?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`
              : "/fallback-image.png", // optional fallback
          };
        });

        setSlidesData(normalized);
      } catch (err: any) {
        console.error("Failed to fetch events:", err);
        setError(err.message || "Failed to load events. Please try again.");
        setSlidesData([]); // clear slides so nothing tries to render
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [cmsLocale]);

  const gap = isMobile ? 4 : 16;

  // Desktop dimensions
  const DESKTOP_CENTER_WIDTH = 500;
  const DESKTOP_CENTER_HEIGHT = 616;
  const DESKTOP_NEIGHBOR_WIDTH = 368;
  const DESKTOP_NEIGHBOR_HEIGHT = 460;
  const DESKTOP_FAR_WIDTH = 212;
  const DESKTOP_FAR_HEIGHT = 261.4;

  // Mobile dimensions
  const MOBILE_CENTER_WIDTH = 364;
  const MOBILE_CENTER_HEIGHT = 516;
  const MOBILE_NEIGHBOR_WIDTH = 364;
  const MOBILE_NEIGHBOR_HEIGHT = 460;
  const MOBILE_FAR_WIDTH = 364;
  const MOBILE_FAR_HEIGHT = 380;

  // Choose based on device
  const CENTER_WIDTH = isMobile ? MOBILE_CENTER_WIDTH : DESKTOP_CENTER_WIDTH;
  const CENTER_HEIGHT = isMobile ? MOBILE_CENTER_HEIGHT : DESKTOP_CENTER_HEIGHT;
  const NEIGHBOR_WIDTH = isMobile
    ? MOBILE_NEIGHBOR_WIDTH
    : DESKTOP_NEIGHBOR_WIDTH;
  const NEIGHBOR_HEIGHT = isMobile
    ? MOBILE_NEIGHBOR_HEIGHT
    : DESKTOP_NEIGHBOR_HEIGHT;
  const FAR_WIDTH = isMobile ? MOBILE_FAR_WIDTH : DESKTOP_FAR_WIDTH;
  const FAR_HEIGHT = isMobile ? MOBILE_FAR_HEIGHT : DESKTOP_FAR_HEIGHT;

  const offsetImmediate = CENTER_WIDTH / 2 + gap + NEIGHBOR_WIDTH / 2;
  const offsetFar = offsetImmediate + NEIGHBOR_WIDTH / 2 + gap + FAR_WIDTH / 2;

  return (
    <div className="pb-[100px] md:pb-[120px]">
      <div className="section-padding">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3"
        >
          <p className="text-base md:text-[20px] md:leading-[32px] text-[#000000] text-center">
            {t("pill")}
          </p>
        </motion.div>

        <motion.h6
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl leading-[32px] md:text-[36px] md:leading-[52px] text-[#000000] text-center font-[FuturaLTBold] max-w-[564px] mx-auto mb-[30px]"
        >
          {t("title")}
        </motion.h6>
      </div>

      <div className="relative w-full overflow-hidden flex items-center justify-center h-[648px] md:h-[672px]">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-base md:text-[18px] text-[#667085]">
              {t("loading")}
            </p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-base md:text-[18px] text-red-500 text-center">
              {error}
            </p>
          </div>
        ) : (
          <div className="relative w-full overflow-hidden flex items-center justify-center h-[648px] md:h-[672px]">
            <div className="relative w-full h-full">
              <div className="relative w-full h-full">
                {slidesData.map((slide, index) => {
                  let distance = index - currentIndex;
                  const n = slidesData.length;
                  if (distance > n / 2) distance -= n;
                  if (distance < -n / 2) distance += n;

                  let offset = 0;
                  if (distance === 0) {
                    offset = 0;
                  } else if (Math.abs(distance) === 1) {
                    offset = distance > 0 ? offsetImmediate : -offsetImmediate;
                  } else if (Math.abs(distance) === 2) {
                    offset = distance > 0 ? offsetFar : -offsetFar;
                  } else {
                    offset = distance > 0 ? offsetFar : -offsetFar;
                  }

                  let effectiveWidth, effectiveHeight;
                  let opacity = 1;
                  let blur = 0;
                  let zIndex = 20;
                  if (distance === 0) {
                    effectiveWidth = CENTER_WIDTH;
                    effectiveHeight = CENTER_HEIGHT;
                    opacity = 1;
                    blur = 0;
                    zIndex = 30;
                  } else if (Math.abs(distance) === 1) {
                    effectiveWidth = NEIGHBOR_WIDTH;
                    effectiveHeight = NEIGHBOR_HEIGHT;
                    opacity = 1;
                    blur = 0;
                    zIndex = 20;
                  } else if (Math.abs(distance) === 2) {
                    effectiveWidth = FAR_WIDTH;
                    effectiveHeight = FAR_HEIGHT;
                    opacity = 0.8;
                    blur = 3;
                    zIndex = 10;
                  } else {
                    effectiveWidth = FAR_WIDTH;
                    effectiveHeight = FAR_HEIGHT;
                    opacity = 0;
                    blur = 3;
                    zIndex = 0;
                  }

                  let titleClasses = "";
                  if (isMobile) {
                    if (distance === 0) {
                      titleClasses = "text-[16px] leading-[24px]";
                    } else if (Math.abs(distance) === 1) {
                      titleClasses = "text-[12px] leading-[18px]";
                    } else {
                      titleClasses = "text-[9px] leading-[11px]";
                    }
                  } else {
                    if (distance === 0) {
                      titleClasses = "text-[20px] leading-[28px]";
                    } else if (Math.abs(distance) === 1) {
                      titleClasses = "text-[16px] leading-[24px]";
                    } else {
                      titleClasses = "text-[9px] leading-[11px]";
                    }
                  }

                  let infoClasses = "";
                  if (isMobile) {
                    if (distance === 0) {
                      infoClasses = "text-[16px] leading-[24px]";
                    } else if (Math.abs(distance) === 1) {
                      infoClasses = "text-[12px] leading-[18px]";
                    } else {
                      infoClasses = "text-[6px] leading-[10px]";
                    }
                  } else {
                    if (distance === 0) {
                      infoClasses = "text-[18px] leading-[28px]";
                    } else if (Math.abs(distance) === 1) {
                      infoClasses = "text-[14px] leading-[20px]";
                    } else {
                      infoClasses = "text-[6.79px] leading-[10.18px]";
                    }
                  }

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-500 ease-in-out"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(-50% + ${offset}px), -50%)`,
                        filter: `blur(${blur}px)`,
                        opacity,
                        zIndex,
                      }}
                    >
                      <div
                        className="shadow-lg flex flex-col bg-white p-2 rounded-[32px]"
                        style={{
                          width: `${effectiveWidth}px`,
                          height: `${effectiveHeight}px`,
                        }}
                      >
                        <div className="shadow-lg relative overflow-hidden z-[1] flex flex-col justify-between text-white px-4 py-5 md:p-[28px] rounded-[24px] w-full h-full">
                          <div
                            className="absolute z-[-1] inset-0 w-full"
                            style={{
                              backgroundImage: `
                            linear-gradient(
                                180deg,
                                rgba(0, 0, 0, 1) 0%,
                                rgba(0, 0, 0, 0) 25%,
                                rgba(0, 0, 0, 0) 65%,
                                rgba(0, 0, 0, 1) 100%
                            )
                            `,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                          <div
                            className="absolute z-[-2] inset-0 w-full"
                            style={{
                              backgroundImage: `url(${slide.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                          <h3
                            className={`font-[FuturaLTBold] text-white ${titleClasses}`}
                          >
                            {slide.title}
                          </h3>
                          <div>
                            <div className="flex items-center gap-4 mb-3">
                              <div className="flex items-center gap-2">
                                <CalenderIcon />
                                <p className={infoClasses}>{slide.date}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <TimeIcon />
                                <p className={infoClasses}>{slide.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <LocationIcon />
                              <p className={infoClasses}>{slide.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 md:mt-6 w-full max-w-[144px] mx-auto flex items-center justify-between min-h-[56px]">
        <button onClick={handlePrev}>
          <ArrowLeftIcon className="max-w-[56px] max-h-[56px] min-w-[56px] min-h-[56px]" />
        </button>
        <button onClick={handleNext}>
          <ArrowLeftIcon className="max-w-[56px] max-h-[56px] min-w-[56px] min-h-[56px] rotate-180" />
        </button>
      </div>
    </div>
  );
}
