"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Scroll } from "@/app/components/Scroll";
import { Download } from "@/app/components/Download";
import { OverlayNav } from "./components/OverlayNav";
import { BurgerMenu } from "./components/BurgerMenu";
import { headerStyles } from "@/app/styles";

export const Header = () => {
  const [showOverlayMenu, setShowOverlayMenu] = useState<boolean>(false);

  const menu = [
    {
      id: "about",
      name: "about",
      route: "#about",
    },
    {
      id: "portfolio",
      name: "portfolio",
      route: "#portfolio",
    },
    {
      id: "experiences",
      name: "experiences",
      route: "#experiences",
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

          <Download className="hidden lg:flex" />
        </div>

        <Scroll />
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
