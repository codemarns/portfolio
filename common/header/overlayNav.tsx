import React from "react";
import cn from "classnames";
import Link from "next/link";
import { Download } from "@/components/download";
import { overlayNavStyles } from "@/styles";
import { HeaderCommonProps } from "./types";

type ItemProps = {
  id: string;
  name: string;
  route: string;
};

type OverlayNavProps = HeaderCommonProps & {
  menu: ItemProps[];
};

export const OverlayNav: React.FC<OverlayNavProps> = ({
  menu,
  isOpen,
  setOpen,
}) => {
  const { root, ul } = overlayNavStyles;

  const baseStyles = cn(
    root.base,
    isOpen ? root.position.display : root.position.hide
  );

  return (
    <nav className={baseStyles}>
      <ul className={ul.base}>
        {menu.map((item, index) => (
          <li key={index} className={ul.li.base}>
            <Link
              href={`${item.route}`}
              className={ul.li.link.base}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Download size="lg" className="flex lg:hidden" />
    </nav>
  );
};
