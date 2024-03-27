import {
  CandyGuard,
  CandyMachine,
  DefaultGuardSetMintArgs,
  fetchCandyGuard,
  fetchCandyMachine,
  mintV2,
} from "@metaplex-foundation/mpl-candy-machine";
import {
  generateSigner,
  publicKey,
  some,
  transactionBuilder,
  unwrapOption,
} from "@metaplex-foundation/umi";
import { useEffect, useState } from "react";
import useUmi from "./useUmi";
import baseConfig from "@/util/baseConfig";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import {
  fetchDigitalAsset,
  TokenStandard,
} from "@metaplex-foundation/mpl-token-metadata";
import useStore from "@/app/store/useStore";

const useMint = () => {
  const { umi } = useUmi();
  const setNft = useStore((state) => state.setNft);
  const setImage = useStore((state) => state.setImage);
  const nftImage = useStore((state) => state.image);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([""]);
  const [message, setMessage] = useState("");
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const [candyGuard, setCandyGuard] = useState<CandyGuard>();

  const [data, setData] = useState({
    totalSupply: 0,
    minted: 0,
    solPrice: 0,
  });

  const getMintData = async () => {
    setError([""]);

    const candyMachine = await fetchCandyMachine(
      umi,
      publicKey(baseConfig.candyMachineId)
    );

    if (!candyMachine) {
      setError((prev) => [
        ...prev,
        "There was an error loading candy machine. Please refresh your browser and try again.",
      ]);
    }

    setCandyMachine(candyMachine);

    const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);

    if (!candyGuard) {
      setError((prev) => [
        ...prev,
        "There was an error loading candy machine guards. Please refresh your browser and try again.",
      ]);
    }

    setCandyGuard(candyGuard);

    let solPrice = 0;

    const solPaymentGuard = candyGuard?.guards?.solPayment;

    const solPayment = solPaymentGuard && unwrapOption(solPaymentGuard);

    if (solPayment) {
      const lamports = solPayment.lamports;
      solPrice = Number(lamports.basisPoints) / baseConfig.decimals;
    }

    setData((prev) => ({
      ...prev,
      totalSupply: candyMachine.itemsLoaded,
      minted: Number(candyMachine.itemsRedeemed),
      solPrice,
    }));

    setLoading(false);
  };

  const getBalance = async () => {
    const balance = await umi.rpc.getBalance(umi.identity.publicKey);
    if (!balance) {
      return 0;
    }
    return Number(balance.basisPoints) / baseConfig.decimals;
  };

  const mint = async () => {
    if (!candyMachine) {
      return;
    }

    try {
      setLoading(true);

      const nftSigner = generateSigner(umi);

      const solPaymentGuard = candyGuard?.guards?.solPayment;
      const solPayment = solPaymentGuard && unwrapOption(solPaymentGuard);

      const mintArgs: Partial<DefaultGuardSetMintArgs> = {
        mintLimit: some({
          id: 1,
        }),
      };

      if (solPayment) {
        const treasury = solPayment.destination;
        mintArgs.solPayment = some({
          destination: treasury,
        });
      }

      const transaction = transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 800_000 }))
        .add(
          mintV2(umi, {
            candyMachine: candyMachine.publicKey,
            collectionMint: candyMachine.collectionMint,
            collectionUpdateAuthority: candyMachine.authority,
            nftMint: nftSigner,
            candyGuard: candyMachine.mintAuthority,
            mintArgs,
            tokenStandard: TokenStandard.ProgrammableNonFungible,
          })
        );

      await transaction.sendAndConfirm(umi, {
        confirm: { commitment: "finalized" },
        send: {
          skipPreflight: true,
        },
      });

      const nft = await fetchDigitalAsset(umi, nftSigner.publicKey);
      const uri = await fetch(nft.metadata.uri);
      const json = await uri.json();
      const image = json.image;

      setNft(nft);
      setImage(image);

      setMessage(
        "You have minted your very own OG Solpaka NFT! Congratulations!"
      );
    } catch (error: any) {
      console.error(error);
      setError((prev) => [...prev, `Mint was unsuccessful, ${error?.message}`]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMintData();
  }, [nftImage, message]);

  return {
    data,
    loading,
    error,
    message,
    umi,
    candyMachine,
    candyGuard,
    getMintData,
    getBalance,
    mint,
  };
};

export default useMint;
