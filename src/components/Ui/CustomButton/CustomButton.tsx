import React, { MouseEventHandler, ReactNode } from "react";
import "./style.scss";
interface CustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: string;
}

const CustomButton = ({
  children,
  onClick,
  className = '',
  size = '',
}: CustomButtonProps) => {
  const sizeButton = size === 'lg' ? 'btn-lg' : ''
  return (
    <button className={`custom-button ${className} ${sizeButton}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default CustomButton;
