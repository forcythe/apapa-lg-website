/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useFormik } from "formik";

import { Button, Modal } from "@/components";
import { IVotingModal } from "./votingModal.types";
import { validationSchema } from "./votingModal.validation";

import ModalCloseIcon from "../../../public/svg-component/ModalCloseIcon";
import CheckedIcon from "../../../public/svg-component/CheckedIcon";

const VotingModal = ({
  poll,
  isShowVotingModal,
  onActionClick,
  onClickAwayVotingModal,
  onCloseVotingModal,
}: IVotingModal) => {
  const options: any = [
    { id: "roads", label: "Improved road infrastructure", percentage: "50%" },
    { id: "schools", label: "Better school facilities", percentage: "30%" },
    { id: "health", label: "Upgraded health centers", percentage: "15%" },
    { id: "parks", label: "More public parks", percentage: "5%" },
  ];
  const formik = useFormik<{ selectedOption: string }>({
    initialValues: { selectedOption: "" },
    validationSchema: validationSchema,
    onSubmit: () => {
      onActionClick?.();
    },
  });
  return (
    <Modal
      isShow={isShowVotingModal as boolean}
      className=""
      contentClassName="relative max-h-full overflow-y-auto min-w-full max-w-ful  md:min-w-[624px] md:max-w-[624px] animate-fadeInUp scrollbar-hide"
      containerClassName="p-6 pt-[40px] xs:pb-[60px] xs:pt-[120px] xs:px-[40px] text-center rounded-[32px] bg-white relative bg-cover bg-center"
      childrenClassName=""
      onClickAway={onClickAwayVotingModal}
      onClose={onCloseVotingModal}
      isTopIcon
      isShowCloseIcon={false}
    >
      <div className="absolute top-[20px] right-[40px]">
        <div className={`cursor-pointer`}>
          <span className="" onClick={onCloseVotingModal}>
            <ModalCloseIcon />
          </span>
        </div>
      </div>
      <div className="relative">
        <h6 className="text-[#101828] font-[FuturaLTBold] text-[20px] text-left leading-[28px] mb-[32px]">
          What should be Apapa’s top development priority in 2025
        </h6>
        <form action="" onSubmit={formik.handleSubmit} className="mb-[60px]">
          <div className="mb-[60px] flex flex-col gap-6">
            {options?.map(
              ({
                id,
                label,
                percentage,
              }: {
                id: string;
                label: string;
                percentage: string;
              }) => {
                const selected = formik.values.selectedOption === id;
                return (
                  <div
                    key={id}
                    onClick={() => formik.setFieldValue("selectedOption", id)}
                    className={`
                        flex items-center justify-between
                        rounded-[12px] py-6 px-4
                        cursor-pointer border border-[#009A44]
                      `}
                  >
                    <div className="flex items-center gap-3">
                      <div className="cursor-pointer">
                        {selected ? (
                          <CheckedIcon />
                        ) : (
                          <div className="max-w-6 min-w-6 max-h-6 min-h-6 border border-[#009A44] rounded-[8px]" />
                        )}
                      </div>
                      <p
                        className={`text-base md:text-[20px] md:leading-[32px] text-left text-[#009A44]`}
                      >
                        {label}
                      </p>
                    </div>
                    <h6
                      className={`text-base md:text-[20px] md:leading-[28px] font-[FuturaLTBold] text-[#009A44]`}
                    >
                      {percentage}
                    </h6>
                  </div>
                );
              }
            )}
          </div>
          <Button type="submit">Submit Vote</Button>
        </form>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm md:text-base md:leading-[24px] text-[#121212]">
            Poll ends: {poll?.ends}
          </p>
          <div className="flex items-center py-2 px-3 border border-[#009A44] rounded-[32px]">
            <p className="text-sm md:text-base md:leading-[24px] text-[#009A44]">
              {poll?.totalVotes} Votes
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VotingModal;
