"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SelectOptionProps } from "./selectOption.types";

import ArrowHeadIcon from "../../../public/svg-component/ArrowHeadIcon";

import { useTranslations } from "next-intl";

const SelectOption: React.FC<SelectOptionProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  options,
}) => {

  const t = useTranslations("Community.feedback");

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    if (onChange) {
      const syntheticEvent = {
        target: {
          name,
          value: option,
        },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(syntheticEvent);
    }
    setIsOpen(false);
  };

  const triggerBlur = () => {
    if (onBlur) {
      const syntheticBlurEvent = {
        target: { name, value },
      } as unknown as React.FocusEvent<HTMLDivElement>;
      onBlur(syntheticBlurEvent);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        triggerBlur();
        // if (onBlur) {
        //   const syntheticBlurEvent = {
        //     target: containerRef.current,
        //   } as React.FocusEvent<HTMLDivElement>;
        //   onBlur(syntheticBlurEvent);
        // }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onBlur, value, name]);

  return (
    <div className="relative" ref={containerRef}>
      <input type="hidden" id={name} name={name} value={value} />
      <div
        tabIndex={0}
        onBlur={triggerBlur}
        onClick={handleToggle}
        className="w-full outline-none border border-[#22222226] rounded-[12px] py-4 px-3 min-h-[64px] bg-white text-base md:text-[20px] md:leading-[32px] placeholder:text-[#B0B0B0] cursor-pointer flex items-center justify-between"
      >
        <span className={value ? "" : "text-[#B0B0B0]"}>{value || label}</span>
        <ArrowHeadIcon
          className={`transition-transform duration-300 ease-in-out max-w-[20px] min-w-[20px] max-h-[20px] min-h-[20px] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute z-10 w-full mt-1 rounded-[12px] border border-[#22222226] bg-white overflow-hidden"
          >
            {options.map((option) => (
              <div
                key={option.id}
                className="px-6 py-4 text-primary font-medium hover:bg-gray-100 cursor-pointer border-b border-[#DDDDDD] last:border-0"
                onClick={() => handleOptionSelect(option.title)}
              >
                {t(option.title)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="absolute text-[10px] text-red-700">{error}</p>}
    </div>
  );
};

export default SelectOption;
