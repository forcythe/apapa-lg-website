"use client";

import Image from "next/image";
import React, { useState, useRef, ChangeEvent } from "react";

import { FileInputFieldProps } from "./fileInputField.types";
import { truncateData } from "@/utils/helpers/truncateData";

import FileIcon from "../../../public/svg-component/FileIcon";

const FileInputField: React.FC<FileInputFieldProps> = ({
  placeholder = "Upload file",
  selectedFile,
  setSelectedFile,
  name,
  onBlur,
  error,
  infoText,
  disabled,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile?.(file);
      if (file.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setPreviewUrl("");
      }
    }
  };

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full relative">
      <div className="relative w-full">
        <div
          className={`relative flex items-center min-h-[64px] py-4 px-3 w-full bg-white border border-[#22222226] rounded-xl cursor-pointer ${
            disabled ? "cursor-not-allowed" : ""
          }`}
          onClick={handleClick}
        >
          <input
            type="file"
            disabled={disabled}
            name={name}
            onBlur={onBlur}
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <div className="flex-grow">
            {selectedFile ? (
              <div className="flex items-center gap-3">
                {previewUrl && selectedFile.type.startsWith("image/") ? (
                  <Image
                    src={previewUrl}
                    alt="File Preview"
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                    unoptimized
                  />
                ) : (
                  <FileIcon />
                )}
                <div>
                  <p className="text-sm font-medium">
                    {truncateData(selectedFile.name, 35)}
                  </p>
                  <p className="text-xs text-gray-500">{selectedFile.type}</p>
                </div>
              </div>
            ) : (
              <span className="text-[#B0B0B0]">{placeholder}</span>
            )}
          </div>
          <div className="flex-shrink-0">
            <FileIcon />
          </div>
        </div>
        <p className="text-[#454545] text-[14px] leading-[24px]">{infoText}</p>
        {error && (
          <p className="text-red-600 text-[10px] absolute -bottom-[15px]">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileInputField;
