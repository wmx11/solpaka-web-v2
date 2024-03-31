/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import Title from "@/components/Title";
import FollowUs from "@/sections/shared/FollowUs";
import Image from "next/image";
import NFT_1 from "./_assets/0.png";
import NFT_3 from "./_assets/13.png";
import NFT_2 from "./_assets/9.png";
import AboutNFT from "./_components/AboutNFT";
import MintedImage from "./_components/MintedImage";
import MintNFT from "./_components/MintNFT";
import NFTStats from "./_components/NFTStats";

const page = () => {
  return (
    <>
      <Section className="bg-neutral text-base-100 min-h-screen pattern flex items-center justify-center relative overflow-clip">
        <Container className="relative z-10">
          <div className="mb-8">
            <a href="/">
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
            </a>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8">
            <div className="flex-1 h-auto">
              <div className="md:sticky top-0">
                <Title>OG Solpaka NFTs</Title>
                <div className="stack group place-items-start w-full mb-44 md:mb-auto">
                  <MintedImage />
                  <Image
                    src={NFT_1}
                    alt="OG Solpaka NFT 1"
                    width={620}
                    className="max-w-[620px] card shadow-lg group-hover:translate-y-[-100px] group-hover:translate-x-[-100px] transition-transform"
                  />
                  <Image
                    src={NFT_2}
                    alt="OG Solpaka NFT 2"
                    width={620}
                    className="max-w-[620px] card shadow-lg group-hover:translate-y-[100px] group-hover:translate-x-[100px] transition-transform"
                  />
                  <Image
                    src={NFT_3}
                    alt="OG Solpaka NFT 3"
                    width={620}
                    className="max-w-[620px] card shadow-lg group-hover:translate-x-10 transition-transform"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-8">
                <AboutNFT />
              </div>
              <div className="space-y-4 mb-8 card bg-accent border-2 border-yellow-300 shadow-yellow-600 p-4 shadow-md text-accent-content">
                <MintNFT />
              </div>
              <div className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  If you do not meet the requirements or if you try to mint more
                  NFTs than allowed you will be charged a{" "}
                  <strong>Bot Tax</strong> even if minting fails.{" "}
                  <i>
                    The project is not responsible for any of the fees or losses
                    during or after the mint.
                  </i>{" "}
                  <u>
                    If you're experiencing issues, please reach out to the team
                    members on Telegram or Discord.
                  </u>
                </span>
              </div>
            </div>
          </div>
          <NFTStats />
        </Container>
        <GlowEffect className="bg-red-500 top-[-200px] left-[-200px]" />
        <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
      </Section>
      <FollowUs />
    </>
  );
};

export default page;
