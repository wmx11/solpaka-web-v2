"use client";
import Loader from "@/components/Loader";
import WalletConnectButton from "@/components/WalletConnectButton";
import useMint from "@/hooks/useMint";
import { useWallet } from "@solana/wallet-adapter-react";
import { twMerge } from "tailwind-merge";

const MintNFT = () => {
  const wallet = useWallet();
  const { mint, error, message, loading, data } = useMint();

  const buttonContent = (() => {
    if (data.remaining === 0) {
      return "All NFTs Have Been Minted... 😭​";
    }

    if (loading) {
      return (
        <div className="flex items-center gap-2">
          <Loader />
          Minting Your NFT 👀​
        </div>
      );
    }

    return <>Mint My OG Solpaka NFT ({data.solPrice} SOL) 😎​</>;
  })();

  return (
    <div>
      {!wallet?.connected ? (
        <div>
          <p className="mb-4">Please connect your wallet to start minting.</p>
          <div className="h-[48px]">
            <WalletConnectButton />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 mb-4">
            <button
              className={twMerge(
                "btn bg-primary w-full flex-1",
                loading || data.remaining === 0 ? "pointer-events-none" : ""
              )}
              onClick={mint}
            >
              {buttonContent}
            </button>
            <div className="h-[48px]">
              <WalletConnectButton />
            </div>
          </div>
          <p className="text-xs mb-4">
            If you change your account from your wallet (Phantom, Solflare),
            please refresh this window.
          </p>
          <p className="text-xs text-accent-content underline">{message}</p>
          <p className="text-xs text-error">{error}</p>
        </div>
      )}
    </div>
  );
};

export default MintNFT;
