import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"section"> {}

const Section: FC<Props> = ({ className, children, ...props }) => {
  return (
    <section className={twMerge("py-24", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
