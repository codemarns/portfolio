import React from "react";
import cn from "classnames";
import { iconStyles } from "../../styles";

type TIconProps = {
  className?: string;
  name: string | undefined;
};

export const Icon: React.FC<TIconProps> = ({ className, name }) => {
  const { root } = iconStyles;
  return (
    <i className={cn({ ["cm-icon-" + name]: name }, root.base, className)} />
  );
};
