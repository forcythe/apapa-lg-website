import React from "react";

const Button = ({
  title,
  Icon,
  className,
  variant,
  onClick,
  disabled,
  isLoading,
  type,
}: {
  title: string;
  Icon?: React.ReactNode;
  className?: string;
  variant?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button";
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`py-[12px] px-[21.5px] ${
        !variant && "bg-accent hover:bg-[#5e0892] text-white font-bold"
      } ${
        isLoading ? "cursor-not-allowed" : "cursor-pointer"
      }  rounded-[32px] text-base flex items-center gap-4 transition duration-300 border-[4px] border-accent2 ${className}`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-accent2 border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          {title}
          {Icon && <span>{Icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
