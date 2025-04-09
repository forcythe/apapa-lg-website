/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ClickAwayListener from "react-click-away-listener";
import ArrowHeadIcon from "../../../public/svg-component/ArrowHeadIcon";
import useIsMobile from "@/utils/helpers/useMobile";

interface SubTab {
  id: string;
  path: string;
  title: string;
}

const AppLink = ({
  path,
  title,
  subTabs,
  className,
  width,
  Icon,
  bgTop,
  bgBottom,
  isRightPositioned,
}: {
  path: string;
  title: string;
  subTabs?: { id: number; path: string; title: string }[];
  className?: string;
  iconCustomClass?: string;
  listCustomClass?: string;
  Icon?: any;
  width?: string;
  bgTop?: string;
  bgBottom?: string;
  isRightPositioned?: boolean;
}) => {
  const pathname = usePathname();
  const [isSideBarSubLink, setIsSideBarSubLinks] = useState(false);

  const isActive =
    pathname === `${path}` ? "text-accent font-[FuturaLTBold]" : "text-primary";

  const isMobile = useIsMobile(1024);

  const columns =
    !subTabs || subTabs.length === 0
      ? []
      : isMobile
      ? [subTabs]
      : subTabs.reduce<SubTab[][]>((chunks, item, index) => {
          const chunkIndex = Math.floor(index / 5);
          if (!chunks[chunkIndex]) {
            chunks[chunkIndex] = [];
          }
          chunks[chunkIndex].push(item as any);
          return chunks;
        }, []);

  if (subTabs) {
    return (
      <div className="relative">
        <div
          className={`${className} ${isActive} group flex items-center gap-2 cursor-pointer hover:text-accent transition-colors duration-200`}
          onClick={() => setIsSideBarSubLinks(true)}
        >
          {title}
          <ArrowHeadIcon
            className={`${
              isSideBarSubLink ? "rotate-180" : ""
            } transition-transform duration-300 ease-in-out text-[#121212] group-hover:text-accent`}
          />
        </div>
        {isSideBarSubLink && (
          <ClickAwayListener onClickAway={() => setIsSideBarSubLinks(false)}>
            <div
              className={`flex gap-[29px] lg:shadow-custom-lg lg:absolute bg-inherit lg:bg-white lg:py-2 lg:px-6 min-h-[248px] rounded-bl-[32px] rounded-br-[32px] ${
                isRightPositioned && "right-0"
              } animate-popIn`}
              style={{ width: `${width}` }}
            >
              {columns.map((chunk, idx) => (
                <ul key={idx} className={`flex flex-col gap-2`}>
                  {chunk.map(({ id, path, title }) => (
                    <a key={id} className={className} href={path}>
                      <li className="flex items-center mb-3 cursor-pointer text-primary text-[18px] whitespace-nowrap leading-[28px]">
                        <span>{title}</span>
                      </li>
                    </a>
                  ))}
                </ul>
              ))}

              <div className="hidden w-full max-w-[332px] min-h-[224px] lg:flex flex-col gap-1">
                <div className="w-full min-h-[64px] rounded-bl-[24px] rounded-br-[24px] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${bgTop})`,
                    }}
                  ></div>
                </div>
                <div className="w-full min-h-[156px] rounded-[24px] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${bgBottom})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </ClickAwayListener>
        )}
      </div>
    );
  }

  return (
    <a
      className={`${className} ${isActive} hover:text-accent transition-colors duration-200 flex items-start gap-2`}
      href={path}
    >
      <span>{title}</span>
      {Icon && <Icon fill={isActive ? "#AA8B00" : "#121212"} />}
    </a>
  );
};

export default AppLink;
