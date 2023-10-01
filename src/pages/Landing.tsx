import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Landing: React.FC<Props> = (props) => {
  return <div {...props}>Landing</div>;
};

export default Landing;
