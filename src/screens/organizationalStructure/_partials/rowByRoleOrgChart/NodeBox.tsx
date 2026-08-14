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

  return (
    <div className="flex flex-col items-center">
      <Link
        href={`/government/organizational-structure/${roleId}`}
        className="relative flex flex-col w-[170px]"
      >
        <div className="absolute z-[4] -top-8 left-1/2 transform -translate-x-1/2 w-[96px] h-[96px] rounded-full bg-[#FFF6CC] flex items-center justify-center shadow-sm p-5">
          <div
            className="min-w-[72px] h-[72px] rounded-full border-[6px] border-[#FFD100] bg-cover"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundPosition: "center 30%",
            }}
          />
        </div>
        <div
          className={`${extraHeightClass} relative text-sm bg-white pt-[64px] w-full border-2 border-[#FFD100] shadow-md pb-6 leading-[24px] rounded-[32px] text-black font-[FuturaLTBold] text-center px-4`}
        >
          {role}
        </div>
      </Link>
    </div>
  );
};

export default NodeBox;
