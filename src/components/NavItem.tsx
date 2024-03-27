import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"a"> {}

const NavItem: FC<Props> = ({
  href,
  target = "_blank",
  className,
  children,
}) => {
  return (
    <a href={href} target={target} className={twMerge("link", className)}>
      {children}
    </a>
  );
};

export default NavItem;
