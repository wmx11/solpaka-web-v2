import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

const Container: FC<Props> = ({ className, children }) => {
  return (
    <div className={twMerge("container mx-auto p-2", className)}>{children}</div>
  );
};

export default Container;
