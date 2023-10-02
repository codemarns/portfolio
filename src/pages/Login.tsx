import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Login: React.FC<Props> = (props) => {
  return <div {...props}>Login</div>;
};

export default Login;
