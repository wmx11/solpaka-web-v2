import SolpakaText from "@/assets/images/solpaka-text.png";
import Image from "next/image";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import navigation from "../util/navigation";
import NavItem from "./NavItem";

interface NavItemsProps extends React.ComponentPropsWithoutRef<"ul"> {}

const NavItems: FC<NavItemsProps> = ({ className }) => {
  return (
    <ul className={twMerge("flex items-center gap-6", className)}>
      {navigation.map((item, index) => {
        return (
          <li key={`nav_${index}`}>
            <NavItem {...item}>{item.label}</NavItem>
          </li>
        );
      })}
    </ul>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar md:items-center justify-between md:justify-center py-2 md:py-6 fixed w-full top-0 bg-base-100 z-50">
      <div className="hidden md:block">
        <NavItems />
      </div>
      <div className="block md:hidden">
        <a href="/">
          <Image src={SolpakaText} alt="solpaka logo text" width={60} />
        </a>
      </div>
      <div className="dropdown dropdown-end">
        <button className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <NavItems className="menu menu-sm dropdown-content mt-3 z-10 p-4 shadow bg-base-100 rounded-box w-52" />
      </div>
    </nav>
  );
};

export default NavBar;
