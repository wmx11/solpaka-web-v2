import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

const Card: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
