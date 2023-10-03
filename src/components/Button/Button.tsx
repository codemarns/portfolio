import React from "react";
import cn from "classnames";
import { ButtonProps } from ".";
import { styles } from "./styles";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    label,
    icon,
    size = "md",
    corner = "soft-edge",
    color = "success",
    variant = "solid",
    ...restProps
  } = props;

  const baseClasses = cn(
    "BUTTON",
    styles.root,
    styles.color[color],
    styles.corner[corner],
    styles.size.height[size],
    styles.variant[variant].bgColor[color],
    label ? styles.padding[size] : styles.size.width[size],
    className
  );

  return (
    <button {...restProps} className={baseClasses}>
      {icon}
      {label || children}
    </button>
  );
};

export default Button;
