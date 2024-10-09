import React from "react";

interface LayoutRootProps {
  children: React.ReactNode;
}

const LayoutRoot = ({ children }: LayoutRootProps) => {
  return <div className="min-h-screen bg-[#fcfcfc] relative">{children}</div>;
};

export default LayoutRoot;