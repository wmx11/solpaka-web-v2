import TrendUpIcon from "@/components/TrendUpIcon";
import WalletConnectButton from "@/components/WalletConnectButton";
import React from "react";

const MintNFT = () => {
  return (
    <div>
      <button className="btn btn-primary">
        Mint My OG Solpaka NFT <TrendUpIcon />
      </button>
      <WalletConnectButton />
      {/* <button className="btn btn-warning">Connect Wallet</button> */}
    </div>
  );
};

export default MintNFT;
