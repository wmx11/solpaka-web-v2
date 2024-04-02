/* eslint-disable react/no-unescaped-entities */
import { MintNFTButton } from "@/components/Button";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import TrendUpIcon from "@/components/TrendUpIcon";
import routes from "@/util/routes";
import Link from "next/link";

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
                members.{" "}
                <u>
                  NFT holders will get access to the new community hubs, VC
                  hubs, alpha groups, and even early access into new projects.
                </u>
              </p>
            </p>
            <p>
              💉​ ​Liquidity pool injections.
              <p className="text-xs">
                Solpaka started with a shallow liquidity pool. The price gets
                all over the place from a few disgruntled whales. The funds from
                NFTs will be used to inject some money into the liquidity pool.
              </p>
            </p>
          </p>
          <div>
            <MintNFTButton />
          </div>
        </div>
        <div></div>
      </Container>
    </Section>
  );
};

export default NFT;
