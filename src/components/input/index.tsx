/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

const InputField = ({
  name,
  value,
  type = "text",
  placeholder,
  onBlur,
  onChange,
  error,
  LeftIcon,
}: {
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  LeftIcon?: any;
}) => {
  return (
    <div className="relative min-h-[64px]">
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full outline-none border border-[#22222226] rounded-[12px] py-4 px-3 min-h-[64px] bg-white text-base md:text-[20px] md:leading-[32px] placeholder:text-[#B0B0B0]"
      />
      {LeftIcon && (
        <div className="absolute right-[12px] top-1/2 transform -translate-y-1/2">
          {LeftIcon}
        </div>
      )}
      {error && <p className="absolute text-[10px] text-red-700">{error}</p>}
    </div>
  );
};

export default InputField;
