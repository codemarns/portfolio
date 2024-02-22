import React from "react";
import { useScrollProgress } from "@/hooks/hooks";
import { scrollStyles } from "@/styles";

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
