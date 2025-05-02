"use client";

import useToast from "./useToast";

export const useCopyToClipboard = ({
  successMessage = "Copied!",
  errorMessage = "Failed to copy",
} = {}) => {
  const toast = useToast();

  const copy = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        textArea.remove();
        if (!successful) {
          throw new Error("Copy command was unsuccessful");
        }
      }
      toast.success(successMessage);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error(errorMessage);
    }
  };

  return { copy };
};
