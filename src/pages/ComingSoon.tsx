/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  logo: any;
};

const ComingSoon: React.FC<Props> = (props) => {
  const { logo, ...restProps } = props;

  return (
    <div
      {...restProps}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div className="flex items-center justify-center flex-col">
        <img
          src={logo}
          alt="_codemarns logo"
          className="w-80 h-80 object-cover"
        />
        <span className="text-2xl">Coming Soon!</span>
      </div>
    </div>
  );
};

export default ComingSoon;
