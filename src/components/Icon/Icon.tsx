import React from "react";
import cn from "classnames";
import { iconStyles } from "../../styles";
import { SizeEnum } from "../../shared";

type TIconProps = {
  className?: string;
  name: string | undefined;
  size?: keyof typeof SizeEnum;
};

export const Icon: React.FC<TIconProps> = (props) => {
  const { className, name, size = "md" } = props;
  const { root } = iconStyles;
  return (
    <i
      className={cn(
        { ["cm-icon-" + name]: name },
        root.base,
        root.sizes[size],
        className
      )}
    />
  );
};
