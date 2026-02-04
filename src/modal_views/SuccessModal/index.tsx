import React from "react";

import { Button, Modal } from "@/components";
import { ISuccessModal } from "./SuccessModal.types";

import SuccessIcon from "../../../public/svg-component/SuccessIcon";
import ModalCloseIcon from "../../../public/svg-component/ModalCloseIcon";
import CopyIcon from "../../../public/svg-component/CopyIcon";
import { useCopyToClipboard } from "@/utils/helpers/useCopyToClipboard";

import { useTranslations } from "next-intl";

const SuccessModal = ({
  headText,
  subText,
  copyText,
  isShowSuccessModal,
  actionBtnTitle,
  showOutlineBtn,
  onActionClick,
  onClickAwaySuccessModal,
  onCloseSuccessModal,
}: ISuccessModal) => {
  const t = useTranslations("Community.feedback");

  const { copy } = useCopyToClipboard({
    successMessage: "Tracking ID copied!",
  });
  return (
    <Modal
      isShow={isShowSuccessModal as boolean}
      className=""
      contentClassName="relative max-h-full overflow-y-auto min-w-full max-w-ful  md:min-w-[624px] md:max-w-[624px] animate-fadeInUp scrollbar-hide"
      containerClassName="p-6 pt-[40px] xs:pb-[60px] xs:pt-[120px] xs:px-[40px] text-center rounded-[32px] bg-white relative bg-cover bg-center"
      childrenClassName=""
      onClickAway={onClickAwaySuccessModal}
      onClose={onCloseSuccessModal}
      isTopIcon
      isShowCloseIcon={false}
    >
      <div className="absolute top-[20px] right-[40px]">
        <div className={`cursor-pointer`}>
          <span className="" onClick={onCloseSuccessModal}>
            <ModalCloseIcon />
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="mb-6 md:mb-8 w-fit mx-auto">
          <SuccessIcon />
        </div>
        <h6 className="text-[#101828] font-[FuturaLTBold] text-[24px] leading-[32px] mb-4">
          {headText}
        </h6>
        {/* {copyText && (
          <div className="flex items-center gap-3 justify-center">
            <p className="text-accent font-[FuturaLTBold] text-base mb-1">
              Tracking ID: {copyText}
            </p>
            <span className="cursor-pointer" onClick={() => copy(copyText)}>
              <CopyIcon />
            </span>
          </div>
        )} */}
        <p className="text-[#000000] text-[20px] leading-[32px] mb-8">
          {subText}
        </p>
        {/* <Button
          onClick={() => {
            if (showOutlineBtn) {
              onActionClick?.();
              return;
            }
            onCloseSuccessModal?.();
          }}
        >
          {actionBtnTitle || "Ok"}
        </Button> */}
        {showOutlineBtn && (
          <Button
            onClick={onCloseSuccessModal}
            // className="bg-transparent mt-5 outline-none border-[1.5px] border-[#AA8B00] text-[#AA8B00] transition-colors duration-200 ease-in-out"
          >
            {t("successMessage.btn")}
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default SuccessModal;
