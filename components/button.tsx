"use client";

import React from "react";
import cn from "classnames";
import { buttonStyles } from "@/styles";
import { DefaultColorEnum } from "@/utils/enum";
import { Icon } from "./icon";

type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  iconPosition?: "left" | "right";
  label?: string;
  badge?: string | number;
  loading?: boolean;
  disabled?: boolean;
  layout?: "auto" | "block";
  type?: "button" | "reset" | "submit";
  variant?: "solid" | "outline" | "ghost";
  corner?: "flat" | "soft-edge" | "rounded";
  size?: "sm" | "md" | "lg" | "xl";
  color?: keyof typeof DefaultColorEnum;
};

export const Button: React.FC<TButtonProps> = (props) => {
  const {
    className,
    icon,
    label,
    badge,
    children,
    id = "button",
    size = "md",
    layout = "auto",
    type = "button",
    color = "secondary",
    variant = "solid",
    corner = "soft-edge",
    iconPosition = "left",
    disabled = false,
    loading = false,
    ...restProps
  } = props;

  const { root } = buttonStyles;

  const iconColor = variant === "solid" ? "white" : color;

  const baseClasses = cn(
    "BUTTON",
    root.base,
    root.sizes[size],
    root.corners[corner],
    root.variants[variant].base,
    disabled || loading
      ? [root.cursors.disable, root.variants[variant].disable]
      : [root.cursors.default, root.variants[variant].default],
    {
      [root.block.base]: layout === "block",
      [root.widthSizes[size]]: !(label || children),
    },
    className
  );

  return (
    <button
      {...restProps}
      id={id}
      type={type}
      className={baseClasses}
      aria-disabled={disabled || loading}
      aria-label={label}
    >
      {icon && iconPosition === "left" && (
        <Icon
          name={loading ? "spinner" : icon}
          color={variant === "solid" ? "white" : color}
          className={cn({ [root.icon.base]: loading })}
        />
      )}
      {loading ? "Loading..." : label || children}
      {icon && iconPosition === "right" && (
        <Icon
          name={loading ? "spinner" : icon}
          color={iconColor}
          className={cn({ [root.icon.base]: loading })}
        />
      )}
      {badge && <span className={root.badge.base}>{badge}</span>}
    </button>
  );
};
