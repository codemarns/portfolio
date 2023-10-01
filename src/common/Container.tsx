import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <div {...restProps} className="w-full xl:container h-full mx-auto px-4">
      {children}
    </div>
  );
};

export default Container;
