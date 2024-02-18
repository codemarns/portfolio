"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { headerStyles } from "@/styles";
import { OverlayNav } from "./overlayNav";
import { BurgerMenu } from "./burgerMenu";

export const Header = () => {
  const [showOverlayMenu, setShowOverlayMenu] = useState<boolean>(false);

  const menu = [
    {
      id: "about",
      name: "about",
      route: "#about",
    },
    {
      id: "experiences",
      name: "experiences",
      route: "#experiences",
    },
    {
      id: "portfolio",
      name: "portfolio",
      route: "#portfolio",
    },
    {
      id: "skills",
      name: "skills",
      route: "#skills",
    },
    {
      id: "contacts",
      name: "contacts",
      route: "#contacts",
    },
  ];

  const { root, container, logo, nav } = headerStyles;

  return (
    <>
      <header className={root.base}>
        <div className={container.base}>
          <Link href={"/"} className={logo.wrapper}>
            <Image
              priority
              width={40}
              height={40}
              alt="logo"
              src={"mc-logo.svg"}
            />
          </Link>

          <nav className={nav.base}>
            <ul className={nav.ul.base}>
              {menu.map((item, index) => (
                <li key={index} className={nav.ul.li.base}>
                  <Link href={`${item.route}`} className={nav.ul.li.link.base}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <OverlayNav
        menu={menu}
        isOpen={showOverlayMenu}
        setOpen={setShowOverlayMenu}
      />

      <BurgerMenu isOpen={showOverlayMenu} setOpen={setShowOverlayMenu} />
    </>
  );
};
