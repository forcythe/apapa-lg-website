"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";
import ModalCloseIcon from "../../../../../public/svg-component/ModalCloseIcon";

interface NodeBoxProps {
  role: string;
  name?: string;
  image?: string;
}

const LegislativeNodeBox: React.FC<NodeBoxProps> = ({ role, name, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative flex flex-col w-[188px] cursor-pointer"
      >
        <div className="absolute z-[4] -top-8 left-1/2 transform -translate-x-1/2 w-[88px] h-[88px] rounded-full bg-[#FFF6CC] flex items-center justify-center shadow-sm p-5">
          <div
            className="min-w-[68px] h-[68px] rounded-full border-[6px] border-[#FFD100] bg-cover"
            style={{
              backgroundImage: `url('${image || "/image/placeholder.jpeg"}')`,
              backgroundPosition: 'center 30%',
            }}
          />
        </div>
        <div
          className="relative text-sm bg-white pt-[64px] w-full border-2 border-[#FFD100] shadow-md pb-6 leading-[24px] rounded-[32px] text-black font-[FuturaLTBold] text-center px-4 hover:bg-[#FFFDE6] transition-colors duration-200"
        >
          {role}
        </div>
      </div>

      {isOpen && (
        <Modal
          isShow={isOpen}
          onClickAway={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
          contentClassName="relative max-h-full overflow-y-auto min-w-full max-w-ful md:min-w-[520px] md:max-w-[520px] animate-fadeInUp scrollbar-hide"
          containerClassName="p-6 xs:py-[60px] xs:px-[52px] text-center rounded-[32px] bg-white relative bg-cover bg-center"
          isShowCloseIcon={false}
        >
          <div className="flex flex-col items-center gap-6 relative">
            <div className="absolute -top-[44px] -right-[36px] cursor-pointer scale-125" onClick={() => setIsOpen(false)}>
              <ModalCloseIcon />
            </div>
            <div className="w-full max-w-[400px] bg-white p-2 rounded-[24px] shadow-lg">
              <div className="relative group overflow-hidden w-full rounded-[20px] min-h-[400px]">
                <Image
                  src={image || "/image/placeholder.jpeg"}
                  alt={name || role}
                  fill
                  className="object-cover object-[center_30%] transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
                />
              </div>
            </div>
            <div>
              {name && (
                <h6 className="text-[24px] leading-[32px] font-[FuturaLTBold] text-[#000000] mb-2">
                  {name}
                </h6>
              )}
              <p className="text-base md:text-[20px] leading-[32px] text-[#667085]">
                {role}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LegislativeNodeBox;
