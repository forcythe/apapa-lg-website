import React from "react";

const CloudDesign = () => {
  return (
    <svg
      width="188"
      height="188"
      viewBox="0 0 188 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="cloudFill"
          x1="60"
          y1="64"
          x2="150"
          y2="156"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF9E3" />
          <stop offset="0.45" stopColor="#FFD100" />
          <stop offset="1" stopColor="#E8A817" />
        </linearGradient>
        <linearGradient
          id="rayFill"
          x1="146"
          y1="16"
          x2="146"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD100" />
          <stop offset="1" stopColor="#F5A623" />
        </linearGradient>
        <linearGradient
          id="dropFill"
          x1="96"
          y1="150"
          x2="96"
          y2="172"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8CC4FF" />
          <stop offset="1" stopColor="#3D82F6" />
        </linearGradient>
      </defs>

      <g opacity="0.4">
        <circle cx="146" cy="46" r="24" fill="#FFD100" />
      </g>

      <circle cx="146" cy="46" r="17" fill="#FFC400" />

      <g stroke="url(#rayFill)" strokeWidth="5" strokeLinecap="round">
        <line x1="146" y1="12" x2="146" y2="20" />
        <line x1="178" y1="46" x2="170" y2="46" />
        <line x1="168" y1="21" x2="162" y2="27" />
        <line x1="124" y1="21" x2="130" y2="27" />
      </g>

      <g fill="url(#cloudFill)">
        <ellipse cx="96" cy="128" rx="62" ry="28" />
        <circle cx="74" cy="98" r="28" />
        <circle cx="112" cy="87" r="34" />
        <circle cx="141" cy="113" r="24" />
      </g>

      <g fill="url(#dropFill)">
        <path d="M84 150 C84 150 79 156 79 160 A5 5 0 0 0 89 160 C89 156 84 150 84 150 Z" />
        <path d="M104 156 C104 156 99 162 99 166 A5 5 0 0 0 109 166 C109 162 104 156 104 156 Z" />
        <path d="M124 150 C124 150 119 156 119 160 A5 5 0 0 0 129 160 C129 156 124 150 124 150 Z" />
      </g>
    </svg>
  );
};

export default CloudDesign;
