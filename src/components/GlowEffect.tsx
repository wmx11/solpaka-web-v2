import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

const GlowEffect: FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "absolute w-[400px] h-[400px] blur-[300px] bg-red-200",
        className
      )}
    ></div>
  );
};

export default GlowEffect;
