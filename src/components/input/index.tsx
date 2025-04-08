"use client";

import React from "react";

const InputField = ({
  name,
  value,
  type = "text",
  label,
  onBlur,
  onChange,
  error,
}: {
  name: string;
  value: string;
  type?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}) => {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        className="peer text-primary outline-none font-medium w-full min-h-[60px] rounded-[32px] border border-[#DDDDDD] py-4 px-6"
      />
      <div
        className={`absolute left-6 pointer-events-none transform transition-all ease-in-out duration-200 ${
          value
            ? "top-[6px] text-[10px] leading-[16px] text-[#454545]"
            : "top-[30px] -translate-y-1/2 text-[#747474] text-base"
        }`}
      >
        {label}
      </div>
      {error && (
        <p className="absolute text-[10px] left-6 text-red-700">{error}</p>
      )}
    </div>
  );
};

export default InputField;
