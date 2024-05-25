import { FC } from "react";
import Link from "next/link";
import { Button } from "./Button";

type DownloadProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Download: FC<DownloadProps> = ({ size = "md", className }) => {
  return (
    <Link
      // download
      target="_blank"
      href={`/MarnienCuebaCV.pdf`}
    >
      <Button label="Download CV" corner="rounded" />
    </Link>
  );
};
