/* eslint-disable react/no-unescaped-entities */
import Solpaka from "@/assets/images/solpaka.png";
import { GetOnJupiterButton, GetOnRaydiumButton } from "@/components/Button";
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import baseConfig from "@/util/baseConfig";
import Image from "next/image";
import TokenPromises from "../shared/TokenPromises";

const Hero = () => {
  return (
    <Section className="min-h-screen pattern-circles relative overflow-hidden">
      <Container className="flex flex-col-reverse md:flex-row flex-wrap gap-4 items-center justify-between z-10 relative">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-relaxed">
            SOLPAKA is more than a meme. It's the best community on Solana!
          </h1>
          <h2 className="text-xl space-y-4">
            SOLPAKA has one of the best and friendliest communities on Solana!
            And they are not infected by Degenitus.
            <br className="mb-2 block" />
            <span className="underline">
              Get Solpaka. Chill with Solpaka. Join the best community. Explore
              new opportunities & grow fleece.
            </span>
          </h2>
          <TokenPromises />
          <div className="flex flex-wrap flex-col md:flex-row gap-4 [&>*]:flex-1 justify-between">
            <GetOnRaydiumButton href={baseConfig.raydium} />
            <GetOnJupiterButton href={baseConfig.jupiter} />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <a href={baseConfig.dexscreener} target="_blank" className="link">
              <span>Dexscreener</span>
            </a>
            <a href={baseConfig.dextools} target="_blank" className="link">
              <span>Dextools</span>
            </a>
            <a href={baseConfig.birdeye} target="_blank" className="link">
              <span>BirdEye</span>
            </a>
            <a href={baseConfig.coinmarketcap} target="_blank" className="link">
              <span>CoinMarketCap</span>
            </a>
            <a href={baseConfig.coingecko} target="_blank" className="link">
              <span>CoinGecko</span>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <Image
              className="ml-auto mr-0"
              src={Solpaka}
              alt="solpaka logo"
              width={600}
            />
          </div>
        </div>
      </Container>
      <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
      <GlowEffect className="bg-orange-500 bottom-[-200px] left-[-200px]" />
    </Section>
  );
};

export default Hero;
