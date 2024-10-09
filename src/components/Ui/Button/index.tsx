import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "primary" | "outline" | "tertiary";
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  const variantClasses = {
    primary: "py-2.5 px-6 text-sm bg-custom-green-1 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-custom-green-1/75",
    outline: "py-2.5 px-6 text-sm text-custom-black-1 border border-custom-gray-1 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-slate-100",
    tertiary: "bg-transparent text-custom-black-1",
  };

  return (
    <button onClick={onClick} className={variantClasses[variant]}>
      {children}
    </button>
  );
};

export default Button;
