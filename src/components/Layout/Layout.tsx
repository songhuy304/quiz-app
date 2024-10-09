import React, { ReactNode } from "react";
import Header from "./Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="relative min-h-screen px-4 md:px-12">
        <Header />
        <div className="Main-content">{children}</div>
      </div>
    </>
  );
};

export default Layout;
