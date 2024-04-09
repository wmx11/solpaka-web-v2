import { DefaultGuardSetMintArgs } from "@metaplex-foundation/mpl-candy-machine";
import { some } from "@metaplex-foundation/umi";

const baseConfig = {
  contractAddress: "BDHqX9YfJE3M6caox3obUX5YpWHz2cjnGFiZJtRghdCo",
  explorerToken: "https://solscan.io/token",
  explorerAccount: "https://solscan.io/account",
  explorerTx: "https://solscan.io/tx",
  lpLockTxHash:
    "3C7N4aWjWHchp1nCBnYfkPBg4EYzsb4bSFyPFnYw2Ke3W9iFr8htyKV8Wzqre1iC4XD4ePFb8hopw3x3fo8ZWHwW",
  communityDonationsWallet: "CXKRjZd1G5HAn3h3YpwoMsaAFLc3GNPexEUG64W69eKf",
  dexscreener:
    "https://dexscreener.com/solana/6mprd9lm5yycftwlcxlnb5zrm5vnup3ffv3vqtvajaza",
  dextools:
    "https://www.dextools.io/app/en/solana/pair-explorer/6mPrd9LM5yycFTwLcXLNB5zrm5VNUp3fFv3vQtvaJAzA?t=1710530811725",
  birdeye:
    "https://birdeye.so/token/BDHqX9YfJE3M6caox3obUX5YpWHz2cjnGFiZJtRghdCo?chain=solana",
  coinmarketcap: "https://coinmarketcap.com/currencies/solpaka/",
  coingecko: "https://www.coingecko.com/en/coins/solpaka",
  twitter: "https://twitter.com/SOLPAKASolana",
  telegram: "https://t.me/Solpaka",
  discord: "https://discord.gg/tPyV6yRnTu",
  reddit: "https://www.reddit.com/r/solpaka/",
  discordNFTVerification: "https://discord.gg/Uhzy3FR3rD",
  raydium:
    "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=BDHqX9YfJE3M6caox3obUX5YpWHz2cjnGFiZJtRghdCo&fixed=in",
  jupiter:
    "https://jup.ag/swap/SOL-SOLPAKA_BDHqX9YfJE3M6caox3obUX5YpWHz2cjnGFiZJtRghdCo",
  rpcEndpoint: process.env.NEXT_PUBLIC_RPC_URL || "",
  candyMachineId: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID || "",
  decimals: 1000000000,
  mintArgs: {
    mintLimit: some({
      id: 1,
    }),
    tokenGate: some({
      mint: "BDHqX9YfJE3M6caox3obUX5YpWHz2cjnGFiZJtRghdCo",
    }),
  } as Partial<DefaultGuardSetMintArgs>,
};

export default baseConfig;
