import { NavRouter } from "@/router/route";
import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = () => {
  const location = useLocation();
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-2">
        {NavRouter.map((e, i) => (
          <li
            key={i}
            className={clsx(
              "relative px-4 py-2 font-medium text-custom-gray-2 hover:text-custom-black-1",
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
      </ul>
    </div>
  );
};

export default NavLink;
