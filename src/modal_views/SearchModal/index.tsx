import React from "react";

import { Modal } from "@/components";
import { ISearchModal } from "./SearchModal.types";

import SearchIconBig from "../../../public/svg-component/SearchIconBig";
import ShareIcon from "../../../public/svg-component/ShareIcon";
import SearchInputButton from "../../../public/svg-component/SearchInputButton";
import FooterArrow from "../../../public/svg-component/FooterArrow";

const SearchModal = ({
  isShowSearchModal,
  onClickAwaySearchModal,
  onCloseSearchModal,
}: ISearchModal) => {
  const totalFAQs = 7;
  const showSearchedItems = false;
  return (
    <Modal
      isShow={isShowSearchModal as boolean}
      className=""
      contentClassName=""
      childrenClassName=""
      onClickAway={onClickAwaySearchModal}
      onClose={onCloseSearchModal}
      isTopIcon
      isShowCloseIcon
    >
      <div
        className={`flex flex-col justify-between ${
          showSearchedItems ? "gap-3" : "gap-10"
        } w-full`}
      >
        {showSearchedItems ? (
          <div className="w-full">
            <div className="w-fit mx-auto mb-[46px] flex items-center justify-center flex-col">
              <SearchIconBig className="max-w-[70px] min-w-[70px] max-h-[70px] min-h-[70px]" />
              <h6 className="font-bold text-[18px] leading-[28px]">
                20 Search Results
              </h6>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {Array.from({ length: totalFAQs }, (_, i) => (
                <div
                  key={i}
                  className="bg-[#F7F7F7] p-4 px-6 flex items-center justify-between rounded-[16px]"
                >
                  <p>Frequently asked question #{i + 1}</p>
                  <FooterArrow fill="#AA8B00" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="w-fit mx-auto mb-[26px]">
              <SearchIconBig className="max-w-[280px] min-w-[280px] max-h-[280px] min-h-[280px]" />
            </div>
            <div className="flex items-center flex-wrap justify-center gap-2">
              <div className="py-[14px] px-[12px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap">
                <p className="text-sm whitespace-nowrap">History of Apapa</p>
                <ShareIcon />
              </div>
              <div className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap">
                <p className="text-sm  whitespace-nowrap">
                  E-government service
                </p>
                <ShareIcon />
              </div>
              <div className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap">
                <p className="text-sm  whitespace-nowrap">
                  E-government service
                </p>
                <ShareIcon />
              </div>
              <div className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap">
                <p className="text-sm  whitespace-nowrap">
                  Frequently asked questions
                </p>
                <ShareIcon />
              </div>
              <div className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap">
                <p className="text-sm  whitespace-nowrap">
                  E-government service
                </p>
                <ShareIcon />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            className="w-full border border-[#D0D0D0] min-h-[56px] rounded-[100px] pt-[13px] pb-[15px] px-6"
            placeholder="Search"
          />
          <SearchInputButton />
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
