"use client";
import Loader from "@/components/Loader";
import useMint from "@/hooks/useMint";

const NFTStats = () => {
  const { data, loading } = useMint();

  return (
    <div className="gap-4 text-center grid grid-cols-4">
      <div className="card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
        <div className="text-4xl">
          {loading ? <Loader /> : `${data.minted}/${data.totalSupply}`}
        </div>
        <div>NFTs Minted</div>
      </div>
      <div className="card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
        <div className="text-4xl">
          {loading ? (
            <Loader />
          ) : (
            `${data.totalSupply - data.minted}/${data.totalSupply}`
          )}
        </div>
        <div>Remaining NFTs</div>
      </div>
      <div className="card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
        <div className="text-4xl">
          {loading ? <Loader /> : data.solPrice} SOL
        </div>
        <div>Price per NFT</div>
      </div>
      <div className="card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
        <div className="text-4xl">100%</div>
        <div>Unlock benefits through roadmap activation and future</div>
      </div>
    </div>
  );
};

export default NFTStats;
