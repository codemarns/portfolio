import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Home: React.FC<Props> = (props) => {
  return <div {...props}>Home</div>;
};

export default Home;
