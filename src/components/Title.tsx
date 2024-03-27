import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"h1"> {}

const Title: FC<Props> = ({ className, children }) => {
  return (
    <h1 className={twMerge("md:text-5xl text-4xl mb-8 font-bold", className)}>
      {children}
    </h1>
  );
};

export default Title;
