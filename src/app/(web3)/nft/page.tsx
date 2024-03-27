/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import NFT_1 from "./_assets/0.png";
import NFT_3 from "./_assets/13.png";
import NFT_2 from "./_assets/9.png";
import AboutNFT from "./_components/AboutNFT";
import MintNFT from "./_components/MintNFT";
import NFTStats from "./_components/NFTStats";

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
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 ">
            <Title>OG Solpaka NFTs</Title>
            <div className="stack group">
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
          </div>
          <div className="flex-1">
            <div className="mb-8">
              <AboutNFT />
            </div>
            <MintNFT />
          </div>
        </div>
        <NFTStats />
      </Container>
      <GlowEffect className="bg-red-500 top-[-200px] left-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
    </Section>
  );
};

export default page;
