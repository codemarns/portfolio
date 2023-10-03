/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Container } from ".";

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-default-950/30 backdrop-blur-md">
      <Container
        size="xl"
        paddingX="xl"
        className="h-full flex items-center justify-between"
      >
        <Link to="/portfolio/" className="outline-none flex items-center">
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
        </Link>

        <nav>
          <ul className="flex-1 flex items-center justify-center gap-4">
            {menu?.map((item, index) => (
              <li key={index} className="list-none">
                <Link
                  to={item.path}
                  className="w-auto h-10 px-4 flex items-center uppercase font-extralight tracking-widest hover:text-success"
                >
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
