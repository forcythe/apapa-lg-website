import React from "react";
import { useFormik } from "formik";

import { Button, InputField, Modal } from "@/components";
import { FormValues, INinModal } from "./NinModal.types";
import { validationSchema } from "./ninModal.validation";

import ModalCloseIcon from "../../../public/svg-component/ModalCloseIcon";

const NinModal = ({
  isShowNinModal,
  onActionClick,
  onClickAwayNinModal,
  onCloseNinModal,
}: INinModal) => {
  const formik = useFormik<FormValues>({
    validationSchema: validationSchema,
    initialValues: {
      nin: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      onActionClick?.();
    },
  });
  return (
    <Modal
      isShow={isShowNinModal as boolean}
      className=""
      contentClassName="relative max-h-full overflow-y-auto min-w-full max-w-ful  md:min-w-[624px] md:max-w-[624px] animate-fadeInUp scrollbar-hide"
      containerClassName="p-6 pt-[40px] xs:pb-[60px] xs:pt-[120px] xs:px-[40px] text-center rounded-[32px] bg-white relative bg-cover bg-center"
      childrenClassName=""
      onClickAway={onClickAwayNinModal}
      onClose={onCloseNinModal}
      isTopIcon
      isShowCloseIcon={false}
    >
      <div className="absolute top-[20px] right-[40px]">
        <div className={`cursor-pointer`}>
          <span className="" onClick={onCloseNinModal}>
            <ModalCloseIcon />
          </span>
        </div>
      </div>
      <div className="relative">
        <h6 className="text-[#101828] font-[FuturaLTBold] text-[24px] text-left leading-[32px] mb-4">
          Vote
        </h6>
        <p className="text-[#000000] text-[20px] text-left leading-[32px] mb-8">
          Please enter your NIN to verify your identity and proceed.
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mb-[60px]">
            <InputField
              type="text"
              placeholder="Enter NIN"
              name="nin"
              value={formik.values.nin}
              onChange={formik.handleChange}
              error={
                formik.submitCount > 0 && typeof formik.errors.nin === "string"
                  ? formik.errors.nin
                  : undefined
              }
            />
          </div>
          <Button type="submit">Proceed</Button>
        </form>
      </div>
    </Modal>
  );
};

export default NinModal;
