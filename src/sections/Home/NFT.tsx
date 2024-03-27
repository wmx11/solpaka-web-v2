/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

const NFT = () => {
  return (
    <Section
      className="bg-accent text-accent-content flex flex-col md:flex-row gap-4 p-0 pattern"
      id="nft"
    >
      <div className="md:flex-1 h-[500px] md:h-auto relative overflow-hidden bg-[url('/assets/images/nfts.png')] bg-fixed"></div>
      <Container className="py-32 md:w-[calc(50%-16px)]">
        <Title>OG Solpaka NFT Collection</Title>
        <div className="space-y-4">
          <p>
            These NFTs were created to help Solpaka grow and expand its farm.
            NFT holders will support the project's growth which will have a
            positive impact on their Solpaka tokens.
          </p>
          <p className="space-y-4">
            <strong>NFT Utilities: </strong>
            <br />
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
                NFT holders will directly aid Solpaka in their marketing
                campaigns. The same funds can be used to speed up the listing
                process on CEXs.
              </p>
            </p>
            <p>
              🚪​ Members-only access.
              <p className="text-xs">
                Solpaka farm is set to expand and open new doors for its
                members. NFT holders will get access to the new community hubs,
                VC hubs, alpha groups, and even early access into new projects.
              </p>
            </p>
            <p>
              💉​ ​Liquidiy pool injections.
              <p className="text-xs">
                Solpaka started with a shallow liquidity pool. The price gets
                all over the place from a few disgruntled whales. The funds from
                NFTs will be used to inject some money into the liquidity pool.
              </p>
            </p>
          </p>
          <div>
            <button className="btn btn-primary">
              Mint your OG NFT{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </button>
          </div>
        </div>
        <div></div>
      </Container>
    </Section>
  );
};

export default NFT;
