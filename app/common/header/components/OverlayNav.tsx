import React from "react";
import Link from "next/link";
import { cn } from "@/app/lib/cn";
import { Download } from "@/app/components/Download";
import { overlayNavStyles } from "@/app/styles";
import { HeaderCommonProps } from "../types";

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
