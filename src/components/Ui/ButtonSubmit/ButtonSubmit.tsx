import React, { MouseEventHandler, ReactNode } from "react";
interface CustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ButtonSubmit = ({ children, onClick, className }: CustomButtonProps) => (
  <button className={`btn-submit ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default ButtonSubmit;
