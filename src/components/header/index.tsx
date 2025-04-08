"use client";

import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { headerRoutes } from "./header.data";
import AppLink from "../appLink";
import { SearchModal } from "@/modal_views";

import SearchIcon from "../../../public/svg-component/SearchIcon";
import WorldIcon from "../../../public/svg-component/WorldIcon";
import ArrowHeadIcon from "../../../public/svg-component/ArrowHeadIcon";
import RadioIcon from "../../../public/svg-component/RadioIcon";
import RadioIconChecked from "../../../public/svg-component/RadioIconChecked";

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const Header = () => {
  const [isSideBarLink, setIsSideBarLinks] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "pid", label: "Pidgin" },
    { code: "yo", label: "Yoruba" },
  ];

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
  };
  return (
    <>
      <div>
        <div className="bg-accent2 p-4">
          <p className="text-center text-primary text-base">
            This is the official website of Apapa Local Government
          </p>
        </div>
        <div className="section-padding bg-white/30 backdrop-blur-md navbar z-30 py-3">
          <div className="gap-10 flex flex-row-reverse lg:flex-row items-center justify-between w-full">
            <div className="items-center gap-8 hidden lg:flex">
              <div className="relative">
                <div
                  className="flex items-center gap-3 group"
                  onClick={() => setIsLocationOpen(true)}
                >
                  <WorldIcon
                    className={`text-[#121212] group-hover:text-accent cursor-pointer`}
                  />
                  <ArrowHeadIcon
                    className={`${
                      isLocationOpen ? "rotate-180" : ""
                    } transition-transform duration-300 ease-in-out text-[#121212] group-hover:text-accent`}
                  />
                </div>
                {isLocationOpen && (
                  <ClickAwayListener
                    onClickAway={() => setIsLocationOpen(false)}
                  >
                    <div
                      className="lg:shadow-custom-lg lg:absolute bg-inherit top-[30px] lg:bg-white lg:py-2 lg:px-6 min-h-[152px] rounded-bl-[32px] rounded-br-[32px] animate-popIn"
                      style={{ width: "138px" }}
                    >
                      <ul className="flex flex-col gap-5 w-full">
                        {languages.map(({ code, label }) => (
                          <li
                            key={code}
                            className="flex items-center gap-3 cursor-pointer text-primary text-[18px] whitespace-nowrap leading-[28px]"
                            onClick={() => handleLanguageChange(code)}
                          >
                            {selectedLanguage === code ? (
                              <RadioIconChecked className="max-w-6 min-w-6 max-h-6 min-h-6" />
                            ) : (
                              <RadioIcon className="max-w-6 min-w-6 max-h-6 min-h-6" />
                            )}
                            <label htmlFor={`lang-${code}`}>{label}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ClickAwayListener>
                )}
              </div>
              <div className="group" onClick={() => setIsShowSearchModal(true)}>
                <SearchIcon
                  className={`text-[#121212] group-hover:text-accent cursor-pointer`}
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 md:gap-[32px] text-[18px] leading-[28px] text-primary font-medium">
              {headerRoutes.map(
                ({
                  id,
                  path,
                  title,
                  subTabs,
                  Icon,
                  bgTop,
                  bgBottom,
                  isRightPositioned,
                  width,
                }) => (
                  <AppLink
                    key={id}
                    path={path as string}
                    title={title}
                    subTabs={subTabs}
                    Icon={Icon}
                    bgTop={bgTop}
                    bgBottom={bgBottom}
                    isRightPositioned={isRightPositioned}
                    width={width}
                  />
                )
              )}
            </div>

            <div className="block">
              <Link
                href="/"
                className="flex items-center gap-[40px] xl:gap-[80px]"
              >
                <Image
                  src="/svgs/logoHead.svg"
                  alt="logo_img"
                  className="max-w-[48px] max-h-[48px] min-w-[48px] min-h-[48px] md:max-w-[84px] md:max-h-[84px] md:min-w-[84px] md:min-h-[84px]"
                  width={84}
                  height={84}
                />
              </Link>
            </div>

            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setIsSideBarLinks((prev) => !prev)}
            >
              {isSideBarLink ? (
                <Image
                  src="/svgs/menu-close.svg"
                  alt="menu_img"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px]"
                />
              ) : (
                <Image
                  src="/svgs/menu.svg"
                  alt="menu_img"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px]"
                />
              )}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isSideBarLink && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full h-dvh fixed top-0 left-0 flex lg:hidden z-[999999999]"
              style={{
                backgroundColor: "rgba(0, 14, 41, 0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ClickAwayListener onClickAway={() => setIsSideBarLinks(false)}>
                <motion.div
                  className="shadow-custom fixed py-[68px] px-4 h-dvh bg-white w-full max-w-[344px] lg:hidden left-0 top-0 decoration-clone border-0 transition duration-500 flex flex-col flex-nowrap overflow-visible bg-cover bg-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sidebarVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    backgroundImage: "url('/svgs/boat-bg.svg')",
                  }}
                >
                  <div className="flex items-center justify-between mb-[40px]">
                    <Image
                      src="/svgs/logoHead.svg"
                      alt="logo_img"
                      className="w-[68px] h-[68px]"
                      width={68}
                      height={68}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-[28px] mb-[40px]">
                    <div className="relative">
                      <div
                        className="flex items-center gap-3 group"
                        onClick={() => setIsLocationOpen(true)}
                      >
                        <WorldIcon
                          className={`text-[#121212] group-hover:text-accent cursor-pointer`}
                        />
                        <ArrowHeadIcon
                          className={`${
                            isLocationOpen ? "rotate-180" : ""
                          } transition-transform duration-300 ease-in-out text-[#121212] group-hover:text-accent`}
                        />
                      </div>
                      {isLocationOpen && (
                        <ClickAwayListener
                          onClickAway={() => setIsLocationOpen(false)}
                        >
                          <div
                            className="mt-5 lg:mt-0 lg:shadow-custom-lg lg:absolute bg-inherit top-[30px] lg:bg-white lg:py-2 lg:px-6 min-h-[152px] rounded-bl-[32px] rounded-br-[32px] animate-popIn"
                            style={{ width: "138px" }}
                          >
                            <ul className="flex flex-col gap-5 w-full">
                              {languages.map(({ code, label }) => (
                                <li
                                  key={code}
                                  className="flex items-center gap-3 cursor-pointer text-primary text-[18px] whitespace-nowrap leading-[28px]"
                                  onClick={() => handleLanguageChange(code)}
                                >
                                  {selectedLanguage === code ? (
                                    <RadioIconChecked className="max-w-6 min-w-6 max-h-6 min-h-6" />
                                  ) : (
                                    <RadioIcon className="max-w-6 min-w-6 max-h-6 min-h-6" />
                                  )}
                                  <label htmlFor={`lang-${code}`}>
                                    {label}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </ClickAwayListener>
                      )}
                    </div>
                    <div
                      className="group"
                      onClick={() => setIsShowSearchModal(true)}
                    >
                      <SearchIcon
                        className={`text-[#121212] group-hover:text-accent cursor-pointer`}
                      />
                    </div>
                  </div>

                  <ul className="flex flex-col gap-[40px]">
                    {headerRoutes?.map(({ id, path, title, subTabs, Icon }) => (
                      <li key={id} className="w-full">
                        <AppLink
                          path={path as string}
                          title={title}
                          className="w-full text-base"
                          subTabs={subTabs}
                          iconCustomClass="max-w-[24px] min-w-[24px] max-h-[24px] min-h-[24px]"
                          listCustomClass="py-3 border-t border-[#DDDDDD] border-b mt-3"
                          Icon={Icon}
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="absolute top-[8px] right-[16px] block xxxs:hidden">
                    <Image
                      src="/svgs/close-menu.svg"
                      alt="menu_img"
                      width={48}
                      height={48}
                      className="w-[48px] h-[48px]"
                      onClick={() => setIsSideBarLinks((prev) => !prev)}
                    />
                  </div>
                </motion.div>
              </ClickAwayListener>
              <div className="absolute top-[48px] right-[16px] hidden xxxs:block">
                <Image
                  src="/svgs/close-menu.svg"
                  alt="menu_img"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px]"
                  onClick={() => setIsSideBarLinks((prev) => !prev)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isShowSearchModal && (
        <SearchModal
          isShowSearchModal={isShowSearchModal}
          onClickAwaySearchModal={() => {
            setIsShowSearchModal(false);
          }}
          onCloseSearchModal={() => {
            setIsShowSearchModal(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
