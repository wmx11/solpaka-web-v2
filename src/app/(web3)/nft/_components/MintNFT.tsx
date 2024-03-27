"use client";
import Loader from "@/components/Loader";
import TrendUpIcon from "@/components/TrendUpIcon";
import WalletConnectButton from "@/components/WalletConnectButton";
import useMint from "@/hooks/useMint";
import { useWallet } from "@solana/wallet-adapter-react";
import { twMerge } from "tailwind-merge";

const MintNFT = () => {
  const wallet = useWallet();
  const { getBalance, mint, error, message, loading, data } = useMint();
  const handleClick = async () => {
    const balance = await getBalance();
    await mint();
    console.log(balance);
  };

  return (
    <div>
      {!wallet?.connected ? (
        <div>
          <p className="mb-4">Please connect your wallet in order to mint</p>
          <div className="h-[48px]">
            <WalletConnectButton />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-4 mb-4">
            <button
              className={twMerge(
                "btn bg-primary",
                loading ? "pointer-events-none" : ""
              )}
              onClick={mint}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader />
                  Minting Your NFT 👀​
                </div>
              ) : (
                <>
                  Mint My OG Solpaka NFT <TrendUpIcon />
                </>
              )}
            </button>
            <div className="h-[48px]">
              <WalletConnectButton />
            </div>
          </div>
          <p className="text-xs">
            If you change your account from your wallet (Phantom, Solflare),
            please refresh this window.
          </p>
          <p className="text-xs text-warning">{message}</p>
          <p className="text-xs text-error">{error}</p>
        </div>
      )}
    </div>
  );
};

export default MintNFT;
