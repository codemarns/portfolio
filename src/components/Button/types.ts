/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
  icon?: any;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "ghost";
  corner?: "flat" | "soft-edge" | "rounded";
  color?: "default" | "primary" | "secondary" | "success";
};
