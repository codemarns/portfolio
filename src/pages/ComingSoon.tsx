import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const ComingSoon: React.FC<Props> = (props) => {
  return <div {...props}>Coming Soon</div>;
};

export default ComingSoon;
