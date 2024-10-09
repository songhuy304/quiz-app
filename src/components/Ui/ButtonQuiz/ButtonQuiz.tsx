import React, { MouseEventHandler, ReactNode } from "react";
import "./style.scss"
interface ButtonQuizProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: string;
  outline?: boolean;
}

export const ButtonQuiz = ({ children, onClick, outline = false  }: ButtonQuizProps) => {
  return <button className={`${outline ? "btnQuizOutline" : "btnQuiz"}`} onClick={onClick}>{children}</button>;
};
