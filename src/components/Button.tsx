import React, { FC } from "react";
import TrendUpIcon from "./TrendUpIcon";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import routes from "@/util/routes";

interface Props extends React.ComponentPropsWithoutRef<"a"> {}

interface BaseButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const BaseButton: FC<BaseButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={twMerge("btn btn-primary w-full", className)} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;

export const MintNFTButton: FC<BaseButtonProps> = (props) => {
  return (
    <Link href={routes.nft}>
      <BaseButton {...props} className="w-auto">
        Mint your OG NFT <TrendUpIcon />
      </BaseButton>
    </Link>
  );
};

export const GetOnRaydiumButton: FC<Props & BaseButtonProps> = ({
  href = "#",
  ...props
}) => {
  return (
    <a href={href} target="_blank">
      <BaseButton {...props}>
        Get on Raydium <TrendUpIcon />
      </BaseButton>
    </a>
  );
};

export const GetOnJupiterButton: FC<Props & BaseButtonProps> = ({
  href = "#",
  ...props
}) => {
  return (
    <a href={href} target="_blank">
      <BaseButton {...props}>
        Get on Jupiter <TrendUpIcon />
      </BaseButton>
    </a>
  );
};
