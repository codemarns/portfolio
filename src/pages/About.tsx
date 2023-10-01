import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const About: React.FC<Props> = (props) => {
  return <div {...props}>About</div>;
};

export default About;
