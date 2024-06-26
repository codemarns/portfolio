import React from "react";
import { cn } from "@/app/lib/cn";
import { Button } from "@/app/components/Button";
import { HeaderCommonProps } from "../types";

type BurgerMenuProps = HeaderCommonProps;

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setOpen }) => {
  return (
    <Button
      variant="ghost"
      className="!fixed top-3 sm:top-5 md:top-7 right-6 sm:right-8 z-30 group block lg:hidden !w-10 !p-0 !text-3xl !bg-transparent flex-col"
      onClick={() => setOpen(!isOpen)}
    >
      <span className="h-full w-full block relative">
        <span
          className={cn(
            "h-0.5 w-8 bg-secondary absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 common-transition",
            isOpen ? "top-1/2 rotate-45" : "top-[25%] rotate-0"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-8 bg-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 common-transition",
            isOpen ? "hidden" : "block"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-8 bg-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 common-transition",
            isOpen ? "top-1/2 -rotate-45" : "top-[75%] rotate-0"
          )}
        />
      </span>
    </Button>
  );
};
