import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import Title from "@/components/Title";
import TrendUpIcon from "@/components/TrendUpIcon";
import Link from "next/link";
import React from "react";
import NFT_1 from "./0.png";
import NFT_2 from "./9.png";
import NFT_3 from "./13.png";
import Image from "next/image";

const page = () => {
  return (
    <Section className="bg-neutral text-base-100 min-h-screen pattern flex items-center justify-center relative overflow-hidden">
      <Container className="relative z-10">
        <div>
          <Link href="/">
            <button className="btn btn-primary btn-outline">
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to SOLPAKA
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 stack group">
            <Image
              src={NFT_1}
              alt="OG Solpaka NFT 1"
              width={520}
              className="max-w-[520px] card shadow-lg group-hover:translate-y-[-100px] group-hover:translate-x-[-100px] transition-transform"
            />
            <Image
              src={NFT_2}
              alt="OG Solpaka NFT 2"
              width={520}
              className="max-w-[520px] card shadow-lg group-hover:translate-y-[100px] group-hover:translate-x-[100px] transition-transform"
            />
            <Image
              src={NFT_3}
              alt="OG Solpaka NFT 3"
              width={520}
              className="max-w-[520px] card shadow-lg group-hover:translate-x-10 transition-transform"
            />
          </div>
          <div className="flex-1">
            <div className="mb-8">
              <Title>OG Solpaka NFT Collection</Title>
              <p className="space-y-4 mb-8">
                <p>
                  These NFTs were created to help Solpaka grow and expand its
                  farm. NFT holders will support the project's growth which will
                  have a positive impact on their Solpaka tokens.
                </p>
                <p>
                  <strong>Total supply: </strong>1,000
                </p>
                <p>
                  <strong>Price per NFT: </strong>0.5 SOL
                </p>
                <p>
                  <strong>Max per wallet: </strong> 10 NFTs
                </p>
                <p>
                  <strong>Requirements:</strong>
                  <p>
                    <u>
                      Hold at least 50,000 SOLPAKA tokens at the time of mint.
                    </u>
                  </p>
                </p>
              </p>

              <p className="space-y-4">
                <strong>NFT Utility: </strong>
                <p>
                  🔥​ Solpaka token buybacks.
                  <p className="text-xs">
                    Burn 80-90% of bought back tokens and airdrop the rest to
                    NFT holders.
                  </p>
                </p>
                <p>
                  💰​ Marketing funds.
                  <p className="text-xs">
                    NFT holders will directly aid Solpaka in their marketing
                    campaigns. The same funds can be used to speed up the
                    listing process on CEXs.
                  </p>
                </p>
                <p>
                  🚪​ Members-only access.
                  <p className="text-xs">
                    Solpaka farm is set to expand and open new doors for its
                    members. NFT holders will get access to the new community
                    hubs, VC hubs, alpha groups, and even early access into new
                    projects.
                  </p>
                </p>
                <p>
                  💉​ ​Liquidiy pool injections.
                  <p className="text-xs">
                    Solpaka started with a shallow liquidity pool. The price
                    gets all over the place from a few disgruntled whales. The
                    funds from NFTs will be used to inject some money into the
                    liquidity pool.
                  </p>
                </p>
              </p>
            </div>
            <div>
              <button className="btn btn-primary">
                Mint My OG Solpaka NFT <TrendUpIcon />
              </button>
              {/* <button className="btn btn-warning">Connect Wallet</button> */}
            </div>
          </div>
        </div>

        {/* <div>Stats</div> */}
      </Container>
      <GlowEffect className="bg-red-500 top-[-200px] left-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
    </Section>
  );
};

export default page;
