"use client";

import ClickAwayListener from "react-click-away-listener";

import { IModal } from "./modal.types";
import ModalCloseIcon from "../../../public/svg-component/ModalCloseIcon";

const Modal = ({
  children,
  isShow,
  onClickAway,
  onClose,
  className,
  childrenClassName,
  contentClassName,
  isTopIcon,
  topIcon,
  isShowCloseIcon = true,
  closeClassName,
  containerClassName,
  topHeadText,
}: IModal) => {
  if (!isShow) return null;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100%",
        position: "fixed",
        left: "0px",
        top: "0px",
        alignItems: "center",
        zIndex: 300000000000,
        overflowY: "hidden",
        overflowX: "auto",
        backgroundColor: "rgba(0, 14, 41, 0.7)",
        backdropFilter: "blur(4px)",
      }}
      className={`${
        className || "flex justify-end xs:justify-center flex-col"
      }`}
    >
      <ClickAwayListener onClickAway={() => onClickAway?.()}>
        <div
          className={`${
            contentClassName ||
            "relative max-h-full overflow-y-auto min-w-full max-w-ful  md:min-w-[600px] md:max-w-[600px] animate-fadeInUp scrollbar-hide"
          }`}
        >
          <div
            className={
              containerClassName ||
              "p-6 xs:py-[40px] xs:px-[52px] text-center rounded-[24px] bg-white relative bg-cover bg-center"
            }
            style={{
              backgroundImage: "url('/svgs/modal-img.svg')",
            }}
          >
            {isShowCloseIcon && (
              <div className="absolute right-[52px]">
                <div className={`cursor-pointer ${closeClassName}`}>
                  <span className="" onClick={() => onClose?.()}>
                    <ModalCloseIcon />
                  </span>
                </div>
              </div>
            )}
            <div
              className={`${
                childrenClassName ||
                "w-full h-fit flex flex-col justify-center item-center"
              }`}
            >
              {topHeadText && (
                <h6 className="text-[#000000] font-bold text-[24px] leading-[28px] mb-8">
                  {topHeadText}
                </h6>
              )}
              {isTopIcon && <div className="block mb-3 mx-auto">{topIcon}</div>}

              {children}
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
