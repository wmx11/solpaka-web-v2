/* eslint-disable @next/next/no-img-element */
"use client";
import useStore from "@/store/useStore";

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
        width={620}
        className="max-w-[620px] card group-hover:translate-y-[-100px] group-hover:translate-x-[-100px] transition-transform border-2 border-yellow-500 shadow-xl shadow-yellow-500"
      />
    </>
  );
};

export default MintedImage;
