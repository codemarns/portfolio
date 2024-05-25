import React from "react";
import { useScrollProgress } from "@/app/hooks/hooks";
import { scrollStyles } from "@/app/styles";

export const Scroll = () => {
  const { root } = scrollStyles;
  const progress = useScrollProgress();

  return (
    <span
      className={root.base}
      style={{ transform: `translateX(${progress - 100}%)` }}
    />
  );
};
