import React from "react";
import type { IconProps } from "./types";
import { styles } from "./styles";

const GithubIcon: React.FC<IconProps> = (props) => {
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
        d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4zm0 3c9.407 0 17 7.593 17 17a16.976 16.976 0 01-12 16.252v-5.115c0-1.91-1.1-3.548-2.691-4.364 3.138-.6 5.72-2.375 6.937-4.766 1.215-2.39.915-5.104-.808-7.286.443-1.366.939-3.76-.239-5.645-2.27 0-3.734 1.556-4.433 2.524a12.204 12.204 0 00-7.536-.006c-.7-.968-2.164-2.518-4.43-2.518-1.35 2.163-.515 4.489-.068 5.438-1.84 2.174-2.23 4.932-1.042 7.38 1.187 2.447 3.8 4.273 6.992 4.885-1.306.673-2.285 1.895-2.584 3.377h-1.315c-1.297 0-1.8-.527-2.502-1.416-.692-.889-1.436-1.486-2.33-1.734-.482-.051-.807.315-.387.64 1.42.966 1.517 2.548 2.086 3.583.518.932 1.58 1.771 2.78 1.771H19v3.252A16.976 16.976 0 017 24c0-9.407 7.593-17 17-17z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.33333)"
      ></path>
    </svg>
  );
};

export default GithubIcon;
