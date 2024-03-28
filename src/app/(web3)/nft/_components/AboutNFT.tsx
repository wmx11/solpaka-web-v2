/* eslint-disable react/no-unescaped-entities */

const AboutNFT = () => {
  return (
    <>
      <p className="space-y-4 mb-8 card bg-primary/10 backdrop-blur-sm p-4 shadow-lg">
        <p>
          These NFTs were created to help Solpaka grow and expand its farm. NFT
          holders will support the project's growth which will have a positive
          impact on their Solpaka tokens.
        </p>
        <p>
          <strong>Total supply: </strong> <u>1,000</u>
        </p>
        <p>
          <strong>Max per wallet: </strong> <u>10 NFTs</u>
        </p>
        <p>
          <strong>Mint requirements:</strong>
          <p>
            <u>Hold at least 50,000 SOLPAKA tokens at the time of mint.</u>
          </p>
        </p>
      </p>

      <p className="space-y-4 card bg-primary/10 backdrop-blur-sm p-4 shadow-lg">
        <strong>NFT Utility: </strong>
        <p>
          🔥​ Solpaka token buybacks.
          <p className="text-xs">
            Burn 80-90% of bought back tokens and airdrop the rest to NFT
            holders.
          </p>
        </p>
        <p>
          💰​ Marketing funds.
          <p className="text-xs">
            NFT holders will directly aid Solpaka in their marketing campaigns.
            The same funds can be used to speed up the listing process on CEXs.
          </p>
        </p>
        <p>
          🚪​ Members-only access.
          <p className="text-xs">
            Solpaka farm is set to expand and open new doors for its members.{" "}
            <u>
              NFT holders will get access to the new community hubs, VC hubs,
              alpha groups, and even early access into new projects.
            </u>
          </p>
        </p>
        <p>
          💉​ ​Liquidiy pool injections.
          <p className="text-xs">
            Solpaka started with a shallow liquidity pool. The price gets all
            over the place from a few disgruntled whales. The funds from NFTs
            will be used to inject some money into the liquidity pool.
          </p>
        </p>
      </p>
    </>
  );
};

export default AboutNFT;
