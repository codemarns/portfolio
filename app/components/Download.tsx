import { FC } from "react";
import Link from "next/link";
import { cn } from "../lib/cn";
import { Button } from "./Button";

type DownloadProps = {
  className?: string;
};

export const Download: FC<DownloadProps> = ({ className }) => {
  return (
    <Link
      // download
      target="_blank"
      href={`/MarnienCuebaCV.pdf`}
      className={cn("", className)}
    >
      <Button label="Download CV" corner="rounded" />
    </Link>
  );
};
