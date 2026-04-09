import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { Button, Modal } from "@/components";
import { IVotingModal } from "./votingModal.types";
import { validationSchema } from "./votingModal.validation";
import { Poll } from "@/screens/pollsAndSurvey/pollsAndSurvey.types";

import ModalCloseIcon from "../../../public/svg-component/ModalCloseIcon";
import CheckedIcon from "../../../public/svg-component/CheckedIcon";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "https://apapa-lg-cms-production.up.railway.app";

const formatDateWithOrdinal = (isoDate: string) => {
  const date = new Date(isoDate);

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month} ${year}`;
};

interface VoteResponse {
  data?: {
    id: number;
    question: string;
    options: Poll["options"];
    endsAt?: string;
    totalVotes: number;
  };
  message?: string;
  error?: {
    message?: string;
  };
}

const VotingModal = ({
  poll,
  nin,
  refetch,
  onPollUpdated,
  isShowVotingModal,
  onActionClick,
  onClickAwayVotingModal,
  onCloseVotingModal,
}: IVotingModal) => {
  const formik = useFormik<{ selectedOption: number | null }>({
    initialValues: { selectedOption: null },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!poll?.id || !values.selectedOption) return;
      if (!nin.trim()) {
        toast.error("NIN is required.");
        return;
      }

      try {
        setSubmitting(true);
        const response = await fetch(
          `${API_BASE_URL}/api/polls/${poll.id}/vote`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nin: nin.trim(),
              optionId: values.selectedOption,
            }),
          },
        );

        const data: VoteResponse = await response.json();

        if (response.ok) {
          if (data?.data) {
            onPollUpdated({
              id: data.data.id,
              question: data.data.question,
              options: Array.isArray(data.data.options) ? data.data.options : [],
              endsAt: data.data.endsAt ?? poll.endsAt,
              ends:
                data.data.endsAt && data.data.endsAt !== poll.endsAt
                  ? formatDateWithOrdinal(data.data.endsAt)
                  : poll.ends,
              totalVotes: data.data.totalVotes ?? poll.totalVotes,
            });
          } else {
            refetch?.();
          }

          toast.success("Vote recorded successfully.");
          onActionClick?.();
        } else {
          // Handle specific error messages
          const errorMessage =
            data.error?.message || data.message ||
            "An error occurred while voting.";
          if (errorMessage.toLowerCase().includes("already voted")) {
            toast.error("You have already voted in this poll.");
          } else if (errorMessage.toLowerCase().includes("invalid option")) {
            toast.error("Invalid option selected.");
          } else {
            toast.error(errorMessage);
          }
        }
      } catch (error) {
        console.error("Voting error:", error);
        toast.error("Failed to submit vote. Please try again.");
      } finally {
        setSubmitting(false);
      }
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
          {poll?.question}
        </h6>
        <form action="" onSubmit={formik.handleSubmit} className="mb-[60px]">
          <div className="mb-[60px] flex flex-col gap-6">
            {poll?.options?.map((opt) => {
            const selected = formik.values.selectedOption === opt.id;
            return (
                <div
                  key={opt.id}
                  onClick={() => formik.setFieldValue("selectedOption", opt.id)}
                  className={`
                        flex items-center justify-between
                        rounded-[12px] py-6 px-4
                        cursor-pointer border border-[#009A44]
                        ${selected ? "bg-[#E6F5EC]" : "bg-white"}
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
                      {opt.label}
                    </p>
                  </div>
                  <h6
                    className={`text-base md:text-[20px] md:leading-[28px] font-[FuturaLTBold] text-[#009A44]`}
                  >
                    {opt.percentage}%
                  </h6>
                </div>
              );
            })}
          </div>
          {formik.submitCount > 0 && formik.errors.selectedOption && (
            <p className="text-red-500 text-sm mb-4 text-left">
              {formik.errors.selectedOption as string}
            </p>
          )}
          <Button type="submit" isLoading={formik.isSubmitting}>
            Submit Vote
          </Button>
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
