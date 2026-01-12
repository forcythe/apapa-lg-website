"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { Header } from "@/components";
import useIsMobile from "@/utils/helpers/useMobile";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const Hero = () => {
  const isMobile = useIsMobile(768);
  const waterImage = isMobile
    ? "/svgs/water-sm.svg"
    : "/svgs/animate-water.svg";

  const [activeBoat, setActiveBoat] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBoat((prevBoat) => (prevBoat === 1 ? 2 : 1));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full bg-white xxxl:min-h-[1176px] bg-cover bg-center relative"
      style={{ backgroundImage: "url(/images/landing-page-img.png)" }}
    >
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <div className="bg-transparent pt-[72px] lg:pt-5 relative z-[1]">
        <div className="section-padding mb-[35px] max-w-[1488px] mx-auto">
          <div className="w-fit mx-auto bg-accent3 rounded-[8px] p-3 mb-3">
            <p className="text-base md:text-[18px] md:leading-[28px] text-[#000000] text-center">
              Welcome to Apapa
            </p>
          </div>
          <h6 className="mb-6 text-center max-w-[700px] mx-auto text-[28px] leading-[44px] md:text-[56px] md:leading-[84px] font-[FuturaLTBold]">
            Nigeria’s Gateway to Global Trade
          </h6>
          <p className="text-[#000000] text-base md:text-[18px] md:leading-[28px] max-w-[700px] mx-auto text-center">
            Home to the nation’s busiest ports, Apapa powers commerce, connects
            businesses, and drives economic growth. Explore opportunities in
            shipping, logistics, and trade at the heart of Nigeria’s maritime
            hub.
          </p>
        </div>
        <div className="w-full min-h-[190px] xxxs:min-h-[260px] xs:min-h-[340px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[650px] xxl:min-h-[650px] xxxl:min-h-[650px] bg-transparent relative z-[1] overflow-hidden">
          <motion.div
            className="absolute bottom-[5px] left-0 w-full h-[60px] md:h-[95px] z-[4]"
            style={{
              backgroundImage: `url(${waterImage})`,
              backgroundRepeat: "repeat-x",
            }}
            animate={{
              backgroundPositionX: [
                "0px",
                "-1488px",
                "-2976px",
                "-1488px",
                "0px",
              ],
            }}
            transition={{
              duration: isMobile ? 10 : 35,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <AnimatePresence mode="wait">
            {activeBoat === 1 ? (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-[-1]">
                <motion.div
                  key="boatOneFade"
                  initial={{ scale: 0.5, y: 130 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.5, y: 130 }}
                  transition={{ duration: 30 }}
                >
                  <motion.div
                    style={{ transformOrigin: "50% 100%" }}
                    animate={{ rotate: [-1, 1, -1] }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  >
                    <Image
                      src="/svgs/boat.svg"
                      alt="Boat One"
                      className="xxxs:max-w-[380px] xxxs:min-w-[380px] xxxs:max-h-[240px] xxxs:min-h-[240px] xxs:max-w-[420px] xxs:min-w-[420px] xxs:max-h-[280px] xxs:min-h-[280px] xs:max-w-[480px] xs:min-w-[480px] xs:max-h-[340px] xs:min-h-[340px] sm:max-w-[580px] sm:min-w-[580px] sm:max-h-[440px] sm:min-h-[440px] md:max-w-[680px] md:min-w-[680px] md:max-h-[540px] md:min-h-[540px] lg:max-w-[780px] lg:min-w-[780px] lg:max-h-[640px] lg:min-h-[640px]"
                      width={780}
                      height={640}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
                    />
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              <div className="absolute bottom-0 left-0 z-[-1]">
                <motion.div
                  key="boatTwoFade"
                  initial={{ x: "-80vw" }}
                  animate={{ opacity: 1, x: "100vw" }}
                  exit={{ x: "100vw" }}
                  transition={{ duration: 40 }}
                >
                  <motion.div
                    style={{ transformOrigin: "50% 100%" }}
                    animate={{ rotate: [-1, 1, -1] }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  >
                    <Image
                      src="/svgs/side-boat-3.svg"
                      alt="Boat Two"
                      className="max-w-[250px] min-w-[250px] min-h-[150px] max-h-[150px] xxxs:max-w-[320px] xxxs:min-w-[320px] xxxs:max-h-[210px] xxxs:min-h-[210px] xxs:max-w-[420px] xxs:min-w-[420px] xxs:max-h-[220px] xxs:min-h-[220px] xs:max-w-[480px] xs:min-w-[480px] xs:max-h-[230px] xs:min-h-[230px] sm:max-w-[580px] sm:min-w-[580px] sm:max-h-[250px] sm:min-h-[250px] md:max-w-[680px] md:min-w-[680px] md:max-h-[320px] md:min-h-[320px] lg:max-w-[536px] lg:min-w-[980px] lg:max-h-[436px] lg:min-h-[436px] xxl:max-w-[1328px] xxl:min-w-[1328px] xxl:max-h-[540px] xxl:min-h-[540px] xxxl:max-w-[1500px] xxxl:min-w-[1500px] xxxl:max-h-[640px] xxxl:min-h-[640px] xxxxl:max-w-[1728px] xxxxl:min-w-[1728px] xxxxl:max-h-[640px] xxxxl:min-h-[640px]"
                      width={1728}
                      height={640}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
                    />
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <div className="absolute right-0 left-0 w-full h-[80px] bottom-[-50px] bg-gradient-to-t from-white to-transparent opacity-100 bg-white z-[3]" />
          <div className="absolute right-0 left-0 w-full h-[50px] bottom-[-1px] bg-gradient-to-t from-white to-transparent opacity-100 z-[9]" />
        </div>
        <Image
          src="/svgs/boat-bg.svg"
          className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2"
          alt=""
          width={1000}
          height={616}
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />
      </div>
      <Image
        src="/svgs/crane.svg"
        alt="crane-img"
        width={550}
        height={500}
        className="absolute top-0 left-0 z-[1] max-w-[150px] min-w-[150px] max-h-[190px] min-h-[190px] xxxs:max-w-[200px] xxxs:min-w-[200px] xxxs:max-h-[190px] xxxs:min-h-[190px] xs:max-w-[260px] xs:min-w-[260px] xs:max-h-[210px] xs:min-h-[210px] md:max-w-[300px] md:min-w-[300px] md:max-h-[250px] md:min-h-[250px] xxl:max-w-[400px] xxl:min-w-[400px] xxl:max-h-[350px] xxl:min-h-[350px] xxxxl:max-w-[600px] xxxxl:min-w-[600px] xxxxl:max-h-[550px] xxxxl:min-h-[550px]"
        loading="lazy"
        placeholder="blur"
        blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
      />
      <Image
        src="/svgs/crane.svg"
        alt="crane-img"
        width={600}
        height={550}
        className="absolute top-0 right-0 z-[3] transform scale-x-[-1] max-w-[150px] min-w-[150px] max-h-[190px] min-h-[190px] xxxs:max-w-[200px] xxxs:min-w-[200px] xxxs:max-h-[190px] xxxs:min-h-[190px] xs:max-w-[260px] xs:min-w-[260px] xs:max-h-[210px] xs:min-h-[210px] md:max-w-[300px] md:min-w-[300px] md:max-h-[250px] md:min-h-[250px] xxl:max-w-[400px] xxl:min-w-[400px] xxl:max-h-[350px] xxl:min-h-[350px] xxxxl:max-w-[600px] xxxxl:min-w-[600px] xxxxl:max-h-[550px] xxxxl:min-h-[550px]"
        loading="lazy"
        placeholder="blur"
        blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
      />
    </div>
  );
};

export default Hero;
