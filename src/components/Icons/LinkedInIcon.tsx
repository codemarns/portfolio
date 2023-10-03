import React from "react";
import type { IconProps } from "./types";
import { styles } from "./styles";

const LinkedInIcon: React.FC<IconProps> = (props) => {
  const { size = "md" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styles.size[size]}
      height={styles.size[size]}
      viewBox="0 0 256 256"
    >
      <path
        strokeMiterlimit="10"
        d="M11.5 6C8.48 6 6 8.48 6 11.5v25c0 3.02 2.48 5.5 5.5 5.5h25c3.02 0 5.5-2.48 5.5-5.5v-25C42 8.48 39.52 6 36.5 6zm0 3h25c1.398 0 2.5 1.102 2.5 2.5v25c0 1.398-1.102 2.5-2.5 2.5h-25A2.478 2.478 0 019 36.5v-25C9 10.102 10.102 9 11.5 9zm4 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM14 20a1 1 0 00-1 1v13a1 1 0 001 1h3a1 1 0 001-1V21a1 1 0 00-1-1zm7 0a1 1 0 00-1 1v13a1 1 0 001 1h3a1 1 0 001-1v-7.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5V34a1 1 0 001 1h3a1 1 0 001-1v-8c0-3.309-2.691-6-6-6a5.965 5.965 0 00-4 1.541V21a1 1 0 00-1-1z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.33333)"
      ></path>
    </svg>
  );
};

export default LinkedInIcon;
