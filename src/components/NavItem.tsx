"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"a"> {}

const NavItem: FC<Props> = ({
  href,
  target = "_blank",
  className,
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/" || href === "#follow-us") {
      return;
    }
    router.push("/".concat(href || "#"));
  };

  return (
    <a
      href={href}
      target={target}
      className={twMerge("link", className)}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default NavItem;
