import React from "react";

const NFTStats = () => {
  return (
    <div className="gap-4 text-center grid grid-cols-4">
      <div className="card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
        <div className="text-4xl">100/1,000</div>
        <div>NFTs Minted</div>
      </div>
      <div className="card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
        <div className="text-4xl">900/1,000</div>
        <div>Remaining NFTs</div>
      </div>
      <div className="card shadow-lg p-12 bg-primary/10 backdrop-blur-sm flex flex-col justify-center">
        <div className="text-4xl">0.5 SOL</div>
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
