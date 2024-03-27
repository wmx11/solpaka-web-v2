"use client";
import useStore from "@/app/store/useStore";
import React from "react";

const MintedImage = () => {
  const nftImage = useStore((state) => state.image);

  if (!nftImage) {
    return;
  }

  return (
    <>
      <img
        src={nftImage}
        alt="solpaka nft image"
        width={520}
        className="max-w-[520px] card shadow-lg group-hover:translate-y-[-100px] group-hover:translate-x-[-100px] transition-transform border-2 border-yellow-500 shadow-xl shadow-yellow-500"
      />
    </>
  );
};

export default MintedImage;
