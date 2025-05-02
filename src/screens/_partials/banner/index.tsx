import React from "react";

const Banner = ({ type }: { type: string }) => {
  return (
    <div className="group relative w-full overflow-hidden min-h-[184px] md:min-h-[244px] flex items-center justify-center section-padding bg-[#1D180052]">
      <div
        className="absolute inset-0 z-[-1] transition-transform duration-500 ease-in-out group-hover:scale-105  w-full"
        style={{
          backgroundImage: "url('/image/gv-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h6 className="w-full max-w-[646px] mx-auto text-center font-[FuturaLTBold] text-[20px] leading-[28px] md:text-[28px] md:leading-[40px] tex-white text-white">
        {type}
      </h6>
    </div>
  );
};

export default Banner;
