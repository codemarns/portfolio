import React from "react";
import type { IconProps } from "./types";
import { styles } from "./styles";

const FacebookIcon: React.FC<IconProps> = (props) => {
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
        d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4zm0 3c9.407 0 17 7.593 17 17 0 8.38-6.033 15.306-14 16.72V29h3.625c.504 0 .93-.377.992-.877l.375-3A1 1 0 0031 24h-4v-3.5c0-1.103.897-2 2-2h2a1 1 0 001-1v-3.375a1 1 0 00-.91-.996c-.06-.005-1.47-.129-3.256-.129C23.427 13 21 15.616 21 20.367V24h-4a1 1 0 00-1 1v3a1 1 0 001 1h4v11.72C13.033 39.307 7 32.38 7 24c0-9.407 7.593-17 17-17z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.33333)"
      ></path>
    </svg>
  );
};

export default FacebookIcon;
