import { DigitalAsset } from "@metaplex-foundation/mpl-token-metadata";
import { create } from "zustand";

interface StoreState {
  nft: DigitalAsset | null;
  image: string | null;
  setImage: (image: string | null) => void;
  setNft: (nft: DigitalAsset) => void;
}

const useStore = create<StoreState>((set) => ({
  nft: null,
  image: null,
  setImage: (image) => set(() => ({ image })),
  setNft: (nft) => set(() => ({ nft })),
}));

export default useStore;
