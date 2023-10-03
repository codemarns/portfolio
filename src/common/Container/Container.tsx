import React from "react";
import cn from "classnames";
import { TContainerProps } from "./types";
import { styles } from "./styles";

const Container: React.FC<TContainerProps> = (props) => {
  const {
    className,
    size = "2xl",
    paddingX = "unset",
    paddingY = "unset",
    children,
    ...restProps
  } = props;

  const baseClasses = cn(
    "CONTAINER",
    styles.root,
    styles.size[size],
    styles.paddingX[paddingX],
    styles.paddingY[paddingY],
    className
  );

  return (
    <div {...restProps} className={baseClasses}>
      {children}
    </div>
  );
};

export default Container;
