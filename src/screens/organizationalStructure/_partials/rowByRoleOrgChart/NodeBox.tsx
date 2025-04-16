import Link from "next/link";
import React from "react";

interface NodeBoxProps {
  role: string;
  rowId: number;
  roleId: string;
  image?: string;
}

const NodeBox: React.FC<NodeBoxProps> = ({ role, rowId, roleId, image }) => {
  const extraHeightClass = rowId >= 4 && rowId <= 7 ? "min-h-[200px]" : "";
  const arrowTop = (
    <div className="flex flex-col items-center mb-[33px]">
      {/* Vertical line */}
      <div className="w-[2px] h-[100px] bg-black" />
      {/* Downward arrowhead */}
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: "7px solid black",
        }}
      />
    </div>
  );

  const arrowBottom = (
    <div className="flex flex-col items-center">
      {/* Vertical line */}
      <div
        className={`w-[2px] ${
          roleId === "council-manager"
            ? "h-[892px]"
            : roleId === "legislative-arm"
            ? "h-[318px]"
            : "h-[100px]"
        } bg-black`}
      />
      {/* Upward arrowhead flipped to point down from the node’s bottom */}
      {roleId !== "council-manager" && roleId !== "legislative-arm" && (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "7px solid black",
          }}
        />
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center relative ">
      {rowId > 1 && arrowTop}

      <Link
        href={`/government/organizational-structure/${roleId}`}
        className="relative flex flex-col w-[188px]"
      >
        <div className="absolute z-[4] -top-8 left-1/2 transform -translate-x-1/2 w-[88px] h-[88px] rounded-full bg-[#FFF6CC] flex items-center justify-center shadow-sm p-5">
          <div
            className="min-w-[68px] h-[68px] rounded-full border-[6px] border-[#FFD100] bg-cover bg-center"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        </div>
        <div
          className={`${extraHeightClass} relative text-sm bg-white pt-[64px] w-full border-2 border-[#FFD100] shadow-md pb-6 leading-[24px] rounded-[32px] text-black font-[FuturaLTBold] text-center px-4`}
        >
          {role}
          <div className="absolute top-[112px] left-[83.5px]">
            {((rowId === 2 && roleId === "council-manager") ||
              (rowId === 2 && roleId === "legislative-arm")) &&
              arrowBottom}
          </div>
        </div>
      </Link>
      {rowId === 1 && arrowBottom}
    </div>
  );
};

export default NodeBox;
