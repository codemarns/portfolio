import { FC } from "react";
import cn from "classnames";
import Link from "next/link";

type DownloadProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Download: FC<DownloadProps> = ({ size = "md", className }) => {
  return (
    <Link
      download
      target="_blank"
      href={`/MarnienCuebaCV.pdf`}
      className={cn(
        "outline-none w-auto bg-secondary/10 hover:bg-secondary border border-secondary active:outline-[6px] active:outline-secondary/20 outline-offset-0 rounded-full items-center justify-center common-transition",
        {
          ["h-12 px-6"]: size === "lg",
          ["h-10 px-4"]: size === "md",
          ["h-8 px-3"]: size === "sm",
        },
        className
      )}
    >
      Download CV
    </Link>
  );
};
