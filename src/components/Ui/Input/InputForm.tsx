import { Input } from "antd";
import React from "react";
interface InputFormProps {
  label?: string;
  name: string;
  placeholder?: string;
  variant?: "filled" | "outlined";
}

export const InputForm = ({
  label,
  name,
  placeholder,
  variant = "filled",
}: InputFormProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input placeholder={placeholder} variant={variant} name={name} />
    </div>
  );
};
