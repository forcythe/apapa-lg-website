import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children = "Become a Volunteer",
  className = "",
  isLoading,
  disabled = false,
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  return (
    <button
      {...props}
      {...props}
      disabled={isDisabled}
      className={`
        ${
          className ||
          `border-none bg-[#AA8B00] ${
            isDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#8C6A00] transition-colors duration-200 ease-in-out text-white"
          }`
        } w-full outline-none rounded-[44px] py-3 px-6 text-base md:text-[20px] leading-[32px] flex items-center justify-center`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-accent3 border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
