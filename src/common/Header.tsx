/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

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
  const { logo, name } = data || {};

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-default-950/50 backdrop-blur-md border-b border-b-default-900">
      <div className="w-full xl:container h-full px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="outline-none flex items-center">
          <img
            src={logo}
            alt="_codemarns logo"
            className="w-14 h-14 object-cover"
          />
          <h1 className="text-2xl font-semibold">
            {name?.map((item, index) => (
              <span
                className={cn("leading-none", {
                  ["text-success"]: index === 0,
                  ["text-default-700"]: index === 1,
                })}
              >
                {item}
              </span>
            ))}
          </h1>
        </Link>

        <nav>
          <ul className="flex-1 flex items-center justify-center gap-4">
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/landing">LANDING</Link>
            </li>
            <li>
              <Link to="/experiences">EXPERIENCES</Link>
            </li>
            <li>
              <Link to="/coming-soon">COMING SOON</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
