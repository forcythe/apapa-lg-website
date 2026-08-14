"use client";

import { useLayoutEffect, useRef, useState } from "react";

interface ReadMoreTextProps {
  text: string;
  className?: string;
  maxHeight?: number;
}

/* Clamps long bios to the same height as the photo beside them (default
   600px, the image card height). Once the text passes that height a
   "Read more / Read less" toggle is shown instead of stretching the page. */
const ReadMoreText: React.FC<ReadMoreTextProps> = ({
  text,
  className,
  maxHeight = 600,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const check = () => {
      el.style.maxHeight = "none";
      const fullHeight = el.scrollHeight;
      el.style.maxHeight = expanded ? "none" : `${maxHeight}px`;
      setIsOverflowing(fullHeight > maxHeight);
    };

    check();
    const ro = new ResizeObserver(check);
    if (el.parentElement) ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, [text, maxHeight, expanded]);

  return (
    <>
      <p
        ref={textRef}
        className={className}
        style={{
          overflow: "hidden",
          maxHeight: expanded ? "none" : `${maxHeight}px`,
        }}
      >
        {text}
      </p>
      {isOverflowing && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-base md:text-[16px] font-[FuturaLTBold] text-[#B0923C] hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </>
  );
};

export default ReadMoreText;
