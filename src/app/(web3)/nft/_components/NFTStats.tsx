"use client";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import useMint from "@/hooks/useMint";

const NFTStats = () => {
  const { data, loading } = useMint();

  return (
    <div className="gap-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <div className="text-4xl">
          {loading ? <Loader /> : `${data.minted}/${data.totalSupply}`}
        </div>
        <div>NFTs Minted</div>
      </Card>
      <Card>
        <div className="text-4xl">
          {loading ? <Loader /> : `${data.remaining}/${data.totalSupply}`}
        </div>
        <div>Remaining NFTs</div>
      </Card>
      <Card>
        <div className="text-4xl">
          {loading ? <Loader /> : data.solPrice} SOL
        </div>
        <div>Price per NFT</div>
      </Card>
      <Card>
        <div className="text-4xl">100%</div>
        <div>Unlock benefits through roadmap activation and future</div>
      </Card>
    </div>
  );
};

export default NFTStats;
