"use client";

import React from "react";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: url || window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url || window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-opacity-90 transition-all font-[FuturaLTBold]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
      Share
    </button>
  );
};

export default ShareButton;
