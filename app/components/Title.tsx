import React from "react";
import { cn } from "@/app/lib/cn";
import { titleStyles } from "@/app/styles";

type Props = {
  name?: string;
  children?: string;
  className?: string;
};

export const Title: React.FC<Props> = (props) => {
  const { name, className, children } = props;
  const { root } = titleStyles;

  return (
    <h2 className={cn("TITLE", root.base, className)}>{name || children}</h2>
  );
};
