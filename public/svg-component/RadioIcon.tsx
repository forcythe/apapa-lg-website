import React from "react";

const RadioIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="11.5" stroke="#222222" strokeOpacity="0.15" />
    </svg>
  );
};

export default RadioIcon;
