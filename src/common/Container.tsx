import React from "react";
import cn from "classnames";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div {...restProps} className={cn("w-full mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
