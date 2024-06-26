"use client";
import dynamic from "next/dynamic";
import React from "react";

const WalletConnectButton = () => {
  const DynamicButton = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    {
      ssr: false,
    }
  );
  return <DynamicButton className="btn btn-secondary" style={{ zIndex: 10 }} />;
};

export default WalletConnectButton;
