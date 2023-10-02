/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";

type Page = {
  path: string;
  page: string;
  [key: string]: any;
};

type Data = {
  logo: any;
  name: string[];
  menu: Page[];
};

type HeaderProps = {
  data?: Data;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { data } = props;
  const { logo, name, menu } = data || {};

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-default-950/50 backdrop-blur-md border-b border-b-default-900">
      <div className="w-full xl:container h-full px-4 mx-auto flex items-center justify-between">
        <NavLink
          reloadDocument
          to="/portfolio/"
          className="outline-none flex items-center"
        >
          <img
            src={logo}
            alt="_codemarns logo"
            className="w-14 h-14 object-cover"
          />
          <h1 className="text-2xl font-semibold">
            {name?.map((item, index) => (
              <span
                key={index}
                className={cn("leading-none", {
                  ["text-success"]: index === 0,
                  ["text-default-700"]: index === 1,
                })}
              >
                {item}
              </span>
            ))}
          </h1>
        </NavLink>

        <nav>
          <ul className="flex-1 flex items-center justify-center gap-4">
            {menu?.map((item, index) => (
              <li key={index} className="list-none">
                <NavLink
                  // reloadDocument
                  to={item.path}
                  // className={"aria-[current=page]:text-success"}
                  // className={({ isActive }) => isActive ? "text-success" : "INACTIVE"}
                >
                  {item.page}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
