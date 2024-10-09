import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavRouter } from "@/router/route";
import clsx from "clsx";
import Button from "@/components/Ui/Button";
import { useSelector } from "react-redux";
import { SelectAuthenticated } from "@/Redux/userSlice/userSlice";

interface MenuMobileProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MenuMobile = ({ setIsOpen }: MenuMobileProps) => {
  const isAuthen = useSelector(SelectAuthenticated);

  return (
    <div className="min-h-screen bg-Bgprimary w-full fixed top-0 left-0 right-0 z-50">
      <div className="py-[10px] px-4">
        <div className="flex justify-end h-[44px]">
          <button>
            <HiOutlineXMark size={28} onClick={() => setIsOpen(false)} />
          </button>
        </div>
        <div className="mt-10 pb-4 border-b border-custom-gray-1">
          <ul className="space-y-2 text-3xl font-semibold">
            {NavRouter.map((e, i) => (
              <li
                key={i}
                className={clsx(
                  "relative px-4 py-2 h hover:text-custom-gray-2 text-custom-black-1",
                  {
                    "!text-custom-black-1": location.pathname === e.path,
                  }
                )}
              >
                <Link
                  to={e.path}
                  className="relative after:absolute after:left-0 after:right-0 after:-bottom-[7px] after:h-[2px] after:bg-custom-black-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  {e.title}
                </Link>
              </li>
            ))}
            <li
              className={clsx(
                "relative px-4 py-2 h hover:text-custom-gray-2 text-custom-black-1",
                {
                  "!text-custom-black-1": location.pathname === "/profile",
                }
              )}
            >
              <Link
                to={"/profile"}
                className="relative after:absolute after:left-0 after:right-0 after:-bottom-[7px] after:h-[2px] after:bg-custom-black-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
        {!isAuthen && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="primary">Sign Up</Button>
            <Button variant="outline">Sign In</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuMobile;
