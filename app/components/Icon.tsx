"use client";

import React from "react";
import cn from "classnames";
import { ColorEnum } from "@/app/utils/enum";
import { iconStyles } from "@/app/styles";

type TIconProps = {
  className?: string;
  title?: string;
  name: string | undefined;
  color?: keyof typeof ColorEnum;
};

export const Icon: React.FC<TIconProps> = (props) => {
  const { className, name, title, color = "inherit" } = props;
  const { root } = iconStyles;
  return (
    <i
      title={title}
      className={cn(
        className,
        { ["cm-icon-" + name]: name },
        root.base,
        root.color[color]
      )}
    />
  );
};
