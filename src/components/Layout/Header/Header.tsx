import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "@/assets/LOGO.svg";
import NavLink from "./NavLink";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { SelectAuthenticated } from "@/Redux/userSlice/userSlice";
import Avatar from "./Avatar";
import DarkMode from "@/components/Ui/Toggle/DarkMode";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import MenuMobile from "./MenuMobile";
import Button from "@/components/Ui/Button";
const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuthen = useSelector(SelectAuthenticated);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        style.header,
        scrolled && "shadow-xl bg-white",
        "md:px-0 px-4"
      )}
    >
      <div className="max-w-[1125px] w-full mx-auto flex items-center justify-between">
        <div>
          <Link to={"/"} className="flex gap-4 items-center">
            <div className="w-[44px] h-[44px] overflow-hidden">
              <img src={LOGO} className="w-full h-full object-contain" alt="" />
            </div>
            <h2 className="font-bold text-2xl">
              Quiz<span className="text-custom-green-1">M</span>aster
            </h2>
          </Link>
        </div>
        <NavLink />
        <div className="flex items-center gap-4">
          {isAuthen ? (
            <Avatar />
          ) : (
            <div className="md:flex items-center gap-4 hidden ">
              <Button onClick={() => navigate("/login")} variant="outline">
                Sign In
              </Button>
              <Button onClick={() => navigate("/signup")} variant="primary">
                Sign Up
              </Button>
            </div>
          )}
          <div className="hidden md:flex items-center">
            <DarkMode />
          </div>
          <button onClick={handleOpen} className="md:hidden">
            <HiOutlineBars3BottomRight size={28} />
          </button>
        </div>
      </div>
      {isOpen && <MenuMobile setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
