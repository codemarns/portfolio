import React from "react";
import cn from "classnames";
import { iconStyles } from "../../styles";
import { ColorEnum } from "../../shared";

type TIconProps = {
  className?: string;
  title?: string;
  name: string | undefined;
  color?: keyof typeof ColorEnum;
};

export const Icon: React.FC<TIconProps> = (props) => {
  const { className, name, title, color = "default" } = props;
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
