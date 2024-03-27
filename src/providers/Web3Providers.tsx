"use client";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  LedgerWalletAdapter,
  SolflareWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import React, { FC, PropsWithChildren, useMemo } from "react";
import baseConfig from "@/util/baseConfig";

interface Props extends PropsWithChildren {}

const Web3Providers: FC<Props> = ({ children }) => {
  const networks = {
    devnet: WalletAdapterNetwork.Devnet,
    testnet: WalletAdapterNetwork.Testnet,
    mainnet: WalletAdapterNetwork.Mainnet,
  };

  const network =
    networks[process.env.NEXT_PUBLIC_NETWORK as keyof typeof networks];

  const endpoint = baseConfig.rpcEndpoint;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Web3Providers;
